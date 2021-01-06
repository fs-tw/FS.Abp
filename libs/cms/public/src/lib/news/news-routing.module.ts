import { Injectable, NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterModule,
  RouterStateSnapshot,
  Routes
} from '@angular/router';
import { Store } from '@ngxs/store';
import { forkJoin } from 'rxjs';
import { DetailComponent } from './components/detail/detail.component';
import { MainComponent } from './components/main/main.component';
import { NewsStateService } from './providers/news-state.service';
import {  GetPostById, GetPostsData } from './providers/news.action';



@Injectable()
export class DetailRouteConfig implements Resolve<any> {
  constructor(private store: Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let postId = route.paramMap.get('id');
    let getPostById = this.store.dispatch(new GetPostById(postId));
    return getPostById;
  }
}

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    // resolve: { MainRouteConfig: MainRouteConfig }
  },
  {
    path: ':id',
    component: DetailComponent,
    resolve: { DetailRouteConfig: DetailRouteConfig }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DetailRouteConfig]
})
export class NewsRoutingModule {}
