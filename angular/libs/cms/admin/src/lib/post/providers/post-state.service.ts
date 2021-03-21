import { Injectable } from '@angular/core';
import { InternalStore } from '@abp/ng.core';
import { Observable } from 'rxjs';

import { Fs, Volo } from '@fs-tw/cms/proxy';
import { ActivatedRoute } from '@angular/router';
import { PageService } from './page.service';
import { map, mergeMap, tap } from 'rxjs/operators';

export namespace Post {
  export interface State {
    Blog: Fs.Cms.Blogs.Dtos.BlogDto;
  }
}

@Injectable({
  providedIn: 'root',
})
export class PostStateService {
  private store = new InternalStore({} as Post.State);

  get Blog$(): Observable<Fs.Cms.Blogs.Dtos.BlogDto> {
    return this.store.sliceState((state) => state.Blog);
  }

  get Blog(): Fs.Cms.Blogs.Dtos.BlogDto {
    return this.store.state.Blog;
  }

  set Blog(blog: Fs.Cms.Blogs.Dtos.BlogDto) {
    this.store.patch({ Blog: blog });
  }

  constructor(
    private pageService: PageService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParamMap.subscribe((x) => {
      let blogId = x.get('blogId');
      if (blogId == null) {
        this.Blog = null;
        return;
      }
      pageService
        .getBlogById(blogId)
        .pipe(
          tap((b) => {
            this.Blog = b as any;
          })
        )
        .subscribe();
    });
  }
}
