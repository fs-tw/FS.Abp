import { CodingManagementDtos } from '../../../shared/coding-management.dtos';

export class CreateCoding{
    static readonly type = '[BlogCodings] Create Coding';
    constructor(public payload?: CodingManagementDtos.coding) {}
}


export class DeleteCoding{
    static readonly type = '[BlogCodings] Delete Coding';
    constructor(public id: string) {}
}



export class GetDefinitionByNo{
    static readonly type = '[BlogCodings] Get DefinitionByNo';
    constructor(public payload?: string) {}
}


export class PatchNewsById {
    static readonly type = '[BlogCodings] Patch News By Id';
    constructor(public newValue:  CodingManagementDtos.coding) {}
  }