import { MockRequest, MockStatusError } from '@delon/mock';
import { deepCopy } from '@delon/util';
import { Random } from 'mockjs';
import { genMp } from './utils';

interface FileItem {
  id?: number;
  parent_id?: number;
  type?: 'folder' | 'file';
  title?: string;
  mp?: string;
  ext?: string;
  size?: number;
  width?: number;
  height?: number;
  created?: Date;
}

let point = 1;
let DATA: FileItem[] = [];
DATA = DATA.concat(...genFolds(0, 3), ...genFiles(1, 6), ...genFiles(2, 3), ...genFiles(0, 1, 'zip'), ...genFiles(0, 10));

function genFolds(parent_id: number, count: number): FileItem[] {
  return new Array(count).fill({}).map(() => {
    // tslint:disable-next-line: no-object-literal-type-assertion
    return {
      id: point++,
      parent_id,
      type: 'folder',
      ext: 'folder',
      title: Random.ctitle(3, 5),
      created: new Date(),
    } as FileItem;
  });
}

function genFiles(parent_id: number, count: number, ext = 'png'): FileItem[] {
  return new Array(count).fill({}).map(() => {
    // tslint:disable-next-line: no-object-literal-type-assertion
    return {
      id: point++,
      parent_id,
      type: 'file',
      title: Random.ctitle(3, 5) + '.' + ext,
      mp: genMp(),
      is_img: ext === 'png',
      ext,
      size: Random.natural(10, 10000),
      width: Random.natural(100, 1000),
      height: Random.natural(100, 1000),
      created: new Date(),
    } as FileItem;
  });
}

function get(params: any) {
  let ret = deepCopy(DATA) as FileItem[];
  const parent_id = +(params.parent_id || '0');
  ret = ret.filter((data) => data.parent_id === parent_id);
  if (params.type) {
    ret = ret.filter((data) => data.type.indexOf(params.type) > -1);
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

export const FILES = {
  '/file/folder': () => deepCopy(DATA).filter((w) => w.type === 'folder'),
  '/file': (req: MockRequest) => {
    const pi = +(req.queryString.pi || 1);
    const ps = +(req.queryString.ps || 10);
    const data = get(req.queryString);
    return {
      total: data.length,
      list: data.slice((pi - 1) * ps, pi * ps),
    };
  },
  'POST /file': (req: MockRequest) => {
    const file = req.body.get('file') as File;
    const parent_id = +req.body.get('parent_id');
    const item = Object.assign(genFiles(req.body.parent_id, 1)[0], {
      parent_id,
      title: file.name,
      size: file.size,
    });
    DATA.push(item);
    return { msg: 'ok', item };
  },
  '/file/:id': (req: MockRequest) => {
    const idx = getIdx(req.params.id || 0);
    const item = { ...DATA[idx], ...req.body };
    return item;
  },
  'POST /file/rename': (req: MockRequest) => {
    const idx = getIdx(req.body.id || 0);
    DATA[idx].title = req.body.title;
    return { msg: 'ok', item: DATA[idx] };
  },
  'POST /file/move': (req: MockRequest) => {
    const idx = getIdx(req.body.id || 0);
    DATA[idx].parent_id = req.body.moveId;
    return { msg: 'ok', item: DATA[idx] };
  },
  'POST /file/copy/:id': (req: MockRequest) => {
    const idx = getIdx(req.params.id || 0);
    const item = { ...DATA[idx], id: point++ };
    item.title += ' - Copy';
    DATA.push(item);
    return { msg: 'ok', item };
  },
  'DELETE /file/:id': (req: MockRequest) => {
    const idx = getIdx(req.params.id || 0);
    DATA.splice(idx, 1);
    return { msg: 'ok' };
  },
};
