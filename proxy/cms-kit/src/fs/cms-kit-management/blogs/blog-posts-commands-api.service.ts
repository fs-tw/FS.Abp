import type { PatchCommand } from './commands/blog-posts/models';
import type { BlogPostDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogPostsCommandsApiService {
  apiName = 'cms-kit-management';

  patchCommand = (command: PatchCommand) =>
    this.restService.request<any, BlogPostDto>({
      method: 'POST',
      url: '/api/mediator/command?$type=FS.CmsKitManagement.Blogs.Commands.BlogPosts.PatchCommand',
      body: {...command,...{$type:'FS.CmsKitManagement.Blogs.Commands.BlogPosts.PatchCommand'}},
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
