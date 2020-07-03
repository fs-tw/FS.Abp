import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { NgxsModule } from '@ngxs/store';
import { NotifyService } from './services/notify/notify.service';
import { MessagesService } from './services/messages/messages.service';


@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    NgAlainBasicModule,
    // NgxsModule.forFeature([AddEmployeeState, EditUnitEmployeeState])
  ],
  exports: [
    NgAlainBasicModule
  ],
  providers: [
    NotifyService,  MessagesService  
  ]
})
export class SharedModule { }
