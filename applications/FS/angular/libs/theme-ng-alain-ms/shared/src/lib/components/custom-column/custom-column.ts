import { STColumn } from '@delon/abc/st';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

/**
 * 应用定制列，一些简单规则：
 * - `ccChecked` 表示是否允许定制列，默认：`true`
 * - `ccDisabled` 表示是否禁止定制列，默认：`false`
 */
export function applyCC(list: NzSafeAny[]): STColumn[] {
  list.forEach((i: NzSafeAny) => {
    if (i.ccDisabled) {
      return;
    }
    i.iif = (_: NzSafeAny) => _.ccDisabled !== true && _.ccChecked !== false;
  });
  return list;
}
