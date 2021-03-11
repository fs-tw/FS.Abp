import { Injectable } from '@angular/core';
import { InternalStore } from '@abp/ng.core'
import { Observable } from 'rxjs';

import { Fs } from '@fs-tw/cms/proxy';

export namespace Post
{
    export interface State
    {
        Blog: Fs.Cms.Blogs.Dtos.BlogDto;
    }
}
  

@Injectable({
    providedIn: 'root',
})
export class PostStateService {
    private store = new InternalStore({} as Post.State);

    getBlog(): Observable<Fs.Cms.Blogs.Dtos.BlogDto> {
        return this.store.sliceState(state => state.Blog);
    }

    constructor() {

    }

    setBlog(blog: Fs.Cms.Blogs.Dtos.BlogDto) {
        this.store.patch({ Blog: blog })
    }
}