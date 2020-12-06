/*
 * 以下部分模拟数据来自阿里云控制台
 * https://home.console.aliyun.com/
 */
import { MockRequest, MockStatusError } from '@delon/mock';
import { deepCopy } from '@delon/util';
import { Random } from 'mockjs';
import { genArr, genContent, genData, genMp } from './utils';

let MOCKID = 1;
interface DATAType {
  home: any;
  domain: any;
  domainLog: any;
  dnsGroup: any;
  dnsSetting: any;
  apis: any;
  region: any;
  summary_status: any;
  summary_month: any;
  summary_healthy: any;
  help_categories: any;
  help_product_menus: any;
  notifications: any;
  user: any;
  userDefaultAvatar: any;
  finance: any;
}
const DATA: DATAType = {
  home: null,
  domain: null,
  domainLog: null,
  dnsGroup: null,
  dnsSetting: null,
  apis: null,
  region: null,
  summary_status: null,
  summary_month: null,
  summary_healthy: null,
  help_categories: null,
  help_product_menus: null,
  notifications: null,
  user: null,
  userDefaultAvatar: null,
  finance: null,
};

function getIdx<T extends keyof DATAType>(type: T, id: number): number {
  id = +id;
  const idx = DATA[type].findIndex((w) => w.id === id);
  if (idx === -1) {
    throw new MockStatusError(404);
  }
  return idx;
}

function save<T extends keyof DATAType>(type: T, body: any) {
  const id = body.id || 0;
  if (id > 0) {
    const idx = getIdx(type, id);
    DATA[type][idx] = { ...DATA[type][idx], ...body };
    return { msg: 'ok', item: DATA[type][idx], type: 'edit' };
  }

  const sorted = DATA[type].sort((a, b) => b.id - a.id);
  const item = { ...body, id: sorted.length > 0 ? sorted[0].id + 1 : 1 };
  (DATA[type] as any[]).splice(0, 0, item);
  return { msg: 'ok', item, type: 'add' };
}

function del<T extends keyof DATAType>(type: T, p: any) {
  const cid = +(p.cid || '0');
  let list: any[] = DATA[type];
  if (cid > 0) {
    list = DATA[type].find((w) => w.id === cid).list;
  }

  p.id.split(',').forEach((id) => {
    const idx = list.findIndex((w) => w.id === id);
    list.splice(idx, 1);
  });
  return { msg: 'ok' };
}

function genPage<T extends keyof DATAType>(type: T, queryString: any, qField = 'name', callback: (data: any) => any = null) {
  const pi = +(queryString.pi || 1);
  const ps = +(queryString.ps || 10);
  // data
  let data = deepCopy(DATA[type]);
  if (queryString.q) {
    data = data.filter((item) => item[qField].indexOf(queryString.q) > -1);
  }
  if (callback) {
    data = callback(data);
  }
  return {
    total: data.length,
    list: data.slice((pi - 1) * ps, pi * ps),
  };
}

// #region region

