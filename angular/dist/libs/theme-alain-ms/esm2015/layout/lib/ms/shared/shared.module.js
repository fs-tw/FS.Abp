import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlainThemeModule } from '@delon/theme';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { MSHelpComponent } from './help/help.component';
import { MSLinkToDirective } from './link-to/link-to.directive';
import { MSPageBarComponent } from './page-bar/page-bar.component';
import { MSPageNavComponent } from './page-nav/page-nav.component';
import { MSPageSingleComponent } from './page-single/page-single.component';
import { MSPanelComponent } from './panel/panel.component';
import { MSServiceLayoutComponent } from './service-layout/service-layout.component';
import { LocalizationModule } from '@abp/ng.core';
const COMPONENTS = [
    MSHelpComponent,
    MSLinkToDirective,
    MSPageBarComponent,
    MSPageNavComponent,
    MSPageSingleComponent,
    MSPanelComponent,
    MSServiceLayoutComponent,
];
export class MSSharedModule {
}
MSSharedModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule, FormsModule, AlainThemeModule.forChild(), NzPopoverModule, NzIconModule, NzOutletModule, LocalizationModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            },] }
];
//# sourceMappingURL=shared.module.js.map