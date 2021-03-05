import { NgModule } from '@angular/core';
// import { NgAlainBasicModule } from '@fs-tw/theme-ng-alain/basic';

const COMPONENT = []

@NgModule({
  declarations: [...COMPONENT],
  imports: [
    // NgAlainBasicModule,
  ],
  exports: [
    // NgAlainBasicModule,
    ...COMPONENT
  ]
})
export class SharedModule { }
