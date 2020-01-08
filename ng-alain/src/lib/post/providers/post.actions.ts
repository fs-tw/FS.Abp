import { ABP } from '@abp/ng.core';
import { PostDtos } from '@fs/cms';



export class GetPosts{
    static readonly type = '[post] Get posts';
    constructor(public payload?: PostDtos.PostPageQueryParams) {}
}


export class GetPostById{
    static readonly type = '[post] Get post by id';
    constructor(public payload?: string) {}
}


export class Deletepost {
    static readonly type = '[post] Delete post';
    constructor(public payload: string) {}
}

export class Createpost {
    static readonly type = '[post] Create post';
    constructor(public payload: PostDtos.PostInput) {}
}

export class Updatepost {
    static readonly type = '[post] Update post';
    constructor(public payload: PostDtos.PostInput) {}
}