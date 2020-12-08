import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutSampleRoutingModule } from './about-sample-routing.module';
import { AboutSampleComponent } from './about-sample.component';

@NgModule({
  declarations: [AboutSampleComponent],
  imports: [SharedModule, AboutSampleRoutingModule],
})
export class AboutSampleModule {}
