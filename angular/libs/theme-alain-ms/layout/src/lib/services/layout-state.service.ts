import { Injectable, Injector } from '@angular/core';
import { InternalStore, LocalizationPipe } from '@abp/ng.core';
import {
  Layout,
  MSProduct,
  MSServiceNavConfig,
  SidebarConfig,
} from '../models';
import { map } from 'rxjs/operators';
import { Router, RouterStateSnapshot } from '@angular/router';
import { RoutesProcessor } from './routes.processor';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { findRoute, getRoutePath, RoutesService } from '@abp/ng.core';

@Injectable({
  providedIn: 'root',
})
export class LayoutStateService {
  private store = new InternalStore({
    isFetching: false,

    categories: [],

    navConfig: Layout.defaultNavConfig,
    sidebarConfig: Layout.defaultSidebarConfig,

    pageNavs: [],
  } as Layout.State);
  //private routerState: RouterStateSnapshot;
  ///必須等待Rouer完成後才能使用，需要當前路徑
  public routesProcessor: RoutesProcessor;

  getStore$() {
    return this.store.sliceState((state) => state);
  }

  getFetching$() {
    return this.store.sliceState(({ isFetching }) => isFetching);
  }

  getCategories() {
    return this.store.state.categories;
  }

  getCategories$() {
    return this.store.sliceState((state) => state.categories);
  }
  getShortcuts() {
    const categories = this.getCategories();
    const result: MSProduct[] = [];
    categories.forEach((p) => {
      result.push(p as any);
    });
    return result;
  }

  getShortcuts$() {
    return this.getCategories$().pipe(
      map((x) => {
        const result: MSProduct[] = [];
        x.forEach((p) => {
          result.push(p as any);
        });
        return result;
      })
    );
  }

  getNavConfig() {
    return this.store.state.navConfig;
  }

  getNavConfig$() {
    return this.store.sliceState((state) => state.navConfig);
  }

  getPageNavs$() {
    return this.store.sliceState((state) => state.pageNavs);
  }
  getPageNavs() {
    return this.store.state.pageNavs;
  }

  constructor(
    private injector: Injector,
    public localizationPipe: LocalizationPipe
  ) {
    this.routesProcessor = new RoutesProcessor(this.injector);
    this.listenRoutes();
  }

  setStore(state: Partial<Layout.State>) {
    this.store.patch({ ...state });
  }

  setFetching(isFetching: boolean) {
    this.store.patch({ isFetching });
  }

  setNavConfig(navConfig: MSServiceNavConfig) {
    this.store.patch({ navConfig });
    let pageNavs: any;
    if (navConfig.name !== eThemeSharedRouteNames.Administration) {
      pageNavs = this.routesProcessor.GetPageNavs(
        this.routesProcessor.RouterState,
        navConfig
      );
      this.store.state.sidebarConfig.hasPageNav = true;
    } else {
      this.store.state.sidebarConfig.hasPageNav = false;
    }
    this.store.patch({
      pageNavs,
      sidebarConfig: this.store.state.sidebarConfig,
    });
  }

  fetchPageNavs(routerState: RouterStateSnapshot) {
    this.routesProcessor.RouterState = routerState;


    let navConfig: MSServiceNavConfig = this.routesProcessor.MergeRouteData(
      'navConfig',
      {
        ...Layout.defaultNavConfig,
        name: this.routesProcessor.CurrentRoute?.parentName ?? ""
      }
    );

    let sidebarConfig: SidebarConfig = this.routesProcessor.MergeRouteData(
      'sidebarConfig',
      Layout.defaultSidebarConfig
    );

    this.setStore({
      sidebarConfig,
    });

    this.setNavConfig(navConfig);
  }

  private listenRoutes() {
    this.routesProcessor.Category$.subscribe((categories) => {
      if (!!this.routesProcessor.RouterState) {
        this.fetchPageNavs(this.routesProcessor.RouterState);
      }

      this.store.patch({
        categories,
      });
    });
  }
}
