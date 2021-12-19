import { APP_INITIALIZER } from '@angular/core';
import { EntityType, EntityTypeStore } from './entity-type.store';
import { Fs } from '@fs-tw/core/proxy/entity-types';
import { debounceTime, filter, map, mergeMap, tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { ExtensionsStore } from '@fs-tw/components/extensions';
import { EnvironmentService } from '@abp/ng.core';

export const ENTITY_TYPE_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: fetchApi,
    deps: [
      EntityTypeStore,
      ExtensionsStore,
      Fs.Abp.EntityTypes.EntityTypeDefinitionService,
      EnvironmentService,
    ],
    multi: true,
  },
];

export function fetchApi(
  entityTypeStore: EntityTypeStore,
  extensionsStore: ExtensionsStore,
  apiService: Fs.Abp.EntityTypes.EntityTypeDefinitionService,
  environmentService: EnvironmentService
) {
  return () => {
    environmentService
      .getEnvironment$()
      .pipe(
        filter((x) => !!x.apis),
        mergeMap(x=>apiService.getEntityTypeDefinitionList()),
        tap((x) => {
          entityTypeStore.add(
            x.map((y) => new EntityType(y.name, y.definitions))
          );
        })
      ).subscribe();
      return Promise.resolve();
  };
}
