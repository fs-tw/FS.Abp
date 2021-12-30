import type { FilterBase } from '../../../../auto-filterer/types/models';
import type { CombineType } from '../../../../auto-filterer/enums/combine-type.enum';

export interface AuditLogActionFilter extends FilterBase {
  serviceName?: string;
  methodName?: string;
  combineWith: CombineType;
}
