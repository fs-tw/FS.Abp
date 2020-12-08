import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexSampleComponent } from './index-sample.component';

const routes: Routes = [{ path: '', component: IndexSampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexSampleRoutingModule {}
