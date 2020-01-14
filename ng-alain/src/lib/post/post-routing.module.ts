import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MainComponent,
        data: { requiredPolicy: 'AbpIdentity.Roles' },
      },
      {
        path:'detail/:id',
        component:DetailComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