function regionList() {
  if (DATA.region) {
    return DATA.region;
  }
  DATA.region = [
    {
      id: 'cn-qingdao',
      country: 'cn',
      cnName: '华北1（青岛）',
      enName: 'China (Qingdao)',
      district_cnName: '亚太',
      district_enName: 'Asia Pacific',
    },
    {
      id: 'cn-beijing',
      country: 'cn',
      cnName: '华北2（北京）',
      enName: 'China (Beijing)',
      district_cnName: '亚太',
      district_enName: 'Asia Pacific',
    },
    {
      id: 'cn-hangzhou',
      country: 'cn',
      cnName: '华东1（杭州）',
      enName: 'China (Hangzhou)',
      district_cnName: '亚太',
      district_enName: 'Asia Pacific',
    },
    {
      id: 'cn-shanghai',
      country: 'cn',
      cnName: '华东2（上海）',
      enName: 'China (Shanghai)',
      district_cnName: '亚太',
      district_enName: 'Asia Pacific',
    },
    {
      id: 'cn-shenzhen',
      country: 'cn',
      cnName: '华南1（深圳）',
      enName: 'China (Shenzhen)',
      district_cnName: '亚太',
      district_enName: 'Asia Pacific',
    },
    {
      id: 'cn-hongkong',
      country: 'cn',
      cnName: '香港',
      enName: 'Hong Kong',
      district_cnName: '亚太',
      district_enName: 'Asia Pacific',
    },
    {
      id: 'sg-southeast-1',
      country: 'sg',
      cnName: '新加坡',
      enName: 'Singapore',
      district_cnName: '亚太',
      district_enName: 'Asia Pacific',
    },
    {
      id: 'my-southeast-3',
      country: 'my',
      cnName: '马来西亚（吉隆坡）',
      enName: 'Malaysia (Kuala Lumpur)',
      district_cnName: '亚太',
      district_enName: 'Asia Pacific',
    },
    {
      id: 'jp-northeast-1',
      country: 'jp',
      cnName: '日本（东京）',
      enName: 'Japan (Tokyo)',
      district_cnName: '亚太',
      district_enName: 'Asia Pacific',
    },
    {
      id: 'us-west-1',
      country: 'us',
      cnName: '美国（硅谷）',
      enName: 'US (Silicon Valley)',
      district_cnName: '欧洲与美洲',
      district_enName: 'Europe & Americas',
    },
    {
      id: 'us-east-1',
      country: 'us',
      cnName: '美国（弗吉尼亚）',
      enName: 'US (Virginia)',
      district_cnName: '欧洲与美洲',
      district_enName: 'Europe & Americas',
    },
    {
      id: 'de-central-1',
      country: 'de',
      cnName: '德国（法兰克福）',
      enName: 'Germany (Frankfurt)',
      district_cnName: '欧洲与美洲',
      district_enName: 'Europe & Americas',
    },
    {
      id: 'me-east-1',
      country: 'me',
      cnName: '阿联酋（迪拜）',
      enName: 'UAE (Dubai)',
      district_cnName: '中东与印度',
      district_enName: 'Middle East & India',
    },
    {
      id: 'in-south-1',
      country: 'in',
      cnName: '印度（孟买）',
      enName: 'India (Mumbai)',
      district_cnName: '中东与印度',
      district_enName: 'Middle East & India',
    },
    {
      id: 'eu-west-1',
      country: 'gb',
      cnName: '英国（伦敦）',
      enName: 'UK(London)',
      district_cnName: '欧洲与美洲',
      district_enName: 'Europe & Americas',
    },
    {
      id: 'ap-southeast-5',
      country: 'ap',
      cnName: '印度尼西亚（雅加达）',
      enName: 'Indonesia (Jakarta)',
      district_cnName: '亚太',
      district_enName: 'Asia Pacific',
    },
  ];
  return DATA.region;
}

// #endregion

// #region home

