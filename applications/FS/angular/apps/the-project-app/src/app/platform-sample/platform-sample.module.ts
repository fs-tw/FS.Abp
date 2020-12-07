import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PlatformSampleRoutingModule } from './platform-sample-routing.module';
import { PlatformSampleComponent } from './platform-sample.component';

@NgModule({
  declarations: [PlatformSampleComponent],
  imports: [SharedModule, PlatformSampleRoutingModule],
})
export class PlatformSampleModule {}
