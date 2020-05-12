import { ABP } from '@abp/ng.core';
import { BlogDtos } from './blog.dtos';
export namespace PostDtos {
    export type PostPage = ABP.PagedResponse<postData>;

    export interface PostPageQueryParams extends ABP.PageQueryParams {
        skipCount: number;
        maxResultCount: number;
        blogCodeId: string;
        fields: string;
        value: string;
    }

    export interface postData extends PostInput {
        blog: BlogDtos.BlogRequest;
        isDeleted: true;
        creationTime: Date;
        creatorId: string;
    }

    export interface PostInput {
        id: string;
        title: string;
        subtitle: string;
        url: string;
        content: string;
        published: boolean;
        published_By: Date;
        published_At: Date;
        readCount: number;
        images: imageinput[];
        blogCodeId: string;
        displayMode: number;
    }

    export interface imageinput {
        height: number;
        isCover: boolean;
        title: string;
        url: string;
        width: number;
    }
}