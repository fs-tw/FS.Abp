import { Injectable } from '@angular/core';
import { PostGetListDto, PostsApiService, PostWithDetailsDto } from '@fs-tw/cms/proxy';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { switchMap, tap } from 'rxjs/operators';
import { Createpost, Deletepost, GetPosts, Updatepost } from './post.actions';
import { Post } from './post.models';
@Injectable({ providedIn: 'root' })
@State<Post.State>({
    name: 'PostState',
    defaults: {
        postsPageQueryParam: {
            param: { blogCodeId: '' }
        }
    } as Post.State
})
export class PostState {



    @Selector()
    static getPosts({ posts }: Post.State): PostWithDetailsDto[] {
        return posts.items || [];
    }

    @Selector()
    static getPostsTotalCount({ posts }: Post.State): number {
        return posts.totalCount || 0;
    }

    @Selector()
    static getPostQuery({ postsPageQueryParam }: Post.State): { param: PostGetListDto, blogName: string } {
        return postsPageQueryParam;
    }




    constructor(
        private postService: PostsApiService,
    ) { }


    @Action(GetPosts)
    getPost({ patchState, getState }: StateContext<Post.State>, { payload }: GetPosts) {
        if (payload) {
            getState().postsPageQueryParam = payload;
        } else {
            payload = getState().postsPageQueryParam;
        }

        return this.postService.getList(payload.param).pipe(
            tap(posts =>
                patchState({
                    posts
                })
            )
        );
    }




    @Action(Deletepost)
    deletePost({ dispatch, getState }: StateContext<Post.State>, { payload }: Deletepost) {
        return this.postService.delete({ id: payload }).pipe(
            switchMap(() => dispatch(new GetPosts(getState().postsPageQueryParam)))
        );
    }

    @Action(Createpost)
    createPost({ getState, dispatch }: StateContext<Post.State>, { payload }: Createpost) {
        return this.postService.create(payload).pipe(
            switchMap(
                () => dispatch(new GetPosts(getState().postsPageQueryParam)))
        );
    }

    @Action(Updatepost)
    updatePost({ dispatch, getState }: StateContext<Post.State>, { id, payload }: Updatepost) {
        return this.postService.update({id}, payload).pipe(
            switchMap(() => dispatch(new GetPosts(getState().postsPageQueryParam)))
        );
    }




}