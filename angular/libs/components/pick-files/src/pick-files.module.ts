import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { PickFilesComponent } from './components/pick-files.component';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

const exportedDeclarations = [PickFilesComponent];

@NgModule({
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations],
  imports: [CoreModule, ...SHARED_ZORRO_MODULES],
})
export class PickFilesModule {}
