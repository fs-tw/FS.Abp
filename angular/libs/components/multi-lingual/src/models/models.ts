import { AbstractNavTreeService, NameValue } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';

export namespace MultiLingual {
  export class MultiLingualProperty {
    static mapToFormProp(property: MultiLingual.MultiLingualProperty): FormProp {
      return {
        ...new FormProp({
          type: property.dataType.toLowerCase() as ePropType,
          name: property.name,
          id: property.name,
          displayName: property.name,
        }),
        ...{
          componentKey: property['componentKey'],
        },
      };
    }
    static mapToFormProps(
      properties: MultiLingual.MultiLingualProperty[]
    ): FormProp[] {
      return properties.map(MultiLingualProperty.mapToFormProp);
    }
  }

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
