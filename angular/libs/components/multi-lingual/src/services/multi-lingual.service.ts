import { AbstractNavTreeService } from '@abp/ng.core';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MultiLingual } from '../models/models';
import { MULTI_LINGUAL_ENTITY_TYPE_STORE } from '../token/token';

@Injectable({
  providedIn: 'root',
})
//extends AbstractNavTreeService<MultiLingual.EntityType>
//implements MultiLingual.EntityTypeService
export class MultiLingualService {
  public EntityTypeStore: MultiLingual.EntityTypeStore;
  constructor(private readonly _injector: Injector) {
    this.EntityTypeStore = _injector.get(MULTI_LINGUAL_ENTITY_TYPE_STORE);
  }
  public static featureName: string = 'MultiLingual';
  getMultiLingualByType$(
    entityType: string
  ): Observable<MultiLingual.MultiLingualDefinition> {
    return this.EntityTypeStore.flat$.pipe(
      map((x) =>
        x
          .find((y) => y.name == MultiLingualService.featureName)
          ?.definitions.find((z) => z.entityType == entityType)
      )
    );
  }
}
