import { AbstractNavTreeService } from '@abp/ng.core';

export interface MultiLingualPropertyInfo {
    name: string;
    dataType: string;
}
  
export interface MultiLingualInfo {
    entityType: string;
    translationType: string;
    properties: Array<MultiLingualPropertyInfo>
}
export interface EntityTypeDefinitionInfo {
    entityType?: string;
}

export interface EntityTypeInfo {
    name: string;
    definitions: Array<EntityTypeDefinitionInfo>;
}

export type EntityService = AbstractNavTreeService<EntityTypeInfo>
  