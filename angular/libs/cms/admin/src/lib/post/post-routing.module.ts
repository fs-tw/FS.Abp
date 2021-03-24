import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Fs } from '@fs-tw/cms/proxy';

import { PageStateService } from './providers/page-state.service';
import { PageService } from './providers/page.service';

import { MainComponent } from './components/main/main.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

@Injectable()
export class PostRouteConfig implements Resolve<any> {
  constructor(
    private pageStateService: PageStateService,
    private pageService: PageService
    ) {}

    resolve(route: ActivatedRouteSnapshot) {
      let postId: string = route.paramMap.get('postId');

      let data = {
        blogId: null,
        title: '',
        subtitle: '',
        url: '',
        content: '',
        disable: false,
        startTime: '',
        endTime: '',
        displayMode: 0,
        sequence: 0,
        attachments: [],
        images: [],
        contents: [],
      } as Fs.Cms.Posts.Dtos.PostDto;

      let action$ = postId ? 
        this.pageService.getPostById(postId) : 
        of(data);

      return action$.pipe(
        tap(x => this.pageStateService.Post = x)
      );
    }
}

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'detail',
        component: PostDetailComponent,
        resolve: { PostRouteConfig: PostRouteConfig }
      },
      {
        path: 'detail/:postId',
        component: PostDetailComponent,
        resolve: { PostRouteConfig: PostRouteConfig }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PostRouteConfig],
})
export class PostRoutingModule {

  constructor(
    private pageStateService: PageStateService,
    private pageService: PageService,
    private activatedRoute: ActivatedRoute
    ) {
      this.activatedRoute.queryParamMap
      .pipe(
        switchMap(x => {
          let blogId = x.get('blogId');
          let action$ = of(null);
          
          if (blogId)
            action$ = this.pageService.getBlogById(blogId)

          return action$.pipe(
            tap((y: Fs.Cms.Blogs.Dtos.BlogWithDetailsDto) => {
              this.pageStateService.Blog = y
            })
          )
        })
      )
      .subscribe();
    }

}
