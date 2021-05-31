import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './component/main/main.component';

const routes: Routes = [
  {
    path: '',
    //canActivate: [FormManagementInitializer],
    children: [
      { path: '', component: MainComponent },
    ],
  },
];
// @dynamic
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormManagementRoutingModule {}
