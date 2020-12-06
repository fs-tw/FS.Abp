import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { GetCodeSettingsByCodeIdByCodeIds, GetDefinitionByNo } from '../actions/the-project.actions';
import { TheProjectMenu } from '../models/the-project.models';
import { CodesSettingDto } from '../models/codes-setting-dto';
import { CodeSettingService } from '../services/code-setting.service';
import { CodesTreeService } from '../services/codes-tree.service';
import { CodesWithDetailsDto } from '../models/codes-with-details-dto';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
})
@State<TheProjectMenu.State>({
    name: 'TheProjectMenu',
    defaults: { codings: {} } as TheProjectMenu.State,
})

export class TheProjectState {
    @Selector()
    static getSettings({ settings }: TheProjectMenu.State): Array<CodesSettingDto> {
        return settings || [];
    }

    @Selector()
    static getCodeingByNo({ codings }: TheProjectMenu.State):CodesWithDetailsDto {
        return codings;
    }
    constructor(private codeSettingService: CodeSettingService, private codesTreeService: CodesTreeService) { }

    @Action(GetCodeSettingsByCodeIdByCodeIds)
    getSettings({ patchState }: StateContext<TheProjectMenu.State>, { payload }: GetCodeSettingsByCodeIdByCodeIds) {
        return this.codeSettingService.postGetCodeSettingsByCodeIdByCodeIds(payload).pipe(
            tap(settings =>
                patchState({
                    settings
                })
            )
        );
    }

    @Action(GetDefinitionByNo)
    getCodings({ patchState }: StateContext<TheProjectMenu.State>, { payload }: GetDefinitionByNo) {
        return this.codesTreeService.getDefinitionByNo(payload).pipe(
            tap(codings =>
                patchState({
                    codings
                })
            )
        );
    }

}