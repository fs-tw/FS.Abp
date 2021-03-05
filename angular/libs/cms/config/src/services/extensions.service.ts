import { Injectable } from '@angular/core';
import { eCmsRouteNames } from '../enums/route-names';
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
    // [eCmsRouteNames.Blog]: new Subject<
    //   ActionItem<Fs.Appt.Core.Dtos.CustomerDto>
    // >(),
  };

  constructor() { }

  action<T>(type: eCmsRouteNames, data?: ActionItem<T>) {
    //this.Actions$[type].next(data);
  }
}
