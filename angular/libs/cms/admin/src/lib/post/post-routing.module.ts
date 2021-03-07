import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { DetailComponent } from './components/detail/detail.component';
import { Store } from '@ngxs/store';
// import { GetDefinitionByNo } from './providers/blog/blog.action';

@Injectable()
export class RouteConfig implements Resolve<any> {
  constructor(private store: Store) {}
  resolve() {        
    return null;
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
        resolve: { "RouteConfig": RouteConfig },     
      },
      {
        path:'detail',
        component:DetailComponent,        
        resolve: { "RouteConfig": RouteConfig },     
      },
      {
        path:'detail/:id',
        component:DetailComponent,           
        resolve: { "RouteConfig": RouteConfig },     
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
