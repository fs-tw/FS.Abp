import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { IndexSampleRoutingModule } from './index-sample-routing.module';
import { IndexSampleComponent } from './index-sample.component';

@NgModule({
  declarations: [IndexSampleComponent],
  imports: [SharedModule, IndexSampleRoutingModule],
})
export class IndexSampleModule {}
