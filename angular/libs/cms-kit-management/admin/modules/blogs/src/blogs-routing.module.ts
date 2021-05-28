import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { BlogsInitializer } from './blogs.initializer';

const routes: Routes = [
  {
    path: '',
    canActivate: [BlogsInitializer],
    children: [
      { path: '', redirectTo: 'blog', pathMatch: 'full' },
      { path: 'blog', component: BlogsComponent },
      { path: 'blog-posts', component: BlogPostsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {}
