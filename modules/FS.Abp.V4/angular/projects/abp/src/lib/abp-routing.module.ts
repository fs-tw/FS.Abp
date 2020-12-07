import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbpComponent } from './components/abp.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AbpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbpRoutingModule {}
