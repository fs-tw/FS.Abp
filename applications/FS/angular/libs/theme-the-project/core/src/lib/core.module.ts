import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { TheProjectState } from './states/theProjectMenu.state';
import {CoreModule as AbpCoreModule} from '@abp/ng.core';
import { TheProjectThemesState } from './states/theProjectThemes.state'
@NgModule({
  imports: [AbpCoreModule, 
    NgxsModule.forFeature(
      [
        TheProjectState,
        TheProjectThemesState
      ])]
})
export class CoreModule {}
