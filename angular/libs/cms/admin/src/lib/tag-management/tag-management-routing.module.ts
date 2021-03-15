import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TagDetailComponent } from './components/tag-detail/tag-detail.component';
import { PageService } from './providers/page.service';

@Injectable()
export class RouteConfig implements Resolve<any> {
  constructor(private pageService: PageService) { }

  resolve() {
    this.pageService.getTageListFromApi();
  }
}

@Injectable()
export class DetailRouteConfig implements Resolve<any> {
  constructor(private pageService: PageService) { }

  resolve(route: ActivatedRouteSnapshot) {
    let tagId = route.params.tagId;
    if (tagId) this.pageService.getTagOneFromApi(tagId);
  }
}


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MainComponent,
        resolve: { RouteConfig: RouteConfig },
      },
      {
        path: ':tagId',
        component: TagDetailComponent,
        resolve: { DetailRouteConfig: DetailRouteConfig }
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    RouteConfig,
    DetailRouteConfig
  ]
})
export class TagManagementRoutingModule { }
