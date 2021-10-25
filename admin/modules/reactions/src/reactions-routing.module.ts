import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactionsComponent } from './components/reactions/reactions.component';

const routes: Routes = [
  { path: '', component: ReactionsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactionsRoutingModule {}
