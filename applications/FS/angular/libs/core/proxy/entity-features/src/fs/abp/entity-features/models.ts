
export interface EntityFeature {
  name?: string;
  definitions: EntityFeatureDefinition[];
}

export interface EntityFeatureDefinition {
  entityType?: string;
}
