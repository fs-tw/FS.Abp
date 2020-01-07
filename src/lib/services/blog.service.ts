import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService, Rest, ABP } from '@abp/ng.core';
import { BlogDtos } from '../dtos';


@Injectable({
    providedIn: 'root'
})
export class BlogService{

    readonly url:string="/api/Cms/blogCrud";

    constructor(
        private rest: RestService
    ){
      
    }

    getBlogsData(params = {} as BlogDtos.BlogPageQueryParams): Observable<BlogDtos.BlogResponse> {
        const request: Rest.Request<null> = {
          method: 'GET',
          url:this.url,
          params
        };
    
        return this.rest.request<null, BlogDtos.BlogResponse>(request);
      }

    getBlogById(id:string):Observable<BlogDtos.BlogRequest>{
        const request:Rest.Request<null>={
            method:"GET",
            url:this.url+`/${id}`,
        }
        return this.rest.request<null,BlogDtos.BlogRequest>(request);
    }

    createBlog(body:BlogDtos.BlogInput):Observable<BlogDtos.BlogRequest>{
        delete body.id;
        const request:Rest.Request<BlogDtos.BlogInput>={
            method:"POST",
            url:this.url,
            body
        };
        return this.rest.request<BlogDtos.BlogInput,BlogDtos.BlogRequest>(request);
    }

    udpateBlog(body:BlogDtos.BlogInput):Observable<BlogDtos.BlogRequest>{
        const url=this.url+`/${body.id}`;
        delete body.id;
        const request:Rest.Request<BlogDtos.BlogInput>={
            method:"PUT",
            url,
            body
        };
        return this.rest.request<BlogDtos.BlogInput,BlogDtos.BlogRequest>(request);
    }

    delete(id:string){
        const request: Rest.Request<null> = {
            method: 'DELETE',
            url:this.url+`/${id}`,
          };
          return this.rest.request<null,null>(request);
    }
    
}