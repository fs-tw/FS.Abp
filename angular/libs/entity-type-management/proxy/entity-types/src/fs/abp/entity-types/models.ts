import type { EntityTypeDefinition } from '../../../volo/cms-kit/models';

export interface EntityDefinition {
  name?: string;
  appServiceType?: string;
  entityType?: string;
  createType?: string;
  updateType?: string;
  searchType?: string;
  listType?: string;
  createFormProps: EntityPropertyDefinition[];
  updateFormProps: EntityPropertyDefinition[];
  searchFormProps: EntityPropertyDefinition[];
  listProps: EntityPropertyDefinition[];
}

export interface EntityPropertyDefinition {
  type?: string;
  id?: string;
  name?: string;
  displayName?: string;
  permission?: string;
  sortable: boolean;
  columnWidth: number;
  visible: boolean;
}

export interface EntityType {
  name?: string;
  definitions: EntityTypeDefinition[];
}
