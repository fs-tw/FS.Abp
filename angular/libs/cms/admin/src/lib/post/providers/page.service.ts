import { Injectable } from '@angular/core';
import { Fs } from '@fs-tw/cms/proxy';

@Injectable()
export class PageService {

  constructor(
    private blogService: Fs.Cms.Blogs.BlogsApiService,
    private postService: Fs.Cms.Posts.PostsApiService
    // private postService: PostsApiService,
    // private definitionsService: DefinitionsService,
    // private tagsApiService: TagsApiService,
  ) {
  }

  //#region  Blog
  getBlogs(input: Fs.Cms.Blogs.Dtos.BlogGetListDto) {
    return this.blogService.getListByBlogGetList(input);
  }

  getBlogById(id: string) {
    return this.blogService.getByBlogPrimaryKey({id: id});
  }

  createBlog(input: Fs.Cms.Blogs.Dtos.BlogCreateDto) {
    return this.blogService.createByBlogCreate(input);
  }

  updateBlog(id: string, input: Fs.Cms.Blogs.Dtos.BlogUpdateDto) {
    return this.blogService.updateByBlogPrimaryKeyAndBlogUpdate({id: id}, input)
  }
  //#endregion


  //#region Post
  getPostsByBlogId(input: Fs.Cms.Posts.Dtos.GetPostByBlogIdInput) {
    return this.postService.getPostsByBlogIdByInput(input);
  }

  getPostById(id: string) {
    return this.postService.getByPostPrimaryKey({id: id});
  }

  createPost(input: Fs.Cms.Posts.Dtos.PostCreateDto) {
    return this.postService.createByPostCreate(input);
  }

  updatePost(id: string, input: Fs.Cms.Posts.Dtos.PostUpdateDto) {
    return this.postService.updateByPostPrimaryKeyAndPostUpdate({id: id}, input)
  }
  //#endregion


  // getAllTags() {
  //   return this.tagsApiService.tagGroupGetList();
  // }

  // getPostById(id: string) {
  //   return this.postService.getWithTagsById(id);
  // }

  // blogGetList() {
  //   return this.definitionsService.blogGetList();
  // }

  // createBlog(input: BlogCreateInput) {
  //   return this.definitionsService.blogCreateByInput(input);
  // }

  // updateBlog(input: BlogUpdateInput, id: string) {
  //   return this.definitionsService.blogUpdateByIdAndInput(id, input);
  // }

  // deleteBlog(id) {
  //   return this.definitionsService.blogDeleteById(id);
  // }

  // createPostTagMap(postId: string, tagCodeId: string) {
  //   return this.postService.createByPostTagMapCreate({ postId, tagCodeId })
  // }

  // deletePostTagMap(id: string) {
  //   return this.postService.deleteByPostTagMapPrimaryKey({ id })
  // }
}
