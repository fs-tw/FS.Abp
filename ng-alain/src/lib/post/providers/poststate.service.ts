import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { PostState } from './post.state';


@Injectable({
  providedIn: 'root',
})
export class BlogStateService{
  constructor(private store:Store) {}

  getposts(){
    return this.store.selectSnapshot(PostState.getPosts);
  }

  getPostsTotalCount() {
    return this.store.selectSnapshot(PostState.getPostsTotalCount);
  }

 

    

}