import { Injectable } from '@angular/core';
import { Fs } from '@fs-tw/theme/proxy';
import { eThemeRouteNames } from '../enums/route-names';
import { Subject } from 'rxjs';
export class ActionItem<T> {
  name: 'Edit' | 'Delete' | 'Add';
  record?: T;
}
@Injectable({
  providedIn: 'root',
})
export class ExtensionsService {
  public Actions$ = {
    [eThemeRouteNames.Banner]: new Subject<
      ActionItem<Fs.Theme.Banners.Dtos.BannerDto>
    >(),
    [eThemeRouteNames.BannerDefinition]: new Subject<
      ActionItem<Fs.Theme.Banners.Dtos.BannerDefinitionDto>
    >(),
    [eThemeRouteNames.Route]: new Subject<
      ActionItem<Fs.Theme.Routes.Dtos.RouteDto>
    >(),
    [eThemeRouteNames.RouteDefinition]: new Subject<
      ActionItem<Fs.Theme.Routes.Dtos.RouteDefinitionDto>
    >(),
    [eThemeRouteNames.WebSiteDefinition]: new Subject<
      ActionItem<Fs.Theme.WebSites.Dtos.WebSiteDefinitionDto>
    >(),
  };

  constructor() { }

  action<T>(type: eThemeRouteNames, data?: ActionItem<T>) {
    this.Actions$[type].next(data);
  }
}
