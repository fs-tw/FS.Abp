import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MultiLingual } from '../models/models';
import {
  MULTI_LINGUAL_ENTITY_TYPE_TOKEN,
} from '../token/token';

@Injectable({
  providedIn: 'root',
})
export class MultiLingualService {
  public static featureName: string = 'MultiLingual';
  public Token: MultiLingual.MultiLingualsToken;
  public EntityTypeStore: MultiLingual.MultiLingualsStore;
  public MultiLingualsApiService: MultiLingual.MultiLingualsApiService;

  constructor(
    private readonly _injector: Injector
    ) {
    this.Token = _injector.get(MULTI_LINGUAL_ENTITY_TYPE_TOKEN);
    this.EntityTypeStore = this.Token.Store;
    this.MultiLingualsApiService = this.Token.Api;
  }

  getMultiLingualByType$(
    entityType: string
  ): Observable<MultiLingual.MultiLingualDefinition> {
    return this.EntityTypeStore.flat$.pipe(
      map((x) =>
        x.find((y) => y.name == MultiLingualService.featureName)
          ?.definitions.find((z) => z.entityType == entityType)
      )
    );
  }

  getMultiLingual(input: MultiLingual.MultiLingualFindDto):
    Observable<MultiLingual.MultiLingualWithDetailsDto>
  {
    return this.MultiLingualsApiService.findByInput(input);
  }
}
