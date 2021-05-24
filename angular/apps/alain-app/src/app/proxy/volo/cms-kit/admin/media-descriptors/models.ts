import type { IRemoteStreamContent } from '../../../abp/content/models';
import type { EntityDto } from '@abp/ng.core';

export interface CreateMediaInputWithStream {
  name: string;
  file: IRemoteStreamContent;
}

export interface MediaDescriptorDto extends EntityDto<string> {
  name?: string;
  mimeType?: string;
  size: number;
}
