import { Injectable } from '@angular/core';
import { eCmsRouteNames } from '../enums/route-names';
import { Subject } from 'rxjs';
import { Fs } from '@fs-tw/cms/proxy';
export class ActionItem<T> {
  name: 'Edit' | 'Delete' | 'Add';
  record?: T;
}
@Injectable({
  providedIn: 'root',
})
export class ExtensionsService {
  public Actions$ = {
    [eCmsRouteNames.Blog]: new Subject<
      ActionItem<Fs.Cms.Blogs.Dtos.BlogDto>
    >(),
    [eCmsRouteNames.Post]: new Subject<
      ActionItem<Fs.Cms.Posts.Dtos.PostDto>
    >(),
    [eCmsRouteNames.Tag]: new Subject<
      ActionItem<Fs.Cms.Tags.Dtos.TagDto>
    >(),
  };

  constructor() { }

  action<T>(type: eCmsRouteNames, data?: ActionItem<T>) {
    this.Actions$[type].next(data);
  }
}
