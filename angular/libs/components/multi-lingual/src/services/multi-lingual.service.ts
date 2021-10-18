import { AbstractNavTreeService } from '@abp/ng.core';
import { Inject, Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MultiLingual } from '../models/models';
import {
  //MULTI_LINGUAL_ENTITY_TYPE_STORE,
  MULTI_LINGUAL_ENTITY_TYPE_TOKEN,
} from '../token/token';

@Injectable({
  providedIn: 'root',
})
export class MultiLingualService {
  public Token: MultiLingual.MultiLingualsToken;
  public EntityTypeStore: MultiLingual.MultiLingualsStore;
  public MultiLingualsApiService: MultiLingual.MultiLingualsApiService;

  constructor(
    @Inject('MULTI_LINGUAL_ENTITY_TYPE_TOKEN')private readonly _token: MultiLingual.MultiLingualsToken,
    private readonly _injector: Injector
    ) {

    this.Token = _injector.get(MULTI_LINGUAL_ENTITY_TYPE_TOKEN);

    this.EntityTypeStore = this.Token.Store;
    this.MultiLingualsApiService = this.Token.Api;

    this.MultiLingualsApiService.findByInput({
      entityType: 'Volo.CmsKit.Menus.MenuItem',
      entityId: '6e43905b-7166-a533-2ce9-39ff9e888714'
    }).subscribe();
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
