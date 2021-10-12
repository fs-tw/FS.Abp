import { APP_INITIALIZER } from '@angular/core';
import { EntityTypeInfo, EntityTypeService } from './entity-type.service';
import { Fs } from '@fs-tw/entity-type-management/proxy/entity-types';

export const ENTITY_TYPE_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureStyles,
    deps: [EntityTypeService, Fs.Abp.EntityTypes.EntityTypeApiService],
    multi: true,
  },
];

export function configureStyles(
    service: EntityTypeService, apiService: Fs.Abp.EntityTypes.EntityTypeApiService
) {
  return () => {
    apiService.getList().subscribe(x => {
        let result = x.map(y => new EntityTypeInfo(y.name, y.definitions));
        service.setData(result);
    })
  };
}