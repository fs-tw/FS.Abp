import { ABP } from '@abp/ng.core';
import { BlogDtos } from '@fs/cms';

export namespace Blog {
    export interface State {
        blogs:BlogDtos.BlogResponse;

        blogsPageQueryParam:BlogDtos.BlogPageQueryParams;

        blogRequest:BlogDtos.BlogRequest;

        blogsInput:BlogDtos.BlogInput;
        //blogsItem:BlogDtos.BlogResponse;
    }
}