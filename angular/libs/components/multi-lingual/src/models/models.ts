import { AbstractNavTreeService } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { ExpandOperator } from 'rxjs/internal/operators/expand';
export namespace MultiLingual {
  export interface MultiLingualProperty {
    name: string;
    dataType: string;
  }

  export interface MultiLingualDefinition {
    entityType: string;
    translationType: string;
    properties: Array<MultiLingualProperty>;
  }

  export interface EntityType {
    name: string;
    definitions: Array<MultiLingualDefinition>;
  }

  export interface MultiLingualFindDto {
    entityType?: string;
    entityId?: string;
  }

  export interface NameValue<T = string> {
    name?: string;
    value: T;
  }
  export interface MultiLingualTranslationDto {
    culture?: string;
    properties: NameValue[];
    multiLingualId?: string;
  }

  export interface MultiLingualWithDetailsDto {
    entityType?: string;
    entityId?: string;
    multiLingualTranslations: MultiLingualTranslationDto[];
  }

  export type MultiLingualsStore = AbstractNavTreeService<EntityType>;

  export type MultiLingualsApiService = {
    findByInput: (
      input: MultiLingualFindDto
    ) => Observable<MultiLingualWithDetailsDto>;
  };

  export type MultiLingualsToken = {
    Store: AbstractNavTreeService<EntityType>;
    Api: MultiLingualsApiService;
  };
}
