import { MockRequest, MockStatusError } from '@delon/mock';
import { deepCopy } from '@delon/util';
import { Random } from 'mockjs';
import { genName } from './utils';
import { RuleData } from './_role';

interface UserPro {
  id: number;
  name: string;
  userName: string;
  email: string;
  verified: boolean;
  status: 'active' | 'banned' | 'deleted';
  role?: any;
  permission?: any[];
  created: Date;
}

const DATA: UserPro[] = [];

for (let i = 1; i <= 20; i += 1) {
  const name = genName();
  DATA.push({
    id: i,
    name,
    userName: `user name ${i}`,
    email: `${name}` + ['@qq.com', '@gmail.com', '@163.com'][Math.floor(Math.random() * 10) % 3],
    verified: [true, false][Math.floor(Math.random() * 10) % 2],
    status: ['active', 'banned', 'deleted'][Math.floor(Math.random() * 10) % 3] as any,
    role: deepCopy(RuleData[Random.natural(0, RuleData.length - 1)]),
    permission: [],
    created: new Date(),
  });
}

function get(params: any) {
  let ret = deepCopy(DATA);
  if (params.q) {
    ret = ret.filter((data) => data.name.indexOf(params.q) > -1);
  }
  if (params.email) {
    ret = ret.filter((data) => data.email.indexOf(params.email) > -1);
  }
  return ret;
}

function getIdx(id: number): number {
  id = +id;
  const idx = DATA.findIndex((w) => w.id === id);
  if (idx === -1) {
    throw new MockStatusError(404);
  }
  return idx;
}

export const USERS_PRO = {
  '/user-pro': (req: MockRequest) => {
    const pi = +(req.queryString.pi || 1);
    const ps = +(req.queryString.ps || 10);
    const data = get(req.queryString);
    return {
      total: data.length,
      list: data.slice((pi - 1) * ps, pi * ps),
    };
  },
  'POST /user-pro': (req: MockRequest) => {
    const id = req.body.id || 0;
    // fix role data
    req.body.role = RuleData.find((w) => w.id === req.body.role.id);

    if (id > 0) {
      const idx = getIdx(id);
      DATA[idx] = { ...DATA[idx], ...req.body };
      return { msg: 'ok', item: DATA[idx] };
    }

    const item = { ...req.body, id: DATA.sort((a, b) => b.id - a.id)[0].id + 1 };
    DATA.push(item);
    return { msg: 'ok', item };
  },
  '/user-pro/:id': (req: MockRequest) => {
    const idx = getIdx(req.params.id || 0);
    const item = { ...DATA[idx], ...req.body };
    return item;
  },
  'DELETE /user-pro/:id': (req: MockRequest) => {
    const idx = getIdx(req.params.id || 0);
    DATA.splice(idx, 1);
    return { msg: 'ok' };
  },
};
