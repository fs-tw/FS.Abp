import { ABP } from '@abp/ng.core';

export namespace CodingManagementDtos {

    export type codingsResponse = ABP.PagedResponse<coding>;

    export interface codingsPageQueryParams extends ABP.PageQueryParams {}

    export interface coding {
        id: string,
        no: string,
        displayName: string,
        description: string,
        definitionId: string,
        code: string,
        parentId: string,
        enable: boolean
    }
}