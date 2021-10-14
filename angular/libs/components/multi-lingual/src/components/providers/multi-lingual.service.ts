export interface EntityTypeDefinitionInfo {
    entityType?: string;
}

export class MultiLingualPropertyInfo {
    name: string;
    dataType: string;
}
  
export class MultiLingualInfo implements EntityTypeDefinitionInfo {
    entityType: string;
    translationType: string;
    properties: Array<MultiLingualPropertyInfo>
}

export class EntityTypeInfo {
    name: string;
    definitions: Array<EntityTypeDefinitionInfo>;
}