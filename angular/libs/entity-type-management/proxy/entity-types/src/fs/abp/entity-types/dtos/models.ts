import type { EntityPropertyDefinition } from '../models';

export interface EntityDefinitionDto {
  entityType?: string;
  createFormProps: EntityPropertyDefinition[];
}
