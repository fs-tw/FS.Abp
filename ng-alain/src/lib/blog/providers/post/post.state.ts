import { Action, Selector, State, StateContext } from '@ngxs/store';
import { switchMap, tap, pluck } from 'rxjs/operators';
import { GetPostById,GetPosts,Createpost,Deletepost,Updatepost } from './post.actions';
import { Post } from './post.models';
import { PostDtos, PostService } from '@fs/cms';

@State<Post.State>({
    name:'PostState',
    defaults:{ posts:{} } as Post.State
})
export class PostState{

    @Selector()
    static getPosts({ posts }: Post.State):PostDtos.postData[] {
        return posts.items || [];
    }

    @Selector()
    static getPostsTotalCount({ posts }: Post.State): number {
        return posts.totalCount || 0;
    }



    constructor(
        private postService:PostService,
    ){}


    @Action(GetPosts)
    getBlogs({ patchState, getState }: StateContext<Post.State>, { payload }: GetPosts) {
        if(payload){
            getState().postsPageQueryParam = payload;
        }else{
            payload = getState().postsPageQueryParam;
        }

        return this.postService.getPostsData(payload).pipe(
            tap(posts=>
                patchState({
                    posts
                })
            )
        );
    }


    @Action(GetPostById)
    getEmployee({ patchState }: StateContext<Post.State>, { payload }: GetPostById) {
        return this.postService.getPostById(payload).pipe(
            tap(postData=>{
                patchState({
                    postData
                })
            })
        );
    }

    @Action(Deletepost)
    deleteBlog({ dispatch,getState }: StateContext<Post.State>, { payload }: Deletepost){
        return this.postService.deletePost(payload).pipe(
            switchMap(() => dispatch(new GetPosts(getState().postsPageQueryParam)))
        );
    }

    @Action(Createpost)
    createBlog({ getState,dispatch }: StateContext<Post.State>, { payload }: Createpost){
        return this.postService.createPost(payload).pipe(
            switchMap(() => dispatch(new GetPosts(getState().postsPageQueryParam)))
        );
    }

    @Action(Updatepost)
    updateBlog({ dispatch,getState }: StateContext<Post.State>, { payload }: Updatepost){
        return this.postService.updatePost(payload).pipe(
            switchMap(() => dispatch(new GetPosts(getState().postsPageQueryParam)))
        );
    }


}