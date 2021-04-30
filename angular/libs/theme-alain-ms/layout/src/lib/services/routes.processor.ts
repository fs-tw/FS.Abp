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
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
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
    const result = this.routesService.find(
      (x) => this.formatParams(x.path) === this.CurrentUrl
    );
    return result;
  }

  MergeRouteData(prop: string, defaultValue: any) {
    let result = defaultValue;

    let targetRoutes = [];
    let route = this.CurrentRoute;
    if (!route) return result;
    pushNode(route);
    while (!!route.parent) {
      route = route.parent;
      pushNode(route);
    }

    let stack = targetRoutes;
    while (stack.length !== 0) {
      let node = stack.pop();
      result = { ...result, ...node[prop] };
    }
    return result;

    function pushNode(node) {
      if (!!node && node.hasOwnProperty(prop)) {
        targetRoutes.push(node);
      }
    }
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
    let target: ABP.Route;

    target = this.routesService.find((x) => x.name == nav.name);

    if (!!target) {
      pageNavs.push(...this.transMenu(target));
    }

    return pageNavs;
  }

  private transMenu(first: any,recursive:boolean=true) {
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
        if (second?.children?.length > 0 && recursive) {
          left.children = this.transMenu(second,false);
        }
        result.push(left);
      });
    return result;
  }

  public formatParams(
    text: string,
    router: ActivatedRouteSnapshot = this.RouterState.root
  ): string {
    if (!text) return '';
    let regexp = /:([^(:\/\-\ )]+)/g;
    let result = text;
    let match = text.match(regexp);
    if (!!match) {
      text.match(regexp).forEach((i) => {
        let parameter = i.substr(1);
        let itemId = this.findRouter((x) => parameter in x.params, [router])
          ?.params[parameter];
        result = result.replace(':' + parameter, itemId);
      });
    }
    return result;
  }

  private findRouter(
    predicate: (item: ActivatedRouteSnapshot) => boolean,
    routers: ActivatedRouteSnapshot[]
  ): ActivatedRouteSnapshot {
    return routers.reduce(
      (acc, node) =>
        acc
          ? acc
          : predicate(node)
          ? node
          : this.findRouter(predicate, node.children),
      null
    );
  }
}