function home() {
  if (!DATA.home) {
    DATA.home = {
      consumeMonthly: [
        { month: '11', value: 39, percent: 4.8 },
        { month: '10', value: 2439, percent: 77.6 },
        { month: '09', value: 0, percent: 0 },
        { month: '08', value: 610, percent: 80 },
      ],
      notice: [
        {
          title: '全部公告',
          list: [
            `【升级】关于开展2018年全国网站备案信息抽查评估的通知`,
            `【漏洞预警】最新Apache Struts远程代码执行漏洞(CVE-2016-1000031)`,
            `【其他】关于开展2018年全国网站备案信息抽查评估的通知`,
          ],
        },
        {
          title: '升级',
          list: [
            `【升级】关于开展2018年全国网站备案信息抽查评估的通知`,
            `【升级】关于开展2018年全国网站备案信息抽查评估的通知`,
            `【升级】关于开展2018年全国网站备案信息抽查评估的通知`,
          ],
        },
        {
          title: '安全',
          list: [
            `【漏洞预警】最新Apache Struts远程代码执行漏洞(CVE-2016-1000031)`,
            `【漏洞预警】最新Apache Struts远程代码执行漏洞(CVE-2016-1000031)`,
            `【漏洞预警】最新Apache Struts远程代码执行漏洞(CVE-2016-1000031)`,
          ],
        },
        {
          title: '备案',
          list: [
            `【备案】关于开展2018年全国网站备案信息抽查评估的通知`,
            `【备案】关于开展2018年全国网站备案信息抽查评估的通知`,
            `【备案】关于开展2018年全国网站备案信息抽查评估的通知`,
          ],
        },
        {
          title: '其他',
          list: [
            `【其他】关于开展2018年全国网站备案信息抽查评估的通知`,
            `【其他】关于开展2018年全国网站备案信息抽查评估的通知`,
            `【其他】关于开展2018年全国网站备案信息抽查评估的通知`,
          ],
        },
      ],
      assistant: [
        {
          icon: 'icon-slb',
          title: '推荐好友送云服务器',
          remark: '邀请好友7.1折起购短信包，即可获赠云服务器',
        },
        {
          icon: 'icon-ecs',
          title: '网站建设',
          remark: '提供高性价比的自营建站产品，不满意退款',
        },
        {
          icon: 'icon-sms',
          title: '用户调研（约2分钟）',
          remark: '为了更好地服务于您，我们准备了约2分钟的小问卷，欢迎参加',
        },
      ],
    };
  }
  return deepCopy(DATA.home);
}

// #endregion

// #region domain

function domainList(queryString: any) {
  if (DATA.domain) {
    return genPage('domain', queryString, 'subject');
  }
  const res: any[] = new Array(11).fill({}).map(() => ({
    id: MOCKID++,
    domain: genArr(['ng-alain.com', 'aliyun.com', 'ant.design']),
    domainType: genArr(['ccTLD', 'New gTLD', 'gTLD']),
    status: genArr(['正常', '已过期', '未认证']),
    registrantDate: genData(10),
    expirationDate: genData(10),
  }));
  // labels
  DATA.domain = res;
  return genPage('domain', queryString, 'subject');
}

function domainGet(id: number) {
  const idx = getIdx('domain', id || 0);
  const item = { ...DATA.domain[idx] };
  return item;
}

// #endregion

// #region domain log

function domainLogList(queryString: any) {
  if (DATA.domainLog) {
    return genPage('domainLog', queryString, 'domain');
  }
  const res: any[] = new Array(3).fill({}).map(() => ({
    id: MOCKID++,
    time: genData(1),
    domain: genArr(['ng-alain.com', 'aliyun.com', 'ant.design']),
    message: genArr(['修改备注', '	添加到域名解析列表']),
  }));
  DATA.domainLog = res;
  return genPage('domainLog', queryString, 'domain');
}

// #endregion

// #region dns

function dnsGroup() {
  if (DATA.dnsGroup) {
    return DATA.dnsGroup;
  }
  DATA.dnsGroup = [
    { name: '全部域名', id: 0, count: 2 },
    { name: 'test', id: ++MOCKID, count: 0 },
  ];
  return DATA.dnsGroup;
}

// #endregion

// #region dnsSetting

function dnsSettingList(queryString: any) {
  if (DATA.dnsSetting) {
    return genPage('dnsSetting', queryString, 'rR');
  }
  const res: any[] = new Array(2).fill({}).map(() => ({
    id: MOCKID++,
    type: genArr(['A', 'CNAME']),
    rR: Random.title(1, 1),
    line: 'default',
    value: Random.ip(),
    tTL: 600,
    status: genArr(['ENABLE']),
  }));
  // labels
  DATA.dnsSetting = res;
  return genPage('dnsSetting', queryString, 'rR');
}

