import { MockRequest, MockStatusError } from '@delon/mock';
import { Menu } from '@delon/theme';
import { deepCopy } from '@delon/util';

const DATA: Menu[] = [
  {
    id: 1,
    parent_id: 0,
    text: '主导航',
    i18n: 'menu.main',
    group: true,
    hideInBreadcrumb: true,
  },
  {
    id: 2,
    parent_id: 1,
    text: '仪表盘',
    i18n: 'menu.dashboard',
    icon: 'dashboard',
  },
  {
    id: 3,
    parent_id: 2,
    text: '分析页',
    link: '/dashboard/analysis',
    i18n: 'menu.dashboard.analysis',
  },
  {
    id: 4,
    parent_id: 2,
    text: '监控页',
    link: '/dashboard/monitor',
    i18n: 'menu.dashboard.monitor',
  },
  {
    id: 5,
    parent_id: 2,
    text: '工作台',
    link: '/dashboard/workplace',
    i18n: 'menu.dashboard.workplace',
  },
  {
    id: 6,
    parent_id: 0,
    text: 'Pro',
    i18n: 'menu.pro',
    group: true,
    hideInBreadcrumb: true,
  },
  {
    id: 7,
    parent_id: 6,
    text: 'Form Page',
    i18n: 'menu.form',
    link: '/pro/form',
    icon: 'anticon anticon-edit',
    hideInBreadcrumb: true,
  },
  {
    id: 8,
    parent_id: 6,
    text: 'Basic Form',
    link: '/pro/form/basic-form',
    i18n: 'menu.form.basicform',
    shortcut: true,
  },
  {
    id: 9,
    parent_id: 6,
    text: 'Step Form',
    link: '/pro/form/step-form',
    i18n: 'menu.form.stepform',
  },
];

function getIdx(id: number): number {
  id = +id;
  const idx = DATA.findIndex((w) => w.id === id);
  if (idx === -1) {
    throw new MockStatusError(404);
  }
  return idx;
}

export const MENUS = {
  '/menus': () => deepCopy(DATA),
  'POST /menus': (req: MockRequest) => {
    const id = req.body.id || 0;
    if (id > 0) {
      const idx = getIdx(id);
      DATA[idx] = { ...DATA[idx], ...req.body };
      return { msg: 'ok', item: DATA[idx] };
    }

    const item = { ...req.body, id: DATA.sort((a, b) => b.id - a.id)[0].id + 1 };
    DATA.push(item);
    return { msg: 'ok', item };
  },
  'DELETE /menus/:id': (req: MockRequest) => {
    const idx = getIdx(req.params.id || 0);
    DATA.splice(idx, 1);
    return { msg: 'ok' };
  },
  'POST /menus/move': (req: MockRequest) => {
    const idx = getIdx(req.body.from || 0);
    DATA[idx].parent_id = req.body.to || 0;
    return { msg: 'ok', item: DATA[idx] };
  },
};
