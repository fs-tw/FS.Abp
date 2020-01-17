import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { NgxsModule } from '@ngxs/store';
import { NotifyService } from './services/notify/notify.service';




@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    NgAlainBasicModule,
    // NgxsModule.forFeature([AddEmployeeState, EditUnitEmployeeState])
  ],
  exports: [],
  providers: [
    NotifyService
  ]
})
export class SharedModule { }
