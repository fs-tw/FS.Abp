import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'blog-post' },
  {
      path: 'blog-post',
      component: MainComponent
  }
];

// @dynamic
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogManagementRoutingModule {}
