import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
import { AlainThemeModule } from '@delon/theme';
import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
// #region third libs
const THIRDMODULES = [];
// import { AddressModule } from './components/address';
// import { CaptchaBtnModule } from './components/captcha-btn';
// import { CustomColumnModule } from './components/custom-column';
// import { DelayModule } from './components/delay';
// import { EditorModule } from './components/editor';
// import { FileManagerModule } from './components/file-manager';
// import { FooterModule } from './components/footer';
// import { MasonryModule } from './components/masonry';
// import { MouseFocusModule } from './components/mouse-focus';
// import { ScrollbarModule } from './components/scrollbar';
// import { StatusLabelModule } from './components/status-label';
// const MODULES = [
//   MSSharedModule,
//   AddressModule,
//   DelayModule,
//   EditorModule,
//   FileManagerModule,
//   MasonryModule,
//   MouseFocusModule,
//   ScrollbarModule,
//   StatusLabelModule,
//   CaptchaBtnModule,
//   CustomColumnModule,
//   FooterModule,
// ];
// #endregion
export class SharedModule {
}
SharedModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    RouterModule,
                    ReactiveFormsModule,
                    AlainThemeModule.forChild(),
                    DelonACLModule,
                    DelonFormModule,
                    ...SHARED_DELON_MODULES,
                    ...SHARED_ZORRO_MODULES,
                    //...MODULES,
                    // third libs
                    ...THIRDMODULES,
                ],
                exports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    RouterModule,
                    AlainThemeModule,
                    DelonACLModule,
                    DelonFormModule,
                    ...SHARED_DELON_MODULES,
                    ...SHARED_ZORRO_MODULES,
                    //...MODULES,
                    // third libs
                    ...THIRDMODULES,
                ],
            },] }
];
//# sourceMappingURL=shared.module.js.map