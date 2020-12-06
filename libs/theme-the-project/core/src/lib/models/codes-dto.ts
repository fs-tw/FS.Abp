import { AuditedEntityDto } from '@abp/ng.core';

export class CodesDto extends AuditedEntityDto<string> {
  no: string;
  displayName: string;
  description: string;
  code: string;
  definitionId?: string;
  parentId?: string;
  enable: boolean;
  lastModificationTime?: string;
  lastModifierId?: string;
  creationTime: string;
  creatorId?: string;
  id: string;

  constructor(initialValues: Partial<CodesDto> = {}) {
    super(initialValues);
  }
}
