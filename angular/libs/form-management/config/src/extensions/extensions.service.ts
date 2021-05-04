import { Injectable } from '@angular/core';
import {Fs} from '@fs-tw/form-management/proxy';
//import { eFormmanagementRouteNames } from '../enums/route-names';
import { eFormsComponents } from '../enums/components';
import { Subject } from 'rxjs';
import { ActionData } from '@abp/ng.theme.shared/extensions';

type CmsKitAction$ = {
  [key in eFormsComponents]: Subject<ActionEvent>;
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
    Object.keys(eFormsComponents).forEach(k=>{
      this.Actions$[eFormsComponents[k]] = new Subject<ActionEvent>();
    });
  }
  Action<T>(type: eFormsComponents, data?: ActionEvent) {
    this.Actions$[type].next(data);
  }
}
