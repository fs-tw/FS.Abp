import { MockRequest, MockStatusError } from '@delon/mock';
import { deepCopy } from '@delon/util';
import { genMp } from './utils';

interface ImgCat {
  id: number;
  parent_id: number;
  title: string;
}
interface Img {
  cat_id: number;
  id: number;
  title: string;
  mp: string;
  size: number;
  width: number;
  height: number;
  created: Date;
}

const CAT: ImgCat[] = [
  { id: 1, parent_id: 0, title: '店铺' },
  { id: 2, parent_id: 1, title: '产品图' },
  { id: 3, parent_id: 1, title: '品牌图' },
  { id: 4, parent_id: 0, title: '营销' },
  { id: 5, parent_id: 4, title: '双11' },
  { id: 6, parent_id: 4, title: '日常' },
  { id: 7, parent_id: 0, title: '其他' },
];
const DATA: Img[] = [];

for (let i = 1; i <= 50; i += 1) {
  DATA.push(gen(i));
}

function gen(i: number) {
  return {
    cat_id: [1, 2, 3, 4, 5, 6, 7][Math.floor(Math.random() * 10) % 7],
    id: i * 10000,
    title: `title ${i}`,
    mp: genMp(),
    size: Math.floor(Math.random() * 1000) % 1000,
    width: Math.floor(Math.random() * 1000) % 1000,
    height: Math.floor(Math.random() * 1000) % 1000,
    created: new Date(),
  };
}

function get(params: any) {
  let ret = deepCopy(DATA);
  const cat_id = +(params.cat_id || '0');
  if (cat_id > 0) {
    ret = ret.filter((data) => data.cat_id === cat_id);
  }
  if (params.q) {
    ret = ret.filter((data) => data.title.indexOf(params.q) > -1);
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

export const IMGS = {
  '/img/cat': () => deepCopy(CAT),
  '/img': (req: MockRequest) => {
    const pi = +(req.queryString.pi || 1);
    const ps = +(req.queryString.ps || 10);
    const data = get(req.queryString);
    return {
      total: data.length,
      list: data.slice((pi - 1) * ps, pi * ps),
    };
  },
  'POST /img': (req: MockRequest) => {
    const id = req.body.id || 0;
    if (id > 0) {
      const idx = getIdx(id);
      DATA[idx] = { ...DATA[idx], ...req.body };
      return { msg: 'ok', item: DATA[idx] };
    }

    const item = Object.assign(gen(DATA.sort((a, b) => b.id - a.id)[0].id + 1), req.body);
    DATA.push(item);
    return { msg: 'ok', item };
  },
  '/img/:id': (req: MockRequest) => {
    const idx = getIdx(req.params.id || 0);
    const item = { ...DATA[idx], ...req.body };
    return item;
  },
  'DELETE /img/:id': (req: MockRequest) => {
    const idx = getIdx(req.params.id || 0);
    DATA.splice(idx, 1);
    return { msg: 'ok' };
  },
};
