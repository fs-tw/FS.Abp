import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenusComponent } from './components/menus/menus.component';

const routes: Routes = [
  { path: '', component: MenusComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenusRoutingModule {}
