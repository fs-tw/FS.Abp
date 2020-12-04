import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, OnDestroy } from '@angular/core';
import { Layout, SettingsService, _HttpClient } from '@delon/theme';
// import { environment } from '@env/environment';
import { BehaviorSubject } from 'rxjs';
import { MSLayout } from './ms.interfaces';

/**
 * 用于维护布局数据
 */
@Injectable({ providedIn: 'root' })
export class BrandService implements OnDestroy {
  private notify$ = new BehaviorSubject<string>(null);
  private _isMobile = false;

  /** 顶部高度，若变更需要同时重新指定 LESS 变量：`@alain-ms-topbar-height` 值 */
  readonly topHeight = 50;

  // #region fields

  get notify() {
    return this.notify$.asObservable();
  }

  get isMobile() {
    return this._isMobile;
  }

  get layout(): MSLayout {
    return this.settings.layout as MSLayout;
  }

  hideNav = false;

  // #endregion

  constructor(bm: BreakpointObserver, private settings: SettingsService) {
    // fix layout data
    settings.setLayout({
      // ...(environment as any).ay,
      ...settings.layout,
      hasTopbar: true,
      hasSidebar: false,
      hasFixed: false,
    });

    const mobileMedia = 'only screen and (max-width: 767.99px)';
    bm.observe(mobileMedia).subscribe((state) => this.checkMedia(state.matches));
    this.checkMedia(bm.isMatched(mobileMedia));
  }

  private checkMedia(value: boolean) {
    this._isMobile = value;
    this.layout.collapsed = this._isMobile;
    this.notify$.next('mobile');
  }

  setLayout(name: string | Layout, value?: any) {
    this.settings.setLayout(name, value);
    this.notify$.next('layout');
  }

  setTopbar(status: boolean): void {
    this.setLayout('hasTopbar', status);
  }

  setSidebar(status: boolean): void {
    this.setLayout('hasSidebar', status);
  }

  setFixed(status: boolean): void {
    this.setLayout('hasFixed', status);
  }

  triggerNotify(type = 'custom') {
    this.notify$.next(type);
  }

  ngOnDestroy() {
    this.notify$.unsubscribe();
  }
}
