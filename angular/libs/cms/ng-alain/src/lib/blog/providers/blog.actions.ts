import { ABP } from '@abp/ng.core';
import { BlogDtos } from '@fs/cms';

export class GetBlogs{
    static readonly type = '[blog] Get blogs';
    constructor(public payload?: BlogDtos.BlogPageQueryParams) {}
}


export class GetBlogById{
    static readonly type = '[blog] Get blog by id';
    constructor(public payload?: string) {}
}


export class DeleteBlog {
    static readonly type = '[Blog] Delete blog';
    constructor(public payload: string) {}
}

export class CreateBlog {
    static readonly type = '[Blog] Create blog';
    constructor(public payload: BlogDtos.BlogInput) {}
}

export class UpdateBlog {
    static readonly type = '[Blog] Update blog';
    constructor(public payload: BlogDtos.BlogInput) {}
}