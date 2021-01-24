import { ElementRef, Injectable } from '@angular/core';
import { StyleContentStrategy, DomInsertionService, DOM_STRATEGY } from '@abp/ng.core'
import { InternalStore } from '@abp/ng.core'
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Layout } from '../models/layout'
//import { TheProjectThemeSettingsService, Settings, UpdateTheProjectThemeSettingsDto } from '@fs/theme.the-project/proxy'
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LayoutStateService {
  private store = new InternalStore({} as Layout.State);
  AppComponent:ElementRef;

  getThemeSettings() {
    return this.store.state.themeSettings;
  }

  getThemeSettings$() {
    return this.store.sliceState(state => state.themeSettings);
  }

  // getSkin() {
  //   return this.store.state.skin;
  // }

  // getSkin$() {
  //   return this.store.sliceState(state => state.skin);
  // }

  constructor(
    private domInsertionService: DomInsertionService,
    //private theProjectThemeSettingsService: TheProjectThemeSettingsService,
  ) {
  }
  // setSkin(skin: Settings.TheProjectSkin) {
  //   if (this.store.state.skin === skin) {
  //     return;
  //   }
  //   this.loadSkin(skin)
  //     .pipe(take(1))
  //     .subscribe(element => {
  //       const { skinElement } = this.store.state;
  //       this.removeSkin(skinElement);
  //       this.store.patch({
  //         skin: skin,
  //         skinElement: element,
  //       });
  //     });
  // }
  //fetchThemeSettings() {
    // this.theProjectThemeSettingsService.get().subscribe(themeSettings => {
    //   this.setSkin(themeSettings.skin);
    //   this.store.patch({ themeSettings });
    // });
  //}
  // updateThemeSettings(themeSettings: UpdateTheProjectThemeSettingsDto) {
  //   this.theProjectThemeSettingsService
  //     .updateByInput(themeSettings)
  //     .subscribe(() => this.store.patch({ themeSettings: { skin: themeSettings.skin } }));
  // }

  // private loadSkin(skin: Settings.TheProjectSkin): Observable<HTMLStyleElement> {
  //   const custom: HTMLLinkElement = document.querySelector('link[href*=custom]');
  //   const domStrategy = DOM_STRATEGY.AppendToHead()
  //     ? DOM_STRATEGY.BeforeElement(custom)
  //     : DOM_STRATEGY.AppendToHead();

  //   return this.getSkinJs(skin).pipe(
  //     map(content => {
  //       const strategy = new StyleContentStrategy(content, domStrategy);
  //       return this.domInsertionService.insertContent(strategy);
  //     }),
  //   );
  // }
  // private getSkinJs = (skin: Settings.TheProjectSkin): Observable<string> => {
  //   let leptonJs: Promise<{ default: string }>;
  //   switch (skin) {
  //     case Settings.TheProjectSkin.blue:
  //       leptonJs = import(
  //         /* webpackChunkName: "theme.blue" */
  //         /* webpackMode: "lazy" */
  //         '@fs/theme.the-project/dist/assets/template/css/skins/blue'
  //       );
  //       break;
  //     case Settings.TheProjectSkin.brown:
  //       leptonJs = import(
  //         /* webpackChunkName: "theme.brown" */
  //         /* webpackMode: "lazy" */
  //         '@fs/theme.the-project/dist/assets/template/css/skins/brown'
  //       );
  //       break;
  //     case Settings.TheProjectSkin.cool_green:
  //       leptonJs = import(
  //         /* webpackChunkName: "theme.cool_green" */
  //         /* webpackMode: "lazy" */
  //         '@fs/theme.the-project/dist/assets/template/css/skins/cool_green'
  //       );
  //       break;
  //     case Settings.TheProjectSkin.dark_cyan:
  //       leptonJs = import(
  //         /* webpackChunkName: "theme.dark_cyan" */
  //         /* webpackMode: "lazy" */
  //         '@fs/theme.the-project/dist/assets/template/css/skins/dark_cyan'
  //       );
  //       break;
  //     case Settings.TheProjectSkin.dark_red:
  //       leptonJs = import(
  //         /* webpackChunkName: "theme.dark_red" */
  //         /* webpackMode: "lazy" */
  //         '@fs/theme.the-project/dist/assets/template/css/skins/dark_red'
  //       );
  //       break;
  //     case Settings.TheProjectSkin.gold:
  //       leptonJs = import(
  //         /* webpackChunkName: "theme.gold" */
  //         /* webpackMode: "lazy" */
  //         '@fs/theme.the-project/dist/assets/template/css/skins/gold'
  //       );
  //       break;
  //     case Settings.TheProjectSkin.gray:
  //       leptonJs = import(
  //         /* webpackChunkName: "theme.gray" */
  //         /* webpackMode: "lazy" */
  //         '@fs/theme.the-project/dist/assets/template/css/skins/gray'
  //       );
  //       break;
  //     case Settings.TheProjectSkin.green:
  //       leptonJs = import(
  //         /* webpackChunkName: "theme.green" */
  //         /* webpackMode: "lazy" */
  //         '@fs/theme.the-project/dist/assets/template/css/skins/green'
  //       );
  //       break;
  //     case Settings.TheProjectSkin.light_blue:
  //       leptonJs = import(
  //         /* webpackChunkName: "theme.light_blue" */
  //         /* webpackMode: "lazy" */
  //         '@fs/theme.the-project/dist/assets/template/css/skins/light_blue'
  //       );
  //       break;
  //     case Settings.TheProjectSkin.orange:
  //       leptonJs = import(
  //         /* webpackChunkName: "theme.orange" */
  //         /* webpackMode: "lazy" */
  //         '@fs/theme.the-project/dist/assets/template/css/skins/orange'
  //       );
  //       break;
  //     case Settings.TheProjectSkin.pink:
  //       leptonJs = import(
  //         /* webpackChunkName: "theme.pink" */
  //         /* webpackMode: "lazy" */
  //         '@fs/theme.the-project/dist/assets/template/css/skins/pink'
  //       );
  //       break;
  //     case Settings.TheProjectSkin.purple:
  //       leptonJs = import(
  //         /* webpackChunkName: "theme.purple" */
  //         /* webpackMode: "lazy" */
  //         '@fs/theme.the-project/dist/assets/template/css/skins/purple'
  //       );
  //       break;
  //     case Settings.TheProjectSkin.red:
  //       leptonJs = import(
  //         /* webpackChunkName: "theme.red" */
  //         /* webpackMode: "lazy" */
  //         '@fs/theme.the-project/dist/assets/template/css/skins/red'
  //       );
  //       break;
  //     case Settings.TheProjectSkin.vivid_red:
  //       leptonJs = import(
  //         /* webpackChunkName: "theme.vivid_red" */
  //         /* webpackMode: "lazy" */
  //         '@fs/theme.the-project/dist/assets/template/css/skins/vivid_red'
  //       );
  //       break;
  //     default:
  //       return;
  //   }

  //   return from(leptonJs).pipe(map(m => m.default));
  // };
  // private removeSkin(element: HTMLStyleElement) {
  //   if (element) this.domInsertionService.removeContent(element);
  // }
}