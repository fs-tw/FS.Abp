import { Injectable, Injector } from '@angular/core';
import { eCmsKitComponents } from '../enums/components';
import { Subject } from 'rxjs';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';

export class ActionItem<T> {
  method: string;
  record?: T;
}
@Injectable({
  providedIn: 'root',
})
export class ExtensionsService {
  public Actions$ = {
    [eCmsKitComponents.Pages]: new Subject<ActionItem<Volo.CmsKit.Admin.Pages.PageDto[]>>(),
  };
  public Action$ = {
    [eCmsKitComponents.Pages]: new Subject<ActionItem<Volo.CmsKit.Admin.Pages.PageDto>>(),
  };

  constructor(
  ) {
  }

  action<T>(type: eCmsKitComponents, data?: ActionItem<T>) {
    this.Actions$[type].next(data);
  }
}

@Injectable({
  providedIn: 'root',
})
export class ExtensionsService_New<T> {
  public CallBackAction:Subject<ActionItem<T>>=new Subject<ActionItem<T>>();
  public CallBackManyAction:Subject<ActionItem<T[]>>=new Subject<ActionItem<T[]>>();


  constructor(
  ) {
  }

  action<T>(type: eCmsKitComponents, data?: ActionItem<T>) {
    //this.Actions$[type].next(data);
  }
}


@Injectable({
  providedIn: 'root',
})
export class PagesExtensionsService extends ExtensionsService_New<Volo.CmsKit.Admin.Pages.PageDto> {
}
