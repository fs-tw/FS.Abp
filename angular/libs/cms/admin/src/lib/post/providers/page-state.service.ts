import { Injectable } from '@angular/core';
import { InternalStore } from '@abp/ng.core';
import { Observable } from 'rxjs';

import { Fs, Volo } from '@fs-tw/cms/proxy';
import { ActivatedRoute, ResolveEnd, Router } from '@angular/router';
import { PageService } from './page.service';
import { filter, map, mergeMap, tap } from 'rxjs/operators';

export namespace Post {
  export interface State {
    Blog: Fs.Cms.Blogs.Dtos.BlogDto;
  }
}

@Injectable({
  providedIn: 'root',
})
export class PageStateService {
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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    //console.log(this.activatedRoute.snapshot['_routerState'].url); 
    this.router.events
    .pipe(filter((event): event is ResolveEnd => event instanceof ResolveEnd))
    .subscribe((event) => {
      console.log(event);

    });    

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
