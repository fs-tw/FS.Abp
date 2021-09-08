import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerialNumberComponent } from './components/serial-number/serial-number.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'serial-number', pathMatch: 'full' },
      { path: 'serial-number', component: SerialNumberComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SerialNumbersRoutingModule { }
