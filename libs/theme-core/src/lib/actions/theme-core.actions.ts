import { ListByInput } from '../services/CodeSetting/list-by';
import { SettingNameAndKeyDto } from '../services/Setting/Dtos/setting-name-and-key-dto';
import { UpdateSettingsInput } from '../services/Setting/update-settings';
import { PatchCodesInputModel } from '../models/theme-core/CodeSetting/patch-codes-input-model';
import { SettingInput } from '../services/Setting/setting';
import { PatchDefinitionsInputModel } from '../models/theme-core/DefinitionSetting/patch-definitions-input-model';
import { CreateDefinitionsInputModel } from '../models/theme-core/DefinitionSetting/create-definitions-input-model';
import { CreateCodesInput } from '../services/CodeSetting/create-codes';

export class GetChildrenByNos{
    static readonly type = '[ThemeCore Api] Get Definition By Nos';
    constructor(public payload: ListByInput) {}
}

export class GetAllDefinitions{
    static readonly type = '[ThemeCore Api] Get All Definitions';
    constructor() {}
}

export class GetSettingsGroups{
    static readonly type = '[ThemeCore Api] Get Settings Groups';
    constructor() {}
}

export class PatchCodeSettingsByInputs{
    static readonly type = '[ThemeCore Api] Patch CodeSettings By Inputs';
    constructor(public payload: PatchCodesInputModel) {}
}

export class CreateCodeSettingsByInputs{
    static readonly type = '[ThemeCore Api] Create CodeSettings By Inputs';
    constructor(public payload: CreateCodesInput) {}
}

export class PatchDefinitionSettingsByInputs{
    static readonly type = '[ThemeCore Api] Patch DefinitionSettings By Inputs';
    constructor(public payload: PatchDefinitionsInputModel) {}
}

export class CreateDefinitionSettingsByInputs{
    static readonly type = '[ThemeCore Api] Create DefinitionSettings By Inputs';
    constructor(public payload: CreateDefinitionsInputModel) {}
}

export class GetSettingByNameAndKey{
    static readonly type = '[ThemeCore Api] Get Setting By Name And Key';
    constructor(public payload: SettingNameAndKeyDto) {}
}

export class GetSettingByList{
    static readonly type = '[ThemeCore Api] Get Setting By List';
    constructor(public payload: Array<SettingInput>) {}
}

export class UpdateSettingsByProviderName {
    static readonly type = '[ThemeCore Api] Update Settings By ProviderName';
    constructor(public payload: UpdateSettingsInput) {}
}