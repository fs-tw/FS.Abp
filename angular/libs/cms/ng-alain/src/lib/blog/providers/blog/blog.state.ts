import { Action, Selector, State, StateContext } from '@ngxs/store';
import { switchMap, tap, pluck } from 'rxjs/operators';
import { GetBlogs, GetBlogById,DeleteBlog,UpdateBlog,CreateBlog } from './blog.actions';
import { Blog, } from './blog.models';
import { BlogDtos, BlogService } from '@fs/cms';
import { dispatch } from 'rxjs/internal/observable/pairs';

@State<Blog.State>({
    name:'BlogState',
    defaults:{ blogs:{} } as Blog.State
})
export class BlogState{
   

    @Selector()
    static getBlogs({ blogs }: Blog.State):BlogDtos.BlogRequest[] {
        return blogs.items || [];
    }

    @Selector()
    static getBlogsTotalCount({ blogs }: Blog.State): number {
        return blogs.totalCount || 0;
    }

    constructor(
        private blogService:BlogService
    ){}

    @Action(GetBlogs)
    getBlogs({ patchState, getState }: StateContext<Blog.State>, { payload }: GetBlogs) {
        if(payload){
            getState().blogsPageQueryParam = payload;
        }else{
            payload = getState().blogsPageQueryParam;
        }

        return this.blogService.getBlogsData(payload).pipe(
            tap(blogs=>
                patchState({
                    blogs
                })
            )
        );
    }


    @Action(GetBlogById)
    getEmployee({ patchState }: StateContext<Blog.State>, { payload }: GetBlogById) {
        return this.blogService.getBlogById(payload).pipe(
            tap(blogRequest=>{
                patchState({
                    blogRequest
                })
            })
        );
    }

    @Action(DeleteBlog)
    deleteBlog({ dispatch,getState }: StateContext<Blog.State>, { payload }: DeleteBlog){
        return this.blogService.delete(payload).pipe(
            switchMap(() => dispatch(new GetBlogs(getState().blogsPageQueryParam)))
        );
    }

    @Action(CreateBlog)
    createBlog({ getState,dispatch }: StateContext<Blog.State>, { payload }: CreateBlog){
        return this.blogService.createBlog(payload).pipe(
            switchMap(() => dispatch(new GetBlogs(getState().blogsPageQueryParam)))
        );
    }

    @Action(UpdateBlog)
    updateBlog({ dispatch,getState }: StateContext<Blog.State>, { payload }: UpdateBlog){
        return this.blogService.udpateBlog(payload).pipe(
            switchMap(() => dispatch(new GetBlogs(getState().blogsPageQueryParam)))
        );
    }
}