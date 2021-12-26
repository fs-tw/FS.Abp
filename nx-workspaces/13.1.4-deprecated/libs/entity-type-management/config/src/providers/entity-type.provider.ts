import { APP_INITIALIZER } from '@angular/core';
import { EntityType, EntityTypeStore } from './entity-type.store';
import { Fs } from '@fs-tw/entity-type-management/proxy/entity-types';
import { debounceTime, filter, tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { ExtensionsStore } from '@fs-tw/components/extensions';

export const ENTITY_TYPE_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: fetchApi,
    deps: [
      EntityTypeStore,
      ExtensionsStore,
      Fs.Abp.EntityTypes.EntityTypeApiService,
    ],
    multi: true,
  },
];

export function fetchApi(
  entityTypeStore: EntityTypeStore,
  extensionsStore: ExtensionsStore,
  apiService: Fs.Abp.EntityTypes.EntityTypeApiService
) {
  return () => {
    return forkJoin([
      apiService.getEntityTypeDefinitionList(),
      apiService.getEntityDefinitionList(),
    ])
      .pipe(
        tap(([entityTypes, entityDefinitions]) => {
          entityTypeStore.add(
            entityTypes.map((x) => new EntityType(x.name, x.definitions))
          );
          entityDefinitions.forEach(d=>{
            d.listProps=d.listProps.filter(x=>x.visible).map(x=>{
              delete x.visible
              return x;});
            d.searchFormProps=d.searchFormProps.filter(x=>x.visible).map(x=>{
              delete x.visible
              return x;});;
            d.createFormProps=d.createFormProps.filter(x=>x.visible).map(x=>{
              delete x.visible
              return x;});;
            d.updateFormProps=d.updateFormProps.filter(x=>x.visible).map(x=>{
              delete x.visible
              return x;});;
          })
          extensionsStore.add(entityDefinitions as any);
          extensionsStore.setDefaultsbyStore();
        })
      )
      .toPromise();
  };
}
