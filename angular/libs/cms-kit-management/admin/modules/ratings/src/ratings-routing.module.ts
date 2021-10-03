import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingsComponent } from './components/ratings/ratings.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'rating', pathMatch: 'full' },
      { path: 'rating', component: RatingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatingsRoutingModule {}