function dnsSettingGet(id: number) {
  const idx = getIdx('dnsSetting', id || 0);
  const item = { ...DATA.dnsSetting[idx] };
  return item;
}

// #endregion

// #region apis

function apisList(queryString: any) {
  if (DATA.apis) {
    return genPage('apis', queryString, 'name');
  }
  const res: any[] = new Array(3).fill({}).map(() => ({
    id: MOCKID++,
    name: genArr(['User', 'DNS', 'API', 'Log']),
    visibility: genArr(['PUBLIC', 'PRIVATE']),
    group: genArr(['公共组', '用户组']),
    description: genArr(['User desc', 'DNS desc', 'API desc', 'Log desc']),
    deployed: genArr(['线上', '测试', '预发'], 2),
    modified: genData(10),
  }));
  // labels
  DATA.apis = res;
  return genPage('apis', queryString, 'name');
}

// #endregion

// #region help

// >> categories

function helpCategories() {
  if (DATA.help_categories) {
    return DATA.help_categories;
  }
  let point = 0;
  DATA.help_categories = new Array(4 * 3).fill({}).map((p, idx) => {
    return {
      title: genArr(['Ng Alain', '用户中心', '账号', '安全'], 1),
      icon: genArr(['cloud', 'meh', 'smile', 'mail'], 1),
      list: new Array(Random.integer(5, 12)).fill({}).map((i, iidx) => ({
        id: ++point,
        title: Random.ctitle(3, 8),
        link: `/help/${point}`,
      })),
    };
  });
  return DATA.help_categories;
}

function helpCategoriesGet(id: number) {
  const cate = (helpCategories() as any[]).reduce((p: any[], c: any) => (p = p.concat(c.list)), []).find((w) => w.id === id);

  return {
    id,
    cate,
    title: Random.ctitle(5, 10),
    time: genData(-2),
    content: genContent(),
    prev: Random.boolean() && Random.ctitle(5, 10),
    next: Random.ctitle(5, 10),
    recommended: new Array(Random.integer(0, 5)).fill({}).map((i, idx) => ({ id: idx + 1, title: Random.ctitle(5, 10) })),
  };
}

function helpMenu() {
  let point = 0;
  return [
    {
      id: ++point,
      title: '注册账号',
      children: [
        { id: ++point, title: '个人实名认证', link: `/help/${point}` },
        { id: ++point, title: '企业实名认证', link: `/help/${point}` },
      ],
    },
    {
      id: ++point,
      title: '常见问题1',
      children: [
        {
          id: ++point,
          title: '菜单项一',
          children: [
            { id: ++point, title: '子项1', link: `/help/${point}` },
            { id: ++point, title: '子项2', link: `/help/${point}` },
          ],
        },
        { id: ++point, title: '个人实名认证', link: `/help/${point}` },
        { id: ++point, title: '企业实名认证', link: `/help/${point}` },
      ],
    },
    {
      id: ++point,
      title: '常见问题2',
      children: [
        { id: ++point, title: '菜单项一', link: `/help/${point}` },
        { id: ++point, title: '个人实名认证', link: `/help/${point}` },
        { id: ++point, title: '企业实名认证', link: `/help/${point}` },
      ],
    },
    {
      id: ++point,
      title: '常见问题3',
      children: [
        { id: ++point, title: '菜单项一', link: `/help/${point}` },
        { id: ++point, title: '个人实名认证', link: `/help/${point}` },
        { id: ++point, title: '企业实名认证', link: `/help/${point}` },
      ],
    },
    {
      id: ++point,
      title: '常见问题4',
      children: [
        { id: ++point, title: '菜单项一', link: `/help/${point}` },
        { id: ++point, title: '个人实名认证', link: `/help/${point}` },
        { id: ++point, title: '企业实名认证', link: `/help/${point}` },
      ],
    },
    { id: ++point, title: '服务', link: `/help/${point}` },
    {
      id: ++point,
      title: '通用参考',
      line: true,
      children: [
        { id: ++point, title: '菜单项一', link: `/help/${point}` },
        { id: ++point, title: '个人实名认证', link: `/help/${point}` },
        { id: ++point, title: '企业实名认证', link: `/help/${point}` },
      ],
    },
  ];
}

