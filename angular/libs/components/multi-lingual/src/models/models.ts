import { AbstractNavTreeService } from '@abp/ng.core';
export namespace MultiLingual {
    
    export interface MultiLingualProperty {
        name: string;
        dataType: string;
    }
      
    export interface MultiLingualDefinition {
        entityType: string;
        translationType: string;
        properties: Array<MultiLingualProperty>
    }
    
    export interface EntityType {
        name: string;
        definitions: Array<MultiLingualDefinition>;
    }
    
    export type EntityTypeStore = AbstractNavTreeService<EntityType>
}

  