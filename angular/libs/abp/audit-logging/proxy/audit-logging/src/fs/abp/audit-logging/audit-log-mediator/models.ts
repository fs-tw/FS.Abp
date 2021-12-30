import type { Range } from '../../../../auto-filterer/types/models';

export interface ListAuditLogByAbpRouteName {
  abpRouteName?: string;
  executionTime: Range<string>;
  skipCount: number;
  maxResultCount: number;
  sorting?: string;
}
