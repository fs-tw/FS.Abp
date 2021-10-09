import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShapesComponent } from './shapes/shapes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'shape', pathMatch: 'full' },
      { path: 'shape', component: ShapesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShapesRoutingModule {}
