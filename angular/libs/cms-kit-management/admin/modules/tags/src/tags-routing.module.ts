import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagsComponent } from './components/tags/tags.component';
import { TagsInitializer } from './tags.initializer';

const routes: Routes = [
  {
    path:'',
    canActivate:[TagsInitializer],
    children:[
      { path: '', redirectTo: 'tag', pathMatch: 'full' },
      { path: 'tag', component: TagsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule { }
