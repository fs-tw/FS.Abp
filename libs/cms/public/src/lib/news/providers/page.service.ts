import { Injectable } from '@angular/core';
import { BlogCreateInput, BlogUpdateInput, DefinitionsService, PostsApiService } from '@fs-tw/cms/proxy';
@Injectable()
export class PageService {

  constructor(
    private definitionService: DefinitionsService,
    private postsService: PostsApiService,
  ) { }

  blogGetList() {
    return this.definitionService.blogGetList();
  }

  createBlog(input: BlogCreateInput) {
    return this.definitionService.blogCreateByInput(input);
  }

  updateBlog(input: BlogUpdateInput, id: string) {
    return this.definitionService.blogUpdateByIdAndInput(id,input);
  }

  deleteBlog(id) {
    return this.definitionService.blogDeleteById(id);
  }
}
