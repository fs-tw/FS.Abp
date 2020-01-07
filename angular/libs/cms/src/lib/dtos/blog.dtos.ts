import { ABP } from '@abp/ng.core';

 export  namespace BlogDtos{
    
    export type BlogResponse = ABP.PagedResponse<BlogRequest>;

    export interface BlogPageQueryParams extends ABP.PageQueryParams {
        skipCount: number;
        maxResultCount:number;
    }

    export interface BlogRequest extends BlogInput {
        isDeleted: boolean;       
        creationTime: Date;
        creatorId: string;
    }

    export interface BlogInput{
        id:string;
        name:string;
        shortName:string;
        description:string;
    }

 

}