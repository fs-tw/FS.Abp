import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
  {
    path: 'blogs',
     loadChildren: () =>
     import('@fs-tw/cms-kit-management/admin/modules/blogs/blogs').then(
       (m) => m.BlogsModule)
  },
  {
    path: 'blog-management',
    loadChildren: () =>
      import('@fs-tw/cms-kit-management/admin/modules/blogs/blog-management').then(
        (m) => m.BlogManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {}
