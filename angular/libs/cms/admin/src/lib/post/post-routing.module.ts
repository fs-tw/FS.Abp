import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';

import { PostStateService } from './providers/post-state.service';

import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { DetailComponent } from './components/detail/detail.component';

@Injectable()
export class RouteConfig implements Resolve<any> {
  constructor(private postStateService: PostStateService) { }

  resolve() {
    return this.postStateService.setBlog(null);
  }
}

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    resolve: { 'RouteConfig': RouteConfig },
    children: [
      {
        path: '',
        component: MainComponent
      },
      {
        path:'detail',
        component:DetailComponent,
      },
      {
        path:'detail/:postId',
        component:DetailComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule], 
  providers:[
    RouteConfig
  ]
})
export class PostRoutingModule { }
