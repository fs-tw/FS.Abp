import { MockRequest, MockStatusError } from '@delon/mock';
import { deepCopy } from '@delon/util';

interface Permission {
  id: number;
  parent_id: number;
  text: string;
}

export const PermissionData: Permission[] = [
  { id: 1, parent_id: 0, text: '超级权限' },
  { id: 2, parent_id: 0, text: '系统' },
  { id: 3, parent_id: 2, text: '员工' },
  { id: 4, parent_id: 2, text: '菜单' },
  { id: 5, parent_id: 2, text: '权限' },
  { id: 6, parent_id: 0, text: '订单' },
  { id: 7, parent_id: 6, text: '列表' },
  { id: 8, parent_id: 6, text: '导入订单' },
  { id: 9, parent_id: 6, text: '打印快递单' },
  { id: 10, parent_id: 9, text: '批量打印' },
  { id: 11, parent_id: 6, text: '发货' },
  { id: 12, parent_id: 11, text: '批量发货' },
];

function getIdx(id: number): number {
  id = +id;
  const idx = PermissionData.findIndex((w) => w.id === id);
  if (idx === -1) {
    throw new MockStatusError(404);
  }
  return idx;
}

export const PERMISSION = {
  '/permission': () => deepCopy(PermissionData),
  'POST /permission': (req: MockRequest) => {
    const id = req.body.id || 0;
    if (id > 0) {
      const idx = getIdx(id);
      PermissionData[idx] = { ...PermissionData[idx], ...req.body };
      return { msg: 'ok', item: PermissionData[idx] };
    }

    const item = { ...req.body, id: PermissionData.sort((a, b) => b.id - a.id)[0].id + 1 };
    PermissionData.push(item);
    return { msg: 'ok', item };
  },
  'DELETE /permission/:id': (req: MockRequest) => {
    const idx = getIdx(req.params.id || 0);
    PermissionData.splice(idx, 1);
    return { msg: 'ok' };
  },
  'POST /permission/move': (req: MockRequest) => {
    const idx = getIdx(req.body.from || 0);
    PermissionData[idx].parent_id = req.body.to || 0;
    return { msg: 'ok', item: PermissionData[idx] };
  },
};
