import { Injectable, Injector } from '@angular/core';
import { InternalStore, LocalizationPipe } from '@abp/ng.core';
import { Layout, MSProduct, MSServiceNavConfig } from '../models';
import { map } from 'rxjs/operators';
import { Router, RouterStateSnapshot } from '@angular/router';
import { RoutesProcessor } from './routes.processor';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';

@Injectable({
  providedIn: 'root',
})
export class LayoutStateService {
  private store = new InternalStore({
    routerState: null,
    isFetching: false,

    hasSidebar: true,
    hasAllNav: false,
    categories: [],

    navConfig: {
      nav: '',
      title: '系統管理',
      doc: '系統管理',
    },
    hasPageNav: true,
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

  fetchPageNavs(routerState: RouterStateSnapshot) {
    //this.store.patch({ routerState });
    this.routesProcessor.RouterState = routerState;

    let navConfig: MSServiceNavConfig = this.routesProcessor.CurrentNavConfig;
    this.store.patch({ navConfig });

    if (navConfig.name !== eThemeSharedRouteNames.Administration) {
      let pageNavs = this.routesProcessor.GetPageNavs(routerState, navConfig);
      this.store.patch({ pageNavs, hasPageNav: true });
    } else {
      this.store.patch({ pageNavs: [], hasPageNav: false });
    }
  }

  private listenRoutes() {
    this.routesProcessor.Category$.subscribe((categories) => {
      this.store.patch({
        categories,
      });
    });
  }
}
