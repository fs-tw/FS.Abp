import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService, Rest, ABP } from '@abp/ng.core';
import { PostDtos } from '../dtos';


@Injectable({
    providedIn: 'root'
})
export class PostService{
    readonly url:string="/api/Cms/postCrud";

    constructor(
        private rest:RestService,
    ){}

    getPostsData(params={} as PostDtos.PostPageQueryParams):Observable<PostDtos.PostPage>{
        const request:Rest.Request<null>={
            method:"GET",
            url:this.url,
            params
        }
        return this.rest.request<null,PostDtos.PostPage>(request);
    }

    getPostById(id:string):Observable<PostDtos.postData>{
        const request:Rest.Request<null>={
            method:"GET",
            url:this.url+`/${id}`            
        }
        return this.rest.request<null,PostDtos.postData>(request);
    }

    createPost(body:PostDtos.PostInput):Observable<PostDtos.postData>{
        delete body.id
        const request:Rest.Request<PostDtos.PostInput>={
            method:"POST",
            url:this.url,
            body
        };
        return this.rest.request<PostDtos.PostInput,PostDtos.postData>(request); 
    }

    updatePost(body:PostDtos.PostInput):Observable<PostDtos.postData>{
        const url=this.url+`/${body.id}`;
        delete body.id;
        const request:Rest.Request<PostDtos.PostInput>={
            method:"PUT",
            url,
            body
        };
        return this.rest.request<PostDtos.PostInput,PostDtos.postData>(request);
    }

    deletePost(id:string){
        const request: Rest.Request<null> = {
            method: 'DELETE',
            url:this.url+`/${id}`,
          };
          return this.rest.request<null,null>(request);
    }
}