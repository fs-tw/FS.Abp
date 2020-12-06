import { NgModule } from '@angular/core';
import { CrmCoreModule } from '@fs/crm/core';
import { NgAlainBasicModule } from '@fs/theme.ng-alain/basic';
import { NgxsModule } from '@ngxs/store';




const COMPONENT = [
]

@NgModule({
  declarations: [...COMPONENT],
  imports: [
    //CrmCoreModule,
    NgAlainBasicModule,
    NgxsModule.forFeature([])
  ],
  exports: [
    NgAlainBasicModule,
    ...COMPONENT
  ],
  providers: []
})
export class SharedModule { }
