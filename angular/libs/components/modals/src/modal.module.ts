import { NgModule } from '@angular/core';
import { ModalComponent } from './components/modal.component';
import { ModalTabComponent } from './components/tabs/modal-tab.component';
import { ModalInfoTabComponent } from './components/tabs/modal-info-tab/modal-info-tab.component';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { SHARED_ABP_MODULES } from './shared-abp.module';

const exportedDeclarations = [
  ModalComponent,
  ModalTabComponent,
  ModalInfoTabComponent,
];

@NgModule({
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations],
  imports: [
    ...SHARED_ZORRO_MODULES,
    ...SHARED_ABP_MODULES
  ],
})
export class ModalModule {}
