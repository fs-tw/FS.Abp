import { MockRequest, MockStatusError } from '@delon/mock';
import { deepCopy } from '@delon/util';

interface Permission {
  id: number;
  parent_id: number;
  text: string;
  permission: number[];
}

export const RuleData: Permission[] = [
  { id: 1, parent_id: 0, text: '管理', permission: [1] },
  { id: 2, parent_id: 0, text: '仓储', permission: [] },
  { id: 3, parent_id: 0, text: '营销', permission: [] },
  { id: 4, parent_id: 0, text: '第三方', permission: [7] },
  {
    id: 5,
    parent_id: 2,
    text: '仓储经理',
    permission: [6, 7, 8, 9, 10, 11, 12],
  },
  { id: 6, parent_id: 2, text: '出库员', permission: [6, 7, 9, 10, 11, 12] },
  { id: 7, parent_id: 2, text: '入库员', permission: [6, 7] },
  { id: 8, parent_id: 3, text: '市场经理', permission: [6, 7] },
  { id: 9, parent_id: 3, text: '销售人员', permission: [6, 7] },
];

function get(params: any) {
  let ret = deepCopy(RuleData);
  if (params.q) {
    ret = ret.filter((data) => data.text.indexOf(params.q) > -1);
  }
  const p = +(params.permission || '0');
  if (p > 0) {
    ret = ret.filter((data) => data.permission.includes(p));
  }
  return ret;
}

function getIdx(id: number): number {
  id = +id;
  const idx = RuleData.findIndex((w) => w.id === id);
  if (idx === -1) {
    throw new MockStatusError(404);
  }
  return idx;
}

export const ROLES_PRO = {
  '/role': (req: MockRequest) => get(req.queryString),
  'POST /role': (req: MockRequest) => {
    const id = req.body.id || 0;
    if (id > 0) {
      const idx = getIdx(id);
      RuleData[idx] = { ...RuleData[idx], ...req.body };
      return { msg: 'ok', item: RuleData[idx] };
    }

    const item = { ...req.body, id: RuleData.sort((a, b) => b.id - a.id)[0].id + 1 };
    RuleData.push(item);
    return { msg: 'ok', item };
  },
  'DELETE /role/:id': (req: MockRequest) => {
    const idx = getIdx(req.params.id || 0);
    RuleData.splice(idx, 1);
    return { msg: 'ok' };
  },
  'POST /role/move': (req: MockRequest) => {
    const idx = getIdx(req.body.from || 0);
    RuleData[idx].parent_id = req.body.to || 0;
    return { msg: 'ok', item: RuleData[idx] };
  },
};
