import { ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵnamespaceSVG, ɵɵnamespaceHTML, ɵɵtext, ɵsetClassMetadata, Component, ɵɵtemplate, ɵɵadvance, ɵɵproperty, ɵɵpureFunction0, Renderer2, ViewEncapsulation, ɵɵinject, ɵɵdefineInjectable, Injectable, ɵɵlistener, ɵɵpipe, ɵɵtextInterpolate1, ɵɵpipeBind2, ɵɵInheritDefinitionFeature, ɵɵgetInheritedFactory, ChangeDetectionStrategy, APP_INITIALIZER, Injector, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { ConfigStateService, EnvironmentService, ReplaceableTemplateDirective, InternalStore, DomInsertionService, SubscriptionService, LocalizationPipe, ReplaceableComponentsService, SettingTabsService, CoreModule } from '@abp/ng.core';
import { ActivatedRoute, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgbNavbar, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { slideFromBottom, ToasterService, ButtonComponent, ThemeSharedModule } from '@abp/ng.theme.shared';
import { FormBuilder, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, SelectControlValueAccessor, NgControlStatus, FormControlName, NgSelectOption, ɵangular_packages_forms_forms_x } from '@angular/forms';
import { ValidationGroupDirective, ValidationDirective, ValidationErrorComponent as ValidationErrorComponent$1, NgxValidateCoreModule } from '@ngx-validate/core';
import { NgForOf } from '@angular/common';
import { filter, delay } from 'rxjs/operators';

class HeaderComponent {
    constructor(titleService, activatedRoute, configStateService) {
        this.titleService = titleService;
        this.activatedRoute = activatedRoute;
        this.configStateService = configStateService;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(ɵɵdirectiveInject(Title), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(ConfigStateService)); };
HeaderComponent.ɵcmp = ɵɵdefineComponent({ type: HeaderComponent, selectors: [["fs-header"]], decls: 757, vars: 0, consts: [["id", "js-header", 1, "u-header", "u-header--static"], [1, "u-header__section", "u-header__section--light", "g-bg-white", "g-transition-0_3", "g-py-10"], [1, "js-mega-menu", "navbar", "navbar-expand-lg", "hs-menu-initialized", "hs-menu-horizontal"], [1, "container"], ["type", "button", "aria-label", "Toggle navigation", "aria-expanded", "false", "aria-controls", "navBar", "data-toggle", "collapse", "data-target", "#navBar", 1, "navbar-toggler", "navbar-toggler-right", "btn", "g-line-height-1", "g-brd-none", "g-pa-0", "g-pos-abs", "g-top-minus-3", "g-right-0"], [1, "hamburger", "hamburger--slider"], [1, "hamburger-box"], [1, "hamburger-inner"], ["href", "./index.html", 1, "navbar-brand", "d-flex"], ["width", "86px", "height", "32px", "viewBox", "0 0 86 32", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["transform", "translate(-78.000000, -19.000000)"], ["transform", "translate(78.000000, 19.000000)"], ["d", "M0,0 L19.2941176,0 L19.2941176,0 C23.7123956,-8.11624501e-16 27.2941176,3.581722 27.2941176,8 L27.2941176,27.2941176 L8,27.2941176 L8,27.2941176 C3.581722,27.2941176 5.41083001e-16,23.7123956 0,19.2941176 L0,0 Z", 1, "g-fill-primary"], ["d", "M21.036662,24.8752523 L20.5338647,22.6659916 L20.3510293,22.6659916 C19.8533083,23.4481246 19.1448284,24.0626484 18.2255681,24.5095816 C17.3063079,24.9565147 16.2575544,25.1799779 15.0792761,25.1799779 C13.0376043,25.1799779 11.5139914,24.672107 10.5083918,23.6563498 C9.50279224,22.6405927 9,21.1017437 9,19.0397567 L9,8.02392554 L12.6109986,8.02392554 L12.6109986,18.4150692 C12.6109986,19.7050808 12.8750915,20.6725749 13.4032852,21.3175807 C13.9314789,21.9625865 14.7593086,22.2850846 15.886799,22.2850846 C17.3901196,22.2850846 18.4947389,21.8356188 19.2006901,20.9366737 C19.9066413,20.0377286 20.2596117,18.5318912 20.2596117,16.4191164 L20.2596117,8.02392554 L23.855374,8.02392554 L23.855374,24.8752523 L21.036662,24.8752523 Z", 1, "g-fill-white"], ["d", "M44.4764678,24.4705882 L40.8807055,24.4705882 L40.8807055,14.1099172 C40.8807055,12.809748 40.6191519,11.8397145 40.096037,11.1997875 C39.5729221,10.5598605 38.7425531,10.2399018 37.6049051,10.2399018 C36.0914269,10.2399018 34.9842682,10.6868282 34.2833958,11.5806945 C33.5825234,12.4745608 33.2320924,13.9727801 33.2320924,16.0753974 L33.2320924,24.4705882 L29.6515664,24.4705882 L29.6515664,7.61926145 L32.4550421,7.61926145 L32.9578394,9.8285222 L33.1406747,9.8285222 C33.6485533,9.02607405 34.3697301,8.40647149 35.3042266,7.96969592 C36.2387232,7.53292034 37.27478,7.31453583 38.412428,7.31453583 C42.4551414,7.31453583 44.4764678,9.3714132 44.4764678,13.4852296 L44.4764678,24.4705882 Z M53.7357283,24.4705882 L50.1552023,24.4705882 L50.1552023,7.61926145 L53.7357283,7.61926145 L53.7357283,24.4705882 Z M49.9418944,3.15503112 C49.9418944,2.51510412 50.1171098,2.0224693 50.467546,1.67711187 C50.8179823,1.33175444 51.3182351,1.15907831 51.9683197,1.15907831 C52.5980892,1.15907831 53.0881846,1.33175444 53.4386208,1.67711187 C53.7890571,2.0224693 53.9642725,2.51510412 53.9642725,3.15503112 C53.9642725,3.76448541 53.7890571,4.24442346 53.4386208,4.59485968 C53.0881846,4.94529589 52.5980892,5.12051137 51.9683197,5.12051137 C51.3182351,5.12051137 50.8179823,4.94529589 50.467546,4.59485968 C50.1171098,4.24442346 49.9418944,3.76448541 49.9418944,3.15503112 Z M68.0077253,10.3313195 L63.8939294,10.3313195 L63.8939294,24.4705882 L60.2981671,24.4705882 L60.2981671,10.3313195 L57.525164,10.3313195 L57.525164,8.65532856 L60.2981671,7.55831633 L60.2981671,6.4613041 C60.2981671,4.47042009 60.7654084,2.99505497 61.699905,2.03516447 C62.6344015,1.07527397 64.0615189,0.595335915 65.9812999,0.595335915 C67.2408388,0.595335915 68.4800439,0.803563007 69.6989525,1.22002344 L68.7543031,3.93208145 C67.8705943,3.64766945 67.0275286,3.50546559 66.2250804,3.50546559 C65.4124747,3.50546559 64.820805,3.75686171 64.4500537,4.25966149 C64.0793023,4.76246128 63.8939294,5.51664965 63.8939294,6.52224922 L63.8939294,7.61926145 L68.0077253,7.61926145 L68.0077253,10.3313195 Z M69.0089215,7.61926145 L72.9094094,7.61926145 L76.3375727,17.1724096 C76.8556088,18.5335242 77.2009611,19.813359 77.3736398,21.0119524 L77.49553,21.0119524 C77.5869482,20.453286 77.7545456,19.7752783 77.9983273,18.9779089 C78.242109,18.1805396 79.5321012,14.3943616 81.8683427,7.61926145 L85.738358,7.61926145 L78.5315971,26.7103215 C77.2212704,30.2146837 75.0374253,31.9668385 71.9799963,31.9668385 C71.1877057,31.9668385 70.4157419,31.8805004 69.6640816,31.7078217 L69.6640816,28.8738734 C70.2024329,28.9957643 70.8169567,29.0567088 71.5076716,29.0567088 C73.2344587,29.0567088 74.4482703,28.056203 75.1491427,26.0551615 L75.7738303,24.4705882 L69.0089215,7.61926145 Z", 1, "g-fill-main"], ["id", "navBar", 1, "collapse", "navbar-collapse", "align-items-center", "flex-sm-row", "g-pt-10", "g-pt-5--lg", "g-mr-40--lg"], [1, "navbar-nav", "text-uppercase", "g-pos-rel", "g-font-weight-600", "ml-auto"], [1, "nav-item", "g-mx-10--lg", "g-mx-15--xl"], ["href", "./index.html", 1, "nav-link", "g-py-7", "g-px-0"], ["data-animation-in", "fadeIn", "data-animation-out", "fadeOut", "data-max-width", "60%", "data-position", "left", 1, "hs-has-mega-menu", "nav-item", "active", "g-mx-10--lg", "g-mx-15--xl"], ["id", "mega-menu-home", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "g-py-7", "g-px-0"], [1, "hs-icon", "hs-icon-arrow-bottom", "g-font-size-11", "g-ml-7"], ["aria-labelledby", "mega-menu-home", 1, "w-100", "hs-mega-menu", "u-shadow-v11", "font-weight-normal", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-bg-white", "g-mt-18", "g-mt-8--lg--scrolling"], [1, "row", "align-items-stretch", "no-gutters"], [1, "col-lg-6"], [1, "list-unstyled"], [1, "dropdown-item", "active"], ["href", "./unify-main/home/home-default.html", 1, "nav-link"], [1, "dropdown-item"], ["href", "./unify-main/home/home-incredible.html", 1, "nav-link"], ["href", "./unify-main/home/home-studio.html", 1, "nav-link"], ["href", "./unify-main/home/home-allure.html", 1, "nav-link"], ["href", "./unify-main/home/home-inspire.html", 1, "nav-link"], ["href", "./unify-main/home/home-portfolio.html", 1, "nav-link"], ["href", "./unify-main/home/home-creative.html", 1, "nav-link"], ["href", "./unify-main/home/home-projects.html", 1, "nav-link"], [1, "col-lg-6", "g-brd-left--lg", "g-brd-gray-light-v5"], ["href", "./unify-main/home/home-discover.html", 1, "nav-link"], ["href", "./unify-main/home/home-brave.html", 1, "nav-link"], ["href", "./unify-main/home/home-business.html", 1, "nav-link"], ["href", "./unify-main/home/home-corporate.html", 1, "nav-link"], ["href", "./unify-main/home/home-web-agency.html", 1, "nav-link"], ["href", "./unify-main/home/home-aspire.html", 1, "nav-link"], ["href", "./unify-main/home/home-showcase.html", 1, "nav-link"], ["href", "./unify-main/home/home-news.html", 1, "nav-link"], ["data-animation-in", "fadeIn", "data-animation-out", "fadeOut", 1, "hs-has-sub-menu", "nav-item", "g-mx-10--lg", "g-mx-15--xl"], ["id", "nav-link-pages", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu-pages", 1, "nav-link", "g-py-7", "g-px-0"], ["id", "nav-submenu-pages", "aria-labelledby", "nav-link-pages", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-18", "g-mt-8--lg--scrolling"], [1, "dropdown-item", "hs-has-sub-menu"], ["id", "nav-link--pages--about", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--about", 1, "nav-link"], ["id", "nav-submenu--pages--about", "aria-labelledby", "nav-link--pages--about", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-about-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-about-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-about-3.html", 1, "nav-link"], ["href", "./unify-main/pages/page-about-4.html", 1, "nav-link"], [1, "dropdown-divider"], ["href", "./unify-main/pages/page-about-me-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-about-me-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-about-me-3.html", 1, "nav-link"], ["id", "nav-link--pages--portfolio", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--portfolio", 1, "nav-link"], ["id", "nav-submenu--pages--portfolio", "aria-labelledby", "nav-link--pages--portfolio", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "u-dropdown-col-2", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-portfolio-case-study-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-case-study-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-single-item-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-single-item-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-single-item-3.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-single-item-4.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-single-item-5.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-single-item-6.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-single-item-7.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-single-item-8.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-single-item-9.html", 1, "nav-link"], ["id", "nav-link--pages--login-signup", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--login-signup", 1, "nav-link"], ["id", "nav-submenu--pages--login-signup", "aria-labelledby", "nav-link--pages--login-signup", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "u-dropdown-col-2", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-login-and-signup-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-3.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-4.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-5.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-6.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-7.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-8.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-9.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-10.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-11.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-12.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-3.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-4.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-5.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-6.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-7.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-8.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-9.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-10.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-11.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-12.html", 1, "nav-link"], ["id", "nav-link--pages--services", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--services", 1, "nav-link"], ["id", "nav-submenu--pages--services", "aria-labelledby", "nav-link--pages--services", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-services-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-services-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-services-3.html", 1, "nav-link"], ["href", "./unify-main/pages/page-services-4.html", 1, "nav-link"], ["id", "nav-link--pages--search-result", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--search-result", 1, "nav-link"], ["id", "nav-submenu--pages--search-result", "aria-labelledby", "nav-link--pages--search-result", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-search-results-grid-veiw-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-search-results-grid-veiw-left-sidebar-1.html", 1, "nav-link"], [1, "g-opacity-0_5"], ["href", "./unify-main/pages/page-search-results-list-veiw-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-search-results-list-veiw-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-search-results-list-veiw-left-sidebar-1.html", 1, "nav-link"], ["id", "nav-link--pages--profile", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--profile", 1, "nav-link"], ["id", "nav-submenu--pages--profile", "aria-labelledby", "nav-link--pages--profile", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "u-dropdown-col-2", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-profile-main-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-profile-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-projects-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-comments-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-history-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-reviews-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-settings-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-users-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-users-1-full-width.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-users-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-users-2-full-width.html", 1, "nav-link"], ["id", "nav-link--pages--contacts", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--contacts", 1, "nav-link"], ["id", "nav-submenu--pages--contacts", "aria-labelledby", "nav-link--pages--contacts", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "u-dropdown-col-2", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-contacts-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-contacts-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-contacts-3.html", 1, "nav-link"], ["href", "./unify-main/pages/page-contacts-4.html", 1, "nav-link"], ["href", "./unify-main/pages/page-contacts-5.html", 1, "nav-link"], ["href", "./unify-main/pages/page-contacts-6.html", 1, "nav-link"], ["href", "./unify-main/pages/page-contacts-7.html", 1, "nav-link"], ["href", "./unify-main/pages/page-contacts-8.html", 1, "nav-link"], ["id", "nav-link--pages--jobs", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--jobs", 1, "nav-link"], ["id", "nav-submenu--pages--jobs", "aria-labelledby", "nav-link--pages--jobs", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-jobs-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-jobs-description-right-sidebar-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-pricing-1.html", 1, "nav-link"], ["id", "nav-link--pages--faq", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--faq", 1, "nav-link"], ["id", "nav-submenu--pages--faq", "aria-labelledby", "nav-link--pages--faq", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-faq-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-faq-2.html", 1, "nav-link"], ["id", "nav-link--pages--others", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--others", 1, "nav-link"], ["id", "nav-submenu--pages--others", "aria-labelledby", "nav-link--pages--others", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-clients-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-terms-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-cookies-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-invoice-1.html", 1, "nav-link"], ["id", "nav-link--pages--404", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--404", 1, "nav-link"], ["id", "nav-submenu--pages--404", "aria-labelledby", "nav-link--pages--404", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./specialty-pages/404/404-1.html", 1, "nav-link"], ["href", "./specialty-pages/404/404-2.html", 1, "nav-link"], ["id", "nav-link--pages--coming-soon", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--coming-soon", 1, "nav-link"], ["id", "nav-submenu--pages--coming-soon", "aria-labelledby", "nav-link--pages--coming-soon", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./specialty-pages/coming-soon/page-coming-soon-1.html", 1, "nav-link"], ["data-animation-in", "fadeIn", "data-animation-out", "fadeOut", 1, "nav-item", "hs-has-sub-menu", "g-mx-10--lg", "g-mx-15--xl"], ["id", "nav-link--blog", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--blog", 1, "nav-link", "g-py-7", "g-px-0"], ["id", "nav-submenu--blog", "aria-labelledby", "nav-link--blog", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-18", "g-mt-8--lg--scrolling"], ["id", "nav-link--pages--blog--minimal", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--blog--minimal", 1, "nav-link"], ["id", "nav-submenu--pages--blog--minimal", "aria-labelledby", "nav-link--pages--blog--minimal", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/blog/blog-minimal-1.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-1-left-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-1-right-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-2.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-2-left-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-2-right-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-3.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-3-left-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-3-right-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-4.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-4-left-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-4-right-sidebar.html", 1, "nav-link"], ["id", "nav-link--pages--blog--grid-bg", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--blog--grid-bg", 1, "nav-link"], ["id", "nav-submenu--pages--blog--grid-bg", "aria-labelledby", "nav-link--pages--blog--grid-bg", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/blog/blog-grid-background-overlay-2.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-background-overlay-left-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-background-overlay-right-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-background-overlay-3.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-background-overlay-3-fullwidth.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-background-overlay-4.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-background-overlay-4-fullwidth.html", 1, "nav-link"], ["id", "nav-link--pages--blog--grid-classic", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--blog--grid-classic", 1, "nav-link"], ["id", "nav-submenu--pages--blog--grid-classic", "aria-labelledby", "nav-link--pages--blog--grid-classic", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/blog/blog-grid-classic-2.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-classic-left-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-classic-right-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-classic-3.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-classic-3-fullwidth.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-classic-4.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-classic-4-fullwidth.html", 1, "nav-link"], ["id", "nav-link--pages--blog--grid-modern", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--blog--grid-modern", 1, "nav-link"], ["id", "nav-submenu--pages--blog--grid-modern", "aria-labelledby", "nav-link--pages--blog--grid-modern", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/blog/blog-grid-modern-1.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-modern-2.html", 1, "nav-link"], ["id", "nav-link--pages--blog--grid-overlap", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--blog--grid-overlap", 1, "nav-link"], ["id", "nav-submenu--pages--blog--grid-overlap", "aria-labelledby", "nav-link--pages--blog--grid-overlap", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/blog/blog-grid-overlap-2.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-overlap-left-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-overlap-right-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-overlap-3.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-overlap-3-fullwidth.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-overlap-4-fullwidth.html", 1, "nav-link"], ["id", "nav-link--pages--blog--masonry", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--blog--masonry", 1, "nav-link"], ["id", "nav-submenu--pages--blog--masonry", "aria-labelledby", "nav-link--pages--blog--masonry", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/blog/blog-masonry-col-2.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-masonry-col-3.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-masonry-col-3-fullwidth.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-masonry-col-4.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-masonry-col-4-fullwidth.html", 1, "nav-link"], ["id", "nav-link--pages--blog--single-item", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--blog--single-item", 1, "nav-link"], ["id", "nav-submenu--pages--blog--single-item", "aria-labelledby", "nav-link--pages--blog--single-item", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/blog/blog-single-item-1.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-single-item-2.html", 1, "nav-link"], ["id", "nav-link--features", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--features", 1, "nav-link", "g-py-7", "g-px-0"], ["id", "nav-submenu--features", "aria-labelledby", "nav-link--features", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-18", "g-mt-8--lg--scrolling"], ["href", "./unify-main/shortcodes/headers/index.html", 1, "nav-link"], ["href", "./unify-main/shortcodes/promo/index.html", 1, "nav-link"], ["id", "nav-link--features--sliders", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--features--sliders", 1, "nav-link"], ["id", "nav-submenu--features--sliders", "aria-labelledby", "nav-link--features--sliders", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./revolution-slider/index.html", 1, "nav-link"], ["href", "./master-slider/index.html", 1, "nav-link"], ["id", "nav-link--features--pop-ups", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--features--pop-ups", 1, "nav-link"], ["id", "nav-submenu--features--pop-ups", "aria-labelledby", "nav-link--features--pop-ups", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/shortcodes/shortcode-base-lightbox-options.html", 1, "nav-link"], ["href", "./unify-main/shortcodes/shortcode-base-modals.html", 1, "nav-link"], ["href", "./unify-main/shortcodes/shortcode-blocks-gallery-grid.html", 1, "nav-link"], ["id", "nav-link--features--maps", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--features--maps", 1, "nav-link"], ["id", "nav-submenu--features--maps", "aria-labelledby", "nav-link--features--maps", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/shortcodes/shortcode-base-google-maps.html", 1, "nav-link"], ["href", "./unify-main/shortcodes/shortcode-base-maps-with-pins.html", 1, "nav-link"], ["href", "./unify-main/shortcodes/shortcode-base-vector-maps.html", 1, "nav-link"], ["id", "nav-link--features--footers", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--features--footers", 1, "nav-link"], ["id", "nav-submenu--features--footers", "aria-labelledby", "nav-link--features--footers", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/shortcodes/footers/shortcode-blocks-footer-classic.html", 1, "nav-link"], ["href", "./unify-main/shortcodes/footers/shortcode-blocks-footer-contact-forms.html", 1, "nav-link"], ["href", "./unify-main/shortcodes/footers/shortcode-blocks-footer-maps.html", 1, "nav-link"], ["href", "./unify-main/shortcodes/footers/shortcode-blocks-footer-modern.html", 1, "nav-link"], ["href", "./unify-main/shortcodes/index.html", 1, "nav-link", "g-py-7", "g-px-0"], ["id", "nav-link-demos", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu-demos", 1, "nav-link", "g-py-7", "g-px-0"], ["id", "nav-submenu-demos", "aria-labelledby", "nav-link-demos", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-18", "g-mt-8--lg--scrolling"], ["id", "nav-link--demos--one-page", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--demos--one-page", 1, "nav-link"], ["id", "nav-submenu--demos--one-page", "aria-labelledby", "nav-link--demos--one-page", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "u-dropdown-col-2", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2", "hs-reversed"], ["href", "./one-pages/accounting/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/agency/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/app/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/architecture/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/business/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/charity/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/consulting/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/construction/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/courses/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/corporate/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/event/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/gym/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/lawyer/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/music/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/photography/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/real-estate/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/restaurant/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/shipping/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/spa/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/travel/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/wedding/index.html", "target", "_blank", 1, "nav-link"], ["href", "./admin-template/dashboards/dashboard-v1.html", "target", "_blank", 1, "nav-link"], [1, "u-label", "g-rounded-3", "g-font-size-10", "g-bg-lightred", "g-py-3", "g-pos-rel", "g-top-minus-1", "g-ml-5"], ["href", "./e-commerce/home-page-1.html", "target", "_blank", 1, "nav-link"], ["href", "./multipage/education/home-page-1.html", "target", "_blank", 1, "nav-link"], ["href", "./multipage/marketing/home-page-1.html", "target", "_blank", 1, "nav-link"], ["href", "./multipage/real-estate/home-page-1.html", "target", "_blank", 1, "nav-link"], ["href", "./multipage/blog-magazine/classic/bm-classic-home-page-1.html", "target", "_blank", 1, "nav-link"], [1, "d-inline-block", "g-hidden-md-down", "g-pos-rel", "g-valign-middle", "g-pl-30", "g-pl-0--lg"], ["href", "https://wrapbootstrap.com/theme/unify-responsive-website-template-WB0412697?ref=htmlstream", "target", "_blank", 1, "btn", "u-btn-outline-primary", "g-font-size-13", "text-uppercase", "g-py-10", "g-px-15"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "header", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "nav", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "button", 4);
        ɵɵelementStart(5, "span", 5);
        ɵɵelementStart(6, "span", 6);
        ɵɵelement(7, "span", 7);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "a", 8);
        ɵɵnamespaceSVG();
        ɵɵelementStart(9, "svg", 9);
        ɵɵelementStart(10, "g", 10);
        ɵɵelementStart(11, "g", 11);
        ɵɵelementStart(12, "g", 12);
        ɵɵelement(13, "path", 13);
        ɵɵelement(14, "path", 14);
        ɵɵelement(15, "path", 15);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(16, "div", 16);
        ɵɵelementStart(17, "ul", 17);
        ɵɵelementStart(18, "li", 18);
        ɵɵelementStart(19, "a", 19);
        ɵɵtext(20, "Intro");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(21, "li", 20);
        ɵɵelementStart(22, "a", 21);
        ɵɵtext(23, "Home ");
        ɵɵelement(24, "i", 22);
        ɵɵelementEnd();
        ɵɵelementStart(25, "div", 23);
        ɵɵelementStart(26, "div", 24);
        ɵɵelementStart(27, "div", 25);
        ɵɵelementStart(28, "ul", 26);
        ɵɵelementStart(29, "li", 27);
        ɵɵelementStart(30, "a", 28);
        ɵɵtext(31, "Default");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(32, "li", 29);
        ɵɵelementStart(33, "a", 30);
        ɵɵtext(34, "Incredible");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(35, "li", 29);
        ɵɵelementStart(36, "a", 31);
        ɵɵtext(37, "Studio");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(38, "li", 29);
        ɵɵelementStart(39, "a", 32);
        ɵɵtext(40, "Allure");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(41, "li", 29);
        ɵɵelementStart(42, "a", 33);
        ɵɵtext(43, "Inspire");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(44, "li", 29);
        ɵɵelementStart(45, "a", 34);
        ɵɵtext(46, "Portfolio");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(47, "li", 29);
        ɵɵelementStart(48, "a", 35);
        ɵɵtext(49, "Creative");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(50, "li", 29);
        ɵɵelementStart(51, "a", 36);
        ɵɵtext(52, "Projects");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(53, "div", 37);
        ɵɵelementStart(54, "ul", 26);
        ɵɵelementStart(55, "li", 29);
        ɵɵelementStart(56, "a", 38);
        ɵɵtext(57, "Discover");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(58, "li", 29);
        ɵɵelementStart(59, "a", 39);
        ɵɵtext(60, "Brave");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(61, "li", 29);
        ɵɵelementStart(62, "a", 40);
        ɵɵtext(63, "Business");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(64, "li", 29);
        ɵɵelementStart(65, "a", 41);
        ɵɵtext(66, "Corporate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(67, "li", 29);
        ɵɵelementStart(68, "a", 42);
        ɵɵtext(69, "Web Agency");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(70, "li", 29);
        ɵɵelementStart(71, "a", 43);
        ɵɵtext(72, "Aspire");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(73, "li", 29);
        ɵɵelementStart(74, "a", 44);
        ɵɵtext(75, "Showcase");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(76, "li", 29);
        ɵɵelementStart(77, "a", 45);
        ɵɵtext(78, "News");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(79, "li", 46);
        ɵɵelementStart(80, "a", 47);
        ɵɵtext(81, "Pages");
        ɵɵelementEnd();
        ɵɵelementStart(82, "ul", 48);
        ɵɵelementStart(83, "li", 49);
        ɵɵelementStart(84, "a", 50);
        ɵɵtext(85, "About");
        ɵɵelementEnd();
        ɵɵelementStart(86, "ul", 51);
        ɵɵelementStart(87, "li", 29);
        ɵɵelementStart(88, "a", 52);
        ɵɵtext(89, "About 1");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(90, "li", 29);
        ɵɵelementStart(91, "a", 53);
        ɵɵtext(92, "About 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(93, "li", 29);
        ɵɵelementStart(94, "a", 54);
        ɵɵtext(95, "About 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(96, "li", 29);
        ɵɵelementStart(97, "a", 55);
        ɵɵtext(98, "About 4");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(99, "li", 56);
        ɵɵelementStart(100, "li", 29);
        ɵɵelementStart(101, "a", 57);
        ɵɵtext(102, "About me 1");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(103, "li", 29);
        ɵɵelementStart(104, "a", 58);
        ɵɵtext(105, "About me 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(106, "li", 29);
        ɵɵelementStart(107, "a", 59);
        ɵɵtext(108, "About me 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(109, "li", 49);
        ɵɵelementStart(110, "a", 60);
        ɵɵtext(111, "Portfolios");
        ɵɵelementEnd();
        ɵɵelementStart(112, "ul", 61);
        ɵɵelementStart(113, "li", 29);
        ɵɵelementStart(114, "a", 62);
        ɵɵtext(115, "Case Studies 1");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(116, "li", 29);
        ɵɵelementStart(117, "a", 63);
        ɵɵtext(118, "Case Studies 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(119, "li", 29);
        ɵɵelementStart(120, "a", 64);
        ɵɵtext(121, "Single item 1");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(122, "li", 29);
        ɵɵelementStart(123, "a", 65);
        ɵɵtext(124, "Single item 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(125, "li", 29);
        ɵɵelementStart(126, "a", 66);
        ɵɵtext(127, "Single item 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(128, "li", 29);
        ɵɵelementStart(129, "a", 67);
        ɵɵtext(130, "Single item 4");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(131, "li", 29);
        ɵɵelementStart(132, "a", 68);
        ɵɵtext(133, "Single item 5");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(134, "li", 29);
        ɵɵelementStart(135, "a", 69);
        ɵɵtext(136, "Single item 6");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(137, "li", 29);
        ɵɵelementStart(138, "a", 70);
        ɵɵtext(139, "Single item 7");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(140, "li", 29);
        ɵɵelementStart(141, "a", 71);
        ɵɵtext(142, "Single item 8");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(143, "li", 29);
        ɵɵelementStart(144, "a", 72);
        ɵɵtext(145, "Single item 9");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(146, "li", 49);
        ɵɵelementStart(147, "a", 73);
        ɵɵtext(148, "Login & Signup");
        ɵɵelementEnd();
        ɵɵelementStart(149, "ul", 74);
        ɵɵelementStart(150, "li", 29);
        ɵɵelementStart(151, "a", 75);
        ɵɵtext(152, "Login & Signup");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(153, "li", 29);
        ɵɵelementStart(154, "a", 76);
        ɵɵtext(155, "Signup 1");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(156, "li", 29);
        ɵɵelementStart(157, "a", 77);
        ɵɵtext(158, "Signup 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(159, "li", 29);
        ɵɵelementStart(160, "a", 78);
        ɵɵtext(161, "Signup 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(162, "li", 29);
        ɵɵelementStart(163, "a", 79);
        ɵɵtext(164, "Signup 4");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(165, "li", 29);
        ɵɵelementStart(166, "a", 80);
        ɵɵtext(167, "Signup 5");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(168, "li", 29);
        ɵɵelementStart(169, "a", 81);
        ɵɵtext(170, "Signup 6");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(171, "li", 29);
        ɵɵelementStart(172, "a", 82);
        ɵɵtext(173, "Signup 7");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(174, "li", 29);
        ɵɵelementStart(175, "a", 83);
        ɵɵtext(176, "Signup 8");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(177, "li", 29);
        ɵɵelementStart(178, "a", 84);
        ɵɵtext(179, "Signup 9");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(180, "li", 29);
        ɵɵelementStart(181, "a", 85);
        ɵɵtext(182, "Signup 10");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(183, "li", 29);
        ɵɵelementStart(184, "a", 86);
        ɵɵtext(185, "Signup 11");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(186, "li", 29);
        ɵɵelementStart(187, "a", 87);
        ɵɵtext(188, "Signup 12");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(189, "li", 29);
        ɵɵelementStart(190, "a", 88);
        ɵɵtext(191, "login 1");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(192, "li", 29);
        ɵɵelementStart(193, "a", 89);
        ɵɵtext(194, "Login 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(195, "li", 29);
        ɵɵelementStart(196, "a", 90);
        ɵɵtext(197, "Login 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(198, "li", 29);
        ɵɵelementStart(199, "a", 91);
        ɵɵtext(200, "Login 4");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(201, "li", 29);
        ɵɵelementStart(202, "a", 92);
        ɵɵtext(203, "Login 5");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(204, "li", 29);
        ɵɵelementStart(205, "a", 93);
        ɵɵtext(206, "Login 6");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(207, "li", 29);
        ɵɵelementStart(208, "a", 94);
        ɵɵtext(209, "Login 7");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(210, "li", 29);
        ɵɵelementStart(211, "a", 95);
        ɵɵtext(212, "Login 8");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(213, "li", 29);
        ɵɵelementStart(214, "a", 96);
        ɵɵtext(215, "Login 9");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(216, "li", 29);
        ɵɵelementStart(217, "a", 97);
        ɵɵtext(218, "Login 10");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(219, "li", 29);
        ɵɵelementStart(220, "a", 98);
        ɵɵtext(221, "Login 11");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(222, "li", 29);
        ɵɵelementStart(223, "a", 99);
        ɵɵtext(224, "Login 12");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(225, "li", 49);
        ɵɵelementStart(226, "a", 100);
        ɵɵtext(227, "Services");
        ɵɵelementEnd();
        ɵɵelementStart(228, "ul", 101);
        ɵɵelementStart(229, "li", 29);
        ɵɵelementStart(230, "a", 102);
        ɵɵtext(231, "Services 1");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(232, "li", 29);
        ɵɵelementStart(233, "a", 103);
        ɵɵtext(234, "Services 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(235, "li", 29);
        ɵɵelementStart(236, "a", 104);
        ɵɵtext(237, "Services 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(238, "li", 29);
        ɵɵelementStart(239, "a", 105);
        ɵɵtext(240, "Services 4");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(241, "li", 49);
        ɵɵelementStart(242, "a", 106);
        ɵɵtext(243, "Search results");
        ɵɵelementEnd();
        ɵɵelementStart(244, "ul", 107);
        ɵɵelementStart(245, "li", 29);
        ɵɵelementStart(246, "a", 108);
        ɵɵtext(247, "Grid View");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(248, "li", 29);
        ɵɵelementStart(249, "a", 109);
        ɵɵtext(250, "Grid View ");
        ɵɵelementStart(251, "span", 110);
        ɵɵtext(252, "(with Sidebar)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(253, "li", 29);
        ɵɵelementStart(254, "a", 111);
        ɵɵtext(255, "List View 1");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(256, "li", 29);
        ɵɵelementStart(257, "a", 112);
        ɵɵtext(258, "List View 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(259, "li", 29);
        ɵɵelementStart(260, "a", 113);
        ɵɵtext(261, "List View ");
        ɵɵelementStart(262, "span", 110);
        ɵɵtext(263, "(with Sidebar)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(264, "li", 49);
        ɵɵelementStart(265, "a", 114);
        ɵɵtext(266, "Profiles");
        ɵɵelementEnd();
        ɵɵelementStart(267, "ul", 115);
        ɵɵelementStart(268, "li", 29);
        ɵɵelementStart(269, "a", 116);
        ɵɵtext(270, "Main");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(271, "li", 29);
        ɵɵelementStart(272, "a", 117);
        ɵɵtext(273, "User");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(274, "li", 29);
        ɵɵelementStart(275, "a", 118);
        ɵɵtext(276, "Projects");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(277, "li", 29);
        ɵɵelementStart(278, "a", 119);
        ɵɵtext(279, "Comments");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(280, "li", 29);
        ɵɵelementStart(281, "a", 120);
        ɵɵtext(282, "History");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(283, "li", 29);
        ɵɵelementStart(284, "a", 121);
        ɵɵtext(285, "Reviews");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(286, "li", 29);
        ɵɵelementStart(287, "a", 122);
        ɵɵtext(288, "Settings");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(289, "li", 29);
        ɵɵelementStart(290, "a", 123);
        ɵɵtext(291, "Contacts 1");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(292, "li", 29);
        ɵɵelementStart(293, "a", 124);
        ɵɵtext(294, "Contacts 1 ");
        ɵɵelementStart(295, "span", 110);
        ɵɵtext(296, "(full width)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(297, "li", 29);
        ɵɵelementStart(298, "a", 125);
        ɵɵtext(299, "Contacts 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(300, "li", 29);
        ɵɵelementStart(301, "a", 126);
        ɵɵtext(302, "Contacts 2 ");
        ɵɵelementStart(303, "span", 110);
        ɵɵtext(304, "(full width)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(305, "li", 49);
        ɵɵelementStart(306, "a", 127);
        ɵɵtext(307, "\u0421ontacts");
        ɵɵelementEnd();
        ɵɵelementStart(308, "ul", 128);
        ɵɵelementStart(309, "li", 29);
        ɵɵelementStart(310, "a", 129);
        ɵɵtext(311, "\u0421ontacts 1");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(312, "li", 29);
        ɵɵelementStart(313, "a", 130);
        ɵɵtext(314, "\u0421ontacts 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(315, "li", 29);
        ɵɵelementStart(316, "a", 131);
        ɵɵtext(317, "\u0421ontacts 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(318, "li", 29);
        ɵɵelementStart(319, "a", 132);
        ɵɵtext(320, "\u0421ontacts 4");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(321, "li", 29);
        ɵɵelementStart(322, "a", 133);
        ɵɵtext(323, "\u0421ontacts 5");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(324, "li", 29);
        ɵɵelementStart(325, "a", 134);
        ɵɵtext(326, "\u0421ontacts 6");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(327, "li", 29);
        ɵɵelementStart(328, "a", 135);
        ɵɵtext(329, "\u0421ontacts 7");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(330, "li", 29);
        ɵɵelementStart(331, "a", 136);
        ɵɵtext(332, "\u0421ontacts 8");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(333, "li", 49);
        ɵɵelementStart(334, "a", 137);
        ɵɵtext(335, "Jobs");
        ɵɵelementEnd();
        ɵɵelementStart(336, "ul", 138);
        ɵɵelementStart(337, "li", 29);
        ɵɵelementStart(338, "a", 139);
        ɵɵtext(339, "Jobs");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(340, "li", 29);
        ɵɵelementStart(341, "a", 140);
        ɵɵtext(342, "Jobs Description");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(343, "li", 29);
        ɵɵelementStart(344, "a", 141);
        ɵɵtext(345, "Pricing");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(346, "li", 49);
        ɵɵelementStart(347, "a", 142);
        ɵɵtext(348, "FAQ");
        ɵɵelementEnd();
        ɵɵelementStart(349, "ul", 143);
        ɵɵelementStart(350, "li", 29);
        ɵɵelementStart(351, "a", 144);
        ɵɵtext(352, "FAQ 1");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(353, "li", 29);
        ɵɵelementStart(354, "a", 145);
        ɵɵtext(355, "FAQ 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(356, "li", 49);
        ɵɵelementStart(357, "a", 146);
        ɵɵtext(358, "Others");
        ɵɵelementEnd();
        ɵɵelementStart(359, "ul", 147);
        ɵɵelementStart(360, "li", 29);
        ɵɵelementStart(361, "a", 148);
        ɵɵtext(362, "Clients");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(363, "li", 29);
        ɵɵelementStart(364, "a", 149);
        ɵɵtext(365, "Terms");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(366, "li", 29);
        ɵɵelementStart(367, "a", 150);
        ɵɵtext(368, "\u0421ookies");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(369, "li", 29);
        ɵɵelementStart(370, "a", 151);
        ɵɵtext(371, "Invoice");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(372, "li", 49);
        ɵɵelementStart(373, "a", 152);
        ɵɵtext(374, "404");
        ɵɵelementEnd();
        ɵɵelementStart(375, "ul", 153);
        ɵɵelementStart(376, "li", 29);
        ɵɵelementStart(377, "a", 154);
        ɵɵtext(378, "404 1");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(379, "li", 29);
        ɵɵelementStart(380, "a", 155);
        ɵɵtext(381, "404 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(382, "li", 49);
        ɵɵelementStart(383, "a", 156);
        ɵɵtext(384, "Coming Soon");
        ɵɵelementEnd();
        ɵɵelementStart(385, "ul", 157);
        ɵɵelementStart(386, "li", 29);
        ɵɵelementStart(387, "a", 158);
        ɵɵtext(388, "Coming Soon");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(389, "li", 159);
        ɵɵelementStart(390, "a", 160);
        ɵɵtext(391, "Blog");
        ɵɵelementEnd();
        ɵɵelementStart(392, "ul", 161);
        ɵɵelementStart(393, "li", 49);
        ɵɵelementStart(394, "a", 162);
        ɵɵtext(395, "Minimal");
        ɵɵelementEnd();
        ɵɵelementStart(396, "ul", 163);
        ɵɵelementStart(397, "li", 29);
        ɵɵelementStart(398, "a", 164);
        ɵɵtext(399, "Minimal 1");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(400, "li", 29);
        ɵɵelementStart(401, "a", 165);
        ɵɵtext(402, "Minimal 1 ");
        ɵɵelementStart(403, "span", 110);
        ɵɵtext(404, "(left sidebar)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(405, "li", 29);
        ɵɵelementStart(406, "a", 166);
        ɵɵtext(407, "Minimal 1 ");
        ɵɵelementStart(408, "span", 110);
        ɵɵtext(409, "(right sidebar)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(410, "li", 29);
        ɵɵelementStart(411, "a", 167);
        ɵɵtext(412, "Minimal 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(413, "li", 29);
        ɵɵelementStart(414, "a", 168);
        ɵɵtext(415, "Minimal 2 ");
        ɵɵelementStart(416, "span", 110);
        ɵɵtext(417, "(left sidebar)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(418, "li", 29);
        ɵɵelementStart(419, "a", 169);
        ɵɵtext(420, "Minimal 2 ");
        ɵɵelementStart(421, "span", 110);
        ɵɵtext(422, "(right sidebar)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(423, "li", 29);
        ɵɵelementStart(424, "a", 170);
        ɵɵtext(425, "Minimal 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(426, "li", 29);
        ɵɵelementStart(427, "a", 171);
        ɵɵtext(428, "Minimal 3 ");
        ɵɵelementStart(429, "span", 110);
        ɵɵtext(430, "(left sidebar)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(431, "li", 29);
        ɵɵelementStart(432, "a", 172);
        ɵɵtext(433, "Minimal 3 ");
        ɵɵelementStart(434, "span", 110);
        ɵɵtext(435, "(right sidebar)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(436, "li", 29);
        ɵɵelementStart(437, "a", 173);
        ɵɵtext(438, "Minimal 4");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(439, "li", 29);
        ɵɵelementStart(440, "a", 174);
        ɵɵtext(441, "Minimal 4 ");
        ɵɵelementStart(442, "span", 110);
        ɵɵtext(443, "(left sidebar)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(444, "li", 29);
        ɵɵelementStart(445, "a", 175);
        ɵɵtext(446, "Minimal 4 ");
        ɵɵelementStart(447, "span", 110);
        ɵɵtext(448, "(right sidebar)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(449, "li", 49);
        ɵɵelementStart(450, "a", 176);
        ɵɵtext(451, "Grid Background");
        ɵɵelementEnd();
        ɵɵelementStart(452, "ul", 177);
        ɵɵelementStart(453, "li", 29);
        ɵɵelementStart(454, "a", 178);
        ɵɵtext(455, "Column 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(456, "li", 29);
        ɵɵelementStart(457, "a", 179);
        ɵɵtext(458, "Column 2 ");
        ɵɵelementStart(459, "span", 110);
        ɵɵtext(460, "(left sidebar)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(461, "li", 29);
        ɵɵelementStart(462, "a", 180);
        ɵɵtext(463, "Column 2 ");
        ɵɵelementStart(464, "span", 110);
        ɵɵtext(465, "(right sidebar)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(466, "li", 29);
        ɵɵelementStart(467, "a", 181);
        ɵɵtext(468, "Column 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(469, "li", 29);
        ɵɵelementStart(470, "a", 182);
        ɵɵtext(471, "Column 3 ");
        ɵɵelementStart(472, "span", 110);
        ɵɵtext(473, "(full width)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(474, "li", 29);
        ɵɵelementStart(475, "a", 183);
        ɵɵtext(476, "Column 4");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(477, "li", 29);
        ɵɵelementStart(478, "a", 184);
        ɵɵtext(479, "Column 4 ");
        ɵɵelementStart(480, "span", 110);
        ɵɵtext(481, "(full width)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(482, "li", 49);
        ɵɵelementStart(483, "a", 185);
        ɵɵtext(484, "Grid Classic");
        ɵɵelementEnd();
        ɵɵelementStart(485, "ul", 186);
        ɵɵelementStart(486, "li", 29);
        ɵɵelementStart(487, "a", 187);
        ɵɵtext(488, "Column 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(489, "li", 29);
        ɵɵelementStart(490, "a", 188);
        ɵɵtext(491, "Column 2 ");
        ɵɵelementStart(492, "span", 110);
        ɵɵtext(493, "(left sidebar)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(494, "li", 29);
        ɵɵelementStart(495, "a", 189);
        ɵɵtext(496, "Column 2 ");
        ɵɵelementStart(497, "span", 110);
        ɵɵtext(498, "(right sidebar)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(499, "li", 29);
        ɵɵelementStart(500, "a", 190);
        ɵɵtext(501, "Column 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(502, "li", 29);
        ɵɵelementStart(503, "a", 191);
        ɵɵtext(504, "Column 3 ");
        ɵɵelementStart(505, "span", 110);
        ɵɵtext(506, "(full width)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(507, "li", 29);
        ɵɵelementStart(508, "a", 192);
        ɵɵtext(509, "Column 4");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(510, "li", 29);
        ɵɵelementStart(511, "a", 193);
        ɵɵtext(512, "Column 4 ");
        ɵɵelementStart(513, "span", 110);
        ɵɵtext(514, "(full width)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(515, "li", 49);
        ɵɵelementStart(516, "a", 194);
        ɵɵtext(517, "Grid Modern");
        ɵɵelementEnd();
        ɵɵelementStart(518, "ul", 195);
        ɵɵelementStart(519, "li", 29);
        ɵɵelementStart(520, "a", 196);
        ɵɵtext(521, "Modern 1");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(522, "li", 29);
        ɵɵelementStart(523, "a", 197);
        ɵɵtext(524, "Modern 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(525, "li", 49);
        ɵɵelementStart(526, "a", 198);
        ɵɵtext(527, "Grid Overlap");
        ɵɵelementEnd();
        ɵɵelementStart(528, "ul", 199);
        ɵɵelementStart(529, "li", 29);
        ɵɵelementStart(530, "a", 200);
        ɵɵtext(531, "Column 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(532, "li", 29);
        ɵɵelementStart(533, "a", 201);
        ɵɵtext(534, "Column 2 ");
        ɵɵelementStart(535, "span", 110);
        ɵɵtext(536, "(left sidebar)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(537, "li", 29);
        ɵɵelementStart(538, "a", 202);
        ɵɵtext(539, "Column 2 ");
        ɵɵelementStart(540, "span", 110);
        ɵɵtext(541, "(right sidebar)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(542, "li", 29);
        ɵɵelementStart(543, "a", 203);
        ɵɵtext(544, "Column 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(545, "li", 29);
        ɵɵelementStart(546, "a", 204);
        ɵɵtext(547, "Column 3 ");
        ɵɵelementStart(548, "span", 110);
        ɵɵtext(549, "(full width)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(550, "li", 29);
        ɵɵelementStart(551, "a", 205);
        ɵɵtext(552, "Column 4 ");
        ɵɵelementStart(553, "span", 110);
        ɵɵtext(554, "(full width)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(555, "li", 49);
        ɵɵelementStart(556, "a", 206);
        ɵɵtext(557, "Masonry");
        ɵɵelementEnd();
        ɵɵelementStart(558, "ul", 207);
        ɵɵelementStart(559, "li", 29);
        ɵɵelementStart(560, "a", 208);
        ɵɵtext(561, "Column 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(562, "li", 29);
        ɵɵelementStart(563, "a", 209);
        ɵɵtext(564, "Column 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(565, "li", 29);
        ɵɵelementStart(566, "a", 210);
        ɵɵtext(567, "Column 3 ");
        ɵɵelementStart(568, "span", 110);
        ɵɵtext(569, "(full width)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(570, "li", 29);
        ɵɵelementStart(571, "a", 211);
        ɵɵtext(572, "Column 4");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(573, "li", 29);
        ɵɵelementStart(574, "a", 212);
        ɵɵtext(575, "Column 4 ");
        ɵɵelementStart(576, "span", 110);
        ɵɵtext(577, "(full width)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(578, "li", 49);
        ɵɵelementStart(579, "a", 213);
        ɵɵtext(580, "Single items");
        ɵɵelementEnd();
        ɵɵelementStart(581, "ul", 214);
        ɵɵelementStart(582, "li", 29);
        ɵɵelementStart(583, "a", 215);
        ɵɵtext(584, "Single item 1");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(585, "li", 29);
        ɵɵelementStart(586, "a", 216);
        ɵɵtext(587, "Single item 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(588, "li", 159);
        ɵɵelementStart(589, "a", 217);
        ɵɵtext(590, "Features");
        ɵɵelementEnd();
        ɵɵelementStart(591, "ul", 218);
        ɵɵelementStart(592, "li", 29);
        ɵɵelementStart(593, "a", 219);
        ɵɵtext(594, "Headers");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(595, "li", 29);
        ɵɵelementStart(596, "a", 220);
        ɵɵtext(597, "Promo Blocks");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(598, "li", 49);
        ɵɵelementStart(599, "a", 221);
        ɵɵtext(600, "Sliders");
        ɵɵelementEnd();
        ɵɵelementStart(601, "ul", 222);
        ɵɵelementStart(602, "li", 29);
        ɵɵelementStart(603, "a", 223);
        ɵɵtext(604, "Revolution sliders");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(605, "li", 29);
        ɵɵelementStart(606, "a", 224);
        ɵɵtext(607, "Master sliders");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(608, "li", 49);
        ɵɵelementStart(609, "a", 225);
        ɵɵtext(610, "Pop-ups");
        ɵɵelementEnd();
        ɵɵelementStart(611, "ul", 226);
        ɵɵelementStart(612, "li", 29);
        ɵɵelementStart(613, "a", 227);
        ɵɵtext(614, "Lightbox");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(615, "li", 29);
        ɵɵelementStart(616, "a", 228);
        ɵɵtext(617, "Modals");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(618, "li", 29);
        ɵɵelementStart(619, "a", 229);
        ɵɵtext(620, "Gallery");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(621, "li", 49);
        ɵɵelementStart(622, "a", 230);
        ɵɵtext(623, "Maps");
        ɵɵelementEnd();
        ɵɵelementStart(624, "ul", 231);
        ɵɵelementStart(625, "li", 29);
        ɵɵelementStart(626, "a", 232);
        ɵɵtext(627, "Google Maps");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(628, "li", 29);
        ɵɵelementStart(629, "a", 233);
        ɵɵtext(630, "Maps With Pins");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(631, "li", 29);
        ɵɵelementStart(632, "a", 234);
        ɵɵtext(633, "Vector Maps");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(634, "li", 49);
        ɵɵelementStart(635, "a", 235);
        ɵɵtext(636, "Footers");
        ɵɵelementEnd();
        ɵɵelementStart(637, "ul", 236);
        ɵɵelementStart(638, "li", 29);
        ɵɵelementStart(639, "a", 237);
        ɵɵtext(640, "Classic Footers");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(641, "li", 29);
        ɵɵelementStart(642, "a", 238);
        ɵɵtext(643, "Contact Forms");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(644, "li", 29);
        ɵɵelementStart(645, "a", 239);
        ɵɵtext(646, "Footers Maps");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(647, "li", 29);
        ɵɵelementStart(648, "a", 240);
        ɵɵtext(649, "Modern Footers");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(650, "li", 18);
        ɵɵelementStart(651, "a", 241);
        ɵɵtext(652, "Shortcodes");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(653, "li", 159);
        ɵɵelementStart(654, "a", 242);
        ɵɵtext(655, "Demos");
        ɵɵelementEnd();
        ɵɵelementStart(656, "ul", 243);
        ɵɵelementStart(657, "li", 49);
        ɵɵelementStart(658, "a", 244);
        ɵɵtext(659, "One Pages");
        ɵɵelementEnd();
        ɵɵelementStart(660, "ul", 245);
        ɵɵelementStart(661, "li", 29);
        ɵɵelementStart(662, "a", 246);
        ɵɵtext(663, "Accounting");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(664, "li", 29);
        ɵɵelementStart(665, "a", 247);
        ɵɵtext(666, "Agency");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(667, "li", 29);
        ɵɵelementStart(668, "a", 248);
        ɵɵtext(669, "App");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(670, "li", 29);
        ɵɵelementStart(671, "a", 249);
        ɵɵtext(672, "Architecture");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(673, "li", 29);
        ɵɵelementStart(674, "a", 250);
        ɵɵtext(675, "Business");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(676, "li", 29);
        ɵɵelementStart(677, "a", 251);
        ɵɵtext(678, "Charity");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(679, "li", 29);
        ɵɵelementStart(680, "a", 252);
        ɵɵtext(681, "\u0421onsulting");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(682, "li", 29);
        ɵɵelementStart(683, "a", 253);
        ɵɵtext(684, "Construction");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(685, "li", 29);
        ɵɵelementStart(686, "a", 254);
        ɵɵtext(687, "Courses");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(688, "li", 29);
        ɵɵelementStart(689, "a", 255);
        ɵɵtext(690, "Corporate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(691, "li", 29);
        ɵɵelementStart(692, "a", 256);
        ɵɵtext(693, "Event");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(694, "li", 29);
        ɵɵelementStart(695, "a", 257);
        ɵɵtext(696, "GYM");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(697, "li", 29);
        ɵɵelementStart(698, "a", 258);
        ɵɵtext(699, "Lawyer");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(700, "li", 29);
        ɵɵelementStart(701, "a", 259);
        ɵɵtext(702, "Music");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(703, "li", 29);
        ɵɵelementStart(704, "a", 260);
        ɵɵtext(705, "Photography");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(706, "li", 29);
        ɵɵelementStart(707, "a", 261);
        ɵɵtext(708, "Real Estate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(709, "li", 29);
        ɵɵelementStart(710, "a", 262);
        ɵɵtext(711, "Restaurant");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(712, "li", 29);
        ɵɵelementStart(713, "a", 263);
        ɵɵtext(714, "Shipping");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(715, "li", 29);
        ɵɵelementStart(716, "a", 264);
        ɵɵtext(717, "Spa");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(718, "li", 29);
        ɵɵelementStart(719, "a", 265);
        ɵɵtext(720, "Travel");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(721, "li", 29);
        ɵɵelementStart(722, "a", 266);
        ɵɵtext(723, "Wedding");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(724, "li", 29);
        ɵɵelementStart(725, "a", 267);
        ɵɵtext(726, "Admin Template ");
        ɵɵelementStart(727, "span", 268);
        ɵɵtext(728, "New");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(729, "li", 29);
        ɵɵelementStart(730, "a", 269);
        ɵɵtext(731, "E-Commerce ");
        ɵɵelementStart(732, "span", 110);
        ɵɵtext(733, "(44 Pages)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(734, "li", 29);
        ɵɵelementStart(735, "a", 270);
        ɵɵtext(736, "University ");
        ɵɵelementStart(737, "span", 110);
        ɵɵtext(738, "(13 Pages)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(739, "li", 29);
        ɵɵelementStart(740, "a", 271);
        ɵɵtext(741, "Marketing ");
        ɵɵelementStart(742, "span", 110);
        ɵɵtext(743, "(10 Pages)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(744, "li", 29);
        ɵɵelementStart(745, "a", 272);
        ɵɵtext(746, "Real Estate ");
        ɵɵelementStart(747, "span", 110);
        ɵɵtext(748, "(13 Pages)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(749, "li", 29);
        ɵɵelementStart(750, "a", 273);
        ɵɵtext(751, "Blogs & Magazines ");
        ɵɵelementStart(752, "span", 110);
        ɵɵtext(753, "(6 Pages)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(754, "div", 274);
        ɵɵelementStart(755, "a", 275);
        ɵɵtext(756, "Purchase now");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [NgbNavbar], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(HeaderComponent, [{
        type: Component,
        args: [{
                selector: 'fs-header',
                templateUrl: './header.component.html',
            }]
    }], function () { return [{ type: Title }, { type: ActivatedRoute }, { type: ConfigStateService }]; }, null); })();

class FooterComponent {
    constructor() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = ɵɵdefineComponent({ type: FooterComponent, selectors: [["fs-footer"]], decls: 144, vars: 0, consts: [["id", "contacts-section", 1, "g-bg-black-opacity-0_9", "g-color-white-opacity-0_8", "g-py-60"], [1, "container"], [1, "row"], [1, "col-lg-3", "col-md-6", "g-mb-40", "g-mb-0--lg"], [1, "u-heading-v2-3--bottom", "g-brd-white-opacity-0_8", "g-mb-20"], [1, "u-heading-v2__title", "h6", "text-uppercase", "mb-0"], [1, "h6", "g-mb-2"], ["href", "#", 1, "g-color-white-opacity-0_8", "g-color-white--hover"], [1, "small", "g-color-white-opacity-0_6"], [1, "g-brd-white-opacity-0_1", "g-my-10"], [1, "text-uppercase1"], [1, "list-unstyled", "g-mt-minus-10", "mb-0"], [1, "g-pos-rel", "g-brd-bottom", "g-brd-white-opacity-0_1", "g-py-10"], [1, "h6", "g-pr-20", "mb-0"], [1, "fa", "fa-angle-right", "g-absolute-centered--y", "g-right-0"], [1, "g-pos-rel", "g-py-10"], [1, "col-lg-3", "col-md-6"], [1, "g-bg-no-repeat", "g-font-size-12", "mb-0", 2, "background-image", "url(./assets/img/maps/map2.png)"], [1, "d-flex", "g-mb-20"], [1, "g-mr-10"], [1, "u-icon-v3", "u-icon-size--xs", "g-bg-white-opacity-0_1", "g-color-white-opacity-0_6"], [1, "fa", "fa-map-marker"], [1, "mb-0"], [1, "fa", "fa-phone"], [1, "fa", "fa-globe"], ["href", "mailto:info@htmlstream.com", 1, "g-color-white-opacity-0_8", "g-color-white--hover"], [1, "g-bg-gray-dark-v1", "g-color-white-opacity-0_8", "g-py-20"], [1, "col-md-8", "text-center", "text-md-left", "g-mb-10", "g-mb-0--md"], [1, "d-lg-flex"], [1, "d-block", "g-font-size-default", "g-mr-10", "g-mb-10", "g-mb-0--md"], [1, "u-list-inline"], [1, "list-inline-item"], [1, "col-md-4", "align-self-center"], [1, "list-inline", "text-center", "text-md-right", "mb-0"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Facebook", 1, "list-inline-item", "g-mx-10"], ["href", "#", 1, "g-color-white-opacity-0_5", "g-color-white--hover"], [1, "fa", "fa-facebook"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Skype", 1, "list-inline-item", "g-mx-10"], [1, "fa", "fa-skype"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Linkedin", 1, "list-inline-item", "g-mx-10"], [1, "fa", "fa-linkedin"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Pinterest", 1, "list-inline-item", "g-mx-10"], [1, "fa", "fa-pinterest"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Twitter", 1, "list-inline-item", "g-mx-10"], [1, "fa", "fa-twitter"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Dribbble", 1, "list-inline-item", "g-mx-10"], [1, "fa", "fa-dribbble"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "div", 4);
        ɵɵelementStart(5, "h2", 5);
        ɵɵtext(6, "About Us");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "p");
        ɵɵtext(8, "About Unify dolor sit amet, consectetur adipiscing elit. Maecenas eget nisl id libero tincidunt sodales. ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 3);
        ɵɵelementStart(10, "div", 4);
        ɵɵelementStart(11, "h2", 5);
        ɵɵtext(12, "Latest Posts");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(13, "article");
        ɵɵelementStart(14, "h3", 6);
        ɵɵelementStart(15, "a", 7);
        ɵɵtext(16, "Incredible template");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(17, "div", 8);
        ɵɵtext(18, "May 8, 2017");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(19, "hr", 9);
        ɵɵelementStart(20, "article");
        ɵɵelementStart(21, "h3", 6);
        ɵɵelementStart(22, "a", 7);
        ɵɵtext(23, "New features");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(24, "div", 8);
        ɵɵtext(25, "June 23, 2017");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(26, "hr", 9);
        ɵɵelementStart(27, "article");
        ɵɵelementStart(28, "h3", 6);
        ɵɵelementStart(29, "a", 7);
        ɵɵtext(30, "New terms and conditions");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(31, "div", 8);
        ɵɵtext(32, "September 15, 2017");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(33, "div", 3);
        ɵɵelementStart(34, "div", 4);
        ɵɵelementStart(35, "h2", 5);
        ɵɵtext(36, "Useful Links");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(37, "nav", 10);
        ɵɵelementStart(38, "ul", 11);
        ɵɵelementStart(39, "li", 12);
        ɵɵelementStart(40, "h4", 13);
        ɵɵelementStart(41, "a", 7);
        ɵɵtext(42, "About Us");
        ɵɵelementEnd();
        ɵɵelement(43, "i", 14);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(44, "li", 12);
        ɵɵelementStart(45, "h4", 13);
        ɵɵelementStart(46, "a", 7);
        ɵɵtext(47, "Portfolio");
        ɵɵelementEnd();
        ɵɵelement(48, "i", 14);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(49, "li", 12);
        ɵɵelementStart(50, "h4", 13);
        ɵɵelementStart(51, "a", 7);
        ɵɵtext(52, "Our Services");
        ɵɵelementEnd();
        ɵɵelement(53, "i", 14);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(54, "li", 12);
        ɵɵelementStart(55, "h4", 13);
        ɵɵelementStart(56, "a", 7);
        ɵɵtext(57, "Latest Jobs");
        ɵɵelementEnd();
        ɵɵelement(58, "i", 14);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(59, "li", 15);
        ɵɵelementStart(60, "h4", 13);
        ɵɵelementStart(61, "a", 7);
        ɵɵtext(62, "Contact Us");
        ɵɵelementEnd();
        ɵɵelement(63, "i", 14);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(64, "div", 16);
        ɵɵelementStart(65, "div", 4);
        ɵɵelementStart(66, "h2", 5);
        ɵɵtext(67, "Our Contacts");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(68, "address", 17);
        ɵɵelementStart(69, "div", 18);
        ɵɵelementStart(70, "div", 19);
        ɵɵelementStart(71, "span", 20);
        ɵɵelement(72, "i", 21);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(73, "p", 22);
        ɵɵtext(74, "795 Folsom Ave, Suite 600, ");
        ɵɵelement(75, "br");
        ɵɵtext(76, " San Francisco, CA 94107 795");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(77, "div", 18);
        ɵɵelementStart(78, "div", 19);
        ɵɵelementStart(79, "span", 20);
        ɵɵelement(80, "i", 23);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(81, "p", 22);
        ɵɵtext(82, "(+123) 456 7890 ");
        ɵɵelement(83, "br");
        ɵɵtext(84, " (+123) 456 7891");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(85, "div", 18);
        ɵɵelementStart(86, "div", 19);
        ɵɵelementStart(87, "span", 20);
        ɵɵelement(88, "i", 24);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(89, "p", 22);
        ɵɵelementStart(90, "a", 25);
        ɵɵtext(91, "info@htmlstream.com");
        ɵɵelementEnd();
        ɵɵelement(92, "br");
        ɵɵelementStart(93, "a", 7);
        ɵɵtext(94, "www.htmlstream.com");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(95, "footer", 26);
        ɵɵelementStart(96, "div", 1);
        ɵɵelementStart(97, "div", 2);
        ɵɵelementStart(98, "div", 27);
        ɵɵelementStart(99, "div", 28);
        ɵɵelementStart(100, "small", 29);
        ɵɵtext(101, "2020 \u00A9 All Rights Reserved.");
        ɵɵelementEnd();
        ɵɵelementStart(102, "ul", 30);
        ɵɵelementStart(103, "li", 31);
        ɵɵelementStart(104, "a", 7);
        ɵɵtext(105, "Privacy Policy");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(106, "li", 31);
        ɵɵelementStart(107, "span");
        ɵɵtext(108, "|");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(109, "li", 31);
        ɵɵelementStart(110, "a", 7);
        ɵɵtext(111, "Terms of Use");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(112, "li", 31);
        ɵɵelementStart(113, "span");
        ɵɵtext(114, "|");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(115, "li", 31);
        ɵɵelementStart(116, "a", 7);
        ɵɵtext(117, "License");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(118, "li", 31);
        ɵɵelementStart(119, "span");
        ɵɵtext(120, "|");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(121, "li", 31);
        ɵɵelementStart(122, "a", 7);
        ɵɵtext(123, "Support");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(124, "div", 32);
        ɵɵelementStart(125, "ul", 33);
        ɵɵelementStart(126, "li", 34);
        ɵɵelementStart(127, "a", 35);
        ɵɵelement(128, "i", 36);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(129, "li", 37);
        ɵɵelementStart(130, "a", 35);
        ɵɵelement(131, "i", 38);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(132, "li", 39);
        ɵɵelementStart(133, "a", 35);
        ɵɵelement(134, "i", 40);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(135, "li", 41);
        ɵɵelementStart(136, "a", 35);
        ɵɵelement(137, "i", 42);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(138, "li", 43);
        ɵɵelementStart(139, "a", 35);
        ɵɵelement(140, "i", 44);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(141, "li", 45);
        ɵɵelementStart(142, "a", 35);
        ɵɵelement(143, "i", 46);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FooterComponent, [{
        type: Component,
        args: [{
                selector: 'fs-footer',
                templateUrl: './footer.component.html',
            }]
    }], function () { return []; }, null); })();

function ApplicationLayoutComponent_fs_header_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "fs-header");
} }
function ApplicationLayoutComponent_fs_footer_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "fs-footer");
} }
const _c0 = function () { return { componentKey: "Theme.ApplicationLayoutHeaderComponent" }; };
const _c1 = function () { return { componentKey: "Theme.ApplicationLayoutFooterComponent" }; };
class ApplicationLayoutComponent {
    constructor(environment) {
        this.environment = environment;
        this.headerComponentKey = "Theme.ApplicationLayoutHeaderComponent" /* ApplicationLayoutHeader */;
        this.footerComponentKey = "Theme.ApplicationLayoutFooterComponent" /* ApplicationLayoutFooter */;
    }
    get appInfo() {
        return this.environment.getEnvironment().application;
    }
}
ApplicationLayoutComponent.type = "application" /* application */;
ApplicationLayoutComponent.ɵfac = function ApplicationLayoutComponent_Factory(t) { return new (t || ApplicationLayoutComponent)(ɵɵdirectiveInject(EnvironmentService)); };
ApplicationLayoutComponent.ɵcmp = ɵɵdefineComponent({ type: ApplicationLayoutComponent, selectors: [["fs-application-layout"]], decls: 6, vars: 4, consts: [[4, "abpReplaceableTemplate"], ["href", "#", "data-type", "fixed", "data-position", "{\n     \"bottom\": 15,\n     \"right\": 15\n   }", "data-offset-top", "400", "data-compensation", "#js-header", "data-show-effect", "zoomIn", 1, "js-go-to", "u-go-to-v1"], [1, "hs-icon", "hs-icon-arrow-top"]], template: function ApplicationLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "main");
        ɵɵtemplate(1, ApplicationLayoutComponent_fs_header_1_Template, 1, 0, "fs-header", 0);
        ɵɵelement(2, "router-outlet");
        ɵɵtemplate(3, ApplicationLayoutComponent_fs_footer_3_Template, 1, 0, "fs-footer", 0);
        ɵɵelementStart(4, "a", 1);
        ɵɵelement(5, "i", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction0(2, _c0));
        ɵɵadvance(2);
        ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction0(3, _c1));
    } }, directives: [ReplaceableTemplateDirective, RouterOutlet, HeaderComponent, FooterComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ApplicationLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'fs-application-layout',
                templateUrl: './application-layout.component.html',
            }]
    }], function () { return [{ type: EnvironmentService }]; }, null); })();

class AccountLayoutComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.isCollapsed = false;
    }
}
// required for dynamic component
AccountLayoutComponent.type = "account" /* account */;
AccountLayoutComponent.ɵfac = function AccountLayoutComponent_Factory(t) { return new (t || AccountLayoutComponent)(ɵɵdirectiveInject(Renderer2)); };
AccountLayoutComponent.ɵcmp = ɵɵdefineComponent({ type: AccountLayoutComponent, selectors: [["fs-layout-account"]], decls: 4, vars: 0, consts: [[1, "account-header", "fixed-top", "p-3"], [1, "d-flex", "align-items-center", 2, "min-height", "100vh"], [1, "container"]], template: function AccountLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelement(3, "router-outlet");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [RouterOutlet], encapsulation: 2, data: { animation: [slideFromBottom] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AccountLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'fs-layout-account',
                templateUrl: './account-layout.component.html',
                animations: [slideFromBottom],
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: Renderer2 }]; }, null); })();

class EmptyLayoutComponent {
}
// required for dynamic component
EmptyLayoutComponent.type = "empty" /* empty */;
EmptyLayoutComponent.ɵfac = function EmptyLayoutComponent_Factory(t) { return new (t || EmptyLayoutComponent)(); };
EmptyLayoutComponent.ɵcmp = ɵɵdefineComponent({ type: EmptyLayoutComponent, selectors: [["fs-layout-empty"]], decls: 1, vars: 0, template: function EmptyLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "router-outlet");
    } }, directives: [RouterOutlet], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EmptyLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'fs-layout-empty',
                template: `
    <router-outlet></router-outlet>
  `,
            }]
    }], null, null); })();

class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = ɵɵdefineComponent({ type: BannerComponent, selectors: [["fs-banner"]], decls: 27, vars: 0, consts: [[1, "g-pos-rel"], ["data-options", "{direction: \"reverse\", settings_mode_oneelement_max_offset: \"150\"}", 1, "dzsparallaxer", "auto-init", "height-is-based-on-content", "use-loading", "mode-scroll"], [1, "divimage", "dzsparallaxer--target", "w-100", "g-bg-cover", "g-bg-pos-top-center", "g-bg-img-hero", "g-bg-bluegray-opacity-0_2--after", 2, "height", "130%", "background-image", "url(./assets/img-temp/1920x700/img3.jpg)"], [1, "container", "g-bg-cover__inner", "g-py-100"], [1, "row", "align-items-center"], [1, "col-lg-6", "g-mb-30", "g-mb-0--lg"], [1, "h1", "text-uppercase", "g-color-white", "g-mb-30"], [1, "g-bg-primary-dark-v3", "g-px-5"], [1, "h4", "g-color-white"], [1, "g-bg-black-opacity-0_6", "g-px-5"], [1, "col-lg-6"], [1, "embed-responsive", "embed-responsive-16by9"], ["src", "//player.vimeo.com/video/47911018", "width", "530", "height", "300", "frameborder", "0", "webkitallowfullscreen", "", "mozallowfullscreen", "", "allowfullscreen", ""]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "section", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelement(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "div", 4);
        ɵɵelementStart(5, "div", 5);
        ɵɵelementStart(6, "h2", 6);
        ɵɵelementStart(7, "span", 7);
        ɵɵtext(8, "Clean & Fresh");
        ɵɵelementEnd();
        ɵɵelement(9, "br");
        ɵɵelementStart(10, "span", 7);
        ɵɵtext(11, "Fully Responsive");
        ɵɵelementEnd();
        ɵɵelement(12, "br");
        ɵɵelementStart(13, "span", 7);
        ɵɵtext(14, "Design");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(15, "h3", 8);
        ɵɵelementStart(16, "span", 9);
        ɵɵtext(17, "Start a new project with easy");
        ɵɵelementEnd();
        ɵɵelement(18, "br");
        ɵɵelementStart(19, "span", 9);
        ɵɵtext(20, "to use 1610+ Reusable");
        ɵɵelementEnd();
        ɵɵelement(21, "br");
        ɵɵelementStart(22, "span", 9);
        ɵɵtext(23, "UI Components");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(24, "div", 10);
        ɵɵelementStart(25, "div", 11);
        ɵɵelement(26, "iframe", 12);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BannerComponent, [{
        type: Component,
        args: [{
                selector: 'fs-banner',
                templateUrl: './banner.component.html',
            }]
    }], function () { return []; }, null); })();

class LayoutStateService {
    // getSkin() {
    //   return this.store.state.skin;
    // }
    // getSkin$() {
    //   return this.store.sliceState(state => state.skin);
    // }
    constructor(domInsertionService) {
        this.domInsertionService = domInsertionService;
        this.store = new InternalStore({});
    }
    getThemeSettings() {
        return this.store.state.themeSettings;
    }
    getThemeSettings$() {
        return this.store.sliceState(state => state.themeSettings);
    }
}
LayoutStateService.ɵfac = function LayoutStateService_Factory(t) { return new (t || LayoutStateService)(ɵɵinject(DomInsertionService)); };
LayoutStateService.ɵprov = ɵɵdefineInjectable({ token: LayoutStateService, factory: LayoutStateService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(LayoutStateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: DomInsertionService }]; }, null); })();

class SettingsComponent {
    constructor(toaster, router, subscription, layoutStateService, fb) {
        this.toaster = toaster;
        this.router = router;
        this.subscription = subscription;
        this.layoutStateService = layoutStateService;
        this.fb = fb;
        this.form = this.fb.group({
            skin: []
        });
    }
    ngOnInit() {
        //this.layoutStateService.fetchThemeSettings();
        // this.subscription.addOne(
        //   this.layoutStateService.getThemeSettings$().pipe(filter(Boolean)),
        //   ({ skin }: Layout.ThemeSettings) => {
        //     this.form.patchValue({
        //       skin: skin
        //     });
        //   },
        // );
    }
    save() {
        // this.loading = true;
        // this.layoutStateService.updateThemeSettings(this.form.value);
        // this.layoutStateService
        //   .getThemeSettings$()
        //   .pipe(
        //     //skip(1),
        //     take(1),
        //     finalize(() => (this.loading = false)),
        //   )
        //   .subscribe(async () => {
        //     const { shouldReuseRoute } = this.router.routeReuseStrategy;
        //     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        //     this.router.navigated = false;
        //     await this.router.navigateByUrl(this.router.url).catch(noop);
        //     this.router.routeReuseStrategy.shouldReuseRoute = shouldReuseRoute;
        //     setTimeout(() => {
        //       this.toaster.success('LeptonThemeManagement::SuccessfullySaved', null);
        //     }, 0);
        //   });
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(ɵɵdirectiveInject(ToasterService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(SubscriptionService), ɵɵdirectiveInject(LayoutStateService), ɵɵdirectiveInject(FormBuilder)); };
SettingsComponent.ɵcmp = ɵɵdefineComponent({ type: SettingsComponent, selectors: [["ng-component"]], decls: 44, vars: 16, consts: [[1, "my-4"], ["id", "TheProjectThemeSettingsForm", "novalidate", "novalidate", 3, "formGroup"], [1, "row"], [1, "col", "col-md-12"], [1, "form-group"], ["for", "Skin"], ["id", "Skin", "name", "Skin", "formControlName", "skin", 1, "custom-select", "form-control", "valid"], [3, "ngValue"], ["data-valmsg-for", "Skin", "data-valmsg-replace", "true", 1, "text-danger", "field-validation-valid"], ["buttonType", "button", "iconClass", "fa fa-save", 3, "loading", "click"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h2");
        ɵɵtext(1, "TheProject Settings");
        ɵɵelementEnd();
        ɵɵelement(2, "hr", 0);
        ɵɵelementStart(3, "form", 1);
        ɵɵelementStart(4, "div", 2);
        ɵɵelementStart(5, "div", 3);
        ɵɵelementStart(6, "div");
        ɵɵelementStart(7, "div", 4);
        ɵɵelementStart(8, "label", 5);
        ɵɵtext(9, "Skin");
        ɵɵelementEnd();
        ɵɵelementStart(10, "select", 6);
        ɵɵelementStart(11, "option", 7);
        ɵɵtext(12, "blue");
        ɵɵelementEnd();
        ɵɵelementStart(13, "option", 7);
        ɵɵtext(14, "brown");
        ɵɵelementEnd();
        ɵɵelementStart(15, "option", 7);
        ɵɵtext(16, "cool_green");
        ɵɵelementEnd();
        ɵɵelementStart(17, "option", 7);
        ɵɵtext(18, "dark_cyan");
        ɵɵelementEnd();
        ɵɵelementStart(19, "option", 7);
        ɵɵtext(20, "dark_red");
        ɵɵelementEnd();
        ɵɵelementStart(21, "option", 7);
        ɵɵtext(22, "gold");
        ɵɵelementEnd();
        ɵɵelementStart(23, "option", 7);
        ɵɵtext(24, "gray");
        ɵɵelementEnd();
        ɵɵelementStart(25, "option", 7);
        ɵɵtext(26, "green");
        ɵɵelementEnd();
        ɵɵelementStart(27, "option", 7);
        ɵɵtext(28, "light_blue");
        ɵɵelementEnd();
        ɵɵelementStart(29, "option", 7);
        ɵɵtext(30, "orange");
        ɵɵelementEnd();
        ɵɵelementStart(31, "option", 7);
        ɵɵtext(32, "pink");
        ɵɵelementEnd();
        ɵɵelementStart(33, "option", 7);
        ɵɵtext(34, "purple");
        ɵɵelementEnd();
        ɵɵelementStart(35, "option", 7);
        ɵɵtext(36, "red");
        ɵɵelementEnd();
        ɵɵelementStart(37, "option", 7);
        ɵɵtext(38, "vivid_red");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(39, "span", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(40, "hr", 0);
        ɵɵelementStart(41, "div");
        ɵɵelementStart(42, "abp-button", 9);
        ɵɵlistener("click", function SettingsComponent_Template_abp_button_click_42_listener() { return ctx.save(); });
        ɵɵtext(43, " Save ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(8);
        ɵɵproperty("ngValue", 0);
        ɵɵadvance(2);
        ɵɵproperty("ngValue", 1);
        ɵɵadvance(2);
        ɵɵproperty("ngValue", 2);
        ɵɵadvance(2);
        ɵɵproperty("ngValue", 3);
        ɵɵadvance(2);
        ɵɵproperty("ngValue", 4);
        ɵɵadvance(2);
        ɵɵproperty("ngValue", 5);
        ɵɵadvance(2);
        ɵɵproperty("ngValue", 6);
        ɵɵadvance(2);
        ɵɵproperty("ngValue", 7);
        ɵɵadvance(2);
        ɵɵproperty("ngValue", 8);
        ɵɵadvance(2);
        ɵɵproperty("ngValue", 9);
        ɵɵadvance(2);
        ɵɵproperty("ngValue", 10);
        ɵɵadvance(2);
        ɵɵproperty("ngValue", 11);
        ɵɵadvance(2);
        ɵɵproperty("ngValue", 12);
        ɵɵadvance(2);
        ɵɵproperty("ngValue", 13);
        ɵɵadvance(5);
        ɵɵproperty("loading", ctx.loading);
    } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, ValidationGroupDirective, SelectControlValueAccessor, NgControlStatus, FormControlName, ValidationDirective, NgSelectOption, ɵangular_packages_forms_forms_x, ButtonComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SettingsComponent, [{
        type: Component,
        args: [{
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.less']
            }]
    }], function () { return [{ type: ToasterService }, { type: Router }, { type: SubscriptionService }, { type: LayoutStateService }, { type: FormBuilder }]; }, null); })();

function ValidationErrorComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    const error_r1 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, error_r1.message, error_r1.interpoliteParams), "");
} }
class ValidationErrorComponent extends ValidationErrorComponent$1 {
    get abpErrors() {
        if (!this.errors || !this.errors.length)
            return [];
        return this.errors.map(error => {
            if (!error.message)
                return error;
            const index = error.message.indexOf('[');
            if (index > -1) {
                return Object.assign(Object.assign({}, error), { message: error.message.slice(0, index), interpoliteParams: error.message.slice(index + 1, error.message.length - 1).split(',') });
            }
            return error;
        });
    }
}
ValidationErrorComponent.ɵfac = function ValidationErrorComponent_Factory(t) { return ɵValidationErrorComponent_BaseFactory(t || ValidationErrorComponent); };
ValidationErrorComponent.ɵcmp = ɵɵdefineComponent({ type: ValidationErrorComponent, selectors: [["abp-validation-error"]], features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["data-valmsg-for", "Role.Name", "data-valmsg-replace", "true", 1, "field-validation-error", "text-danger"], [4, "ngFor", "ngForOf", "ngForTrackBy"]], template: function ValidationErrorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵtemplate(1, ValidationErrorComponent_span_1_Template, 3, 4, "span", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.abpErrors)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [NgForOf], pipes: [LocalizationPipe], styles: ["\n      .custom-checkbox + * .field-validation-error span,\n      ngb-timepicker + * .field-validation-error span {\n        background: transparent !important;\n        border: 0 !important;\n        color: currentColor !important;\n        padding: 0 !important;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
const ɵValidationErrorComponent_BaseFactory = /*@__PURE__*/ ɵɵgetInheritedFactory(ValidationErrorComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ValidationErrorComponent, [{
        type: Component,
        args: [{
                selector: 'abp-validation-error',
                template: `
    <span
      class="field-validation-error text-danger"
      data-valmsg-for="Role.Name"
      data-valmsg-replace="true"
      ><span *ngFor="let error of abpErrors; trackBy: trackByFn">
        {{ error.message | abpLocalization: error.interpoliteParams }}</span
      ></span
    >
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [
                    `
      .custom-checkbox + * .field-validation-error span,
      ngb-timepicker + * .field-validation-error span {
        background: transparent !important;
        border: 0 !important;
        color: currentColor !important;
        padding: 0 !important;
      }
    `,
                ],
            }]
    }], null, null); })();

//import { GetTheme, RouterState, UpdateProfile, eThemeNos } from '@fs/theme.core';
const UNIFY_THEME_INITIAL_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureInitial,
        deps: [Injector],
        multi: true,
    },
];
function configureInitial(injector) {
    return () => {
        const router = injector.get(Router);
        const layoutStateService = injector.get(LayoutStateService);
        initial(router, layoutStateService);
    };
}
function initial(router, layoutStateService) {
    router.events
        .pipe(filter(e => e instanceof NavigationEnd), delay(0))
        .subscribe(event => {
        console.log('angular-ready');
        layoutStateService.AppComponent.nativeElement.dispatchEvent(new CustomEvent('angular-ready'));
    });
}

const UNIFY_THEME_STYLES_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureStyles,
        deps: [Injector],
        multi: true,
    },
];
function configureStyles(injector) {
    return () => {
        const replaceableComponents = injector.get(ReplaceableComponentsService);
        const layoutService = injector.get(LayoutStateService);
        const configState = injector.get(ConfigStateService);
        configState
            .createOnUpdateStream(state => state)
            .subscribe(() => {
            //setSkin(layoutService,configState);
        });
        initLayouts(replaceableComponents);
    };
}
function initLayouts(replaceableComponents) {
    replaceableComponents.add({
        key: "Theme.ApplicationLayoutComponent" /* ApplicationLayout */,
        component: ApplicationLayoutComponent,
    });
    replaceableComponents.add({
        key: "Theme.AccountLayoutComponent" /* AccountLayout */,
        component: ApplicationLayoutComponent,
    });
    replaceableComponents.add({
        key: "Theme.EmptyLayoutComponent" /* EmptyLayout */,
        component: ApplicationLayoutComponent,
    });
}

const UNIFY_THEME_SETTING_TAB_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureSettingTabs,
        deps: [SettingTabsService],
        multi: true,
    },
];
function configureSettingTabs(settingtabs) {
    return () => {
        settingtabs.add([
            {
                name: "UnifyThemeManagement::Menu:UnifyThemeSettings" /* UnifyThemeManagement */,
                order: 2,
                component: SettingsComponent,
            },
        ]);
    };
}

const LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];
class ThemeUnifyModule {
    static forRoot() {
        return {
            ngModule: RootUnifyModule,
            providers: [
                UNIFY_THEME_STYLES_PROVIDERS,
                UNIFY_THEME_INITIAL_PROVIDERS,
                UNIFY_THEME_SETTING_TAB_PROVIDERS
            ],
        };
    }
}
ThemeUnifyModule.ɵfac = function ThemeUnifyModule_Factory(t) { return new (t || ThemeUnifyModule)(); };
ThemeUnifyModule.ɵmod = ɵɵdefineNgModule({ type: ThemeUnifyModule });
ThemeUnifyModule.ɵinj = ɵɵdefineInjector({ imports: [[
            CoreModule,
            ThemeSharedModule,
            NgbDropdownModule,
            NgxValidateCoreModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ThemeUnifyModule, { declarations: [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent, HeaderComponent,
        FooterComponent,
        BannerComponent,
        ValidationErrorComponent,
        SettingsComponent], imports: [CoreModule,
        ThemeSharedModule,
        NgbDropdownModule,
        NgxValidateCoreModule], exports: [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent, HeaderComponent,
        FooterComponent,
        SettingsComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ThemeUnifyModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ...LAYOUTS,
                    HeaderComponent,
                    FooterComponent,
                    BannerComponent,
                    ValidationErrorComponent,
                    SettingsComponent
                ],
                exports: [
                    ...LAYOUTS,
                    HeaderComponent,
                    FooterComponent,
                    SettingsComponent
                ],
                entryComponents: [
                    ...LAYOUTS
                ],
                imports: [
                    CoreModule,
                    ThemeSharedModule,
                    NgbDropdownModule,
                    NgxValidateCoreModule
                ]
            }]
    }], null, null); })();
class RootUnifyModule {
}
RootUnifyModule.ɵfac = function RootUnifyModule_Factory(t) { return new (t || RootUnifyModule)(); };
RootUnifyModule.ɵmod = ɵɵdefineNgModule({ type: RootUnifyModule });
RootUnifyModule.ɵinj = ɵɵdefineInjector({ imports: [[
            NgxValidateCoreModule.forRoot({
                targetSelector: '.form-control',
                invalidClasses: 'input-validation-error',
                blueprints: {
                    creditCard: 'AbpValidation::ThisFieldIsNotAValidCreditCardNumber.',
                    email: 'AbpValidation::ThisFieldIsNotAValidEmailAddress.',
                    invalid: 'AbpValidation::ThisFieldIsNotValid.',
                    max: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                    maxlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf{0}[{{ requiredLength }}]',
                    min: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                    minlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
                    ngbDate: 'AbpValidation::ThisFieldIsNotValid.',
                    passwordMismatch: 'AbpIdentity::Volo.Abp.Identity:PasswordConfirmationFailed',
                    range: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                    required: 'AbpValidation::ThisFieldIsRequired.',
                    url: 'AbpValidation::ThisFieldIsNotAValidFullyQualifiedHttpHttpsOrFtpUrl',
                },
                errorTemplate: ValidationErrorComponent,
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(RootUnifyModule, { imports: [NgxValidateCoreModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RootUnifyModule, [{
        type: NgModule,
        args: [{
                imports: [
                    NgxValidateCoreModule.forRoot({
                        targetSelector: '.form-control',
                        invalidClasses: 'input-validation-error',
                        blueprints: {
                            creditCard: 'AbpValidation::ThisFieldIsNotAValidCreditCardNumber.',
                            email: 'AbpValidation::ThisFieldIsNotAValidEmailAddress.',
                            invalid: 'AbpValidation::ThisFieldIsNotValid.',
                            max: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                            maxlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf{0}[{{ requiredLength }}]',
                            min: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                            minlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
                            ngbDate: 'AbpValidation::ThisFieldIsNotValid.',
                            passwordMismatch: 'AbpIdentity::Volo.Abp.Identity:PasswordConfirmationFailed',
                            range: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                            required: 'AbpValidation::ThisFieldIsRequired.',
                            url: 'AbpValidation::ThisFieldIsNotAValidFullyQualifiedHttpHttpsOrFtpUrl',
                        },
                        errorTemplate: ValidationErrorComponent,
                    })
                ],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AccountLayoutComponent, ApplicationLayoutComponent, BannerComponent, EmptyLayoutComponent, FooterComponent, HeaderComponent, LAYOUTS, LayoutStateService, RootUnifyModule, SettingsComponent, ThemeUnifyModule, UNIFY_THEME_INITIAL_PROVIDERS, UNIFY_THEME_STYLES_PROVIDERS, ValidationErrorComponent, configureInitial, configureStyles };
//# sourceMappingURL=fs-tw-theme-unify.js.map
