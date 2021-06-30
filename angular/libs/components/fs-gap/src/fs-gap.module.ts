import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { FsGapComponent } from './components/fs-gap.component';

const exportedDeclarations = [FsGapComponent];

@NgModule({
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations],
  imports: [CoreModule],
})
export class FsGapModule {}
