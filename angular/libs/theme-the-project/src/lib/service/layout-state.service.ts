import { Injectable } from '@angular/core';
import {
  StyleContentStrategy,
  DomInsertionService,
  DOM_STRATEGY,
} from '@abp/ng.core';
import { InternalStore } from '@abp/ng.core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Layout } from '../models/layout';
import { Fs } from '@fs-tw/theme-the-project/proxy';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LayoutStateService {
  private store = new InternalStore({} as Layout.State);
  ready$ = new BehaviorSubject<boolean>(false);

  getThemeSettings() {
    return this.store.state.themeSettings;
  }

  getThemeSettings$() {
    return this.store.sliceState((state) => state.themeSettings);
  }

  getSkin() {
    return this.store.state.skin;
  }

  getSkin$() {
    return this.store.sliceState((state) => state.skin);
  }

  constructor(
    private domInsertionService: DomInsertionService,
    private theProjectThemeSettingsService: Fs.Theme.TheProject.TheProjectThemeSettingsService
  ) {}

  setSkin(skin: Fs.Theme.TheProject.Settings.TheProjectSkin) {
    if (this.store.state.skin === skin) {
      return;
    }
    this.loadSkin(skin)
      .pipe(take(1))
      .subscribe((element) => {
        const { skinElement } = this.store.state;
        this.removeSkin(skinElement);
        this.store.patch({
          skin: skin,
          skinElement: element,
        });
      });
  }
  fetchThemeSettings() {
    this.theProjectThemeSettingsService.get().subscribe((themeSettings) => {
      this.setSkin(themeSettings.skin);
      this.store.patch({ themeSettings });
    });
  }
  updateThemeSettings(
    themeSettings: Fs.Theme.TheProject.UpdateTheProjectThemeSettingsDto
  ) {
    this.theProjectThemeSettingsService
      .updateByInput(themeSettings)
      .subscribe(() =>
        this.store.patch({ themeSettings: { skin: themeSettings.skin } })
      );
  }

  private loadSkin(
    skin: Fs.Theme.TheProject.Settings.TheProjectSkin
  ): Observable<HTMLStyleElement> {
    const custom: HTMLLinkElement = document.querySelector(
      'link[href*=custom]'
    );
    const domStrategy = DOM_STRATEGY.AppendToHead()
      ? DOM_STRATEGY.BeforeElement(custom)
      : DOM_STRATEGY.AppendToHead();

    return this.getSkinJs(skin).pipe(
      map((content) => {
        const strategy = new StyleContentStrategy(content, domStrategy);
        return this.domInsertionService.insertContent(strategy);
      })
    );
  }
  private getSkinJs = (
    skin: Fs.Theme.TheProject.Settings.TheProjectSkin
  ): Observable<string> => {
    let leptonJs: Promise<{ default: string }>;
    switch (skin) {
      case Fs.Theme.TheProject.Settings.TheProjectSkin.blue:
        leptonJs = import(
          /* webpackChunkName: "theme.blue" */
          /* webpackMode: "lazy" */
          '@fs-tw/theme-the-project/styles/skins/blue'
        );
        break;
      case Fs.Theme.TheProject.Settings.TheProjectSkin.brown:
        leptonJs = import(
          /* webpackChunkName: "theme.brown" */
          /* webpackMode: "lazy" */
          '@fs-tw/theme-the-project/styles/skins/brown'
        );
        break;
      case Fs.Theme.TheProject.Settings.TheProjectSkin.cool_green:
        leptonJs = import(
          /* webpackChunkName: "theme.cool_green" */
          /* webpackMode: "lazy" */
          '@fs-tw/theme-the-project/styles/skins/cool_green'
        );
        break;
      case Fs.Theme.TheProject.Settings.TheProjectSkin.dark_cyan:
        leptonJs = import(
          /* webpackChunkName: "theme.dark_cyan" */
          /* webpackMode: "lazy" */
          '@fs-tw/theme-the-project/styles/skins/dark_cyan'
        );
        break;
      case Fs.Theme.TheProject.Settings.TheProjectSkin.dark_red:
        leptonJs = import(
          /* webpackChunkName: "theme.dark_red" */
          /* webpackMode: "lazy" */
          '@fs-tw/theme-the-project/styles/skins/dark_red'
        );
        break;
      case Fs.Theme.TheProject.Settings.TheProjectSkin.gold:
        leptonJs = import(
          /* webpackChunkName: "theme.gold" */
          /* webpackMode: "lazy" */
          '@fs-tw/theme-the-project/styles/skins/gold'
        );
        break;
      case Fs.Theme.TheProject.Settings.TheProjectSkin.gray:
        leptonJs = import(
          /* webpackChunkName: "theme.gray" */
          /* webpackMode: "lazy" */
          '@fs-tw/theme-the-project/styles/skins/gray'
        );
        break;
      case Fs.Theme.TheProject.Settings.TheProjectSkin.green:
        leptonJs = import(
          /* webpackChunkName: "theme.green" */
          /* webpackMode: "lazy" */
          '@fs-tw/theme-the-project/styles/skins/green'
        );
        break;
      case Fs.Theme.TheProject.Settings.TheProjectSkin.light_blue:
        leptonJs = import(
          /* webpackChunkName: "theme.light_blue" */
          /* webpackMode: "lazy" */
          '@fs-tw/theme-the-project/styles/skins/light_blue'
        );
        break;
      case Fs.Theme.TheProject.Settings.TheProjectSkin.orange:
        leptonJs = import(
          /* webpackChunkName: "theme.orange" */
          /* webpackMode: "lazy" */
          '@fs-tw/theme-the-project/styles/skins/orange'
        );
        break;
      case Fs.Theme.TheProject.Settings.TheProjectSkin.pink:
        leptonJs = import(
          /* webpackChunkName: "theme.pink" */
          /* webpackMode: "lazy" */
          '@fs-tw/theme-the-project/styles/skins/pink'
        );
        break;
      case Fs.Theme.TheProject.Settings.TheProjectSkin.purple:
        leptonJs = import(
          /* webpackChunkName: "theme.purple" */
          /* webpackMode: "lazy" */
          '@fs-tw/theme-the-project/styles/skins/purple'
        );
        break;
      case Fs.Theme.TheProject.Settings.TheProjectSkin.red:
        leptonJs = import(
          /* webpackChunkName: "theme.red" */
          /* webpackMode: "lazy" */
          '@fs-tw/theme-the-project/styles/skins/red'
        );
        break;
      case Fs.Theme.TheProject.Settings.TheProjectSkin.vivid_red:
        leptonJs = import(
          /* webpackChunkName: "theme.vivid_red" */
          /* webpackMode: "lazy" */
          '@fs-tw/theme-the-project/styles/skins/vivid_red'
        );
        break;
      default:
        return;
    }

    return from(leptonJs).pipe(map((m) => m.default));
  };
  private removeSkin(element: HTMLStyleElement) {
    if (element) this.domInsertionService.removeContent(element);
  }
}
