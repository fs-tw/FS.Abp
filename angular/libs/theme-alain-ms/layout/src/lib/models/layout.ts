import { TemplateRef } from '@angular/core';
import { TreeNode } from '@abp/ng.core';
import { RouterStateSnapshot } from '@angular/router';
import { MenuIcon } from '@delon/theme';
import { Layout as DelonLayout, Menu as DelonMenu } from '@delon/theme';

export namespace Layout {
  export const defaultNavConfig:MSServiceNavConfig = {
    title: '系統管理',
    doc: '系統管理',
  };

  export const defaultSidebarConfig:SidebarConfig = {
    hasSidebar: true,
    hasAllNav: false,
    hasPageNav: true,
    hasProductNav: false,
  };
  export interface State {
    isFetching: boolean;

    //hasAllNav: boolean;
    //hasSidebar: boolean;
    categories: MSProductCategory[];

    navConfig: MSServiceNavConfig;
    sidebarConfig: SidebarConfig;
    //hasPageNav: boolean;
    pageNavs: MSMenu[];

    //processor?: Processor;
  }
}

export interface MSLayout extends DelonLayout {
  /**
   * 是否有顶部
   */
  hasTopbar: boolean;
  /**
   * 是否有侧边栏
   */
  hasSidebar: boolean;
  /**
   * 色弱模式
   */
  colorWeak: boolean;
}
export interface MSProductCategory {
  [key: string]: any;

  name: string;

  id?: string;

  products?: MSProduct[];
}
export interface MSProduct extends MSLink {
  [key: string]: any;

  id: string;

  name: string;

  icon?: string | MenuIcon;

  description?: string;

  shortcut?: boolean;

  /** Link for current product */
  link?: string;
}
export interface MSProductI18n {
  [key: string]: any;
  keywords?: string;
  allProduct?: string;
  hasResult?: string;
  noResult?: string;
  text?: string;
  recent?: string;
}

export interface MSLink {
  /** 路由或外链地址，若外链务必指定 `target` 值 */
  link?: string;
  /** 指定目标打开方式，都视为外链 */
  target?: '_blank' | '_self' | '_parent' | '_top';

  text?: string;
}
export interface SidebarConfig {
  hasAllNav?: boolean;

  hasSidebar?: boolean;

  hasPageNav?: boolean;

  hasProductNav?: boolean;
}
export interface MSServiceNavConfig {
  /** 服务导航标题 */
  title?: string;
  /** 服务导航标题（i18n） */
  titleI18n?: string;
  /** 次级导航上一级路径，若存在时，导航标题将被忽略为后退图标 */
  backHref?: string;
  /** 文档页面标题 */
  doc?: string;
  /** 文档页面标题（i18n） */
  docI18n?: string;

  /** PageNav node name set route name then display children node  */
  name?: string;
}

export interface MSMenu extends DelonMenu {
  [key: string]: any;
}


