import { MockRequest, MockStatusError } from '@delon/mock';
import { deepCopy } from '@delon/util';

const DATA: any[] = [];

for (let i = 1; i <= 20; i += 1) {
  DATA.push({
    id: i,
    name: 'cms',
    level: ['error', 'warning', 'info'][Math.floor(Math.random() * 10) % 3],
    path: `/home/${i}`,
    title: `未知报告 ${i}`,
    data: `Uncaught Error: test-${i}\nat <anonymous>:1:7\nat <anonymous>:1:7\nat <anonymous>:1:7`,
    created: new Date(),
  });
}

function getIdx(id: number): number {
  const idx = DATA.findIndex((w) => w.id === id);
  if (idx === -1) {
    throw new MockStatusError(404);
  }
  return idx;
}

function get(params: any) {
  let ret = deepCopy(DATA);
  if (params.q) {
    ret = ret.filter((data) => data.title.indexOf(params.q) > -1);
  }
  if (params.level) {
    ret = ret.filter((data) => data.level.indexOf(params.level) > -1);
  }
  return ret;
}

function del(params: any) {
  const id = params.id || 0;
  if (id > 0) {
    DATA.splice(getIdx(id), 1);
  } else {
    get(params).forEach((w) => {
      del({ id: w.id });
    });
  }
}

export const LOGS = {
  '/log': (req: MockRequest) => {
    const pi = +(req.queryString.pi || 1);
    const ps = +(req.queryString.ps || 10);
    const data = get(req.queryString);
    return {
      total: data.length,
      list: data.slice((pi - 1) * ps, pi * ps),
    };
  },
  'DELETE /log': (req: MockRequest) => {
    del(req.queryString);
    return { msg: 'ok' };
  },
};
