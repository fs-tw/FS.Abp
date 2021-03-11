import { Injector, Injectable, Type } from '@angular/core';
import { Fs, Volo } from '@fs-tw/cms/proxy';

// @dynamic
@Injectable()
export class PageService {
  private blogService: Fs.Cms.Blogs.BlogsApiService;
  private postService: Fs.Cms.Posts.PostsApiService;
  private directoriesApiService: Fs.Abp.File.Directories.DirectoriesApiService;
  private fileDescriptorService: Volo.FileManagement.Files.FileDescriptorService;

  constructor(private injector: Injector) {
    this.blogService = injector.get(Fs.Cms.Blogs.BlogsApiService);
    this.postService = injector.get(Fs.Cms.Posts.PostsApiService);
    this.directoriesApiService = injector.get(
      Fs.Abp.File.Directories.DirectoriesApiService
    );
    this.fileDescriptorService = injector.get(
      Volo.FileManagement.Files.FileDescriptorService
    );
  }

  //#region  Blog
  getBlogs(input: Fs.Cms.Blogs.Dtos.BlogGetListDto) {
    return this.blogService.getListByBlogGetList(input);
  }

  getBlogById(id: string) {
    return this.blogService.getByBlogPrimaryKey({ id: id });
  }

  createBlog(input: Fs.Cms.Blogs.Dtos.BlogCreateDto) {
    return this.blogService.createByBlogCreate(input);
  }

  updateBlog(id: string, input: Fs.Cms.Blogs.Dtos.BlogUpdateDto) {
    return this.blogService.updateByBlogPrimaryKeyAndBlogUpdate(
      { id: id },
      input
    );
  }
  //#endregion

  //#region File
  findByProviderByKeyAndGroup(key: string, group?: string) {
    return this.directoriesApiService.findByProviderByKeyAndGroup(key, group);
  }

  deleteFile(id: string) {
    return this.fileDescriptorService.deleteById(id);
  }

  //#endregion

  //#region Post
  getPostsByBlogId(input: Fs.Cms.Posts.Dtos.GetPostByBlogIdInput) {
    return this.postService.getPostsByBlogIdByInput(input);
  }

  getPostById(id: string) {
    return this.postService.getByPostPrimaryKey({ id: id });
  }

  createPost(input: Fs.Cms.Posts.Dtos.PostCreateDto) {
    return this.postService.createByPostCreate(input);
  }

  updatePost(id: string, input: Fs.Cms.Posts.Dtos.PostUpdateDto) {
    return this.postService.updateByPostPrimaryKeyAndPostUpdate(
      { id: id },
      input
    );
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
