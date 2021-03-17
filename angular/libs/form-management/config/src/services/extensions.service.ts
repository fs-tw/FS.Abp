import { Injectable } from '@angular/core';
import {Fs} from '@fs-tw/form-management/proxy';
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
    [eFormmanagementRouteNames.DocumentDefinition]: new Subject<
      ActionItem<Fs.FormManagement.Documents.Dtos.DocumentDefinitionDto>
    >(),
    [eFormmanagementRouteNames.Formal]: new Subject<
      ActionItem<Fs.FormManagement.Forms.Dtos.FormalDto>
    >(),
    [eFormmanagementRouteNames.Group]: new Subject<
      ActionItem<Fs.FormManagement.Forms.Dtos.GroupDto>
    >(),
    [eFormmanagementRouteNames.Item]: new Subject<
      ActionItem<Fs.FormManagement.Forms.Dtos.ItemDto>
    >(),
    [eFormmanagementRouteNames.Record]: new Subject<
      ActionItem<Fs.FormManagement.Records.Dtos.RecordDto>
    >(),
    [eFormmanagementRouteNames.RecordItem]: new Subject<
      ActionItem<Fs.FormManagement.Records.Dtos.RecordItemDto>
    >(),
    [eFormmanagementRouteNames.Version]: new Subject<
      ActionItem<Fs.FormManagement.Documents.Dtos.VersionDto>
    >(),
  };

  constructor() { }

  action<T>(type: eFormmanagementRouteNames, data?: ActionItem<T>) {
    this.Actions$[type].next(data);
  }
}
