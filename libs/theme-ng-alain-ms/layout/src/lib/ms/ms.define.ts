// #region widgets

import { MSAllNavComponent } from './_widgets/all-nav/all-nav.component';
import { MSLangsComponent } from './_widgets/langs/langs.component';
import { MSNoticeComponent } from './_widgets/notice/notice.component';
import { MSRegionComponent } from './_widgets/region/region.component';
import { MSSearchComponent } from './_widgets/search/search.component';
import { MSUserComponent } from './_widgets/user/user.component';

const MS_WIDGETS = [MSAllNavComponent, MSSearchComponent, MSLangsComponent, MSUserComponent, MSNoticeComponent, MSRegionComponent];

// #endregion

// #region entry components

export const MS_ENTRYCOMPONENTS = [];

// #endregion

// #region components

import { MSSidebarComponent } from './components/sidebar/sidebar.component';
import { MSTopbarComponent } from './components/topbar/topbar.component';
import { MSLayoutComponent } from './ms.component';

export const MS_COMPONENTS = [MSLayoutComponent, MSSidebarComponent, MSTopbarComponent, ...MS_ENTRYCOMPONENTS, ...MS_WIDGETS];

// #endregion

//move to shared
// #region shared components

// import { MSHelpComponent } from './shared/help/help.component';
// import { MSLinkToDirective } from './shared/link-to/link-to.directive';
// import { MSPageBarComponent } from './shared/page-bar/page-bar.component';
// import { MSPageNavComponent } from './shared/page-nav/page-nav.component';
// import { MSPageSingleComponent } from './shared/page-single/page-single.component';
// import { MSPanelComponent } from './shared/panel/panel.component';
// import { MSServiceLayoutComponent } from './shared/service-layout/service-layout.component';
// import { MSThemeBtnComponent } from './shared/theme-btn/theme-btn.component';

// export const MS_SHARED_COMPONENTS = [
//   MSHelpComponent,
//   MSPageNavComponent,
//   MSPageBarComponent,
//   MSPageSingleComponent,
//   MSPanelComponent,
//   MSServiceLayoutComponent,
//   MSLinkToDirective,
//   MSThemeBtnComponent,
// ];

// #endregion