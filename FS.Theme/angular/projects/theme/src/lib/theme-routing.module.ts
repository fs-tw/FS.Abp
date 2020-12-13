import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeComponent } from './components/theme.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ThemeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
