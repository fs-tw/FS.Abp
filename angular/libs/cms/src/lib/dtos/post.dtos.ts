import { ABP } from '@abp/ng.core';
import { BlogDtos } from './blog.dtos';
 export  namespace PostDtos{
    export type PostPage=ABP.PagedItemsResponse<{}>;

    export interface PostPageQueryParams extends ABP.PageQueryParams{
        skipCount:number;
        maxResultCount:number;
    }

    export interface postData extends PostInput{
        blog:BlogDtos.BlogRequest;
        isDeleted: true;
        creationTime: Date;
        creatorId: string;
    }

    export interface PostInput{
        url: string;
        coverImage: string;
        title: string;
        content: string;
        readCount: number;
        blogId: string;
    }
 }