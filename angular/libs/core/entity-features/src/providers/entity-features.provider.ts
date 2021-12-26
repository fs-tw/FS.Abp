import { APP_INITIALIZER } from '@angular/core';
import { EntityFeature, EntityFeaturesStore } from './entity-features.store';
import { Fs } from '@fs-tw/core/proxy/entity-features';
import { debounceTime, filter, map, mergeMap, tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { ExtensionsStore } from '@fs-tw/components/extensions';
import { EnvironmentService } from '@abp/ng.core';

export const ENTITY_FEATURES_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: fetchApi,
    deps: [
      EntityFeaturesStore,
      ExtensionsStore,
      Fs.Abp.EntityFeatures.EntityFeatureDefinitionService,
      EnvironmentService,
    ],
    multi: true,
  },
];

export function fetchApi(
  entityTypeStore: EntityFeaturesStore,
  extensionsStore: ExtensionsStore,
  apiService: Fs.Abp.EntityFeatures.EntityFeatureDefinitionService,
  environmentService: EnvironmentService
) {
  return () => {
    environmentService
      .getEnvironment$()
      .pipe(
        filter((x) => !!x.apis),
        mergeMap(x=>apiService.getEntityFeatureDefinitionList()),
        tap((x) => {
          entityTypeStore.add(
            x.map((y) => new EntityFeature(y.name, y.definitions))
          );
        })
      ).subscribe();
      return Promise.resolve();
  };
}
