import { Action, Selector, State, StateContext, createSelector } from '@ngxs/store';
import { tap, switchMap } from 'rxjs/operators';

import { CodesTreeService, CodesWithDetailsDto, } from '@fs/coding-management/core';
import { GetDefinitionByNo, CreateCoding, DeleteCoding, PatchNewsById } from './blog.action';
import { Blog } from './blog.models';


@State<Blog.State>({
    name: 'BlogState',
    defaults: { codings: {} } as Blog.State,
})
export class BlogState{

    DefinitionNo = "BlogDefinition";


    @Selector()
    static getAll(state: Blog.State) {
        return state;
    }



    static getOne(key: string) {
        const selector = createSelector([BlogState], (state: Blog.State) => {
          return state[key];
        });
    
        return selector;
      }

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

    @Action(CreateCoding)
    createCoding({ dispatch }: StateContext<Blog.State>, { payload }: CreateCoding) {
        return this.codesTreeService.createByInput(payload).pipe(
            switchMap(() => dispatch(new GetDefinitionByNo(this.DefinitionNo)))
        );                  
    }


    @Action(DeleteCoding)
    deleteCoding({ dispatch }: StateContext<Blog.State>, { id }: DeleteCoding) {
        return this.codesTreeService.deleteById(id).pipe(
            switchMap(() => dispatch(new GetDefinitionByNo(this.DefinitionNo)))
        );                  
    }


    
    @Action(PatchNewsById)
    updateCoding({ dispatch }: StateContext<Blog.State>, { newValue }: PatchNewsById) {
        return this.codesTreeService.updateByIdAndInput(newValue,newValue.id).pipe(
            switchMap(() => dispatch(new GetDefinitionByNo(this.DefinitionNo)))
        );                  
    }
}