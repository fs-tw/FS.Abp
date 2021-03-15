import { Injectable } from '@angular/core';
import { Fs } from 'libs/theme/proxy/src';
import { eFormmanagementRouteNames } from '../enums/route-names';
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
    [eFormmanagementRouteNames.Form_management]: new Subject<
      ActionItem<Fs.Theme.Banners.Dtos.BannerDto>
    >(),
  };

  constructor() { }

  action<T>(type: eFormmanagementRouteNames, data?: ActionItem<T>) {
    this.Actions$[type].next(data);
  }
}
