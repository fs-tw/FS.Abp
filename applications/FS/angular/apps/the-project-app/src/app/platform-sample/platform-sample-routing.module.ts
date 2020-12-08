import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatformSampleComponent } from './platform-sample.component';

const routes: Routes = [{ path: '', component: PlatformSampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformSampleRoutingModule {}
