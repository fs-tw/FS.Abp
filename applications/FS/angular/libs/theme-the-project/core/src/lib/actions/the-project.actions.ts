import { CodesWithDetailsDto } from '../models/codes-with-details-dto';
import { ABP } from '@abp/ng.core';

export class GetDefinitionByNo{
    static readonly type = '[Codings] Get DefinitionByNo';
    constructor(public payload?: string) {}
}

export class GetCodeSettingsByCodeIdByCodeIds{
    static readonly type = '[Settings] Get CodeSettingsByCodeIdByCodeIds';
    constructor(public payload?: any) {}
}

export class GetTheProjectThemesDefinitionByNo{
    static readonly type = '[Codings] Get TheProjectThemesDefinitionByNo';
    constructor(public payload?: string) {}
}

export class GetTheProjectThemesCodeSettingsByCodeIdByCodeIds{
    static readonly type = '[Settings] Get TheProjectThemesCodeSettingsByCodeIdByCodeIds';
    constructor(public payload?: any) {}
}