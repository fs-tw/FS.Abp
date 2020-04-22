import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { CodesTreeService, CodesWithDetailsDto } from '@fs/coding-management/core';
import { GetDefinitionByNo } from './blog.action';
import { Blog } from './blog.models';


@State<Blog.State>({
    name: 'BlogState',
    defaults: { codings: {} } as Blog.State,
})
export class BlogState{


    @Selector()
    static getCodeingByNo({ codings }: Blog.State):CodesWithDetailsDto {
        return codings;
    }

    constructor(
        private codesTreeService:CodesTreeService,
        
    ){}

    @Action(GetDefinitionByNo)
    getCodings({ patchState }: StateContext<Blog.State>, { payload }: GetDefinitionByNo) {
        return this.codesTreeService.getDefinitionByNo(payload).pipe(
            tap(codings =>
                patchState({
                    codings
                })
            )
        );
    }
}