// #endregion

// #region notifications

function messageInnerList(queryString: any) {
  const callback = (data: any[]) => {
    switch (queryString.type) {
      case 'read':
        return (data = data.filter((item) => item.read));
      case 'unread':
        return (data = data.filter((item) => !item.read));
      default:
        return data;
    }
  };
  if (DATA.notifications) {
    return genPage('notifications', queryString, 'type', callback);
  }
  const res: any[] = new Array(20).fill({}).map(() => ({
    id: MOCKID++,
    time: new Date(),
    title: Random.ctitle(),
    read: Random.boolean() && Random.boolean(),
    type: genArr(['优惠活动', '产品消息', '服务消息', '用户消息']),
  }));
  DATA.notifications = res;
  return genPage('notifications', queryString, 'type', callback);
}

function messageInnerCount() {
  messageInnerList({});
  const res: any[] = [];
  (DATA.notifications as any[]).forEach((i) => {
    let type = res.find((t) => t.type === i.type);
    if (!type) {
      type = { type: i.type, read: 0, unread: 0, count: 0 };
      res.push(type);
    }
    i.read ? ++type.read : ++type.unread;
    ++type.count;
  });
  return res;
}

function messageInnerGet(id: number) {
  const idx = getIdx('notifications', id || 0);
  const item = { ...DATA.notifications[idx], content: genContent() };
  return item;
}

// #endregion

// #region user

function user() {
  if (DATA.user) {
    return DATA.user;
  }
  DATA.user = {
    id: 1,
    enterpriseYear: 3,
    enterpriseSize: 1,
    mainBizCategory: 1,
    biz: 'ng-alain',
    website: 'https://ng-alain.com/',
    nationalityCode: '中国',
    geo: '310105',
  };
  return DATA.user;
}

function userDefaultAvatar() {
  if (DATA.userDefaultAvatar) {
    return DATA.userDefaultAvatar;
  }
  DATA.userDefaultAvatar = new Array(6).fill({}).map((i, idx) => ({ mp: genMp(idx) }));
  return DATA.userDefaultAvatar;
}

// #endregion

// #region finance

function financeList(queryString: any) {
  if (DATA.finance) {
    return genPage('finance', queryString, 'subject');
  }
  const res: any[] = new Array(11).fill({}).map(() => ({
    id: MOCKID++,
    month: `${new Date().getFullYear()}-01`,
    email: Random.email(),
    type: genArr(['项目一', '项目二', '项目三', '项目四']),
    charge: genArr(['预付', '现付']),
    name: genArr(['商品名一', '商品名二', '商品名三', '商品名四']),
    price1: Random.boolean() ? 0 : Random.integer(0, 100),
    price2: Random.boolean() ? 0 : Random.integer(0, 200),
    price3: Random.boolean() ? 0 : Random.integer(0, 300),
    price4: Random.integer(0, 400),
    price5: Random.integer(0, 500),
    price6: Random.integer(0, 600),
    enabled: Random.boolean(),
    status: Random.integer(1, 3),
    ent_name: Random.ctitle(),
    time: Random.time(),
  }));
  // labels
  DATA.finance = res;
  return genPage('finance', queryString, 'subject');
}

function financeGet(id: number) {
  const idx = getIdx('finance', id || 0);
  const item = { ...DATA.finance[idx] };
  return item;
}

// #endregion

