import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { ThemeAlainSharedModule } from '@fs-tw/theme-alain/shared';
import { PickCoverImageComponent } from './components/pick-cover-image.component';


const exportedDeclarations = [PickCoverImageComponent];

@NgModule({
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations],
  imports: [CoreModule, ThemeAlainSharedModule],
})
export class PickCoverImageModule {}
