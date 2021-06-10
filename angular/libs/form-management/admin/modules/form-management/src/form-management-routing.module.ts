import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { ViewFormComponent } from './component/view-form/view-form.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, //canActivate: [FormManagementInitializer],
  },
  {
    path: 'view-form/:id', component: ViewFormComponent, //canActivate: [FormManagementInitializer],
  },
];
// @dynamic
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormManagementRoutingModule {}
