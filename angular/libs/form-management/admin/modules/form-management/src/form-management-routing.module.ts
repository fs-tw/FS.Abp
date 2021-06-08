import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { PreviewComponent } from './component/preview/preview.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, //canActivate: [FormManagementInitializer],
  },
  {
    path: 'preview/:id', component: PreviewComponent, //canActivate: [FormManagementInitializer],
  },
];
// @dynamic
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormManagementRoutingModule {}
