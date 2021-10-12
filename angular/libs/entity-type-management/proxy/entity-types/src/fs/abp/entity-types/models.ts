import type { EntityTypeDefinition } from '../../../volo/cms-kit/models';

export interface EntityType {
  name?: string;
  definitions: EntityTypeDefinition[];
}
