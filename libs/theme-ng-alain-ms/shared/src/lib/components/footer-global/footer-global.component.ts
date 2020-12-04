import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'footer-global',
  templateUrl: './footer-global.component.html',
  host: {
    '[class.ay-footer]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterGlobalComponent {
  menus = [
    {
      title: '支持与服务',
      list: [
        { title: '组件', link: '/component' },
        { title: '数据', link: '/data' },
        { title: 'DNS', link: '/dns' },
        { title: 'API 网关', link: '/api' },
        { title: '授权', link: '/authorize' },
        { title: '智能顾问', link: '/smart' },
        { title: 'API 网关', link: '/api' },
        { title: '授权', link: '/authorize' },
        { title: '智能顾问', link: '/smart' },
        { title: 'API 网关', link: '/api' },
      ],
    },
    {
      title: '账户管理',
      list: [
        { title: '组件', link: '/component' },
        { title: '数据', link: '/data' },
        { title: 'DNS', link: '/dns' },
        { title: 'API 网关', link: '/api' },
        { title: '授权', link: '/authorize' },
        { title: '智能顾问', link: '/smart' },
        { title: 'API 网关', link: '/api' },
        { title: '授权', link: '/authorize' },
        { title: '智能顾问', link: '/smart' },
        { title: 'API 网关', link: '/api' },
      ],
    },
    {
      title: '快速入口',
      list: [
        { title: '组件', link: '/component' },
        { title: '数据', link: '/data' },
        { title: 'DNS', link: '/dns' },
        { title: 'API 网关', link: '/api' },
        { title: '授权', link: '/authorize' },
        { title: '智能顾问', link: '/smart' },
        { title: 'API 网关', link: '/api' },
        { title: '授权', link: '/authorize' },
        { title: '智能顾问', link: '/smart' },
        { title: 'API 网关', link: '/api' },
      ],
    },
    {
      title: '资源和社区',
      list: [
        { title: '组件', link: '/component' },
        { title: '数据', link: '/data' },
        { title: 'DNS', link: '/dns' },
        { title: 'API 网关', link: '/api' },
        { title: '授权', link: '/authorize' },
        { title: '智能顾问', link: '/smart' },
        { title: 'API 网关', link: '/api' },
        { title: '授权', link: '/authorize' },
        { title: '智能顾问', link: '/smart' },
        { title: 'API 网关', link: '/api' },
      ],
    },
  ];

  hots = [
    {
      title: '热门产品',
      list: [
        { title: '组件', link: '/component' },
        { title: '数据', link: '/data' },
        { title: 'DNS', link: '/dns' },
        { title: 'API 网关', link: '/api' },
        { title: '授权', link: '/authorize' },
        { title: '智能顾问', link: '/smart' },
        { title: '组件', link: '/component' },
        { title: '数据', link: '/data' },
        { title: 'DNS', link: '/dns' },
      ],
    },
    {
      title: '用户热搜',
      list: [
        { title: '组件', link: '/component' },
        { title: '数据', link: '/data' },
        { title: 'DNS', link: '/dns' },
        { title: 'API 网关', link: '/api' },
        { title: '授权', link: '/authorize' },
        { title: '智能顾问', link: '/smart' },
        { title: '组件', link: '/component' },
        { title: '数据', link: '/data' },
        { title: 'DNS', link: '/dns' },
      ],
    },
    {
      title: '更多推荐',
      list: [
        { title: '组件', link: '/component' },
        { title: '数据', link: '/data' },
        { title: 'DNS', link: '/dns' },
        { title: 'API 网关', link: '/api' },
        { title: '授权', link: '/authorize' },
        { title: '智能顾问', link: '/smart' },
        { title: '组件', link: '/component' },
        { title: '数据', link: '/data' },
        { title: 'DNS', link: '/dns' },
      ],
    },
  ];

  hotsInMobile = [
    { title: '组件', link: '/component' },
    { title: '数据', link: '/data' },
    { title: 'DNS', link: '/dns' },
    { title: 'API 网关', link: '/api' },
    { title: '授权', link: '/authorize' },
    { title: '智能顾问', link: '/smart' },
  ];
}
