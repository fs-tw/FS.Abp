import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { FsNgAlainTreeComponent } from './components/fs-ng-alain-tree.component';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

const exportedDeclarations = [FsNgAlainTreeComponent];

@NgModule({
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations],
  imports: [
    CoreModule,
    ...SHARED_ZORRO_MODULES
  ],
})
export class FsNgAlainTreeModule {}
