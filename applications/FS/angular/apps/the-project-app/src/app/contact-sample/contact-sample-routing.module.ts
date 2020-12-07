import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactSampleComponent } from './contact-sample.component';

const routes: Routes = [{ path: '', component: ContactSampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactSampleRoutingModule {}
