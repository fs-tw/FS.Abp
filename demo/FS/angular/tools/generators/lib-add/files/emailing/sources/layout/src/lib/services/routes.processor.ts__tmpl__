import {
  RoutesService as AbpRoutesService,
  LocalizationPipe,
  ABP,
  TreeNode,
} from '@abp/ng.core';

import { Injectable, Injector } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import {
  MSMenu,
  MSProduct,
  MSProductCategory,
  MSServiceNavConfig,
} from '../models';
import { Observable } from 'rxjs';
import { RouterStateSnapshot } from '@angular/router';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';

export class RoutesProcessor {
  private get routesService(): AbpRoutesService {
    return this.injector.get(AbpRoutesService);
  }

  private get localizationPipe(): LocalizationPipe {
    return this.injector.get(LocalizationPipe);
  }

  public RouterState: RouterStateSnapshot;

  get CurrentUrl(): string {
    var current_url = this.RouterState.url.split('?')[0];
    return decodeURI(current_url);
  }

  get CurrentRoute(): TreeNode<ABP.Route> {
    return this.routesService.find(
      (x) => this.formatParams(x.path) === this.CurrentUrl
    );
  }

  get NavConfigs(): TreeNode<ABP.Route>[] {
    let result = [];
    let node = this.CurrentRoute;
    if (!node) return [];
    pushNode(node);
    while (!!node.parent) {
      node = node.parent;
      pushNode(node);
    }
    return result;

    function pushNode(node) {
      if (!!node && !!node['navConfig']) {
        result.push(node);
      }
    }
  }

  get CurrentNavConfig(): MSServiceNavConfig {
    let result = {
      parentName: null,
      name: this.CurrentRoute.parentName,
    } as MSServiceNavConfig;
    let stack = this.NavConfigs;
    while (stack.length !== 0) {
      let node = stack.pop();
      result = { ...result, ...node['navConfig'] };
    }
    return result;
  }

  constructor(private injector: Injector) {}

  public get Category$(): Observable<MSProductCategory[]> {
    return this.routesService.visible$.pipe(
      map((x) => {
        if (x.length === 0) return;
        return x
          .filter(
            (y) =>
              y.name === eThemeSharedRouteNames.Administration &&
              !this.routesService.hide(y)
          )
          .map((r) => r.children)
          .reduce((a, b) => a.concat(b))
          .map((r) => {
            let category: MSProductCategory = {
              id: r.name,
              name: this.localizationPipe.transform(r.name),
              icon: r.iconClass,
              products: [],
              link: r.path,
            };

            category.products = r.children
              .filter((c) => !this.routesService.hide(c))
              .map((c) => {
                let product: MSProduct = {
                  productId: c.name,
                  name: this.localizationPipe.transform(c.name),
                  link: c.path,
                  icon: c.iconClass,
                  id: c.name,
                };
                return product;
              });
            return category;
          });
      })
    );
  }

  public GetPageNavs(
    routerState: RouterStateSnapshot,
    nav: MSServiceNavConfig
  ) {
    if (!this.CurrentRoute) return [];
    let pageNavs: MSMenu[] = [];
    this.RouterState = routerState;
    let target;
    this.routesService.tree
      .filter((x) => !this.routesService.hide(x))
      .find((x) => {
        let result = this.searchRoute(x, nav);
        if (!!result) target = result;
      });
    if (!!target) {
      pageNavs.push(...this.transMenu(target));
    }

    return pageNavs;
  }
  private searchRoute(element: TreeNode<ABP.Route>, nav: MSServiceNavConfig) {
    let hasChildren = !!element.children && element.children.length > 0;
    let specifyParent = this.formatParams(nav.parentName);
    let isSpecifyParent = !!specifyParent;
    if (!isSpecifyParent && element.name == nav.name) {
      return element;
    }
    if (isSpecifyParent && element.name === specifyParent && hasChildren) {
      let target = element.children.find((x) => x.name === nav.name);
      if (!!target) return target;
    }
    if (element.children != null) {
      var i;
      var result = null;
      for (i = 0; result == null && i < element.children.length; i++) {
        result = this.searchRoute(element.children[i], nav);
      }
      return result;
    }
  }
  private transMenu(first: any) {
    let result = [];
    first.children
      .filter((r) => !this.routesService.hide(r))
      .forEach((second) => {
        let left: MSMenu = {
          text:
            second.displayName || this.localizationPipe.transform(second.name),
          link: this.formatParams(second.path), //(third.url || third.path),
          icon: second.iconClass,
          children: [],
        };
        if (second?.children?.length > 0) {
          left.children = this.transMenu(second);
        }
        result.push(left);
      });
    return result;
  }

  public formatParams(text: string) {
    if (!text) return '';
    let regexp = /:([^(:\/\-\ )]+)/g;
    let result = text;
    let match = text.match(regexp);
    if (!!match) {
      text.match(regexp).forEach((i) => {
        let parameter = i.substr(1);
        let itemId = this.getParamKeyValue(parameter);
        result = result.replace(':' + parameter, itemId);
      });
    }
    return result;
  }
  private getParamKeyValue(paramKey: string) {
    //let usedRouterState = routerState ? routerState : this.routerState;
    let targetRouter = this.searchRouter(this.RouterState.root, paramKey);
    if (targetRouter) return targetRouter.params[paramKey];
    return null;
  }
  private searchRouter(router, property) {
    if (property in router.params) {
      return router;
    } else if (router.children != null) {
      var i;
      var result = null;
      for (i = 0; result == null && i < router.children.length; i++) {
        result = this.searchRouter(router.children[i], property);
      }
      return result;
    }
    return null;
  }
}
