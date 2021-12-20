import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { FsVerticalAlignmentComponent } from './components/fs-vertical-alignment.component';

const exportedDeclarations = [FsVerticalAlignmentComponent];

@NgModule({
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations],
  imports: [CoreModule],
})
export class FsVerticalAlignmentModule {}
