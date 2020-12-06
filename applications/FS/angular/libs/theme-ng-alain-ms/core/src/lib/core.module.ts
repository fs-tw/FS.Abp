import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { LayoutState } from './states/layout.state';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports:[
    NgxsModule.forFeature([LayoutState])
  ],
  providers: [
    
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
