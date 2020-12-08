import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactSampleRoutingModule } from './contact-sample-routing.module';
import { ContactSampleComponent } from './contact-sample.component';

@NgModule({
  declarations: [ContactSampleComponent],
  imports: [SharedModule, ContactSampleRoutingModule],
})
export class ContactSampleModule {}
