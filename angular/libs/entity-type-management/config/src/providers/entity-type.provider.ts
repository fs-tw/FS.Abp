import { APP_INITIALIZER } from '@angular/core';
import { EntityType, EntityTypeStore } from './entity-type.store';
import { Fs } from '@fs-tw/entity-type-management/proxy/entity-types';
import { tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import {
  EntityDefinition,
  EntityDefinitionStore,
} from './entity-definition.store';

export const ENTITY_TYPE_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureStyles,
    deps: [
      EntityTypeStore,
      EntityDefinitionStore,
      Fs.Abp.EntityTypes.EntityTypeApiService,
    ],
    multi: true,
  },
];

export function configureStyles(
  entityTypeStore: EntityTypeStore,
  entityDefinitionStore: EntityDefinitionStore,
  apiService: Fs.Abp.EntityTypes.EntityTypeApiService
) {
  return () => {
    return forkJoin([
      apiService.getEntityTypeDefinitionList(),
      apiService.getEntityDefinitionList(),
    ])
      .pipe(
        tap(([entityTypes,entityDefinitions]) => {
          entityTypeStore.add(
            entityTypes.map((x) => new EntityType(x.name, x.definitions))
          );
          entityDefinitionStore.add(
            entityDefinitions.map(
              (x) => new EntityDefinition(x.entityType, x.createFormProps)
            )
          );
        })
      )
      .toPromise();
  };
}
