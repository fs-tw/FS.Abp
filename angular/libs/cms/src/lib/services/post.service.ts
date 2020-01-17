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

    getPostsData(){
    
    }
}