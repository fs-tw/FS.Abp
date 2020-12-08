import { ElementRef, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, combineLatest, fromEvent, Observable, Subscription } from 'rxjs';
import {
  DOM_STRATEGY,
  DomInsertionService,
  InternalStore,
  StyleContentStrategy,
} from '@abp/ng.core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  startWith,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';
import { Layout } from '../models';
import { fromPromise } from 'rxjs/internal-compatibility';
import { SettingsService } from './settings.service';
import { addMenuPlacementClasses, addMenuStatusClasses, getLeptonStyle } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class LayoutStateService {
  private store = new InternalStore({} as Layout.State);
  private renderer: Renderer2;
  private containers$ = new BehaviorSubject<Array<ElementRef<HTMLElement>>>([]);
  private mouseMoveSubscription: Subscription;
  private resizeSubscription: Subscription;

  getPrimaryLogoColor(): Layout.LogoColor {
    return this.getLogoColor('--logo');
  }

  getPrimaryLogoColor$(): Observable<Layout.LogoColor> {
    return this.getLogoColor$('--logo');
  }

  getSecondaryLogoColor(): Layout.LogoColor {
    return this.getLogoColor('--logo-reverse');
  }

  getSecondaryLogoColor$(): Observable<Layout.LogoColor> {
    return this.getLogoColor$('--logo-reverse');
  }

  getMenuOnSideBar() {
    return this.store.state.mouseOnSidebar;
  }

  getMenuOnSideBar$() {
    return this.store.sliceState(state => state.mouseOnSidebar);
  }

  getIsSidebarCollapsed() {
    return this.store.state.isSidebarCollapsed;
  }

  getIsSidebarCollapsed$() {
    return this.store.sliceState(state => state.isSidebarCollapsed);
  }

  getIsMenuExpanded() {
    return this.store.state.isMenuExpanded;
  }
  getIsMenuExpanded$() {
    return this.store.sliceState(state => state.isMenuExpanded);
  }

  getIsNavbarExpanded() {
    return this.store.state.isNavbarExpanded;
  }

  getIsNavbarExpanded$() {
    return this.store.sliceState(state => state.isNavbarExpanded);
  }

  getSmallScreen() {
    return this.store.state.smallScreen;
  }

  getSmallScreen$() {
    return this.store.sliceState(state => state.smallScreen);
  }

  getMenuPlacement() {
    return this.store.state.menuPlacement;
  }

  getMenuPlacement$() {
    return this.store.sliceState(state => state.menuPlacement);
  }

  getMenuStatus() {
    return this.store.state.menuStatus;
  }

  getMenuStatus$() {
    return this.store.sliceState(state => state.menuStatus);
  }

  getThemeSettings() {
    return this.store.state.themeSettings;
  }

  getThemeSettings$() {
    return this.store.sliceState(state => state.themeSettings);
  }

  getStyle() {
    return this.store.state.style;
  }

  getStyle$() {
    return this.store.sliceState(state => state.style);
  }

  getIsMenuPlacementTop$() {
    return this.getMenuPlacement$().pipe(map(placement => placement === Layout.MenuPlacement.Top));
  }

  constructor(
    private rendererFactory: RendererFactory2,
    private domInsertionService: DomInsertionService,
    private themeSettingsService: SettingsService,
  ) {
    this.renderer = this.rendererFactory.createRenderer(document.body, null);
  }

  setIsMenuExpanded(isMenuExpanded) {
    this.store.patch({ isMenuExpanded });
  }

  setIsNavbarExpanded(isNavbarExpanded) {
    this.store.patch({ isNavbarExpanded });
  }

  onClickMenuIcon(value: boolean) {
    this.store.patch({ isSidebarCollapsed: !value });
    if (value) {
      this.setMenuStatus(Layout.MenuStatus.AlwaysOpened);
    } else {
      this.setMenuStatus(Layout.MenuStatus.OpenOnHover);
    }
  }

  setMenuPlacement(menuPlacement: Layout.MenuPlacement) {
    if (this.store.state.menuPlacement === menuPlacement) {
      return;
    }
    addMenuPlacementClasses(menuPlacement, this.renderer);
    this.store.patch({
      menuPlacement,
    });
  }

  setStyle(styleNumber: number) {
    if (this.store.state.style === styleNumber || typeof styleNumber !== 'number') {
      return;
    }
    this.loadLeptonStyle(styleNumber)
      .pipe(take(1))
      .subscribe(element => {
        const { styleElement } = this.store.state;
        this.removeLeptonStyles(styleElement);
        this.store.patch({
          style: styleNumber,
          styleElement: element,
        });
      });
  }

  setLayoutBoxed(boxedLayout: boolean) {
    if (this.store.state.boxedLayout === boxedLayout) {
      return;
    }
    if (boxedLayout) {
      this.renderer.addClass(document.body, 'lp-boxed');
    } else {
      this.renderer.removeClass(document.body, 'lp-boxed');
    }
    this.store.patch({
      boxedLayout,
    });
  }

  setMenuStatus(menuStatus: Layout.MenuStatus) {
    if (
      this.store.state.menuStatus === menuStatus &&
      this.store.state.menuPlacement !== Layout.MenuPlacement.Left
    ) {
      return;
    }
    addMenuStatusClasses(menuStatus, this.renderer);
    this.store.patch({
      menuStatus,
      isSidebarCollapsed: Boolean(menuStatus),
    });
  }

  fetchThemeSettings() {
    this.themeSettingsService.get().subscribe(themeSettings => {
      this.setStyle((themeSettings.style || 0) + 1);
      this.setMenuPlacement(themeSettings.menuPlacement || 0);
      this.setLayoutBoxed(themeSettings.boxedLayout || false);
      if ((themeSettings.menuPlacement || 0) === Layout.MenuPlacement.Left) {
        this.setMenuStatus(themeSettings.menuStatus || 0);
      }
      this.store.patch({ themeSettings });
    });
  }

  updateThemeSettings(themeSettings: Layout.ThemeSettings) {
    this.themeSettingsService
      .update(themeSettings)
      .subscribe(() => this.store.patch({ themeSettings }));
  }

  listenMouseMove(containerRefs: ElementRef<HTMLElement>[]) {
    this.containers$.next([...this.containers$.getValue(), ...containerRefs]);
    const mousemove$ = fromEvent(document, 'mousemove').pipe(
      debounceTime(50),
      filter(() => this.store.state.isSidebarCollapsed),
    );
    if (this.mouseMoveSubscription) {
      this.mouseMoveSubscription.unsubscribe();
    }
    this.mouseMoveSubscription = combineLatest([mousemove$, this.containers$])
      .pipe(
        tap(([event, containers]) => {
          const elements = containers.filter(ref => ref?.nativeElement);
          if (elements.some(ref => ref?.nativeElement.contains(event.target as any))) {
            this.store.patch({ mouseOnSidebar: true });
            if (document.body.classList.contains('lp-closed')) {
              this.renderer.addClass(document.body, 'lp-extended');
            }
          } else {
            this.store.patch({ mouseOnSidebar: false });
            this.renderer.removeClass(document.body, 'lp-extended');
          }
        }),
      )
      .subscribe();
  }

  listenResize() {
    const setSmallScreen = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          const { isMenuPlacementTop, isMenuSwitched } = this.store.state;
          if (window.innerWidth < 992) {
            this.store.patch({ smallScreen: true });

            if (isMenuPlacementTop) {
              this.setMenuPlacement(Layout.MenuPlacement.Left);
              this.store.patch({ isMenuSwitched: true });
            }
          } else {
            this.store.patch({ smallScreen: false });

            if (isMenuSwitched) {
              this.setMenuPlacement(Layout.MenuPlacement.Top);
              this.store.patch({ smallScreen: false });
            }
          }
          resolve();
        }, 0);
      });
    };

    const resize$ = fromEvent(window, 'resize').pipe(debounceTime(150));
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
    this.resizeSubscription = resize$
      .pipe(
        startWith({}),
        switchMap(() => fromPromise(setSmallScreen())),
      )
      .subscribe();
  }

  private loadLeptonStyle(type: number): Observable<HTMLStyleElement> {
    const bootstrap: HTMLLinkElement = document.querySelector('link[href*=bootstrap]');
    const domStrategy = bootstrap
      ? DOM_STRATEGY.AfterElement(bootstrap)
      : DOM_STRATEGY.AppendToHead();

    return getLeptonStyle(type).pipe(
      map(content => {
        const strategy = new StyleContentStrategy(content, domStrategy);
        return this.domInsertionService.insertContent(strategy);
      }),
    );
  }

  private removeLeptonStyles(element: HTMLStyleElement) {
    if (element) this.domInsertionService.removeContent(element);
  }

  private getLogoColor(propertyName: string): Layout.LogoColor {
    const styles = getComputedStyle(document.documentElement);
    const logo = styles.getPropertyValue(propertyName);

    return logo.indexOf('dark') > -1 ? 'dark' : 'light';
  }

  private getLogoColor$(propertyName: string): Observable<Layout.LogoColor> {
    return this.store
      .sliceState(state => state)
      .pipe(
        map(() => this.getLogoColor(propertyName)),
        distinctUntilChanged(),
      );
  }
}
