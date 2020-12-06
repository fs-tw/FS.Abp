import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { GetTheProjectThemesDefinitionByNo, GetTheProjectThemesCodeSettingsByCodeIdByCodeIds } from '../actions';
import { TheProjectThemes } from '../models/the-project.models';
import { CodesSettingDto } from '../models/codes-setting-dto';
import { CodeSettingService } from '../services/code-setting.service';
import { CodesTreeService } from '../services/codes-tree.service';
import { CodesWithDetailsDto } from '../models/codes-with-details-dto';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
})
@State<TheProjectThemes.State>({
    name: 'TheProjectThemes',
    defaults: { codings: {} } as TheProjectThemes.State,
})

export class TheProjectThemesState {
    @Selector()
    static getProjectThemesSettings({ settings }: TheProjectThemes.State): Array<CodesSettingDto> {
        return settings || [];
    }

    @Selector()
    static getProjectThemesCodeingByNo({ codings }: TheProjectThemes.State):CodesWithDetailsDto {
        return codings;
    }
    constructor(private codeSettingService: CodeSettingService, private codesTreeService: CodesTreeService) { }

    @Action(GetTheProjectThemesCodeSettingsByCodeIdByCodeIds)
    getSettings({ patchState }: StateContext<TheProjectThemes.State>, { payload }: GetTheProjectThemesCodeSettingsByCodeIdByCodeIds) {
        return this.codeSettingService.postGetCodeSettingsByCodeIdByCodeIds(payload).pipe(
            tap(settings =>
                patchState({
                    settings
                })
            )
        );
    }

    @Action(GetTheProjectThemesDefinitionByNo)
    getCodings({ patchState }: StateContext<TheProjectThemes.State>, { payload }: GetTheProjectThemesDefinitionByNo) {
        return this.codesTreeService.getDefinitionByNo(payload).pipe(
            tap(codings =>
                patchState({
                    codings
                })
            )
        );
    }

}