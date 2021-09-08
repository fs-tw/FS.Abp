import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodingComponent } from './components/coding/coding.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'coding', pathMatch: 'full' },
      { path: 'coding', component: CodingComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodesRoutingModule { }
