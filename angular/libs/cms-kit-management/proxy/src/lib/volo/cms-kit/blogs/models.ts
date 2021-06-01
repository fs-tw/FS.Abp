import type { EntityDto } from '@abp/ng.core';

export interface BlogFeatureDto extends EntityDto<string> {
  featureName?: string;
  isEnabled: boolean;
}