export const AYS = {
  '/home': home(),
  '/domain': (req: MockRequest) => domainList(req.queryString),
  '/domain/:id': (req: MockRequest) => domainGet(+req.params.id),
  'POST /domain': (req: MockRequest) => save('domain', req.body),
  '/domain/log': (req: MockRequest) => domainLogList(req.queryString),
  '/dns/group': () => deepCopy(dnsGroup()),
  'POST /dns/group': (req: MockRequest) => save('dnsGroup', req.body),
  'DELETE /dns/group': (req: MockRequest) => del('dnsGroup', req.queryString),
  '/dns/setting': (req: MockRequest) => dnsSettingList(req.queryString),
  '/dns/setting/:id': (req: MockRequest) => dnsSettingGet(+req.params.id),
  'POST /dns/setting': (req: MockRequest) => save('dnsSetting', req.body),
  'DELETE /dns/setting': (req: MockRequest) => del('dnsSetting', req.queryString),
  '/dns/status': () => Random.boolean(),
  '/authorize/deny': () => false,
  '/authorize/grant': () => true,
  '/apis': (req: MockRequest) => apisList(req.queryString),
  'DELETE /apis': (req: MockRequest) => del('apis', req.queryString),
  '/region': () => deepCopy(regionList()),
  '/summary/status': () => [
    { type: '运行中', num: Random.integer(1, 20), color: '#52c41a' },
    { type: '即将过期', num: Random.integer(0, 5), color: '#fa8c16' },
    { type: '已过期', num: Random.integer(0, 5), color: '#f5222d' },
    { type: '已停止', num: Random.integer(0, 5), color: '#888888' },
  ],
  '/summary/month': () =>
    Random.boolean() && Random.boolean() && Random.boolean()
      ? []
      : [
          { time: genData(2), num: Random.integer(0, 1) },
          { time: genData(4), num: 0 },
          { time: genData(5), num: Random.integer(0, 2) },
          { time: genData(10), num: 0 },
          { time: genData(12), num: Random.integer(1, 3) },
          { time: genData(18), num: Random.integer(1, 5) },
          { time: genData(22), num: Random.integer(0, 3) },
          { time: genData(27), num: Random.integer(0, 5) },
        ],
  '/summary/pay': () => [
    { text: '预付费支付', count: Random.integer(0, 5) },
    { text: '网银支付', count: Random.integer(1, 50) },
  ],
  '/summary/trade': () =>
    new Array(15).fill({}).map((i, idx) => ({
      time: genData(-idx, 'MM-dd'),
      num: Random.integer(0, 200),
    })),
  '/summary/gender': () => [
    { x: '男', y: Random.integer(0, 50) },
    { x: '女', y: Random.integer(0, 50) },
    { x: '不确定', y: Random.integer(0, 150) },
  ],
  '/summary/region': () =>
    new Array(Random.integer(1, 10)).fill({}).map(() => ({
      text: Random.province(),
      count: Random.integer(0, 500),
    })),
  '/summary/healthy': () => ({
    service_count: Random.integer(50, 60),
    err_count: Random.integer(0, 2),
    cpu_usage: +Random.float(0, 100).toFixed(2),
    disk_usage: +Random.float(0, 100).toFixed(2),
    memory_usage: +Random.float(10, 100).toFixed(2),
    network_usage: +Random.float(15, 100).toFixed(2),
  }),
  '/help/categories': () => helpCategories(),
  '/help/categories/:id': (req: MockRequest) => helpCategoriesGet(+req.params.id),
  '/help/menu': () => helpMenu(),
  '/message/inner': (req: MockRequest) => messageInnerList(req.queryString),
  '/message/count': () => messageInnerCount(),
  '/message/inner/:id': (req: MockRequest) => messageInnerGet(+req.params.id),
  '/user-ms': () => user(),
  '/user-ms/default-avatar': () => userDefaultAvatar(),
  'POST /user-ms': (req: MockRequest) => (DATA.user = req.body),
  '/finance': (req: MockRequest) => financeList(req.queryString),
  '/finance/:id': (req: MockRequest) => financeGet(+req.params.id),
};
