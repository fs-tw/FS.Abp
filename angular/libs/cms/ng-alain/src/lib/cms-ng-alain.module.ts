import { NgModule } from '@angular/core';

import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { CmsModule } from '@fs/cms';
import { SharedModule } from './shared/shared.module';
import { CmsNgAlainRoutingModule } from './cms-ng-alain-routing.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CmsModule,
    CmsNgAlainRoutingModule,    
   
  ]
})
export class CmsNgAlainModule { }
