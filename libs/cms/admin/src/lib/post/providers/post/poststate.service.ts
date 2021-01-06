import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { PostState } from './post.state';
import { PostsApiService, PostCreateDto, PostUpdateDto } from '@fs-tw/cms/proxy';


@Injectable({
  providedIn: 'root',
})
export class PostsStateService {
  constructor(private postsService: PostsApiService, private store: Store) { }


  create(input: PostCreateDto) {
    return this.postsService.create(input);
  }

  update(input: PostUpdateDto, id: string) {
    return this.postsService.update({ id }, input);
  }
  getPostQuery() {
    return this.store.selectSnapshot(PostState.getPostQuery);
  }

  // getPostsTotalCount() {
  //   return this.store.selectSnapshot(PostState.getPostsTotalCount);
  // }



  // getpostById(id:string){
  //   var posts= this.store.selectSnapshot(PostState.getPosts);   
  //   return posts.filter(x=>{return x.id == id})[0];
  // }


}