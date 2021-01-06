import { Action, Selector, State, StateContext, createSelector } from '@ngxs/store';


import { DefinitionsService, ThemeDto } from '@fs-tw/theme-core/proxy';
import { Injectable } from '@angular/core';
import { GetTheme, GetDefaultThemeNo, SetDefaultThemeNo } from '../actions/theme.action';
import { Theme } from '../models/theme'
import { tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
@State<Theme.State>({
    name: 'theme_State',
    defaults: {
        data: {}
    } as Theme.State,
})
export class ThemeState {


    @Selector()
    static getTheme({ data }: Theme.State): ThemeDto {
        return data;
    }

    @Selector()
    static getDefaultThemeNo({ defaultNo }: Theme.State): string {
        return defaultNo;
    }

    constructor(
        private definitionsService: DefinitionsService
    ) { }



    @Action(GetTheme)
    get({ patchState }: StateContext<Theme.State>, { no }: GetTheme) {
        return this.definitionsService.getThemeByThemeNo(no).pipe(
            tap(data =>
                patchState({
                    data
                })
            )
        );
    }

    @Action(GetDefaultThemeNo)
    getDefaultThemeNo({ getState }: StateContext<Theme.State>, { no }: GetTheme) {
        return getState().defaultNo;
    }


    @Action(SetDefaultThemeNo)
    setDefaultThemeNo({ patchState }: StateContext<Theme.State>, { no }: GetTheme) {
        return patchState({
            defaultNo: no
        })
    }

}