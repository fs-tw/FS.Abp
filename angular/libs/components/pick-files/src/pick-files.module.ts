import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { ThemeAlainSharedModule } from '@fs-tw/theme-alain/shared';
import { PickFilesComponent } from './components/pick-files.component';

const exportedDeclarations = [PickFilesComponent];

@NgModule({
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations],
  imports: [CoreModule, ThemeAlainSharedModule],
})
export class PickFilesModule {}
