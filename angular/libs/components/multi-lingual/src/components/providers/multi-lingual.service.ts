import { Volo } from '@fs-tw/entity-type-management/proxy/entity-types';

export class MultiLingualPropertyInfo {
    name: string;
    dataType: string;
}
  
export class MultiLingualInfo implements Volo.CmsKit.EntityTypeDefinition {
    entityType: string;
    translationType: string;
    properties: Array<MultiLingualPropertyInfo>
}
