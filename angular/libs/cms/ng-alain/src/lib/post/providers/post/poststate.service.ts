import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { PostState } from './post.state';
import { GetPostById } from './post.actions';


@Injectable({
  providedIn: 'root',
})
export class PostsStateService{
  constructor(private store:Store) {}

  getposts(){
    return this.store.selectSnapshot(PostState.getPosts);
  }

  getPostsTotalCount() {
    return this.store.selectSnapshot(PostState.getPostsTotalCount);
  }

 

  getpostById(id:string){
    var posts= this.store.selectSnapshot(PostState.getPosts);   
    return posts.filter(x=>{return x.id == id})[0];
  }
    

}