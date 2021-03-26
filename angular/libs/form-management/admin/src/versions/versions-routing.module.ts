import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';

import { PostStateService } from './providers/post-state.service';

import {MainComponent} from './component/main/main.component';

@Injectable()
export class RouteConfig implements Resolve<any> {
  constructor(private postStateService: PostStateService) {}

  resolve() {
    return (this.postStateService.VersionDefinition = null);
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
      }
    ],
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [RouteConfig],
})
export class VersionsRoutingModule { }
