import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';

import { PageStateService } from './providers/page-state.service';

import { MainComponent } from './components/main/main.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

@Injectable()
export class RouteConfig implements Resolve<any> {
  constructor(private pageStateService: PageStateService) {}

  resolve() {
    return (this.pageStateService.Blog = null);
  }
}

const routes: Routes = [
  {
    path: '',
    resolve: { RouteConfig: RouteConfig },
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'detail',
        component: PostDetailComponent,
      },
      {
        path: 'detail/:postId',
        component: PostDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [RouteConfig],
})
export class PostRoutingModule {}
