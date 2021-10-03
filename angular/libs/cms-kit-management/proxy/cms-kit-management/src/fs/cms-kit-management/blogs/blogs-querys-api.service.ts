import type { BlogDto } from './dtos/models';
import type { Query } from './querys/blogs/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogsQuerysApiService {
  apiName = 'cms-kit-management';

  query = (query: Query) =>
    this.restService.request<any, BlogDto[]>({
      method: 'POST',
      url: '/api/mediator/query?$type=FS.CmsKitManagement.Blogs.Querys.Blogs.Query',
      body: {...query,...{$type:'FS.CmsKitManagement.Blogs.Querys.Blogs.Query'}},
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
