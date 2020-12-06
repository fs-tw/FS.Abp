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
import { CountdownModule } from 'ngx-countdown';

const THIRDMODULES = [CountdownModule];
// #endregion

// #region your componets & directives
//todo from ms dir
//import { MS_SHARED_COMPONENTS } from '../layout/ms';
import { MSHelpComponent } from './components/help/help.component';
import { MSLinkToDirective } from './components/link-to/link-to.directive';
import { MSPageBarComponent } from './components/page-bar/page-bar.component';
import { MSPageNavComponent } from './components/page-nav/page-nav.component';
import { MSPageSingleComponent } from './components/page-single/page-single.component';
import { MSPanelComponent } from './components/panel/panel.component';
import { MSServiceLayoutComponent } from './components/service-layout/service-layout.component';
import { MSThemeBtnComponent } from './components/theme-btn/theme-btn.component';

export const MS_SHARED_COMPONENTS = [
  MSHelpComponent,
  MSPageNavComponent,
  MSPageBarComponent,
  MSPageSingleComponent,
  MSPanelComponent,
  MSServiceLayoutComponent,
  MSLinkToDirective,
  MSThemeBtnComponent,
];


import { AddressComponent } from './components/address/address.component';
import { CaptchaBtnComponent } from './components/captcha-btn/captcha-btn.component';
import { CustomColumnModalComponent } from './components/custom-column/custom-column-modal.component';
import { CustomColumnComponent } from './components/custom-column/custom-column.component';
import { DelayDirective } from './components/delay/delay.directive';
import { EditorComponent } from './components/editor/editor.component';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { FooterCopyrightComponent } from './components/footer-copyright/footer-copyright.component';
import { FooterGlobalComponent } from './components/footer-global/footer-global.component';
import { ImgComponent } from './components/img/img.component';
import { ImgDirective } from './components/img/img.directive';
import { LangsComponent } from './components/langs/langs.component';
import { MasonryDirective } from './components/masonry/masonry.directive';
import { MouseFocusDirective } from './components/mouse-focus/mouse-focus.directive';
import { ScrollbarDirective } from './components/scrollbar/scrollbar.directive';
import { StatusLabelComponent } from './components/status-label/status-label.component';

const COMPONENTS_ENTRY = [
  LangsComponent,
  ImgComponent,
  FileManagerComponent,
  StatusLabelComponent,
  CaptchaBtnComponent,
  FooterCopyrightComponent,
  FooterGlobalComponent,
  AddressComponent,
  CustomColumnComponent,
  CustomColumnModalComponent,
];
const COMPONENTS = [EditorComponent, ...COMPONENTS_ENTRY, ...MS_SHARED_COMPONENTS];
const DIRECTIVES = [ImgDirective, DelayDirective, MasonryDirective, ScrollbarDirective, MouseFocusDirective];
// #endregion

@NgModule({
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
    // third libs
    ...THIRDMODULES,
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  entryComponents: COMPONENTS_ENTRY,
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
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule { }
