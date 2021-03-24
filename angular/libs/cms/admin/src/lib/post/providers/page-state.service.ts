import { Injectable } from '@angular/core';
import { InternalStore } from '@abp/ng.core';
import { Observable } from 'rxjs';

import { Fs } from '@fs-tw/cms/proxy';

export namespace Post {
  export interface State {
    Blog: Fs.Cms.Blogs.Dtos.BlogDto;
    Post: Fs.Cms.Posts.Dtos.PostDto;
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

  get Post$(): Observable<Fs.Cms.Posts.Dtos.PostDto> {
    return this.store.sliceState((state) => state.Post);
  }

  get Post(): Fs.Cms.Posts.Dtos.PostDto {
    return this.store.state.Post;
  }

  set Post(post: Fs.Cms.Posts.Dtos.PostDto) {
    this.store.patch({Post: post});
  }

  constructor(
  ) {
    
  }
}
