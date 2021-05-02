import { Injectable, Injector } from '@angular/core';
import { eCmsKitComponents } from '../enums/components';
import { Subject } from 'rxjs';
import { ActionData } from '@abp/ng.theme.shared/extensions';

type CmsKitAction$ = {
  [key in eCmsKitComponents]: Subject<ActionEvent>;
};
export class ActionEvent {
  method: string;
  data?: ActionData<any>;
}
@Injectable({
  providedIn: 'root',
})
export class ExtensionsService {
  public Actions$: CmsKitAction$ = {} as any;

  constructor() {
    Object.keys(eCmsKitComponents).forEach(k=>{
      this.Actions$[eCmsKitComponents[k]] = new Subject<ActionEvent>();
    });
  }

  Action<T>(type: eCmsKitComponents, data?: ActionEvent) {
    this.Actions$[type].next(data);
  }
}
