(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core'), require('@angular/router'), require('@angular/platform-browser'), require('@ng-bootstrap/ng-bootstrap'), require('@abp/ng.theme.shared'), require('@angular/forms'), require('@ngx-validate/core'), require('@angular/common'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/theme-unify', ['exports', '@angular/core', '@abp/ng.core', '@angular/router', '@angular/platform-browser', '@ng-bootstrap/ng-bootstrap', '@abp/ng.theme.shared', '@angular/forms', '@ngx-validate/core', '@angular/common', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw']['theme-unify'] = {}), global.ng.core, global.i1$1, global.ng.router, global.ng.platformBrowser, global.i4, global.i1$2, global.ng.forms, global.i6, global.ng.common, global.rxjs.operators));
}(this, (function (exports, i0, i1$1, i2, i1, i4, i1$2, i5, i6, i1$3, operators) { 'use strict';

    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent(titleService, activatedRoute, configStateService) {
            this.titleService = titleService;
            this.activatedRoute = activatedRoute;
            this.configStateService = configStateService;
        }
        return HeaderComponent;
    }());
    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(i0.ɵɵdirectiveInject(i1.Title), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i1$1.ConfigStateService)); };
    HeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["fs-header"]], decls: 757, vars: 0, consts: [["id", "js-header", 1, "u-header", "u-header--static"], [1, "u-header__section", "u-header__section--light", "g-bg-white", "g-transition-0_3", "g-py-10"], [1, "js-mega-menu", "navbar", "navbar-expand-lg", "hs-menu-initialized", "hs-menu-horizontal"], [1, "container"], ["type", "button", "aria-label", "Toggle navigation", "aria-expanded", "false", "aria-controls", "navBar", "data-toggle", "collapse", "data-target", "#navBar", 1, "navbar-toggler", "navbar-toggler-right", "btn", "g-line-height-1", "g-brd-none", "g-pa-0", "g-pos-abs", "g-top-minus-3", "g-right-0"], [1, "hamburger", "hamburger--slider"], [1, "hamburger-box"], [1, "hamburger-inner"], ["href", "./index.html", 1, "navbar-brand", "d-flex"], ["width", "86px", "height", "32px", "viewBox", "0 0 86 32", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["transform", "translate(-78.000000, -19.000000)"], ["transform", "translate(78.000000, 19.000000)"], ["d", "M0,0 L19.2941176,0 L19.2941176,0 C23.7123956,-8.11624501e-16 27.2941176,3.581722 27.2941176,8 L27.2941176,27.2941176 L8,27.2941176 L8,27.2941176 C3.581722,27.2941176 5.41083001e-16,23.7123956 0,19.2941176 L0,0 Z", 1, "g-fill-primary"], ["d", "M21.036662,24.8752523 L20.5338647,22.6659916 L20.3510293,22.6659916 C19.8533083,23.4481246 19.1448284,24.0626484 18.2255681,24.5095816 C17.3063079,24.9565147 16.2575544,25.1799779 15.0792761,25.1799779 C13.0376043,25.1799779 11.5139914,24.672107 10.5083918,23.6563498 C9.50279224,22.6405927 9,21.1017437 9,19.0397567 L9,8.02392554 L12.6109986,8.02392554 L12.6109986,18.4150692 C12.6109986,19.7050808 12.8750915,20.6725749 13.4032852,21.3175807 C13.9314789,21.9625865 14.7593086,22.2850846 15.886799,22.2850846 C17.3901196,22.2850846 18.4947389,21.8356188 19.2006901,20.9366737 C19.9066413,20.0377286 20.2596117,18.5318912 20.2596117,16.4191164 L20.2596117,8.02392554 L23.855374,8.02392554 L23.855374,24.8752523 L21.036662,24.8752523 Z", 1, "g-fill-white"], ["d", "M44.4764678,24.4705882 L40.8807055,24.4705882 L40.8807055,14.1099172 C40.8807055,12.809748 40.6191519,11.8397145 40.096037,11.1997875 C39.5729221,10.5598605 38.7425531,10.2399018 37.6049051,10.2399018 C36.0914269,10.2399018 34.9842682,10.6868282 34.2833958,11.5806945 C33.5825234,12.4745608 33.2320924,13.9727801 33.2320924,16.0753974 L33.2320924,24.4705882 L29.6515664,24.4705882 L29.6515664,7.61926145 L32.4550421,7.61926145 L32.9578394,9.8285222 L33.1406747,9.8285222 C33.6485533,9.02607405 34.3697301,8.40647149 35.3042266,7.96969592 C36.2387232,7.53292034 37.27478,7.31453583 38.412428,7.31453583 C42.4551414,7.31453583 44.4764678,9.3714132 44.4764678,13.4852296 L44.4764678,24.4705882 Z M53.7357283,24.4705882 L50.1552023,24.4705882 L50.1552023,7.61926145 L53.7357283,7.61926145 L53.7357283,24.4705882 Z M49.9418944,3.15503112 C49.9418944,2.51510412 50.1171098,2.0224693 50.467546,1.67711187 C50.8179823,1.33175444 51.3182351,1.15907831 51.9683197,1.15907831 C52.5980892,1.15907831 53.0881846,1.33175444 53.4386208,1.67711187 C53.7890571,2.0224693 53.9642725,2.51510412 53.9642725,3.15503112 C53.9642725,3.76448541 53.7890571,4.24442346 53.4386208,4.59485968 C53.0881846,4.94529589 52.5980892,5.12051137 51.9683197,5.12051137 C51.3182351,5.12051137 50.8179823,4.94529589 50.467546,4.59485968 C50.1171098,4.24442346 49.9418944,3.76448541 49.9418944,3.15503112 Z M68.0077253,10.3313195 L63.8939294,10.3313195 L63.8939294,24.4705882 L60.2981671,24.4705882 L60.2981671,10.3313195 L57.525164,10.3313195 L57.525164,8.65532856 L60.2981671,7.55831633 L60.2981671,6.4613041 C60.2981671,4.47042009 60.7654084,2.99505497 61.699905,2.03516447 C62.6344015,1.07527397 64.0615189,0.595335915 65.9812999,0.595335915 C67.2408388,0.595335915 68.4800439,0.803563007 69.6989525,1.22002344 L68.7543031,3.93208145 C67.8705943,3.64766945 67.0275286,3.50546559 66.2250804,3.50546559 C65.4124747,3.50546559 64.820805,3.75686171 64.4500537,4.25966149 C64.0793023,4.76246128 63.8939294,5.51664965 63.8939294,6.52224922 L63.8939294,7.61926145 L68.0077253,7.61926145 L68.0077253,10.3313195 Z M69.0089215,7.61926145 L72.9094094,7.61926145 L76.3375727,17.1724096 C76.8556088,18.5335242 77.2009611,19.813359 77.3736398,21.0119524 L77.49553,21.0119524 C77.5869482,20.453286 77.7545456,19.7752783 77.9983273,18.9779089 C78.242109,18.1805396 79.5321012,14.3943616 81.8683427,7.61926145 L85.738358,7.61926145 L78.5315971,26.7103215 C77.2212704,30.2146837 75.0374253,31.9668385 71.9799963,31.9668385 C71.1877057,31.9668385 70.4157419,31.8805004 69.6640816,31.7078217 L69.6640816,28.8738734 C70.2024329,28.9957643 70.8169567,29.0567088 71.5076716,29.0567088 C73.2344587,29.0567088 74.4482703,28.056203 75.1491427,26.0551615 L75.7738303,24.4705882 L69.0089215,7.61926145 Z", 1, "g-fill-main"], ["id", "navBar", 1, "collapse", "navbar-collapse", "align-items-center", "flex-sm-row", "g-pt-10", "g-pt-5--lg", "g-mr-40--lg"], [1, "navbar-nav", "text-uppercase", "g-pos-rel", "g-font-weight-600", "ml-auto"], [1, "nav-item", "g-mx-10--lg", "g-mx-15--xl"], ["href", "./index.html", 1, "nav-link", "g-py-7", "g-px-0"], ["data-animation-in", "fadeIn", "data-animation-out", "fadeOut", "data-max-width", "60%", "data-position", "left", 1, "hs-has-mega-menu", "nav-item", "active", "g-mx-10--lg", "g-mx-15--xl"], ["id", "mega-menu-home", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "g-py-7", "g-px-0"], [1, "hs-icon", "hs-icon-arrow-bottom", "g-font-size-11", "g-ml-7"], ["aria-labelledby", "mega-menu-home", 1, "w-100", "hs-mega-menu", "u-shadow-v11", "font-weight-normal", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-bg-white", "g-mt-18", "g-mt-8--lg--scrolling"], [1, "row", "align-items-stretch", "no-gutters"], [1, "col-lg-6"], [1, "list-unstyled"], [1, "dropdown-item", "active"], ["href", "./unify-main/home/home-default.html", 1, "nav-link"], [1, "dropdown-item"], ["href", "./unify-main/home/home-incredible.html", 1, "nav-link"], ["href", "./unify-main/home/home-studio.html", 1, "nav-link"], ["href", "./unify-main/home/home-allure.html", 1, "nav-link"], ["href", "./unify-main/home/home-inspire.html", 1, "nav-link"], ["href", "./unify-main/home/home-portfolio.html", 1, "nav-link"], ["href", "./unify-main/home/home-creative.html", 1, "nav-link"], ["href", "./unify-main/home/home-projects.html", 1, "nav-link"], [1, "col-lg-6", "g-brd-left--lg", "g-brd-gray-light-v5"], ["href", "./unify-main/home/home-discover.html", 1, "nav-link"], ["href", "./unify-main/home/home-brave.html", 1, "nav-link"], ["href", "./unify-main/home/home-business.html", 1, "nav-link"], ["href", "./unify-main/home/home-corporate.html", 1, "nav-link"], ["href", "./unify-main/home/home-web-agency.html", 1, "nav-link"], ["href", "./unify-main/home/home-aspire.html", 1, "nav-link"], ["href", "./unify-main/home/home-showcase.html", 1, "nav-link"], ["href", "./unify-main/home/home-news.html", 1, "nav-link"], ["data-animation-in", "fadeIn", "data-animation-out", "fadeOut", 1, "hs-has-sub-menu", "nav-item", "g-mx-10--lg", "g-mx-15--xl"], ["id", "nav-link-pages", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu-pages", 1, "nav-link", "g-py-7", "g-px-0"], ["id", "nav-submenu-pages", "aria-labelledby", "nav-link-pages", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-18", "g-mt-8--lg--scrolling"], [1, "dropdown-item", "hs-has-sub-menu"], ["id", "nav-link--pages--about", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--about", 1, "nav-link"], ["id", "nav-submenu--pages--about", "aria-labelledby", "nav-link--pages--about", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-about-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-about-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-about-3.html", 1, "nav-link"], ["href", "./unify-main/pages/page-about-4.html", 1, "nav-link"], [1, "dropdown-divider"], ["href", "./unify-main/pages/page-about-me-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-about-me-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-about-me-3.html", 1, "nav-link"], ["id", "nav-link--pages--portfolio", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--portfolio", 1, "nav-link"], ["id", "nav-submenu--pages--portfolio", "aria-labelledby", "nav-link--pages--portfolio", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "u-dropdown-col-2", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-portfolio-case-study-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-case-study-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-single-item-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-single-item-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-single-item-3.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-single-item-4.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-single-item-5.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-single-item-6.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-single-item-7.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-single-item-8.html", 1, "nav-link"], ["href", "./unify-main/pages/page-portfolio-single-item-9.html", 1, "nav-link"], ["id", "nav-link--pages--login-signup", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--login-signup", 1, "nav-link"], ["id", "nav-submenu--pages--login-signup", "aria-labelledby", "nav-link--pages--login-signup", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "u-dropdown-col-2", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-login-and-signup-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-3.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-4.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-5.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-6.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-7.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-8.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-9.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-10.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-11.html", 1, "nav-link"], ["href", "./unify-main/pages/page-signup-12.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-3.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-4.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-5.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-6.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-7.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-8.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-9.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-10.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-11.html", 1, "nav-link"], ["href", "./unify-main/pages/page-login-12.html", 1, "nav-link"], ["id", "nav-link--pages--services", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--services", 1, "nav-link"], ["id", "nav-submenu--pages--services", "aria-labelledby", "nav-link--pages--services", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-services-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-services-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-services-3.html", 1, "nav-link"], ["href", "./unify-main/pages/page-services-4.html", 1, "nav-link"], ["id", "nav-link--pages--search-result", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--search-result", 1, "nav-link"], ["id", "nav-submenu--pages--search-result", "aria-labelledby", "nav-link--pages--search-result", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-search-results-grid-veiw-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-search-results-grid-veiw-left-sidebar-1.html", 1, "nav-link"], [1, "g-opacity-0_5"], ["href", "./unify-main/pages/page-search-results-list-veiw-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-search-results-list-veiw-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-search-results-list-veiw-left-sidebar-1.html", 1, "nav-link"], ["id", "nav-link--pages--profile", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--profile", 1, "nav-link"], ["id", "nav-submenu--pages--profile", "aria-labelledby", "nav-link--pages--profile", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "u-dropdown-col-2", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-profile-main-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-profile-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-projects-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-comments-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-history-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-reviews-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-settings-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-users-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-users-1-full-width.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-users-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-profile-users-2-full-width.html", 1, "nav-link"], ["id", "nav-link--pages--contacts", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--contacts", 1, "nav-link"], ["id", "nav-submenu--pages--contacts", "aria-labelledby", "nav-link--pages--contacts", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "u-dropdown-col-2", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-contacts-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-contacts-2.html", 1, "nav-link"], ["href", "./unify-main/pages/page-contacts-3.html", 1, "nav-link"], ["href", "./unify-main/pages/page-contacts-4.html", 1, "nav-link"], ["href", "./unify-main/pages/page-contacts-5.html", 1, "nav-link"], ["href", "./unify-main/pages/page-contacts-6.html", 1, "nav-link"], ["href", "./unify-main/pages/page-contacts-7.html", 1, "nav-link"], ["href", "./unify-main/pages/page-contacts-8.html", 1, "nav-link"], ["id", "nav-link--pages--jobs", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--jobs", 1, "nav-link"], ["id", "nav-submenu--pages--jobs", "aria-labelledby", "nav-link--pages--jobs", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-jobs-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-jobs-description-right-sidebar-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-pricing-1.html", 1, "nav-link"], ["id", "nav-link--pages--faq", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--faq", 1, "nav-link"], ["id", "nav-submenu--pages--faq", "aria-labelledby", "nav-link--pages--faq", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-faq-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-faq-2.html", 1, "nav-link"], ["id", "nav-link--pages--others", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--others", 1, "nav-link"], ["id", "nav-submenu--pages--others", "aria-labelledby", "nav-link--pages--others", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/pages/page-clients-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-terms-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-cookies-1.html", 1, "nav-link"], ["href", "./unify-main/pages/page-invoice-1.html", 1, "nav-link"], ["id", "nav-link--pages--404", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--404", 1, "nav-link"], ["id", "nav-submenu--pages--404", "aria-labelledby", "nav-link--pages--404", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./specialty-pages/404/404-1.html", 1, "nav-link"], ["href", "./specialty-pages/404/404-2.html", 1, "nav-link"], ["id", "nav-link--pages--coming-soon", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--coming-soon", 1, "nav-link"], ["id", "nav-submenu--pages--coming-soon", "aria-labelledby", "nav-link--pages--coming-soon", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./specialty-pages/coming-soon/page-coming-soon-1.html", 1, "nav-link"], ["data-animation-in", "fadeIn", "data-animation-out", "fadeOut", 1, "nav-item", "hs-has-sub-menu", "g-mx-10--lg", "g-mx-15--xl"], ["id", "nav-link--blog", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--blog", 1, "nav-link", "g-py-7", "g-px-0"], ["id", "nav-submenu--blog", "aria-labelledby", "nav-link--blog", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-18", "g-mt-8--lg--scrolling"], ["id", "nav-link--pages--blog--minimal", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--blog--minimal", 1, "nav-link"], ["id", "nav-submenu--pages--blog--minimal", "aria-labelledby", "nav-link--pages--blog--minimal", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/blog/blog-minimal-1.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-1-left-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-1-right-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-2.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-2-left-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-2-right-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-3.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-3-left-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-3-right-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-4.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-4-left-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-minimal-4-right-sidebar.html", 1, "nav-link"], ["id", "nav-link--pages--blog--grid-bg", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--blog--grid-bg", 1, "nav-link"], ["id", "nav-submenu--pages--blog--grid-bg", "aria-labelledby", "nav-link--pages--blog--grid-bg", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/blog/blog-grid-background-overlay-2.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-background-overlay-left-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-background-overlay-right-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-background-overlay-3.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-background-overlay-3-fullwidth.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-background-overlay-4.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-background-overlay-4-fullwidth.html", 1, "nav-link"], ["id", "nav-link--pages--blog--grid-classic", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--blog--grid-classic", 1, "nav-link"], ["id", "nav-submenu--pages--blog--grid-classic", "aria-labelledby", "nav-link--pages--blog--grid-classic", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/blog/blog-grid-classic-2.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-classic-left-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-classic-right-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-classic-3.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-classic-3-fullwidth.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-classic-4.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-classic-4-fullwidth.html", 1, "nav-link"], ["id", "nav-link--pages--blog--grid-modern", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--blog--grid-modern", 1, "nav-link"], ["id", "nav-submenu--pages--blog--grid-modern", "aria-labelledby", "nav-link--pages--blog--grid-modern", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/blog/blog-grid-modern-1.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-modern-2.html", 1, "nav-link"], ["id", "nav-link--pages--blog--grid-overlap", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--blog--grid-overlap", 1, "nav-link"], ["id", "nav-submenu--pages--blog--grid-overlap", "aria-labelledby", "nav-link--pages--blog--grid-overlap", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/blog/blog-grid-overlap-2.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-overlap-left-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-overlap-right-sidebar.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-overlap-3.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-overlap-3-fullwidth.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-grid-overlap-4-fullwidth.html", 1, "nav-link"], ["id", "nav-link--pages--blog--masonry", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--blog--masonry", 1, "nav-link"], ["id", "nav-submenu--pages--blog--masonry", "aria-labelledby", "nav-link--pages--blog--masonry", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/blog/blog-masonry-col-2.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-masonry-col-3.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-masonry-col-3-fullwidth.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-masonry-col-4.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-masonry-col-4-fullwidth.html", 1, "nav-link"], ["id", "nav-link--pages--blog--single-item", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--pages--blog--single-item", 1, "nav-link"], ["id", "nav-submenu--pages--blog--single-item", "aria-labelledby", "nav-link--pages--blog--single-item", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/blog/blog-single-item-1.html", 1, "nav-link"], ["href", "./unify-main/blog/blog-single-item-2.html", 1, "nav-link"], ["id", "nav-link--features", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--features", 1, "nav-link", "g-py-7", "g-px-0"], ["id", "nav-submenu--features", "aria-labelledby", "nav-link--features", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-18", "g-mt-8--lg--scrolling"], ["href", "./unify-main/shortcodes/headers/index.html", 1, "nav-link"], ["href", "./unify-main/shortcodes/promo/index.html", 1, "nav-link"], ["id", "nav-link--features--sliders", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--features--sliders", 1, "nav-link"], ["id", "nav-submenu--features--sliders", "aria-labelledby", "nav-link--features--sliders", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./revolution-slider/index.html", 1, "nav-link"], ["href", "./master-slider/index.html", 1, "nav-link"], ["id", "nav-link--features--pop-ups", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--features--pop-ups", 1, "nav-link"], ["id", "nav-submenu--features--pop-ups", "aria-labelledby", "nav-link--features--pop-ups", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/shortcodes/shortcode-base-lightbox-options.html", 1, "nav-link"], ["href", "./unify-main/shortcodes/shortcode-base-modals.html", 1, "nav-link"], ["href", "./unify-main/shortcodes/shortcode-blocks-gallery-grid.html", 1, "nav-link"], ["id", "nav-link--features--maps", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--features--maps", 1, "nav-link"], ["id", "nav-submenu--features--maps", "aria-labelledby", "nav-link--features--maps", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/shortcodes/shortcode-base-google-maps.html", 1, "nav-link"], ["href", "./unify-main/shortcodes/shortcode-base-maps-with-pins.html", 1, "nav-link"], ["href", "./unify-main/shortcodes/shortcode-base-vector-maps.html", 1, "nav-link"], ["id", "nav-link--features--footers", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--features--footers", 1, "nav-link"], ["id", "nav-submenu--features--footers", "aria-labelledby", "nav-link--features--footers", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2"], ["href", "./unify-main/shortcodes/footers/shortcode-blocks-footer-classic.html", 1, "nav-link"], ["href", "./unify-main/shortcodes/footers/shortcode-blocks-footer-contact-forms.html", 1, "nav-link"], ["href", "./unify-main/shortcodes/footers/shortcode-blocks-footer-maps.html", 1, "nav-link"], ["href", "./unify-main/shortcodes/footers/shortcode-blocks-footer-modern.html", 1, "nav-link"], ["href", "./unify-main/shortcodes/index.html", 1, "nav-link", "g-py-7", "g-px-0"], ["id", "nav-link-demos", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu-demos", 1, "nav-link", "g-py-7", "g-px-0"], ["id", "nav-submenu-demos", "aria-labelledby", "nav-link-demos", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-18", "g-mt-8--lg--scrolling"], ["id", "nav-link--demos--one-page", "href", "#", "aria-haspopup", "true", "aria-expanded", "false", "aria-controls", "nav-submenu--demos--one-page", 1, "nav-link"], ["id", "nav-submenu--demos--one-page", "aria-labelledby", "nav-link--demos--one-page", 1, "hs-sub-menu", "list-unstyled", "u-shadow-v11", "u-dropdown-col-2", "g-brd-top", "g-brd-primary", "g-brd-top-2", "g-min-width-220", "g-mt-minus-2", "hs-reversed"], ["href", "./one-pages/accounting/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/agency/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/app/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/architecture/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/business/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/charity/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/consulting/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/construction/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/courses/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/corporate/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/event/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/gym/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/lawyer/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/music/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/photography/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/real-estate/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/restaurant/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/shipping/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/spa/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/travel/index.html", "target", "_blank", 1, "nav-link"], ["href", "./one-pages/wedding/index.html", "target", "_blank", 1, "nav-link"], ["href", "./admin-template/dashboards/dashboard-v1.html", "target", "_blank", 1, "nav-link"], [1, "u-label", "g-rounded-3", "g-font-size-10", "g-bg-lightred", "g-py-3", "g-pos-rel", "g-top-minus-1", "g-ml-5"], ["href", "./e-commerce/home-page-1.html", "target", "_blank", 1, "nav-link"], ["href", "./multipage/education/home-page-1.html", "target", "_blank", 1, "nav-link"], ["href", "./multipage/marketing/home-page-1.html", "target", "_blank", 1, "nav-link"], ["href", "./multipage/real-estate/home-page-1.html", "target", "_blank", 1, "nav-link"], ["href", "./multipage/blog-magazine/classic/bm-classic-home-page-1.html", "target", "_blank", 1, "nav-link"], [1, "d-inline-block", "g-hidden-md-down", "g-pos-rel", "g-valign-middle", "g-pl-30", "g-pl-0--lg"], ["href", "https://wrapbootstrap.com/theme/unify-responsive-website-template-WB0412697?ref=htmlstream", "target", "_blank", 1, "btn", "u-btn-outline-primary", "g-font-size-13", "text-uppercase", "g-py-10", "g-px-15"]], template: function HeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "header", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "nav", 2);
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵelementStart(4, "button", 4);
                i0.ɵɵelementStart(5, "span", 5);
                i0.ɵɵelementStart(6, "span", 6);
                i0.ɵɵelement(7, "span", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "a", 8);
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(9, "svg", 9);
                i0.ɵɵelementStart(10, "g", 10);
                i0.ɵɵelementStart(11, "g", 11);
                i0.ɵɵelementStart(12, "g", 12);
                i0.ɵɵelement(13, "path", 13);
                i0.ɵɵelement(14, "path", 14);
                i0.ɵɵelement(15, "path", 15);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵnamespaceHTML();
                i0.ɵɵelementStart(16, "div", 16);
                i0.ɵɵelementStart(17, "ul", 17);
                i0.ɵɵelementStart(18, "li", 18);
                i0.ɵɵelementStart(19, "a", 19);
                i0.ɵɵtext(20, "Intro");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "li", 20);
                i0.ɵɵelementStart(22, "a", 21);
                i0.ɵɵtext(23, "Home ");
                i0.ɵɵelement(24, "i", 22);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(25, "div", 23);
                i0.ɵɵelementStart(26, "div", 24);
                i0.ɵɵelementStart(27, "div", 25);
                i0.ɵɵelementStart(28, "ul", 26);
                i0.ɵɵelementStart(29, "li", 27);
                i0.ɵɵelementStart(30, "a", 28);
                i0.ɵɵtext(31, "Default");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(32, "li", 29);
                i0.ɵɵelementStart(33, "a", 30);
                i0.ɵɵtext(34, "Incredible");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(35, "li", 29);
                i0.ɵɵelementStart(36, "a", 31);
                i0.ɵɵtext(37, "Studio");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(38, "li", 29);
                i0.ɵɵelementStart(39, "a", 32);
                i0.ɵɵtext(40, "Allure");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(41, "li", 29);
                i0.ɵɵelementStart(42, "a", 33);
                i0.ɵɵtext(43, "Inspire");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(44, "li", 29);
                i0.ɵɵelementStart(45, "a", 34);
                i0.ɵɵtext(46, "Portfolio");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(47, "li", 29);
                i0.ɵɵelementStart(48, "a", 35);
                i0.ɵɵtext(49, "Creative");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(50, "li", 29);
                i0.ɵɵelementStart(51, "a", 36);
                i0.ɵɵtext(52, "Projects");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(53, "div", 37);
                i0.ɵɵelementStart(54, "ul", 26);
                i0.ɵɵelementStart(55, "li", 29);
                i0.ɵɵelementStart(56, "a", 38);
                i0.ɵɵtext(57, "Discover");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(58, "li", 29);
                i0.ɵɵelementStart(59, "a", 39);
                i0.ɵɵtext(60, "Brave");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(61, "li", 29);
                i0.ɵɵelementStart(62, "a", 40);
                i0.ɵɵtext(63, "Business");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(64, "li", 29);
                i0.ɵɵelementStart(65, "a", 41);
                i0.ɵɵtext(66, "Corporate");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(67, "li", 29);
                i0.ɵɵelementStart(68, "a", 42);
                i0.ɵɵtext(69, "Web Agency");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(70, "li", 29);
                i0.ɵɵelementStart(71, "a", 43);
                i0.ɵɵtext(72, "Aspire");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(73, "li", 29);
                i0.ɵɵelementStart(74, "a", 44);
                i0.ɵɵtext(75, "Showcase");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(76, "li", 29);
                i0.ɵɵelementStart(77, "a", 45);
                i0.ɵɵtext(78, "News");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(79, "li", 46);
                i0.ɵɵelementStart(80, "a", 47);
                i0.ɵɵtext(81, "Pages");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(82, "ul", 48);
                i0.ɵɵelementStart(83, "li", 49);
                i0.ɵɵelementStart(84, "a", 50);
                i0.ɵɵtext(85, "About");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(86, "ul", 51);
                i0.ɵɵelementStart(87, "li", 29);
                i0.ɵɵelementStart(88, "a", 52);
                i0.ɵɵtext(89, "About 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(90, "li", 29);
                i0.ɵɵelementStart(91, "a", 53);
                i0.ɵɵtext(92, "About 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(93, "li", 29);
                i0.ɵɵelementStart(94, "a", 54);
                i0.ɵɵtext(95, "About 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(96, "li", 29);
                i0.ɵɵelementStart(97, "a", 55);
                i0.ɵɵtext(98, "About 4");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(99, "li", 56);
                i0.ɵɵelementStart(100, "li", 29);
                i0.ɵɵelementStart(101, "a", 57);
                i0.ɵɵtext(102, "About me 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(103, "li", 29);
                i0.ɵɵelementStart(104, "a", 58);
                i0.ɵɵtext(105, "About me 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(106, "li", 29);
                i0.ɵɵelementStart(107, "a", 59);
                i0.ɵɵtext(108, "About me 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(109, "li", 49);
                i0.ɵɵelementStart(110, "a", 60);
                i0.ɵɵtext(111, "Portfolios");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(112, "ul", 61);
                i0.ɵɵelementStart(113, "li", 29);
                i0.ɵɵelementStart(114, "a", 62);
                i0.ɵɵtext(115, "Case Studies 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(116, "li", 29);
                i0.ɵɵelementStart(117, "a", 63);
                i0.ɵɵtext(118, "Case Studies 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(119, "li", 29);
                i0.ɵɵelementStart(120, "a", 64);
                i0.ɵɵtext(121, "Single item 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(122, "li", 29);
                i0.ɵɵelementStart(123, "a", 65);
                i0.ɵɵtext(124, "Single item 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(125, "li", 29);
                i0.ɵɵelementStart(126, "a", 66);
                i0.ɵɵtext(127, "Single item 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(128, "li", 29);
                i0.ɵɵelementStart(129, "a", 67);
                i0.ɵɵtext(130, "Single item 4");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(131, "li", 29);
                i0.ɵɵelementStart(132, "a", 68);
                i0.ɵɵtext(133, "Single item 5");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(134, "li", 29);
                i0.ɵɵelementStart(135, "a", 69);
                i0.ɵɵtext(136, "Single item 6");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(137, "li", 29);
                i0.ɵɵelementStart(138, "a", 70);
                i0.ɵɵtext(139, "Single item 7");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(140, "li", 29);
                i0.ɵɵelementStart(141, "a", 71);
                i0.ɵɵtext(142, "Single item 8");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(143, "li", 29);
                i0.ɵɵelementStart(144, "a", 72);
                i0.ɵɵtext(145, "Single item 9");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(146, "li", 49);
                i0.ɵɵelementStart(147, "a", 73);
                i0.ɵɵtext(148, "Login & Signup");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(149, "ul", 74);
                i0.ɵɵelementStart(150, "li", 29);
                i0.ɵɵelementStart(151, "a", 75);
                i0.ɵɵtext(152, "Login & Signup");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(153, "li", 29);
                i0.ɵɵelementStart(154, "a", 76);
                i0.ɵɵtext(155, "Signup 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(156, "li", 29);
                i0.ɵɵelementStart(157, "a", 77);
                i0.ɵɵtext(158, "Signup 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(159, "li", 29);
                i0.ɵɵelementStart(160, "a", 78);
                i0.ɵɵtext(161, "Signup 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(162, "li", 29);
                i0.ɵɵelementStart(163, "a", 79);
                i0.ɵɵtext(164, "Signup 4");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(165, "li", 29);
                i0.ɵɵelementStart(166, "a", 80);
                i0.ɵɵtext(167, "Signup 5");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(168, "li", 29);
                i0.ɵɵelementStart(169, "a", 81);
                i0.ɵɵtext(170, "Signup 6");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(171, "li", 29);
                i0.ɵɵelementStart(172, "a", 82);
                i0.ɵɵtext(173, "Signup 7");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(174, "li", 29);
                i0.ɵɵelementStart(175, "a", 83);
                i0.ɵɵtext(176, "Signup 8");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(177, "li", 29);
                i0.ɵɵelementStart(178, "a", 84);
                i0.ɵɵtext(179, "Signup 9");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(180, "li", 29);
                i0.ɵɵelementStart(181, "a", 85);
                i0.ɵɵtext(182, "Signup 10");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(183, "li", 29);
                i0.ɵɵelementStart(184, "a", 86);
                i0.ɵɵtext(185, "Signup 11");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(186, "li", 29);
                i0.ɵɵelementStart(187, "a", 87);
                i0.ɵɵtext(188, "Signup 12");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(189, "li", 29);
                i0.ɵɵelementStart(190, "a", 88);
                i0.ɵɵtext(191, "login 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(192, "li", 29);
                i0.ɵɵelementStart(193, "a", 89);
                i0.ɵɵtext(194, "Login 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(195, "li", 29);
                i0.ɵɵelementStart(196, "a", 90);
                i0.ɵɵtext(197, "Login 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(198, "li", 29);
                i0.ɵɵelementStart(199, "a", 91);
                i0.ɵɵtext(200, "Login 4");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(201, "li", 29);
                i0.ɵɵelementStart(202, "a", 92);
                i0.ɵɵtext(203, "Login 5");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(204, "li", 29);
                i0.ɵɵelementStart(205, "a", 93);
                i0.ɵɵtext(206, "Login 6");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(207, "li", 29);
                i0.ɵɵelementStart(208, "a", 94);
                i0.ɵɵtext(209, "Login 7");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(210, "li", 29);
                i0.ɵɵelementStart(211, "a", 95);
                i0.ɵɵtext(212, "Login 8");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(213, "li", 29);
                i0.ɵɵelementStart(214, "a", 96);
                i0.ɵɵtext(215, "Login 9");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(216, "li", 29);
                i0.ɵɵelementStart(217, "a", 97);
                i0.ɵɵtext(218, "Login 10");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(219, "li", 29);
                i0.ɵɵelementStart(220, "a", 98);
                i0.ɵɵtext(221, "Login 11");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(222, "li", 29);
                i0.ɵɵelementStart(223, "a", 99);
                i0.ɵɵtext(224, "Login 12");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(225, "li", 49);
                i0.ɵɵelementStart(226, "a", 100);
                i0.ɵɵtext(227, "Services");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(228, "ul", 101);
                i0.ɵɵelementStart(229, "li", 29);
                i0.ɵɵelementStart(230, "a", 102);
                i0.ɵɵtext(231, "Services 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(232, "li", 29);
                i0.ɵɵelementStart(233, "a", 103);
                i0.ɵɵtext(234, "Services 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(235, "li", 29);
                i0.ɵɵelementStart(236, "a", 104);
                i0.ɵɵtext(237, "Services 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(238, "li", 29);
                i0.ɵɵelementStart(239, "a", 105);
                i0.ɵɵtext(240, "Services 4");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(241, "li", 49);
                i0.ɵɵelementStart(242, "a", 106);
                i0.ɵɵtext(243, "Search results");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(244, "ul", 107);
                i0.ɵɵelementStart(245, "li", 29);
                i0.ɵɵelementStart(246, "a", 108);
                i0.ɵɵtext(247, "Grid View");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(248, "li", 29);
                i0.ɵɵelementStart(249, "a", 109);
                i0.ɵɵtext(250, "Grid View ");
                i0.ɵɵelementStart(251, "span", 110);
                i0.ɵɵtext(252, "(with Sidebar)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(253, "li", 29);
                i0.ɵɵelementStart(254, "a", 111);
                i0.ɵɵtext(255, "List View 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(256, "li", 29);
                i0.ɵɵelementStart(257, "a", 112);
                i0.ɵɵtext(258, "List View 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(259, "li", 29);
                i0.ɵɵelementStart(260, "a", 113);
                i0.ɵɵtext(261, "List View ");
                i0.ɵɵelementStart(262, "span", 110);
                i0.ɵɵtext(263, "(with Sidebar)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(264, "li", 49);
                i0.ɵɵelementStart(265, "a", 114);
                i0.ɵɵtext(266, "Profiles");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(267, "ul", 115);
                i0.ɵɵelementStart(268, "li", 29);
                i0.ɵɵelementStart(269, "a", 116);
                i0.ɵɵtext(270, "Main");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(271, "li", 29);
                i0.ɵɵelementStart(272, "a", 117);
                i0.ɵɵtext(273, "User");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(274, "li", 29);
                i0.ɵɵelementStart(275, "a", 118);
                i0.ɵɵtext(276, "Projects");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(277, "li", 29);
                i0.ɵɵelementStart(278, "a", 119);
                i0.ɵɵtext(279, "Comments");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(280, "li", 29);
                i0.ɵɵelementStart(281, "a", 120);
                i0.ɵɵtext(282, "History");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(283, "li", 29);
                i0.ɵɵelementStart(284, "a", 121);
                i0.ɵɵtext(285, "Reviews");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(286, "li", 29);
                i0.ɵɵelementStart(287, "a", 122);
                i0.ɵɵtext(288, "Settings");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(289, "li", 29);
                i0.ɵɵelementStart(290, "a", 123);
                i0.ɵɵtext(291, "Contacts 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(292, "li", 29);
                i0.ɵɵelementStart(293, "a", 124);
                i0.ɵɵtext(294, "Contacts 1 ");
                i0.ɵɵelementStart(295, "span", 110);
                i0.ɵɵtext(296, "(full width)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(297, "li", 29);
                i0.ɵɵelementStart(298, "a", 125);
                i0.ɵɵtext(299, "Contacts 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(300, "li", 29);
                i0.ɵɵelementStart(301, "a", 126);
                i0.ɵɵtext(302, "Contacts 2 ");
                i0.ɵɵelementStart(303, "span", 110);
                i0.ɵɵtext(304, "(full width)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(305, "li", 49);
                i0.ɵɵelementStart(306, "a", 127);
                i0.ɵɵtext(307, "\u0421ontacts");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(308, "ul", 128);
                i0.ɵɵelementStart(309, "li", 29);
                i0.ɵɵelementStart(310, "a", 129);
                i0.ɵɵtext(311, "\u0421ontacts 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(312, "li", 29);
                i0.ɵɵelementStart(313, "a", 130);
                i0.ɵɵtext(314, "\u0421ontacts 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(315, "li", 29);
                i0.ɵɵelementStart(316, "a", 131);
                i0.ɵɵtext(317, "\u0421ontacts 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(318, "li", 29);
                i0.ɵɵelementStart(319, "a", 132);
                i0.ɵɵtext(320, "\u0421ontacts 4");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(321, "li", 29);
                i0.ɵɵelementStart(322, "a", 133);
                i0.ɵɵtext(323, "\u0421ontacts 5");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(324, "li", 29);
                i0.ɵɵelementStart(325, "a", 134);
                i0.ɵɵtext(326, "\u0421ontacts 6");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(327, "li", 29);
                i0.ɵɵelementStart(328, "a", 135);
                i0.ɵɵtext(329, "\u0421ontacts 7");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(330, "li", 29);
                i0.ɵɵelementStart(331, "a", 136);
                i0.ɵɵtext(332, "\u0421ontacts 8");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(333, "li", 49);
                i0.ɵɵelementStart(334, "a", 137);
                i0.ɵɵtext(335, "Jobs");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(336, "ul", 138);
                i0.ɵɵelementStart(337, "li", 29);
                i0.ɵɵelementStart(338, "a", 139);
                i0.ɵɵtext(339, "Jobs");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(340, "li", 29);
                i0.ɵɵelementStart(341, "a", 140);
                i0.ɵɵtext(342, "Jobs Description");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(343, "li", 29);
                i0.ɵɵelementStart(344, "a", 141);
                i0.ɵɵtext(345, "Pricing");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(346, "li", 49);
                i0.ɵɵelementStart(347, "a", 142);
                i0.ɵɵtext(348, "FAQ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(349, "ul", 143);
                i0.ɵɵelementStart(350, "li", 29);
                i0.ɵɵelementStart(351, "a", 144);
                i0.ɵɵtext(352, "FAQ 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(353, "li", 29);
                i0.ɵɵelementStart(354, "a", 145);
                i0.ɵɵtext(355, "FAQ 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(356, "li", 49);
                i0.ɵɵelementStart(357, "a", 146);
                i0.ɵɵtext(358, "Others");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(359, "ul", 147);
                i0.ɵɵelementStart(360, "li", 29);
                i0.ɵɵelementStart(361, "a", 148);
                i0.ɵɵtext(362, "Clients");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(363, "li", 29);
                i0.ɵɵelementStart(364, "a", 149);
                i0.ɵɵtext(365, "Terms");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(366, "li", 29);
                i0.ɵɵelementStart(367, "a", 150);
                i0.ɵɵtext(368, "\u0421ookies");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(369, "li", 29);
                i0.ɵɵelementStart(370, "a", 151);
                i0.ɵɵtext(371, "Invoice");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(372, "li", 49);
                i0.ɵɵelementStart(373, "a", 152);
                i0.ɵɵtext(374, "404");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(375, "ul", 153);
                i0.ɵɵelementStart(376, "li", 29);
                i0.ɵɵelementStart(377, "a", 154);
                i0.ɵɵtext(378, "404 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(379, "li", 29);
                i0.ɵɵelementStart(380, "a", 155);
                i0.ɵɵtext(381, "404 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(382, "li", 49);
                i0.ɵɵelementStart(383, "a", 156);
                i0.ɵɵtext(384, "Coming Soon");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(385, "ul", 157);
                i0.ɵɵelementStart(386, "li", 29);
                i0.ɵɵelementStart(387, "a", 158);
                i0.ɵɵtext(388, "Coming Soon");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(389, "li", 159);
                i0.ɵɵelementStart(390, "a", 160);
                i0.ɵɵtext(391, "Blog");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(392, "ul", 161);
                i0.ɵɵelementStart(393, "li", 49);
                i0.ɵɵelementStart(394, "a", 162);
                i0.ɵɵtext(395, "Minimal");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(396, "ul", 163);
                i0.ɵɵelementStart(397, "li", 29);
                i0.ɵɵelementStart(398, "a", 164);
                i0.ɵɵtext(399, "Minimal 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(400, "li", 29);
                i0.ɵɵelementStart(401, "a", 165);
                i0.ɵɵtext(402, "Minimal 1 ");
                i0.ɵɵelementStart(403, "span", 110);
                i0.ɵɵtext(404, "(left sidebar)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(405, "li", 29);
                i0.ɵɵelementStart(406, "a", 166);
                i0.ɵɵtext(407, "Minimal 1 ");
                i0.ɵɵelementStart(408, "span", 110);
                i0.ɵɵtext(409, "(right sidebar)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(410, "li", 29);
                i0.ɵɵelementStart(411, "a", 167);
                i0.ɵɵtext(412, "Minimal 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(413, "li", 29);
                i0.ɵɵelementStart(414, "a", 168);
                i0.ɵɵtext(415, "Minimal 2 ");
                i0.ɵɵelementStart(416, "span", 110);
                i0.ɵɵtext(417, "(left sidebar)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(418, "li", 29);
                i0.ɵɵelementStart(419, "a", 169);
                i0.ɵɵtext(420, "Minimal 2 ");
                i0.ɵɵelementStart(421, "span", 110);
                i0.ɵɵtext(422, "(right sidebar)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(423, "li", 29);
                i0.ɵɵelementStart(424, "a", 170);
                i0.ɵɵtext(425, "Minimal 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(426, "li", 29);
                i0.ɵɵelementStart(427, "a", 171);
                i0.ɵɵtext(428, "Minimal 3 ");
                i0.ɵɵelementStart(429, "span", 110);
                i0.ɵɵtext(430, "(left sidebar)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(431, "li", 29);
                i0.ɵɵelementStart(432, "a", 172);
                i0.ɵɵtext(433, "Minimal 3 ");
                i0.ɵɵelementStart(434, "span", 110);
                i0.ɵɵtext(435, "(right sidebar)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(436, "li", 29);
                i0.ɵɵelementStart(437, "a", 173);
                i0.ɵɵtext(438, "Minimal 4");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(439, "li", 29);
                i0.ɵɵelementStart(440, "a", 174);
                i0.ɵɵtext(441, "Minimal 4 ");
                i0.ɵɵelementStart(442, "span", 110);
                i0.ɵɵtext(443, "(left sidebar)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(444, "li", 29);
                i0.ɵɵelementStart(445, "a", 175);
                i0.ɵɵtext(446, "Minimal 4 ");
                i0.ɵɵelementStart(447, "span", 110);
                i0.ɵɵtext(448, "(right sidebar)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(449, "li", 49);
                i0.ɵɵelementStart(450, "a", 176);
                i0.ɵɵtext(451, "Grid Background");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(452, "ul", 177);
                i0.ɵɵelementStart(453, "li", 29);
                i0.ɵɵelementStart(454, "a", 178);
                i0.ɵɵtext(455, "Column 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(456, "li", 29);
                i0.ɵɵelementStart(457, "a", 179);
                i0.ɵɵtext(458, "Column 2 ");
                i0.ɵɵelementStart(459, "span", 110);
                i0.ɵɵtext(460, "(left sidebar)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(461, "li", 29);
                i0.ɵɵelementStart(462, "a", 180);
                i0.ɵɵtext(463, "Column 2 ");
                i0.ɵɵelementStart(464, "span", 110);
                i0.ɵɵtext(465, "(right sidebar)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(466, "li", 29);
                i0.ɵɵelementStart(467, "a", 181);
                i0.ɵɵtext(468, "Column 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(469, "li", 29);
                i0.ɵɵelementStart(470, "a", 182);
                i0.ɵɵtext(471, "Column 3 ");
                i0.ɵɵelementStart(472, "span", 110);
                i0.ɵɵtext(473, "(full width)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(474, "li", 29);
                i0.ɵɵelementStart(475, "a", 183);
                i0.ɵɵtext(476, "Column 4");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(477, "li", 29);
                i0.ɵɵelementStart(478, "a", 184);
                i0.ɵɵtext(479, "Column 4 ");
                i0.ɵɵelementStart(480, "span", 110);
                i0.ɵɵtext(481, "(full width)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(482, "li", 49);
                i0.ɵɵelementStart(483, "a", 185);
                i0.ɵɵtext(484, "Grid Classic");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(485, "ul", 186);
                i0.ɵɵelementStart(486, "li", 29);
                i0.ɵɵelementStart(487, "a", 187);
                i0.ɵɵtext(488, "Column 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(489, "li", 29);
                i0.ɵɵelementStart(490, "a", 188);
                i0.ɵɵtext(491, "Column 2 ");
                i0.ɵɵelementStart(492, "span", 110);
                i0.ɵɵtext(493, "(left sidebar)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(494, "li", 29);
                i0.ɵɵelementStart(495, "a", 189);
                i0.ɵɵtext(496, "Column 2 ");
                i0.ɵɵelementStart(497, "span", 110);
                i0.ɵɵtext(498, "(right sidebar)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(499, "li", 29);
                i0.ɵɵelementStart(500, "a", 190);
                i0.ɵɵtext(501, "Column 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(502, "li", 29);
                i0.ɵɵelementStart(503, "a", 191);
                i0.ɵɵtext(504, "Column 3 ");
                i0.ɵɵelementStart(505, "span", 110);
                i0.ɵɵtext(506, "(full width)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(507, "li", 29);
                i0.ɵɵelementStart(508, "a", 192);
                i0.ɵɵtext(509, "Column 4");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(510, "li", 29);
                i0.ɵɵelementStart(511, "a", 193);
                i0.ɵɵtext(512, "Column 4 ");
                i0.ɵɵelementStart(513, "span", 110);
                i0.ɵɵtext(514, "(full width)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(515, "li", 49);
                i0.ɵɵelementStart(516, "a", 194);
                i0.ɵɵtext(517, "Grid Modern");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(518, "ul", 195);
                i0.ɵɵelementStart(519, "li", 29);
                i0.ɵɵelementStart(520, "a", 196);
                i0.ɵɵtext(521, "Modern 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(522, "li", 29);
                i0.ɵɵelementStart(523, "a", 197);
                i0.ɵɵtext(524, "Modern 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(525, "li", 49);
                i0.ɵɵelementStart(526, "a", 198);
                i0.ɵɵtext(527, "Grid Overlap");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(528, "ul", 199);
                i0.ɵɵelementStart(529, "li", 29);
                i0.ɵɵelementStart(530, "a", 200);
                i0.ɵɵtext(531, "Column 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(532, "li", 29);
                i0.ɵɵelementStart(533, "a", 201);
                i0.ɵɵtext(534, "Column 2 ");
                i0.ɵɵelementStart(535, "span", 110);
                i0.ɵɵtext(536, "(left sidebar)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(537, "li", 29);
                i0.ɵɵelementStart(538, "a", 202);
                i0.ɵɵtext(539, "Column 2 ");
                i0.ɵɵelementStart(540, "span", 110);
                i0.ɵɵtext(541, "(right sidebar)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(542, "li", 29);
                i0.ɵɵelementStart(543, "a", 203);
                i0.ɵɵtext(544, "Column 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(545, "li", 29);
                i0.ɵɵelementStart(546, "a", 204);
                i0.ɵɵtext(547, "Column 3 ");
                i0.ɵɵelementStart(548, "span", 110);
                i0.ɵɵtext(549, "(full width)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(550, "li", 29);
                i0.ɵɵelementStart(551, "a", 205);
                i0.ɵɵtext(552, "Column 4 ");
                i0.ɵɵelementStart(553, "span", 110);
                i0.ɵɵtext(554, "(full width)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(555, "li", 49);
                i0.ɵɵelementStart(556, "a", 206);
                i0.ɵɵtext(557, "Masonry");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(558, "ul", 207);
                i0.ɵɵelementStart(559, "li", 29);
                i0.ɵɵelementStart(560, "a", 208);
                i0.ɵɵtext(561, "Column 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(562, "li", 29);
                i0.ɵɵelementStart(563, "a", 209);
                i0.ɵɵtext(564, "Column 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(565, "li", 29);
                i0.ɵɵelementStart(566, "a", 210);
                i0.ɵɵtext(567, "Column 3 ");
                i0.ɵɵelementStart(568, "span", 110);
                i0.ɵɵtext(569, "(full width)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(570, "li", 29);
                i0.ɵɵelementStart(571, "a", 211);
                i0.ɵɵtext(572, "Column 4");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(573, "li", 29);
                i0.ɵɵelementStart(574, "a", 212);
                i0.ɵɵtext(575, "Column 4 ");
                i0.ɵɵelementStart(576, "span", 110);
                i0.ɵɵtext(577, "(full width)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(578, "li", 49);
                i0.ɵɵelementStart(579, "a", 213);
                i0.ɵɵtext(580, "Single items");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(581, "ul", 214);
                i0.ɵɵelementStart(582, "li", 29);
                i0.ɵɵelementStart(583, "a", 215);
                i0.ɵɵtext(584, "Single item 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(585, "li", 29);
                i0.ɵɵelementStart(586, "a", 216);
                i0.ɵɵtext(587, "Single item 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(588, "li", 159);
                i0.ɵɵelementStart(589, "a", 217);
                i0.ɵɵtext(590, "Features");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(591, "ul", 218);
                i0.ɵɵelementStart(592, "li", 29);
                i0.ɵɵelementStart(593, "a", 219);
                i0.ɵɵtext(594, "Headers");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(595, "li", 29);
                i0.ɵɵelementStart(596, "a", 220);
                i0.ɵɵtext(597, "Promo Blocks");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(598, "li", 49);
                i0.ɵɵelementStart(599, "a", 221);
                i0.ɵɵtext(600, "Sliders");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(601, "ul", 222);
                i0.ɵɵelementStart(602, "li", 29);
                i0.ɵɵelementStart(603, "a", 223);
                i0.ɵɵtext(604, "Revolution sliders");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(605, "li", 29);
                i0.ɵɵelementStart(606, "a", 224);
                i0.ɵɵtext(607, "Master sliders");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(608, "li", 49);
                i0.ɵɵelementStart(609, "a", 225);
                i0.ɵɵtext(610, "Pop-ups");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(611, "ul", 226);
                i0.ɵɵelementStart(612, "li", 29);
                i0.ɵɵelementStart(613, "a", 227);
                i0.ɵɵtext(614, "Lightbox");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(615, "li", 29);
                i0.ɵɵelementStart(616, "a", 228);
                i0.ɵɵtext(617, "Modals");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(618, "li", 29);
                i0.ɵɵelementStart(619, "a", 229);
                i0.ɵɵtext(620, "Gallery");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(621, "li", 49);
                i0.ɵɵelementStart(622, "a", 230);
                i0.ɵɵtext(623, "Maps");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(624, "ul", 231);
                i0.ɵɵelementStart(625, "li", 29);
                i0.ɵɵelementStart(626, "a", 232);
                i0.ɵɵtext(627, "Google Maps");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(628, "li", 29);
                i0.ɵɵelementStart(629, "a", 233);
                i0.ɵɵtext(630, "Maps With Pins");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(631, "li", 29);
                i0.ɵɵelementStart(632, "a", 234);
                i0.ɵɵtext(633, "Vector Maps");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(634, "li", 49);
                i0.ɵɵelementStart(635, "a", 235);
                i0.ɵɵtext(636, "Footers");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(637, "ul", 236);
                i0.ɵɵelementStart(638, "li", 29);
                i0.ɵɵelementStart(639, "a", 237);
                i0.ɵɵtext(640, "Classic Footers");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(641, "li", 29);
                i0.ɵɵelementStart(642, "a", 238);
                i0.ɵɵtext(643, "Contact Forms");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(644, "li", 29);
                i0.ɵɵelementStart(645, "a", 239);
                i0.ɵɵtext(646, "Footers Maps");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(647, "li", 29);
                i0.ɵɵelementStart(648, "a", 240);
                i0.ɵɵtext(649, "Modern Footers");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(650, "li", 18);
                i0.ɵɵelementStart(651, "a", 241);
                i0.ɵɵtext(652, "Shortcodes");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(653, "li", 159);
                i0.ɵɵelementStart(654, "a", 242);
                i0.ɵɵtext(655, "Demos");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(656, "ul", 243);
                i0.ɵɵelementStart(657, "li", 49);
                i0.ɵɵelementStart(658, "a", 244);
                i0.ɵɵtext(659, "One Pages");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(660, "ul", 245);
                i0.ɵɵelementStart(661, "li", 29);
                i0.ɵɵelementStart(662, "a", 246);
                i0.ɵɵtext(663, "Accounting");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(664, "li", 29);
                i0.ɵɵelementStart(665, "a", 247);
                i0.ɵɵtext(666, "Agency");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(667, "li", 29);
                i0.ɵɵelementStart(668, "a", 248);
                i0.ɵɵtext(669, "App");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(670, "li", 29);
                i0.ɵɵelementStart(671, "a", 249);
                i0.ɵɵtext(672, "Architecture");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(673, "li", 29);
                i0.ɵɵelementStart(674, "a", 250);
                i0.ɵɵtext(675, "Business");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(676, "li", 29);
                i0.ɵɵelementStart(677, "a", 251);
                i0.ɵɵtext(678, "Charity");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(679, "li", 29);
                i0.ɵɵelementStart(680, "a", 252);
                i0.ɵɵtext(681, "\u0421onsulting");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(682, "li", 29);
                i0.ɵɵelementStart(683, "a", 253);
                i0.ɵɵtext(684, "Construction");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(685, "li", 29);
                i0.ɵɵelementStart(686, "a", 254);
                i0.ɵɵtext(687, "Courses");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(688, "li", 29);
                i0.ɵɵelementStart(689, "a", 255);
                i0.ɵɵtext(690, "Corporate");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(691, "li", 29);
                i0.ɵɵelementStart(692, "a", 256);
                i0.ɵɵtext(693, "Event");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(694, "li", 29);
                i0.ɵɵelementStart(695, "a", 257);
                i0.ɵɵtext(696, "GYM");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(697, "li", 29);
                i0.ɵɵelementStart(698, "a", 258);
                i0.ɵɵtext(699, "Lawyer");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(700, "li", 29);
                i0.ɵɵelementStart(701, "a", 259);
                i0.ɵɵtext(702, "Music");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(703, "li", 29);
                i0.ɵɵelementStart(704, "a", 260);
                i0.ɵɵtext(705, "Photography");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(706, "li", 29);
                i0.ɵɵelementStart(707, "a", 261);
                i0.ɵɵtext(708, "Real Estate");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(709, "li", 29);
                i0.ɵɵelementStart(710, "a", 262);
                i0.ɵɵtext(711, "Restaurant");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(712, "li", 29);
                i0.ɵɵelementStart(713, "a", 263);
                i0.ɵɵtext(714, "Shipping");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(715, "li", 29);
                i0.ɵɵelementStart(716, "a", 264);
                i0.ɵɵtext(717, "Spa");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(718, "li", 29);
                i0.ɵɵelementStart(719, "a", 265);
                i0.ɵɵtext(720, "Travel");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(721, "li", 29);
                i0.ɵɵelementStart(722, "a", 266);
                i0.ɵɵtext(723, "Wedding");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(724, "li", 29);
                i0.ɵɵelementStart(725, "a", 267);
                i0.ɵɵtext(726, "Admin Template ");
                i0.ɵɵelementStart(727, "span", 268);
                i0.ɵɵtext(728, "New");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(729, "li", 29);
                i0.ɵɵelementStart(730, "a", 269);
                i0.ɵɵtext(731, "E-Commerce ");
                i0.ɵɵelementStart(732, "span", 110);
                i0.ɵɵtext(733, "(44 Pages)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(734, "li", 29);
                i0.ɵɵelementStart(735, "a", 270);
                i0.ɵɵtext(736, "University ");
                i0.ɵɵelementStart(737, "span", 110);
                i0.ɵɵtext(738, "(13 Pages)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(739, "li", 29);
                i0.ɵɵelementStart(740, "a", 271);
                i0.ɵɵtext(741, "Marketing ");
                i0.ɵɵelementStart(742, "span", 110);
                i0.ɵɵtext(743, "(10 Pages)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(744, "li", 29);
                i0.ɵɵelementStart(745, "a", 272);
                i0.ɵɵtext(746, "Real Estate ");
                i0.ɵɵelementStart(747, "span", 110);
                i0.ɵɵtext(748, "(13 Pages)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(749, "li", 29);
                i0.ɵɵelementStart(750, "a", 273);
                i0.ɵɵtext(751, "Blogs & Magazines ");
                i0.ɵɵelementStart(752, "span", 110);
                i0.ɵɵtext(753, "(6 Pages)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(754, "div", 274);
                i0.ɵɵelementStart(755, "a", 275);
                i0.ɵɵtext(756, "Purchase now");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i4.NgbNavbar], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeaderComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fs-header',
                        templateUrl: './header.component.html',
                    }]
            }], function () { return [{ type: i1.Title }, { type: i2.ActivatedRoute }, { type: i1$1.ConfigStateService }]; }, null);
    })();

    var FooterComponent = /** @class */ (function () {
        function FooterComponent() {
        }
        return FooterComponent;
    }());
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["fs-footer"]], decls: 144, vars: 0, consts: [["id", "contacts-section", 1, "g-bg-black-opacity-0_9", "g-color-white-opacity-0_8", "g-py-60"], [1, "container"], [1, "row"], [1, "col-lg-3", "col-md-6", "g-mb-40", "g-mb-0--lg"], [1, "u-heading-v2-3--bottom", "g-brd-white-opacity-0_8", "g-mb-20"], [1, "u-heading-v2__title", "h6", "text-uppercase", "mb-0"], [1, "h6", "g-mb-2"], ["href", "#", 1, "g-color-white-opacity-0_8", "g-color-white--hover"], [1, "small", "g-color-white-opacity-0_6"], [1, "g-brd-white-opacity-0_1", "g-my-10"], [1, "text-uppercase1"], [1, "list-unstyled", "g-mt-minus-10", "mb-0"], [1, "g-pos-rel", "g-brd-bottom", "g-brd-white-opacity-0_1", "g-py-10"], [1, "h6", "g-pr-20", "mb-0"], [1, "fa", "fa-angle-right", "g-absolute-centered--y", "g-right-0"], [1, "g-pos-rel", "g-py-10"], [1, "col-lg-3", "col-md-6"], [1, "g-bg-no-repeat", "g-font-size-12", "mb-0", 2, "background-image", "url(./assets/img/maps/map2.png)"], [1, "d-flex", "g-mb-20"], [1, "g-mr-10"], [1, "u-icon-v3", "u-icon-size--xs", "g-bg-white-opacity-0_1", "g-color-white-opacity-0_6"], [1, "fa", "fa-map-marker"], [1, "mb-0"], [1, "fa", "fa-phone"], [1, "fa", "fa-globe"], ["href", "mailto:info@htmlstream.com", 1, "g-color-white-opacity-0_8", "g-color-white--hover"], [1, "g-bg-gray-dark-v1", "g-color-white-opacity-0_8", "g-py-20"], [1, "col-md-8", "text-center", "text-md-left", "g-mb-10", "g-mb-0--md"], [1, "d-lg-flex"], [1, "d-block", "g-font-size-default", "g-mr-10", "g-mb-10", "g-mb-0--md"], [1, "u-list-inline"], [1, "list-inline-item"], [1, "col-md-4", "align-self-center"], [1, "list-inline", "text-center", "text-md-right", "mb-0"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Facebook", 1, "list-inline-item", "g-mx-10"], ["href", "#", 1, "g-color-white-opacity-0_5", "g-color-white--hover"], [1, "fa", "fa-facebook"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Skype", 1, "list-inline-item", "g-mx-10"], [1, "fa", "fa-skype"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Linkedin", 1, "list-inline-item", "g-mx-10"], [1, "fa", "fa-linkedin"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Pinterest", 1, "list-inline-item", "g-mx-10"], [1, "fa", "fa-pinterest"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Twitter", 1, "list-inline-item", "g-mx-10"], [1, "fa", "fa-twitter"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Dribbble", 1, "list-inline-item", "g-mx-10"], [1, "fa", "fa-dribbble"]], template: function FooterComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵelementStart(4, "div", 4);
                i0.ɵɵelementStart(5, "h2", 5);
                i0.ɵɵtext(6, "About Us");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "p");
                i0.ɵɵtext(8, "About Unify dolor sit amet, consectetur adipiscing elit. Maecenas eget nisl id libero tincidunt sodales. ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 3);
                i0.ɵɵelementStart(10, "div", 4);
                i0.ɵɵelementStart(11, "h2", 5);
                i0.ɵɵtext(12, "Latest Posts");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "article");
                i0.ɵɵelementStart(14, "h3", 6);
                i0.ɵɵelementStart(15, "a", 7);
                i0.ɵɵtext(16, "Incredible template");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "div", 8);
                i0.ɵɵtext(18, "May 8, 2017");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(19, "hr", 9);
                i0.ɵɵelementStart(20, "article");
                i0.ɵɵelementStart(21, "h3", 6);
                i0.ɵɵelementStart(22, "a", 7);
                i0.ɵɵtext(23, "New features");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(24, "div", 8);
                i0.ɵɵtext(25, "June 23, 2017");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(26, "hr", 9);
                i0.ɵɵelementStart(27, "article");
                i0.ɵɵelementStart(28, "h3", 6);
                i0.ɵɵelementStart(29, "a", 7);
                i0.ɵɵtext(30, "New terms and conditions");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(31, "div", 8);
                i0.ɵɵtext(32, "September 15, 2017");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(33, "div", 3);
                i0.ɵɵelementStart(34, "div", 4);
                i0.ɵɵelementStart(35, "h2", 5);
                i0.ɵɵtext(36, "Useful Links");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(37, "nav", 10);
                i0.ɵɵelementStart(38, "ul", 11);
                i0.ɵɵelementStart(39, "li", 12);
                i0.ɵɵelementStart(40, "h4", 13);
                i0.ɵɵelementStart(41, "a", 7);
                i0.ɵɵtext(42, "About Us");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(43, "i", 14);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(44, "li", 12);
                i0.ɵɵelementStart(45, "h4", 13);
                i0.ɵɵelementStart(46, "a", 7);
                i0.ɵɵtext(47, "Portfolio");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(48, "i", 14);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(49, "li", 12);
                i0.ɵɵelementStart(50, "h4", 13);
                i0.ɵɵelementStart(51, "a", 7);
                i0.ɵɵtext(52, "Our Services");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(53, "i", 14);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(54, "li", 12);
                i0.ɵɵelementStart(55, "h4", 13);
                i0.ɵɵelementStart(56, "a", 7);
                i0.ɵɵtext(57, "Latest Jobs");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(58, "i", 14);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(59, "li", 15);
                i0.ɵɵelementStart(60, "h4", 13);
                i0.ɵɵelementStart(61, "a", 7);
                i0.ɵɵtext(62, "Contact Us");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(63, "i", 14);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(64, "div", 16);
                i0.ɵɵelementStart(65, "div", 4);
                i0.ɵɵelementStart(66, "h2", 5);
                i0.ɵɵtext(67, "Our Contacts");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(68, "address", 17);
                i0.ɵɵelementStart(69, "div", 18);
                i0.ɵɵelementStart(70, "div", 19);
                i0.ɵɵelementStart(71, "span", 20);
                i0.ɵɵelement(72, "i", 21);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(73, "p", 22);
                i0.ɵɵtext(74, "795 Folsom Ave, Suite 600, ");
                i0.ɵɵelement(75, "br");
                i0.ɵɵtext(76, " San Francisco, CA 94107 795");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(77, "div", 18);
                i0.ɵɵelementStart(78, "div", 19);
                i0.ɵɵelementStart(79, "span", 20);
                i0.ɵɵelement(80, "i", 23);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(81, "p", 22);
                i0.ɵɵtext(82, "(+123) 456 7890 ");
                i0.ɵɵelement(83, "br");
                i0.ɵɵtext(84, " (+123) 456 7891");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(85, "div", 18);
                i0.ɵɵelementStart(86, "div", 19);
                i0.ɵɵelementStart(87, "span", 20);
                i0.ɵɵelement(88, "i", 24);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(89, "p", 22);
                i0.ɵɵelementStart(90, "a", 25);
                i0.ɵɵtext(91, "info@htmlstream.com");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(92, "br");
                i0.ɵɵelementStart(93, "a", 7);
                i0.ɵɵtext(94, "www.htmlstream.com");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(95, "footer", 26);
                i0.ɵɵelementStart(96, "div", 1);
                i0.ɵɵelementStart(97, "div", 2);
                i0.ɵɵelementStart(98, "div", 27);
                i0.ɵɵelementStart(99, "div", 28);
                i0.ɵɵelementStart(100, "small", 29);
                i0.ɵɵtext(101, "2020 \u00A9 All Rights Reserved.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(102, "ul", 30);
                i0.ɵɵelementStart(103, "li", 31);
                i0.ɵɵelementStart(104, "a", 7);
                i0.ɵɵtext(105, "Privacy Policy");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(106, "li", 31);
                i0.ɵɵelementStart(107, "span");
                i0.ɵɵtext(108, "|");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(109, "li", 31);
                i0.ɵɵelementStart(110, "a", 7);
                i0.ɵɵtext(111, "Terms of Use");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(112, "li", 31);
                i0.ɵɵelementStart(113, "span");
                i0.ɵɵtext(114, "|");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(115, "li", 31);
                i0.ɵɵelementStart(116, "a", 7);
                i0.ɵɵtext(117, "License");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(118, "li", 31);
                i0.ɵɵelementStart(119, "span");
                i0.ɵɵtext(120, "|");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(121, "li", 31);
                i0.ɵɵelementStart(122, "a", 7);
                i0.ɵɵtext(123, "Support");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(124, "div", 32);
                i0.ɵɵelementStart(125, "ul", 33);
                i0.ɵɵelementStart(126, "li", 34);
                i0.ɵɵelementStart(127, "a", 35);
                i0.ɵɵelement(128, "i", 36);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(129, "li", 37);
                i0.ɵɵelementStart(130, "a", 35);
                i0.ɵɵelement(131, "i", 38);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(132, "li", 39);
                i0.ɵɵelementStart(133, "a", 35);
                i0.ɵɵelement(134, "i", 40);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(135, "li", 41);
                i0.ɵɵelementStart(136, "a", 35);
                i0.ɵɵelement(137, "i", 42);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(138, "li", 43);
                i0.ɵɵelementStart(139, "a", 35);
                i0.ɵɵelement(140, "i", 44);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(141, "li", 45);
                i0.ɵɵelementStart(142, "a", 35);
                i0.ɵɵelement(143, "i", 46);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FooterComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fs-footer',
                        templateUrl: './footer.component.html',
                    }]
            }], function () { return []; }, null);
    })();

    function ApplicationLayoutComponent_fs_header_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "fs-header");
        }
    }
    function ApplicationLayoutComponent_fs_footer_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "fs-footer");
        }
    }
    var _c0 = function () { return { componentKey: "Theme.ApplicationLayoutHeaderComponent" }; };
    var _c1 = function () { return { componentKey: "Theme.ApplicationLayoutFooterComponent" }; };
    var ApplicationLayoutComponent = /** @class */ (function () {
        function ApplicationLayoutComponent(environment) {
            this.environment = environment;
            this.headerComponentKey = "Theme.ApplicationLayoutHeaderComponent" /* ApplicationLayoutHeader */;
            this.footerComponentKey = "Theme.ApplicationLayoutFooterComponent" /* ApplicationLayoutFooter */;
        }
        Object.defineProperty(ApplicationLayoutComponent.prototype, "appInfo", {
            get: function () {
                return this.environment.getEnvironment().application;
            },
            enumerable: false,
            configurable: true
        });
        return ApplicationLayoutComponent;
    }());
    ApplicationLayoutComponent.type = "application" /* application */;
    ApplicationLayoutComponent.ɵfac = function ApplicationLayoutComponent_Factory(t) { return new (t || ApplicationLayoutComponent)(i0.ɵɵdirectiveInject(i1$1.EnvironmentService)); };
    ApplicationLayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ApplicationLayoutComponent, selectors: [["fs-application-layout"]], decls: 6, vars: 4, consts: [[4, "abpReplaceableTemplate"], ["href", "#", "data-type", "fixed", "data-position", "{\n     \"bottom\": 15,\n     \"right\": 15\n   }", "data-offset-top", "400", "data-compensation", "#js-header", "data-show-effect", "zoomIn", 1, "js-go-to", "u-go-to-v1"], [1, "hs-icon", "hs-icon-arrow-top"]], template: function ApplicationLayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "main");
                i0.ɵɵtemplate(1, ApplicationLayoutComponent_fs_header_1_Template, 1, 0, "fs-header", 0);
                i0.ɵɵelement(2, "router-outlet");
                i0.ɵɵtemplate(3, ApplicationLayoutComponent_fs_footer_3_Template, 1, 0, "fs-footer", 0);
                i0.ɵɵelementStart(4, "a", 1);
                i0.ɵɵelement(5, "i", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("abpReplaceableTemplate", i0.ɵɵpureFunction0(2, _c0));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("abpReplaceableTemplate", i0.ɵɵpureFunction0(3, _c1));
            }
        }, directives: [i1$1.ReplaceableTemplateDirective, i2.RouterOutlet, HeaderComponent, FooterComponent], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApplicationLayoutComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fs-application-layout',
                        templateUrl: './application-layout.component.html',
                    }]
            }], function () { return [{ type: i1$1.EnvironmentService }]; }, null);
    })();

    var AccountLayoutComponent = /** @class */ (function () {
        function AccountLayoutComponent(renderer) {
            this.renderer = renderer;
            this.isCollapsed = false;
        }
        return AccountLayoutComponent;
    }());
    // required for dynamic component
    AccountLayoutComponent.type = "account" /* account */;
    AccountLayoutComponent.ɵfac = function AccountLayoutComponent_Factory(t) { return new (t || AccountLayoutComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
    AccountLayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AccountLayoutComponent, selectors: [["fs-layout-account"]], decls: 4, vars: 0, consts: [[1, "account-header", "fixed-top", "p-3"], [1, "d-flex", "align-items-center", 2, "min-height", "100vh"], [1, "container"]], template: function AccountLayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelement(3, "router-outlet");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i2.RouterOutlet], encapsulation: 2, data: { animation: [i1$2.slideFromBottom] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountLayoutComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fs-layout-account',
                        templateUrl: './account-layout.component.html',
                        animations: [i1$2.slideFromBottom],
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], function () { return [{ type: i0.Renderer2 }]; }, null);
    })();

    var EmptyLayoutComponent = /** @class */ (function () {
        function EmptyLayoutComponent() {
        }
        return EmptyLayoutComponent;
    }());
    // required for dynamic component
    EmptyLayoutComponent.type = "empty" /* empty */;
    EmptyLayoutComponent.ɵfac = function EmptyLayoutComponent_Factory(t) { return new (t || EmptyLayoutComponent)(); };
    EmptyLayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EmptyLayoutComponent, selectors: [["fs-layout-empty"]], decls: 1, vars: 0, template: function EmptyLayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "router-outlet");
            }
        }, directives: [i2.RouterOutlet], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmptyLayoutComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fs-layout-empty',
                        template: "\n    <router-outlet></router-outlet>\n  ",
                    }]
            }], null, null);
    })();

    var BannerComponent = /** @class */ (function () {
        function BannerComponent() {
        }
        BannerComponent.prototype.ngOnInit = function () {
        };
        return BannerComponent;
    }());
    BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
    BannerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BannerComponent, selectors: [["fs-banner"]], decls: 27, vars: 0, consts: [[1, "g-pos-rel"], ["data-options", "{direction: \"reverse\", settings_mode_oneelement_max_offset: \"150\"}", 1, "dzsparallaxer", "auto-init", "height-is-based-on-content", "use-loading", "mode-scroll"], [1, "divimage", "dzsparallaxer--target", "w-100", "g-bg-cover", "g-bg-pos-top-center", "g-bg-img-hero", "g-bg-bluegray-opacity-0_2--after", 2, "height", "130%", "background-image", "url(./assets/img-temp/1920x700/img3.jpg)"], [1, "container", "g-bg-cover__inner", "g-py-100"], [1, "row", "align-items-center"], [1, "col-lg-6", "g-mb-30", "g-mb-0--lg"], [1, "h1", "text-uppercase", "g-color-white", "g-mb-30"], [1, "g-bg-primary-dark-v3", "g-px-5"], [1, "h4", "g-color-white"], [1, "g-bg-black-opacity-0_6", "g-px-5"], [1, "col-lg-6"], [1, "embed-responsive", "embed-responsive-16by9"], ["src", "//player.vimeo.com/video/47911018", "width", "530", "height", "300", "frameborder", "0", "webkitallowfullscreen", "", "mozallowfullscreen", "", "allowfullscreen", ""]], template: function BannerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "section", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelement(2, "div", 2);
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵelementStart(4, "div", 4);
                i0.ɵɵelementStart(5, "div", 5);
                i0.ɵɵelementStart(6, "h2", 6);
                i0.ɵɵelementStart(7, "span", 7);
                i0.ɵɵtext(8, "Clean & Fresh");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(9, "br");
                i0.ɵɵelementStart(10, "span", 7);
                i0.ɵɵtext(11, "Fully Responsive");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(12, "br");
                i0.ɵɵelementStart(13, "span", 7);
                i0.ɵɵtext(14, "Design");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "h3", 8);
                i0.ɵɵelementStart(16, "span", 9);
                i0.ɵɵtext(17, "Start a new project with easy");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(18, "br");
                i0.ɵɵelementStart(19, "span", 9);
                i0.ɵɵtext(20, "to use 1610+ Reusable");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(21, "br");
                i0.ɵɵelementStart(22, "span", 9);
                i0.ɵɵtext(23, "UI Components");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(24, "div", 10);
                i0.ɵɵelementStart(25, "div", 11);
                i0.ɵɵelement(26, "iframe", 12);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BannerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fs-banner',
                        templateUrl: './banner.component.html',
                    }]
            }], function () { return []; }, null);
    })();

    var LayoutStateService = /** @class */ (function () {
        // getSkin() {
        //   return this.store.state.skin;
        // }
        // getSkin$() {
        //   return this.store.sliceState(state => state.skin);
        // }
        function LayoutStateService(domInsertionService) {
            this.domInsertionService = domInsertionService;
            this.store = new i1$1.InternalStore({});
        }
        LayoutStateService.prototype.getThemeSettings = function () {
            return this.store.state.themeSettings;
        };
        LayoutStateService.prototype.getThemeSettings$ = function () {
            return this.store.sliceState(function (state) { return state.themeSettings; });
        };
        return LayoutStateService;
    }());
    LayoutStateService.ɵfac = function LayoutStateService_Factory(t) { return new (t || LayoutStateService)(i0.ɵɵinject(i1$1.DomInsertionService)); };
    LayoutStateService.ɵprov = i0.ɵɵdefineInjectable({ token: LayoutStateService, factory: LayoutStateService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutStateService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1$1.DomInsertionService }]; }, null);
    })();

    var SettingsComponent = /** @class */ (function () {
        function SettingsComponent(toaster, router, subscription, layoutStateService, fb) {
            this.toaster = toaster;
            this.router = router;
            this.subscription = subscription;
            this.layoutStateService = layoutStateService;
            this.fb = fb;
            this.form = this.fb.group({
                skin: []
            });
        }
        SettingsComponent.prototype.ngOnInit = function () {
            //this.layoutStateService.fetchThemeSettings();
            // this.subscription.addOne(
            //   this.layoutStateService.getThemeSettings$().pipe(filter(Boolean)),
            //   ({ skin }: Layout.ThemeSettings) => {
            //     this.form.patchValue({
            //       skin: skin
            //     });
            //   },
            // );
        };
        SettingsComponent.prototype.save = function () {
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
        };
        return SettingsComponent;
    }());
    SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(i0.ɵɵdirectiveInject(i1$2.ToasterService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i1$1.SubscriptionService), i0.ɵɵdirectiveInject(LayoutStateService), i0.ɵɵdirectiveInject(i5.FormBuilder)); };
    SettingsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SettingsComponent, selectors: [["ng-component"]], decls: 44, vars: 16, consts: [[1, "my-4"], ["id", "TheProjectThemeSettingsForm", "novalidate", "novalidate", 3, "formGroup"], [1, "row"], [1, "col", "col-md-12"], [1, "form-group"], ["for", "Skin"], ["id", "Skin", "name", "Skin", "formControlName", "skin", 1, "custom-select", "form-control", "valid"], [3, "ngValue"], ["data-valmsg-for", "Skin", "data-valmsg-replace", "true", 1, "text-danger", "field-validation-valid"], ["buttonType", "button", "iconClass", "fa fa-save", 3, "loading", "click"]], template: function SettingsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "h2");
                i0.ɵɵtext(1, "TheProject Settings");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(2, "hr", 0);
                i0.ɵɵelementStart(3, "form", 1);
                i0.ɵɵelementStart(4, "div", 2);
                i0.ɵɵelementStart(5, "div", 3);
                i0.ɵɵelementStart(6, "div");
                i0.ɵɵelementStart(7, "div", 4);
                i0.ɵɵelementStart(8, "label", 5);
                i0.ɵɵtext(9, "Skin");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "select", 6);
                i0.ɵɵelementStart(11, "option", 7);
                i0.ɵɵtext(12, "blue");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "option", 7);
                i0.ɵɵtext(14, "brown");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "option", 7);
                i0.ɵɵtext(16, "cool_green");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "option", 7);
                i0.ɵɵtext(18, "dark_cyan");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(19, "option", 7);
                i0.ɵɵtext(20, "dark_red");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "option", 7);
                i0.ɵɵtext(22, "gold");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(23, "option", 7);
                i0.ɵɵtext(24, "gray");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(25, "option", 7);
                i0.ɵɵtext(26, "green");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(27, "option", 7);
                i0.ɵɵtext(28, "light_blue");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(29, "option", 7);
                i0.ɵɵtext(30, "orange");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(31, "option", 7);
                i0.ɵɵtext(32, "pink");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(33, "option", 7);
                i0.ɵɵtext(34, "purple");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(35, "option", 7);
                i0.ɵɵtext(36, "red");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(37, "option", 7);
                i0.ɵɵtext(38, "vivid_red");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(39, "span", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(40, "hr", 0);
                i0.ɵɵelementStart(41, "div");
                i0.ɵɵelementStart(42, "abp-button", 9);
                i0.ɵɵlistener("click", function SettingsComponent_Template_abp_button_click_42_listener() { return ctx.save(); });
                i0.ɵɵtext(43, " Save ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("formGroup", ctx.form);
                i0.ɵɵadvance(8);
                i0.ɵɵproperty("ngValue", 0);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngValue", 1);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngValue", 2);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngValue", 3);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngValue", 4);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngValue", 5);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngValue", 6);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngValue", 7);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngValue", 8);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngValue", 9);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngValue", 10);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngValue", 11);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngValue", 12);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngValue", 13);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("loading", ctx.loading);
            }
        }, directives: [i5.ɵangular_packages_forms_forms_y, i5.NgControlStatusGroup, i5.FormGroupDirective, i6.ValidationGroupDirective, i5.SelectControlValueAccessor, i5.NgControlStatus, i5.FormControlName, i6.ValidationDirective, i5.NgSelectOption, i5.ɵangular_packages_forms_forms_x, i1$2.ButtonComponent], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingsComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './settings.component.html',
                        styleUrls: ['./settings.component.less']
                    }]
            }], function () { return [{ type: i1$2.ToasterService }, { type: i2.Router }, { type: i1$1.SubscriptionService }, { type: LayoutStateService }, { type: i5.FormBuilder }]; }, null);
    })();

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    function ValidationErrorComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var error_r1 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, error_r1.message, error_r1.interpoliteParams), "");
        }
    }
    var ValidationErrorComponent = /** @class */ (function (_super) {
        __extends(ValidationErrorComponent, _super);
        function ValidationErrorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ValidationErrorComponent.prototype, "abpErrors", {
            get: function () {
                if (!this.errors || !this.errors.length)
                    return [];
                return this.errors.map(function (error) {
                    if (!error.message)
                        return error;
                    var index = error.message.indexOf('[');
                    if (index > -1) {
                        return Object.assign(Object.assign({}, error), { message: error.message.slice(0, index), interpoliteParams: error.message.slice(index + 1, error.message.length - 1).split(',') });
                    }
                    return error;
                });
            },
            enumerable: false,
            configurable: true
        });
        return ValidationErrorComponent;
    }(i6.ValidationErrorComponent));
    ValidationErrorComponent.ɵfac = function ValidationErrorComponent_Factory(t) { return ɵValidationErrorComponent_BaseFactory(t || ValidationErrorComponent); };
    ValidationErrorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ValidationErrorComponent, selectors: [["abp-validation-error"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["data-valmsg-for", "Role.Name", "data-valmsg-replace", "true", 1, "field-validation-error", "text-danger"], [4, "ngFor", "ngForOf", "ngForTrackBy"]], template: function ValidationErrorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "span", 0);
                i0.ɵɵtemplate(1, ValidationErrorComponent_span_1_Template, 3, 4, "span", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.abpErrors)("ngForTrackBy", ctx.trackByFn);
            }
        }, directives: [i1$3.NgForOf], pipes: [i1$1.LocalizationPipe], styles: ["\n      .custom-checkbox + * .field-validation-error span,\n      ngb-timepicker + * .field-validation-error span {\n        background: transparent !important;\n        border: 0 !important;\n        color: currentColor !important;\n        padding: 0 !important;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    var ɵValidationErrorComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(ValidationErrorComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ValidationErrorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'abp-validation-error',
                        template: "\n    <span\n      class=\"field-validation-error text-danger\"\n      data-valmsg-for=\"Role.Name\"\n      data-valmsg-replace=\"true\"\n      ><span *ngFor=\"let error of abpErrors; trackBy: trackByFn\">\n        {{ error.message | abpLocalization: error.interpoliteParams }}</span\n      ></span\n    >\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: [
                            "\n      .custom-checkbox + * .field-validation-error span,\n      ngb-timepicker + * .field-validation-error span {\n        background: transparent !important;\n        border: 0 !important;\n        color: currentColor !important;\n        padding: 0 !important;\n      }\n    ",
                        ],
                    }]
            }], null, null);
    })();

    //import { GetTheme, RouterState, UpdateProfile, eThemeNos } from '@fs/theme.core';
    var UNIFY_THEME_INITIAL_PROVIDERS = [
        {
            provide: i0.APP_INITIALIZER,
            useFactory: configureInitial,
            deps: [i0.Injector],
            multi: true,
        },
    ];
    function configureInitial(injector) {
        return function () {
            var router = injector.get(i2.Router);
            var layoutStateService = injector.get(LayoutStateService);
            initial(router, layoutStateService);
        };
    }
    function initial(router, layoutStateService) {
        router.events
            .pipe(operators.filter(function (e) { return e instanceof i2.NavigationEnd; }), operators.delay(0))
            .subscribe(function (event) {
            console.log('angular-ready');
            layoutStateService.AppComponent.nativeElement.dispatchEvent(new CustomEvent('angular-ready'));
        });
    }

    var UNIFY_THEME_STYLES_PROVIDERS = [
        {
            provide: i0.APP_INITIALIZER,
            useFactory: configureStyles,
            deps: [i0.Injector],
            multi: true,
        },
    ];
    function configureStyles(injector) {
        return function () {
            var replaceableComponents = injector.get(i1$1.ReplaceableComponentsService);
            var layoutService = injector.get(LayoutStateService);
            var configState = injector.get(i1$1.ConfigStateService);
            configState
                .createOnUpdateStream(function (state) { return state; })
                .subscribe(function () {
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

    var UNIFY_THEME_SETTING_TAB_PROVIDERS = [
        {
            provide: i0.APP_INITIALIZER,
            useFactory: configureSettingTabs,
            deps: [i1$1.SettingTabsService],
            multi: true,
        },
    ];
    function configureSettingTabs(settingtabs) {
        return function () {
            settingtabs.add([
                {
                    name: "UnifyThemeManagement::Menu:UnifyThemeSettings" /* UnifyThemeManagement */,
                    order: 2,
                    component: SettingsComponent,
                },
            ]);
        };
    }

    var LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];
    var ThemeUnifyModule = /** @class */ (function () {
        function ThemeUnifyModule() {
        }
        ThemeUnifyModule.forRoot = function () {
            return {
                ngModule: RootUnifyModule,
                providers: [
                    UNIFY_THEME_STYLES_PROVIDERS,
                    UNIFY_THEME_INITIAL_PROVIDERS,
                    UNIFY_THEME_SETTING_TAB_PROVIDERS
                ],
            };
        };
        return ThemeUnifyModule;
    }());
    ThemeUnifyModule.ɵfac = function ThemeUnifyModule_Factory(t) { return new (t || ThemeUnifyModule)(); };
    ThemeUnifyModule.ɵmod = i0.ɵɵdefineNgModule({ type: ThemeUnifyModule });
    ThemeUnifyModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
                i1$1.CoreModule,
                i1$2.ThemeSharedModule,
                i4.NgbDropdownModule,
                i6.NgxValidateCoreModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ThemeUnifyModule, { declarations: [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent, HeaderComponent,
                FooterComponent,
                BannerComponent,
                ValidationErrorComponent,
                SettingsComponent], imports: [i1$1.CoreModule,
                i1$2.ThemeSharedModule,
                i4.NgbDropdownModule,
                i6.NgxValidateCoreModule], exports: [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent, HeaderComponent,
                FooterComponent,
                SettingsComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeUnifyModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: __spread(LAYOUTS, [
                            HeaderComponent,
                            FooterComponent,
                            BannerComponent,
                            ValidationErrorComponent,
                            SettingsComponent
                        ]),
                        exports: __spread(LAYOUTS, [
                            HeaderComponent,
                            FooterComponent,
                            SettingsComponent
                        ]),
                        entryComponents: __spread(LAYOUTS),
                        imports: [
                            i1$1.CoreModule,
                            i1$2.ThemeSharedModule,
                            i4.NgbDropdownModule,
                            i6.NgxValidateCoreModule
                        ]
                    }]
            }], null, null);
    })();
    var RootUnifyModule = /** @class */ (function () {
        function RootUnifyModule() {
        }
        return RootUnifyModule;
    }());
    RootUnifyModule.ɵfac = function RootUnifyModule_Factory(t) { return new (t || RootUnifyModule)(); };
    RootUnifyModule.ɵmod = i0.ɵɵdefineNgModule({ type: RootUnifyModule });
    RootUnifyModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
                i6.NgxValidateCoreModule.forRoot({
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
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RootUnifyModule, { imports: [i6.NgxValidateCoreModule] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RootUnifyModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i6.NgxValidateCoreModule.forRoot({
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
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AccountLayoutComponent = AccountLayoutComponent;
    exports.ApplicationLayoutComponent = ApplicationLayoutComponent;
    exports.BannerComponent = BannerComponent;
    exports.EmptyLayoutComponent = EmptyLayoutComponent;
    exports.FooterComponent = FooterComponent;
    exports.HeaderComponent = HeaderComponent;
    exports.LAYOUTS = LAYOUTS;
    exports.LayoutStateService = LayoutStateService;
    exports.RootUnifyModule = RootUnifyModule;
    exports.SettingsComponent = SettingsComponent;
    exports.ThemeUnifyModule = ThemeUnifyModule;
    exports.UNIFY_THEME_INITIAL_PROVIDERS = UNIFY_THEME_INITIAL_PROVIDERS;
    exports.UNIFY_THEME_STYLES_PROVIDERS = UNIFY_THEME_STYLES_PROVIDERS;
    exports.ValidationErrorComponent = ValidationErrorComponent;
    exports.configureInitial = configureInitial;
    exports.configureStyles = configureStyles;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-theme-unify.umd.js.map
