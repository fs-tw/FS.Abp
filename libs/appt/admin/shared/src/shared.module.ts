import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlainThemeModule } from '@delon/theme';
import { DelonFormModule } from '@delon/form';
import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import {CoreModule} from '@abp/ng.core';

//import { NgAlainBasicModule } from '@fs-tw/theme-alain/basic';

const COMPONENT = []

@NgModule({
  declarations: [...COMPONENT],
  imports: [
    CoreModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    DelonFormModule,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
  ],
  exports: [
    //NgAlainBasicModule,
    ...COMPONENT,
    CoreModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule,
    DelonFormModule,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
  ]
})
export class SharedModule { }
