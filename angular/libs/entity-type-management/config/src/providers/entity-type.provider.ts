import { APP_INITIALIZER } from '@angular/core';
import { EntityTypeInfo, EntityTypeStore } from './entity-type.store';
import { Fs } from '@fs-tw/entity-type-management/proxy/entity-types';
import { tap } from 'rxjs/operators';

export const ENTITY_TYPE_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureStyles,
    deps: [EntityTypeStore, Fs.Abp.EntityTypes.EntityTypeApiService],
    multi: true,
  },
];

export function configureStyles(
    service: EntityTypeStore, apiService: Fs.Abp.EntityTypes.EntityTypeApiService
) {
  return () => 
    apiService.getList().pipe(tap(x=>{
      let result = x.map(y => new EntityTypeInfo(y.name, y.definitions));
      service.add(result);
    })).toPromise();
  ;
}