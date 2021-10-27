import type { EntityTypeDefinition } from '../../../volo/cms-kit/models';

export interface EntityPropertyDefinition {
  type?: string;
  id?: string;
  name?: string;
  displayName?: string;
}

export interface EntityType {
  name?: string;
  definitions: EntityTypeDefinition[];
}
