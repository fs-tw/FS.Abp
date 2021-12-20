import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'blog-management',
    loadChildren: () =>
      import('@fs-tw/cms-kit-management/admin/modules/blogs/blog-management').then(
        (m) => m.BlogManagementModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {}
