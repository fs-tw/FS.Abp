import { Injectable } from '@angular/core';
import { PostsApiService, BlogCreateInput, BlogUpdateInput, DefinitionsService } from '@fs-tw/cms/proxy';
@Injectable()
export class PageService {

  constructor(
    private postService: PostsApiService,
    private definitionsService: DefinitionsService,
  ) {
  }

  getPostById(id: string) {
    return this.postService.get({ id });
  }

  blogGetList() {
    return this.definitionsService.blogGetList();
  }

  createBlog(input: BlogCreateInput) {
    return this.definitionsService.blogCreateByInput(input);
  }

  updateBlog(input: BlogUpdateInput, id: string) {
    return this.definitionsService.blogUpdateByIdAndInput(id, input);
  }

  deleteBlog(id) {
    return this.definitionsService.blogDeleteById(id);
  }
}
