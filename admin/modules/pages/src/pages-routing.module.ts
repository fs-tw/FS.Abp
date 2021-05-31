import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './components/pages/pages.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'page', pathMatch: 'full' },
      { path: 'page', component: PagesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
