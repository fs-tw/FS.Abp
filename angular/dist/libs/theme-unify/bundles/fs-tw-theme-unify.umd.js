(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core'), require('@abp/ng.theme.shared'), require('@angular/platform-browser'), require('@angular/router'), require('@angular/forms'), require('@ngx-validate/core'), require('rxjs/operators'), require('@ng-bootstrap/ng-bootstrap')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/theme-unify', ['exports', '@angular/core', '@abp/ng.core', '@abp/ng.theme.shared', '@angular/platform-browser', '@angular/router', '@angular/forms', '@ngx-validate/core', 'rxjs/operators', '@ng-bootstrap/ng-bootstrap'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw']['theme-unify'] = {}), global.ng.core, global.i1, global.ng_theme_shared, global.ng.platformBrowser, global.ng.router, global.ng.forms, global.core, global.rxjs.operators, global.ngBootstrap));
}(this, (function (exports, i0, i1, ng_theme_shared, platformBrowser, router, forms, core, operators, ngBootstrap) { 'use strict';

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
    ApplicationLayoutComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'fs-application-layout',
                    template: "<main>\r\n  <fs-header *abpReplaceableTemplate=\"{ \r\n    componentKey: 'Theme.ApplicationLayoutHeaderComponent'\r\n  }\">\r\n  </fs-header>\r\n\r\n  <!-- <fs-banner *abpReplaceableTemplate=\"{ \r\n    componentKey: 'Theme.ApplicationLayoutBannerComponent'\r\n  }\">\r\n  </fs-banner> -->\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <fs-footer *abpReplaceableTemplate=\"{ \r\n    componentKey: 'Theme.ApplicationLayoutFooterComponent'\r\n  }\">\r\n  </fs-footer>\r\n  <a class=\"js-go-to u-go-to-v1\" href=\"#\" data-type=\"fixed\" data-position='{\r\n     \"bottom\": 15,\r\n     \"right\": 15\r\n   }' data-offset-top=\"400\" data-compensation=\"#js-header\" data-show-effect=\"zoomIn\">\r\n    <i class=\"hs-icon hs-icon-arrow-top\"></i>\r\n  </a>\r\n</main>\r\n\r\n"
                },] }
    ];
    ApplicationLayoutComponent.ctorParameters = function () { return [
        { type: i1.EnvironmentService }
    ]; };

    var AccountLayoutComponent = /** @class */ (function () {
        function AccountLayoutComponent(renderer) {
            this.renderer = renderer;
            this.isCollapsed = false;
        }
        return AccountLayoutComponent;
    }());
    // required for dynamic component
    AccountLayoutComponent.type = "account" /* account */;
    AccountLayoutComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'fs-layout-account',
                    template: "<div class=\"account-header fixed-top p-3\"></div>\r\n<div class=\"d-flex align-items-center\" style=\"min-height: 100vh;\">\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n",
                    animations: [ng_theme_shared.slideFromBottom],
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    AccountLayoutComponent.ctorParameters = function () { return [
        { type: i0.Renderer2 }
    ]; };

    var EmptyLayoutComponent = /** @class */ (function () {
        function EmptyLayoutComponent() {
        }
        return EmptyLayoutComponent;
    }());
    // required for dynamic component
    EmptyLayoutComponent.type = "empty" /* empty */;
    EmptyLayoutComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'fs-layout-empty',
                    template: "\n    <router-outlet></router-outlet>\n  "
                },] }
    ];

    var FooterComponent = /** @class */ (function () {
        function FooterComponent() {
        }
        return FooterComponent;
    }());
    FooterComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'fs-footer',
                    template: "  <!-- Footer -->\r\n  <div id=\"contacts-section\" class=\"g-bg-black-opacity-0_9 g-color-white-opacity-0_8 g-py-60\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <!-- Footer Content -->\r\n        <div class=\"col-lg-3 col-md-6 g-mb-40 g-mb-0--lg\">\r\n          <div class=\"u-heading-v2-3--bottom g-brd-white-opacity-0_8 g-mb-20\">\r\n            <h2 class=\"u-heading-v2__title h6 text-uppercase mb-0\">About Us</h2>\r\n          </div>\r\n\r\n          <p>About Unify dolor sit amet, consectetur adipiscing elit. Maecenas eget nisl id libero tincidunt sodales.\r\n          </p>\r\n        </div>\r\n        <!-- End Footer Content -->\r\n\r\n        <!-- Footer Content -->\r\n        <div class=\"col-lg-3 col-md-6 g-mb-40 g-mb-0--lg\">\r\n          <div class=\"u-heading-v2-3--bottom g-brd-white-opacity-0_8 g-mb-20\">\r\n            <h2 class=\"u-heading-v2__title h6 text-uppercase mb-0\">Latest Posts</h2>\r\n          </div>\r\n\r\n          <article>\r\n            <h3 class=\"h6 g-mb-2\">\r\n              <a class=\"g-color-white-opacity-0_8 g-color-white--hover\" href=\"#\">Incredible template</a>\r\n            </h3>\r\n            <div class=\"small g-color-white-opacity-0_6\">May 8, 2017</div>\r\n          </article>\r\n\r\n          <hr class=\"g-brd-white-opacity-0_1 g-my-10\">\r\n\r\n          <article>\r\n            <h3 class=\"h6 g-mb-2\">\r\n              <a class=\"g-color-white-opacity-0_8 g-color-white--hover\" href=\"#\">New features</a>\r\n            </h3>\r\n            <div class=\"small g-color-white-opacity-0_6\">June 23, 2017</div>\r\n          </article>\r\n\r\n          <hr class=\"g-brd-white-opacity-0_1 g-my-10\">\r\n\r\n          <article>\r\n            <h3 class=\"h6 g-mb-2\">\r\n              <a class=\"g-color-white-opacity-0_8 g-color-white--hover\" href=\"#\">New terms and conditions</a>\r\n            </h3>\r\n            <div class=\"small g-color-white-opacity-0_6\">September 15, 2017</div>\r\n          </article>\r\n        </div>\r\n        <!-- End Footer Content -->\r\n\r\n        <!-- Footer Content -->\r\n        <div class=\"col-lg-3 col-md-6 g-mb-40 g-mb-0--lg\">\r\n          <div class=\"u-heading-v2-3--bottom g-brd-white-opacity-0_8 g-mb-20\">\r\n            <h2 class=\"u-heading-v2__title h6 text-uppercase mb-0\">Useful Links</h2>\r\n          </div>\r\n\r\n          <nav class=\"text-uppercase1\">\r\n            <ul class=\"list-unstyled g-mt-minus-10 mb-0\">\r\n              <li class=\"g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10\">\r\n                <h4 class=\"h6 g-pr-20 mb-0\">\r\n                  <a class=\"g-color-white-opacity-0_8 g-color-white--hover\" href=\"#\">About Us</a>\r\n                  <i class=\"fa fa-angle-right g-absolute-centered--y g-right-0\"></i>\r\n                </h4>\r\n              </li>\r\n              <li class=\"g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10\">\r\n                <h4 class=\"h6 g-pr-20 mb-0\">\r\n                  <a class=\"g-color-white-opacity-0_8 g-color-white--hover\" href=\"#\">Portfolio</a>\r\n                  <i class=\"fa fa-angle-right g-absolute-centered--y g-right-0\"></i>\r\n                </h4>\r\n              </li>\r\n              <li class=\"g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10\">\r\n                <h4 class=\"h6 g-pr-20 mb-0\">\r\n                  <a class=\"g-color-white-opacity-0_8 g-color-white--hover\" href=\"#\">Our Services</a>\r\n                  <i class=\"fa fa-angle-right g-absolute-centered--y g-right-0\"></i>\r\n                </h4>\r\n              </li>\r\n              <li class=\"g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10\">\r\n                <h4 class=\"h6 g-pr-20 mb-0\">\r\n                  <a class=\"g-color-white-opacity-0_8 g-color-white--hover\" href=\"#\">Latest Jobs</a>\r\n                  <i class=\"fa fa-angle-right g-absolute-centered--y g-right-0\"></i>\r\n                </h4>\r\n              </li>\r\n              <li class=\"g-pos-rel g-py-10\">\r\n                <h4 class=\"h6 g-pr-20 mb-0\">\r\n                  <a class=\"g-color-white-opacity-0_8 g-color-white--hover\" href=\"#\">Contact Us</a>\r\n                  <i class=\"fa fa-angle-right g-absolute-centered--y g-right-0\"></i>\r\n                </h4>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n        <!-- End Footer Content -->\r\n\r\n        <!-- Footer Content -->\r\n        <div class=\"col-lg-3 col-md-6\">\r\n          <div class=\"u-heading-v2-3--bottom g-brd-white-opacity-0_8 g-mb-20\">\r\n            <h2 class=\"u-heading-v2__title h6 text-uppercase mb-0\">Our Contacts</h2>\r\n          </div>\r\n\r\n          <address class=\"g-bg-no-repeat g-font-size-12 mb-0\"\r\n            style=\"background-image: url(./assets/img/maps/map2.png);\">\r\n            <!-- Location -->\r\n            <div class=\"d-flex g-mb-20\">\r\n              <div class=\"g-mr-10\">\r\n                <span class=\"u-icon-v3 u-icon-size--xs g-bg-white-opacity-0_1 g-color-white-opacity-0_6\">\r\n                  <i class=\"fa fa-map-marker\"></i>\r\n                </span>\r\n              </div>\r\n              <p class=\"mb-0\">795 Folsom Ave, Suite 600, <br> San Francisco, CA 94107 795</p>\r\n            </div>\r\n            <!-- End Location -->\r\n\r\n            <!-- Phone -->\r\n            <div class=\"d-flex g-mb-20\">\r\n              <div class=\"g-mr-10\">\r\n                <span class=\"u-icon-v3 u-icon-size--xs g-bg-white-opacity-0_1 g-color-white-opacity-0_6\">\r\n                  <i class=\"fa fa-phone\"></i>\r\n                </span>\r\n              </div>\r\n              <p class=\"mb-0\">(+123) 456 7890 <br> (+123) 456 7891</p>\r\n            </div>\r\n            <!-- End Phone -->\r\n\r\n            <!-- Email and Website -->\r\n            <div class=\"d-flex g-mb-20\">\r\n              <div class=\"g-mr-10\">\r\n                <span class=\"u-icon-v3 u-icon-size--xs g-bg-white-opacity-0_1 g-color-white-opacity-0_6\">\r\n                  <i class=\"fa fa-globe\"></i>\r\n                </span>\r\n              </div>\r\n              <p class=\"mb-0\">\r\n                <a class=\"g-color-white-opacity-0_8 g-color-white--hover\"\r\n                  href=\"mailto:info@htmlstream.com\">info@htmlstream.com</a>\r\n                <br>\r\n                <a class=\"g-color-white-opacity-0_8 g-color-white--hover\" href=\"#\">www.htmlstream.com</a>\r\n              </p>\r\n            </div>\r\n            <!-- End Email and Website -->\r\n          </address>\r\n        </div>\r\n        <!-- End Footer Content -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Footer -->\r\n\r\n  <!-- Copyright Footer -->\r\n  <footer class=\"g-bg-gray-dark-v1 g-color-white-opacity-0_8 g-py-20\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 text-center text-md-left g-mb-10 g-mb-0--md\">\r\n          <div class=\"d-lg-flex\">\r\n            <small class=\"d-block g-font-size-default g-mr-10 g-mb-10 g-mb-0--md\">2020 &copy; All Rights\r\n              Reserved.</small>\r\n            <ul class=\"u-list-inline\">\r\n              <li class=\"list-inline-item\">\r\n                <a class=\"g-color-white-opacity-0_8 g-color-white--hover\" href=\"#\">Privacy Policy</a>\r\n              </li>\r\n              <li class=\"list-inline-item\">\r\n                <span>|</span>\r\n              </li>\r\n              <li class=\"list-inline-item\">\r\n                <a class=\"g-color-white-opacity-0_8 g-color-white--hover\" href=\"#\">Terms of Use</a>\r\n              </li>\r\n              <li class=\"list-inline-item\">\r\n                <span>|</span>\r\n              </li>\r\n              <li class=\"list-inline-item\">\r\n                <a class=\"g-color-white-opacity-0_8 g-color-white--hover\" href=\"#\">License</a>\r\n              </li>\r\n              <li class=\"list-inline-item\">\r\n                <span>|</span>\r\n              </li>\r\n              <li class=\"list-inline-item\">\r\n                <a class=\"g-color-white-opacity-0_8 g-color-white--hover\" href=\"#\">Support</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 align-self-center\">\r\n          <ul class=\"list-inline text-center text-md-right mb-0\">\r\n            <li class=\"list-inline-item g-mx-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\">\r\n              <a href=\"#\" class=\"g-color-white-opacity-0_5 g-color-white--hover\">\r\n                <i class=\"fa fa-facebook\"></i>\r\n              </a>\r\n            </li>\r\n            <li class=\"list-inline-item g-mx-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Skype\">\r\n              <a href=\"#\" class=\"g-color-white-opacity-0_5 g-color-white--hover\">\r\n                <i class=\"fa fa-skype\"></i>\r\n              </a>\r\n            </li>\r\n            <li class=\"list-inline-item g-mx-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Linkedin\">\r\n              <a href=\"#\" class=\"g-color-white-opacity-0_5 g-color-white--hover\">\r\n                <i class=\"fa fa-linkedin\"></i>\r\n              </a>\r\n            </li>\r\n            <li class=\"list-inline-item g-mx-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Pinterest\">\r\n              <a href=\"#\" class=\"g-color-white-opacity-0_5 g-color-white--hover\">\r\n                <i class=\"fa fa-pinterest\"></i>\r\n              </a>\r\n            </li>\r\n            <li class=\"list-inline-item g-mx-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Twitter\">\r\n              <a href=\"#\" class=\"g-color-white-opacity-0_5 g-color-white--hover\">\r\n                <i class=\"fa fa-twitter\"></i>\r\n              </a>\r\n            </li>\r\n            <li class=\"list-inline-item g-mx-10\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Dribbble\">\r\n              <a href=\"#\" class=\"g-color-white-opacity-0_5 g-color-white--hover\">\r\n                <i class=\"fa fa-dribbble\"></i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n  <!-- End Copyright Footer -->"
                },] }
    ];
    FooterComponent.ctorParameters = function () { return []; };

    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent(titleService, activatedRoute, configStateService) {
            this.titleService = titleService;
            this.activatedRoute = activatedRoute;
            this.configStateService = configStateService;
        }
        return HeaderComponent;
    }());
    HeaderComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'fs-header',
                    template: "<!-- Header -->\r\n<header id=\"js-header\" class=\"u-header u-header--static\">\r\n    <div class=\"u-header__section u-header__section--light g-bg-white g-transition-0_3 g-py-10\">\r\n        <nav class=\"js-mega-menu navbar navbar-expand-lg hs-menu-initialized hs-menu-horizontal\">\r\n            <div class=\"container\">\r\n                <!-- Responsive Toggle Button -->\r\n                <button\r\n                    class=\"navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-minus-3 g-right-0\"\r\n                    type=\"button\" aria-label=\"Toggle navigation\" aria-expanded=\"false\" aria-controls=\"navBar\"\r\n                    data-toggle=\"collapse\" data-target=\"#navBar\">\r\n                    <span class=\"hamburger hamburger--slider\">\r\n                        <span class=\"hamburger-box\">\r\n                            <span class=\"hamburger-inner\"></span>\r\n                        </span>\r\n                    </span>\r\n                </button>\r\n                <!-- End Responsive Toggle Button -->\r\n\r\n                <!-- Logo -->\r\n                <a href=\"./index.html\" class=\"navbar-brand d-flex\">\r\n                    <svg width=\"86px\" height=\"32px\" viewBox=\"0 0 86 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                        xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                        <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                            <g transform=\"translate(-78.000000, -19.000000)\">\r\n                                <g transform=\"translate(78.000000, 19.000000)\">\r\n                                    <path class=\"g-fill-primary\"\r\n                                        d=\"M0,0 L19.2941176,0 L19.2941176,0 C23.7123956,-8.11624501e-16 27.2941176,3.581722 27.2941176,8 L27.2941176,27.2941176 L8,27.2941176 L8,27.2941176 C3.581722,27.2941176 5.41083001e-16,23.7123956 0,19.2941176 L0,0 Z\">\r\n                                    </path>\r\n                                    <path class=\"g-fill-white\"\r\n                                        d=\"M21.036662,24.8752523 L20.5338647,22.6659916 L20.3510293,22.6659916 C19.8533083,23.4481246 19.1448284,24.0626484 18.2255681,24.5095816 C17.3063079,24.9565147 16.2575544,25.1799779 15.0792761,25.1799779 C13.0376043,25.1799779 11.5139914,24.672107 10.5083918,23.6563498 C9.50279224,22.6405927 9,21.1017437 9,19.0397567 L9,8.02392554 L12.6109986,8.02392554 L12.6109986,18.4150692 C12.6109986,19.7050808 12.8750915,20.6725749 13.4032852,21.3175807 C13.9314789,21.9625865 14.7593086,22.2850846 15.886799,22.2850846 C17.3901196,22.2850846 18.4947389,21.8356188 19.2006901,20.9366737 C19.9066413,20.0377286 20.2596117,18.5318912 20.2596117,16.4191164 L20.2596117,8.02392554 L23.855374,8.02392554 L23.855374,24.8752523 L21.036662,24.8752523 Z\">\r\n                                    </path>\r\n                                    <path class=\"g-fill-main\"\r\n                                        d=\"M44.4764678,24.4705882 L40.8807055,24.4705882 L40.8807055,14.1099172 C40.8807055,12.809748 40.6191519,11.8397145 40.096037,11.1997875 C39.5729221,10.5598605 38.7425531,10.2399018 37.6049051,10.2399018 C36.0914269,10.2399018 34.9842682,10.6868282 34.2833958,11.5806945 C33.5825234,12.4745608 33.2320924,13.9727801 33.2320924,16.0753974 L33.2320924,24.4705882 L29.6515664,24.4705882 L29.6515664,7.61926145 L32.4550421,7.61926145 L32.9578394,9.8285222 L33.1406747,9.8285222 C33.6485533,9.02607405 34.3697301,8.40647149 35.3042266,7.96969592 C36.2387232,7.53292034 37.27478,7.31453583 38.412428,7.31453583 C42.4551414,7.31453583 44.4764678,9.3714132 44.4764678,13.4852296 L44.4764678,24.4705882 Z M53.7357283,24.4705882 L50.1552023,24.4705882 L50.1552023,7.61926145 L53.7357283,7.61926145 L53.7357283,24.4705882 Z M49.9418944,3.15503112 C49.9418944,2.51510412 50.1171098,2.0224693 50.467546,1.67711187 C50.8179823,1.33175444 51.3182351,1.15907831 51.9683197,1.15907831 C52.5980892,1.15907831 53.0881846,1.33175444 53.4386208,1.67711187 C53.7890571,2.0224693 53.9642725,2.51510412 53.9642725,3.15503112 C53.9642725,3.76448541 53.7890571,4.24442346 53.4386208,4.59485968 C53.0881846,4.94529589 52.5980892,5.12051137 51.9683197,5.12051137 C51.3182351,5.12051137 50.8179823,4.94529589 50.467546,4.59485968 C50.1171098,4.24442346 49.9418944,3.76448541 49.9418944,3.15503112 Z M68.0077253,10.3313195 L63.8939294,10.3313195 L63.8939294,24.4705882 L60.2981671,24.4705882 L60.2981671,10.3313195 L57.525164,10.3313195 L57.525164,8.65532856 L60.2981671,7.55831633 L60.2981671,6.4613041 C60.2981671,4.47042009 60.7654084,2.99505497 61.699905,2.03516447 C62.6344015,1.07527397 64.0615189,0.595335915 65.9812999,0.595335915 C67.2408388,0.595335915 68.4800439,0.803563007 69.6989525,1.22002344 L68.7543031,3.93208145 C67.8705943,3.64766945 67.0275286,3.50546559 66.2250804,3.50546559 C65.4124747,3.50546559 64.820805,3.75686171 64.4500537,4.25966149 C64.0793023,4.76246128 63.8939294,5.51664965 63.8939294,6.52224922 L63.8939294,7.61926145 L68.0077253,7.61926145 L68.0077253,10.3313195 Z M69.0089215,7.61926145 L72.9094094,7.61926145 L76.3375727,17.1724096 C76.8556088,18.5335242 77.2009611,19.813359 77.3736398,21.0119524 L77.49553,21.0119524 C77.5869482,20.453286 77.7545456,19.7752783 77.9983273,18.9779089 C78.242109,18.1805396 79.5321012,14.3943616 81.8683427,7.61926145 L85.738358,7.61926145 L78.5315971,26.7103215 C77.2212704,30.2146837 75.0374253,31.9668385 71.9799963,31.9668385 C71.1877057,31.9668385 70.4157419,31.8805004 69.6640816,31.7078217 L69.6640816,28.8738734 C70.2024329,28.9957643 70.8169567,29.0567088 71.5076716,29.0567088 C73.2344587,29.0567088 74.4482703,28.056203 75.1491427,26.0551615 L75.7738303,24.4705882 L69.0089215,7.61926145 Z\">\r\n                                    </path>\r\n                                </g>\r\n                            </g>\r\n                        </g>\r\n                    </svg>\r\n                </a>\r\n                <!-- End Logo -->\r\n\r\n                <!-- Navigation -->\r\n                <div class=\"collapse navbar-collapse align-items-center flex-sm-row g-pt-10 g-pt-5--lg g-mr-40--lg\"\r\n                    id=\"navBar\">\r\n                    <ul class=\"navbar-nav text-uppercase g-pos-rel g-font-weight-600 ml-auto\">\r\n                        <!-- Intro -->\r\n                        <li class=\"nav-item  g-mx-10--lg g-mx-15--xl\">\r\n                            <a href=\"./index.html\" class=\"nav-link g-py-7 g-px-0\">Intro</a>\r\n                        </li>\r\n                        <!-- End Intro -->\r\n\r\n                        <!-- Home -->\r\n                        <li class=\"hs-has-mega-menu nav-item active g-mx-10--lg g-mx-15--xl\" data-animation-in=\"fadeIn\"\r\n                            data-animation-out=\"fadeOut\" data-max-width=\"60%\" data-position=\"left\">\r\n                            <a id=\"mega-menu-home\" class=\"nav-link g-py-7 g-px-0\" href=\"#\" aria-haspopup=\"true\"\r\n                                aria-expanded=\"false\">Home\r\n                                <i class=\"hs-icon hs-icon-arrow-bottom g-font-size-11 g-ml-7\"></i></a>\r\n\r\n                            <!-- Mega Menu -->\r\n                            <div class=\"w-100 hs-mega-menu u-shadow-v11 font-weight-normal g-brd-top g-brd-primary g-brd-top-2 g-bg-white g-mt-18 g-mt-8--lg--scrolling\"\r\n                                aria-labelledby=\"mega-menu-home\">\r\n                                <div class=\"row align-items-stretch no-gutters\">\r\n                                    <!-- Home (col) -->\r\n                                    <div class=\"col-lg-6\">\r\n                                        <ul class=\"list-unstyled\">\r\n                                            <li class=\"dropdown-item active\">\r\n                                                <a href=\"./unify-main/home/home-default.html\"\r\n                                                    class=\"nav-link\">Default</a>\r\n                                            </li>\r\n                                            <li class=\"dropdown-item \">\r\n                                                <a href=\"./unify-main/home/home-incredible.html\"\r\n                                                    class=\"nav-link\">Incredible</a>\r\n                                            </li>\r\n                                            <li class=\"dropdown-item \">\r\n                                                <a href=\"./unify-main/home/home-studio.html\" class=\"nav-link\">Studio</a>\r\n                                            </li>\r\n                                            <li class=\"dropdown-item \">\r\n                                                <a href=\"./unify-main/home/home-allure.html\" class=\"nav-link\">Allure</a>\r\n                                            </li>\r\n                                            <li class=\"dropdown-item \">\r\n                                                <a href=\"./unify-main/home/home-inspire.html\"\r\n                                                    class=\"nav-link\">Inspire</a>\r\n                                            </li>\r\n                                            <li class=\"dropdown-item \">\r\n                                                <a href=\"./unify-main/home/home-portfolio.html\"\r\n                                                    class=\"nav-link\">Portfolio</a>\r\n                                            </li>\r\n                                            <li class=\"dropdown-item \">\r\n                                                <a href=\"./unify-main/home/home-creative.html\"\r\n                                                    class=\"nav-link\">Creative</a>\r\n                                            </li>\r\n                                            <li class=\"dropdown-item \">\r\n                                                <a href=\"./unify-main/home/home-projects.html\"\r\n                                                    class=\"nav-link\">Projects</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                    <!-- End Home (col) -->\r\n\r\n                                    <!-- Home (col) -->\r\n                                    <div class=\"col-lg-6 g-brd-left--lg g-brd-gray-light-v5\">\r\n                                        <ul class=\"list-unstyled\">\r\n                                            <li class=\"dropdown-item \">\r\n                                                <a href=\"./unify-main/home/home-discover.html\"\r\n                                                    class=\"nav-link\">Discover</a>\r\n                                            </li>\r\n                                            <li class=\"dropdown-item \">\r\n                                                <a href=\"./unify-main/home/home-brave.html\" class=\"nav-link\">Brave</a>\r\n                                            </li>\r\n                                            <li class=\"dropdown-item \">\r\n                                                <a href=\"./unify-main/home/home-business.html\"\r\n                                                    class=\"nav-link\">Business</a>\r\n                                            </li>\r\n                                            <li class=\"dropdown-item \">\r\n                                                <a href=\"./unify-main/home/home-corporate.html\"\r\n                                                    class=\"nav-link\">Corporate</a>\r\n                                            </li>\r\n                                            <li class=\"dropdown-item \">\r\n                                                <a href=\"./unify-main/home/home-web-agency.html\" class=\"nav-link\">Web\r\n                                                    Agency</a>\r\n                                            </li>\r\n                                            <li class=\"dropdown-item \">\r\n                                                <a href=\"./unify-main/home/home-aspire.html\" class=\"nav-link\">Aspire</a>\r\n                                            </li>\r\n                                            <li class=\"dropdown-item \">\r\n                                                <a href=\"./unify-main/home/home-showcase.html\"\r\n                                                    class=\"nav-link\">Showcase</a>\r\n                                            </li>\r\n                                            <li class=\"dropdown-item \">\r\n                                                <a href=\"./unify-main/home/home-news.html\" class=\"nav-link\">News</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                    <!-- End Home (col) -->\r\n                                </div>\r\n                            </div>\r\n                            <!-- End Mega Menu -->\r\n                        </li>\r\n                        <!-- End Home -->\r\n\r\n                        <!-- Pages -->\r\n                        <li class=\"hs-has-sub-menu nav-item  g-mx-10--lg g-mx-15--xl\" data-animation-in=\"fadeIn\"\r\n                            data-animation-out=\"fadeOut\">\r\n                            <a id=\"nav-link-pages\" class=\"nav-link g-py-7 g-px-0\" href=\"#\" aria-haspopup=\"true\"\r\n                                aria-expanded=\"false\" aria-controls=\"nav-submenu-pages\">Pages</a>\r\n\r\n                            <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-18 g-mt-8--lg--scrolling\"\r\n                                id=\"nav-submenu-pages\" aria-labelledby=\"nav-link-pages\">\r\n                                <!-- Pages - About -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--pages--about\" class=\"nav-link\" href=\"#\" aria-haspopup=\"true\"\r\n                                        aria-expanded=\"false\" aria-controls=\"nav-submenu--pages--about\">About</a>\r\n\r\n                                    <!-- Submenu (level 2) -->\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--pages--about\" aria-labelledby=\"nav-link--pages--about\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-about-1.html\">About 1</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-about-2.html\">About 2</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-about-3.html\">About 3</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-about-4.html\">About 4</a>\r\n                                        </li>\r\n\r\n                                        <li class=\"dropdown-divider\"></li>\r\n\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-about-me-1.html\">About me\r\n                                                1</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-about-me-2.html\">About me\r\n                                                2</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-about-me-3.html\">About me\r\n                                                3</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <!-- End Submenu (level 2) -->\r\n                                </li>\r\n                                <!-- End Pages - About -->\r\n\r\n                                <!-- Pages - Portfolios -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--pages--portfolio\" class=\"nav-link\" href=\"#\" aria-haspopup=\"true\"\r\n                                        aria-expanded=\"false\"\r\n                                        aria-controls=\"nav-submenu--pages--portfolio\">Portfolios</a>\r\n\r\n                                    <!-- Submenu (level 2) -->\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 u-dropdown-col-2 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--pages--portfolio\" aria-labelledby=\"nav-link--pages--portfolio\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-portfolio-case-study-1.html\">Case Studies\r\n                                                1</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-portfolio-case-study-2.html\">Case Studies\r\n                                                2</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-portfolio-single-item-1.html\">Single item\r\n                                                1</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-portfolio-single-item-2.html\">Single item\r\n                                                2</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-portfolio-single-item-3.html\">Single item\r\n                                                3</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-portfolio-single-item-4.html\">Single item\r\n                                                4</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-portfolio-single-item-5.html\">Single item\r\n                                                5</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-portfolio-single-item-6.html\">Single item\r\n                                                6</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-portfolio-single-item-7.html\">Single item\r\n                                                7</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-portfolio-single-item-8.html\">Single item\r\n                                                8</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-portfolio-single-item-9.html\">Single item\r\n                                                9</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <!-- End Submenu (level 2) -->\r\n                                </li>\r\n                                <!-- End Pages - Portfolios -->\r\n\r\n                                <!-- Pages - Login &amp; Signup -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--pages--login-signup\" class=\"nav-link\" href=\"#\" aria-haspopup=\"true\"\r\n                                        aria-expanded=\"false\" aria-controls=\"nav-submenu--pages--login-signup\">Login\r\n                                        &amp; Signup</a>\r\n\r\n                                    <!-- Submenu (level 2) -->\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 u-dropdown-col-2 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--pages--login-signup\"\r\n                                        aria-labelledby=\"nav-link--pages--login-signup\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-login-and-signup-1.html\">Login &amp;\r\n                                                Signup</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-signup-1.html\">Signup\r\n                                                1</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-signup-2.html\">Signup\r\n                                                2</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-signup-3.html\">Signup\r\n                                                3</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-signup-4.html\">Signup\r\n                                                4</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-signup-5.html\">Signup\r\n                                                5</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-signup-6.html\">Signup\r\n                                                6</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-signup-7.html\">Signup\r\n                                                7</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-signup-8.html\">Signup\r\n                                                8</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-signup-9.html\">Signup\r\n                                                9</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-signup-10.html\">Signup\r\n                                                10</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-signup-11.html\">Signup\r\n                                                11</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-signup-12.html\">Signup\r\n                                                12</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-login-1.html\">login 1</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-login-2.html\">Login 2</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-login-3.html\">Login 3</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-login-4.html\">Login 4</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-login-5.html\">Login 5</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-login-6.html\">Login 6</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-login-7.html\">Login 7</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-login-8.html\">Login 8</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-login-9.html\">Login 9</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-login-10.html\">Login\r\n                                                10</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-login-11.html\">Login\r\n                                                11</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-login-12.html\">Login\r\n                                                12</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <!-- End Submenu (level 2) -->\r\n                                </li>\r\n                                <!-- End Pages - Login &amp; Signup -->\r\n\r\n                                <!-- Pages - Services -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--pages--services\" class=\"nav-link\" href=\"#\" aria-haspopup=\"true\"\r\n                                        aria-expanded=\"false\" aria-controls=\"nav-submenu--pages--services\">Services</a>\r\n\r\n                                    <!-- Submenu (level 2) -->\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--pages--services\" aria-labelledby=\"nav-link--pages--services\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-services-1.html\">Services\r\n                                                1</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-services-2.html\">Services\r\n                                                2</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-services-3.html\">Services\r\n                                                3</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-services-4.html\">Services\r\n                                                4</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <!-- End Submenu (level 2) -->\r\n                                </li>\r\n                                <!-- End Pages - Services -->\r\n\r\n                                <!-- Pages - Search results -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--pages--search-result\" class=\"nav-link\" href=\"#\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\"\r\n                                        aria-controls=\"nav-submenu--pages--search-result\">Search results</a>\r\n\r\n                                    <!-- Submenu (level 2) -->\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--pages--search-result\"\r\n                                        aria-labelledby=\"nav-link--pages--search-result\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-search-results-grid-veiw-1.html\">Grid\r\n                                                View</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-search-results-grid-veiw-left-sidebar-1.html\">Grid\r\n                                                View <span class=\"g-opacity-0_5\">(with Sidebar)</span></a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-search-results-list-veiw-1.html\">List View\r\n                                                1</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-search-results-list-veiw-2.html\">List View\r\n                                                2</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-search-results-list-veiw-left-sidebar-1.html\">List\r\n                                                View <span class=\"g-opacity-0_5\">(with Sidebar)</span></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <!-- End Submenu (level 2) -->\r\n                                </li>\r\n                                <!-- End Pages - Search results -->\r\n\r\n                                <!-- Pages - Profiles -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--pages--profile\" class=\"nav-link\" href=\"#\" aria-haspopup=\"true\"\r\n                                        aria-expanded=\"false\" aria-controls=\"nav-submenu--pages--profile\">Profiles</a>\r\n\r\n                                    <!-- Submenu (level 2) -->\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 u-dropdown-col-2 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--pages--profile\" aria-labelledby=\"nav-link--pages--profile\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-profile-main-1.html\">Main</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-profile-profile-1.html\">User</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-profile-projects-1.html\">Projects</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-profile-comments-1.html\">Comments</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-profile-history-1.html\">History</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-profile-reviews-1.html\">Reviews</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-profile-settings-1.html\">Settings</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-profile-users-1.html\">Contacts 1</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-profile-users-1-full-width.html\">Contacts\r\n                                                1\r\n                                                <span class=\"g-opacity-0_5\">(full width)</span></a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-profile-users-2.html\">Contacts 2</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-profile-users-2-full-width.html\">Contacts\r\n                                                2\r\n                                                <span class=\"g-opacity-0_5\">(full width)</span></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <!-- End Submenu (level 2) -->\r\n                                </li>\r\n                                <!-- End Pages - Profiles -->\r\n\r\n                                <!-- Pages - \u0421ontacts -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--pages--contacts\" class=\"nav-link\" href=\"#\" aria-haspopup=\"true\"\r\n                                        aria-expanded=\"false\" aria-controls=\"nav-submenu--pages--contacts\">\u0421ontacts</a>\r\n\r\n                                    <!-- Submenu (level 2) -->\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 u-dropdown-col-2 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--pages--contacts\" aria-labelledby=\"nav-link--pages--contacts\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-contacts-1.html\">\u0421ontacts\r\n                                                1</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-contacts-2.html\">\u0421ontacts\r\n                                                2</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-contacts-3.html\">\u0421ontacts\r\n                                                3</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-contacts-4.html\">\u0421ontacts\r\n                                                4</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-contacts-5.html\">\u0421ontacts\r\n                                                5</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-contacts-6.html\">\u0421ontacts\r\n                                                6</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-contacts-7.html\">\u0421ontacts\r\n                                                7</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-contacts-8.html\">\u0421ontacts\r\n                                                8</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <!-- End Submenu (level 2) -->\r\n                                </li>\r\n                                <!-- End Pages - \u0421ontacts -->\r\n\r\n                                <!-- Pages - Jobs -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--pages--jobs\" class=\"nav-link\" href=\"#\" aria-haspopup=\"true\"\r\n                                        aria-expanded=\"false\" aria-controls=\"nav-submenu--pages--jobs\">Jobs</a>\r\n\r\n                                    <!-- Submenu (level 2) -->\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--pages--jobs\" aria-labelledby=\"nav-link--pages--jobs\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-jobs-1.html\">Jobs</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-jobs-description-right-sidebar-1.html\">Jobs\r\n                                                Description</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <!-- End Submenu (level 2) -->\r\n                                </li>\r\n                                <!-- End Pages - Jobs -->\r\n\r\n                                <!-- Pages - Pricing -->\r\n                                <li class=\"dropdown-item \">\r\n                                    <a class=\"nav-link\" href=\"./unify-main/pages/page-pricing-1.html\">Pricing</a>\r\n                                </li>\r\n                                <!-- End Pages - Pricing -->\r\n\r\n                                <!-- Pages - FAQ -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--pages--faq\" class=\"nav-link\" href=\"#\" aria-haspopup=\"true\"\r\n                                        aria-expanded=\"false\" aria-controls=\"nav-submenu--pages--faq\">FAQ</a>\r\n\r\n                                    <!-- Submenu (level 2) -->\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--pages--faq\" aria-labelledby=\"nav-link--pages--faq\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-faq-1.html\">FAQ 1</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-faq-2.html\">FAQ 2</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <!-- End Submenu (level 2) -->\r\n                                </li>\r\n                                <!-- End Pages - FAQ -->\r\n\r\n                                <!-- Pages - Others -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--pages--others\" class=\"nav-link\" href=\"#\" aria-haspopup=\"true\"\r\n                                        aria-expanded=\"false\" aria-controls=\"nav-submenu--pages--others\">Others</a>\r\n\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--pages--others\" aria-labelledby=\"nav-link--pages--others\">\r\n                                        <!-- Clients -->\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-clients-1.html\">Clients</a>\r\n                                        </li>\r\n                                        <!-- End Clients -->\r\n\r\n                                        <!-- Terms -->\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/pages/page-terms-1.html\">Terms</a>\r\n                                        </li>\r\n                                        <!-- End Terms -->\r\n\r\n                                        <!-- \u0421ookies -->\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-cookies-1.html\">\u0421ookies</a>\r\n                                        </li>\r\n                                        <!-- End \u0421ookies -->\r\n\r\n                                        <!-- Invoice -->\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/pages/page-invoice-1.html\">Invoice</a>\r\n                                        </li>\r\n                                        <!-- End Invoice -->\r\n\r\n                                        <!-- 404 -->\r\n                                        <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                            <a id=\"nav-link--pages--404\" class=\"nav-link\" href=\"#\" aria-haspopup=\"true\"\r\n                                                aria-expanded=\"false\" aria-controls=\"nav-submenu--pages--404\">404</a>\r\n\r\n                                            <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2 \"\r\n                                                id=\"nav-submenu--pages--404\" aria-labelledby=\"nav-link--pages--404\">\r\n                                                <li class=\"dropdown-item \">\r\n                                                    <a class=\"nav-link\" href=\"./specialty-pages/404/404-1.html\">404\r\n                                                        1</a>\r\n                                                </li>\r\n                                                <li class=\"dropdown-item \">\r\n                                                    <a class=\"nav-link\" href=\"./specialty-pages/404/404-2.html\">404\r\n                                                        2</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </li>\r\n                                        <!-- End 404 -->\r\n\r\n                                        <!-- Coming Soon -->\r\n                                        <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                            <a id=\"nav-link--pages--coming-soon\" class=\"nav-link\" href=\"#\"\r\n                                                aria-haspopup=\"true\" aria-expanded=\"false\"\r\n                                                aria-controls=\"nav-submenu--pages--coming-soon\">Coming Soon</a>\r\n\r\n                                            <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2 \"\r\n                                                id=\"nav-submenu--pages--coming-soon\"\r\n                                                aria-labelledby=\"nav-link--pages--coming-soon\">\r\n                                                <li class=\"dropdown-item \">\r\n                                                    <a class=\"nav-link\"\r\n                                                        href=\"./specialty-pages/coming-soon/page-coming-soon-1.html\">Coming\r\n                                                        Soon</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </li>\r\n                                        <!-- End Coming Soon -->\r\n                                    </ul>\r\n                                </li>\r\n                                <!-- End Pages - Others -->\r\n                            </ul>\r\n                        </li>\r\n                        <!-- End Pages -->\r\n\r\n                        <!-- Blog -->\r\n                        <li class=\"nav-item hs-has-sub-menu  g-mx-10--lg g-mx-15--xl\" data-animation-in=\"fadeIn\"\r\n                            data-animation-out=\"fadeOut\">\r\n                            <a id=\"nav-link--blog\" class=\"nav-link g-py-7 g-px-0\" href=\"#\" aria-haspopup=\"true\"\r\n                                aria-expanded=\"false\" aria-controls=\"nav-submenu--blog\">Blog</a>\r\n\r\n                            <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-18 g-mt-8--lg--scrolling\"\r\n                                id=\"nav-submenu--blog\" aria-labelledby=\"nav-link--blog\">\r\n                                <!-- Blog - Minimal -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--pages--blog--minimal\" class=\"nav-link\" href=\"#\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\"\r\n                                        aria-controls=\"nav-submenu--pages--blog--minimal\">Minimal</a>\r\n\r\n                                    <!-- Submenu (level 2) -->\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--pages--blog--minimal\"\r\n                                        aria-labelledby=\"nav-link--pages--blog--minimal\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/blog/blog-minimal-1.html\">Minimal\r\n                                                1</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-minimal-1-left-sidebar.html\">Minimal 1\r\n                                                <span class=\"g-opacity-0_5\">(left sidebar)</span></a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-minimal-1-right-sidebar.html\">Minimal 1\r\n                                                <span class=\"g-opacity-0_5\">(right sidebar)</span></a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/blog/blog-minimal-2.html\">Minimal\r\n                                                2</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-minimal-2-left-sidebar.html\">Minimal 2\r\n                                                <span class=\"g-opacity-0_5\">(left sidebar)</span></a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-minimal-2-right-sidebar.html\">Minimal 2\r\n                                                <span class=\"g-opacity-0_5\">(right sidebar)</span></a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/blog/blog-minimal-3.html\">Minimal\r\n                                                3</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-minimal-3-left-sidebar.html\">Minimal 3\r\n                                                <span class=\"g-opacity-0_5\">(left sidebar)</span></a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-minimal-3-right-sidebar.html\">Minimal 3\r\n                                                <span class=\"g-opacity-0_5\">(right sidebar)</span></a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/blog/blog-minimal-4.html\">Minimal\r\n                                                4</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-minimal-4-left-sidebar.html\">Minimal 4\r\n                                                <span class=\"g-opacity-0_5\">(left sidebar)</span></a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-minimal-4-right-sidebar.html\">Minimal 4\r\n                                                <span class=\"g-opacity-0_5\">(right sidebar)</span></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <!-- End Submenu (level 2) -->\r\n                                </li>\r\n                                <!-- End Blog - Minimal -->\r\n\r\n                                <!-- Blog - Grid Background -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--pages--blog--grid-bg\" class=\"nav-link\" href=\"#\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\"\r\n                                        aria-controls=\"nav-submenu--pages--blog--grid-bg\">Grid Background</a>\r\n\r\n                                    <!-- Submenu (level 2) -->\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--pages--blog--grid-bg\"\r\n                                        aria-labelledby=\"nav-link--pages--blog--grid-bg\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-grid-background-overlay-2.html\">Column\r\n                                                2</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-grid-background-overlay-left-sidebar.html\">Column\r\n                                                2 <span class=\"g-opacity-0_5\">(left sidebar)</span></a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-grid-background-overlay-right-sidebar.html\">Column\r\n                                                2 <span class=\"g-opacity-0_5\">(right sidebar)</span></a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-grid-background-overlay-3.html\">Column\r\n                                                3</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-grid-background-overlay-3-fullwidth.html\">Column\r\n                                                3 <span class=\"g-opacity-0_5\">(full width)</span></a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-grid-background-overlay-4.html\">Column\r\n                                                4</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-grid-background-overlay-4-fullwidth.html\">Column\r\n                                                4 <span class=\"g-opacity-0_5\">(full width)</span></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <!-- End Submenu (level 2) -->\r\n                                </li>\r\n                                <!-- End Blog - Grid Background -->\r\n\r\n                                <!-- Blog - Grid Classic -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--pages--blog--grid-classic\" class=\"nav-link\" href=\"#\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\"\r\n                                        aria-controls=\"nav-submenu--pages--blog--grid-classic\">Grid Classic</a>\r\n\r\n                                    <!-- Submenu (level 2) -->\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--pages--blog--grid-classic\"\r\n                                        aria-labelledby=\"nav-link--pages--blog--grid-classic\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/blog/blog-grid-classic-2.html\">Column\r\n                                                2</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-grid-classic-left-sidebar.html\">Column 2\r\n                                                <span class=\"g-opacity-0_5\">(left sidebar)</span></a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-grid-classic-right-sidebar.html\">Column 2\r\n                                                <span class=\"g-opacity-0_5\">(right sidebar)</span></a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/blog/blog-grid-classic-3.html\">Column\r\n                                                3</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-grid-classic-3-fullwidth.html\">Column 3\r\n                                                <span class=\"g-opacity-0_5\">(full width)</span></a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/blog/blog-grid-classic-4.html\">Column\r\n                                                4</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-grid-classic-4-fullwidth.html\">Column 4\r\n                                                <span class=\"g-opacity-0_5\">(full width)</span></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <!-- End Submenu (level 2) -->\r\n                                </li>\r\n                                <!-- End Blog - Grid Classic -->\r\n\r\n                                <!-- Blog - Grid Modern -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--pages--blog--grid-modern\" class=\"nav-link\" href=\"#\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\"\r\n                                        aria-controls=\"nav-submenu--pages--blog--grid-modern\">Grid Modern</a>\r\n\r\n                                    <!-- Submenu (level 2) -->\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--pages--blog--grid-modern\"\r\n                                        aria-labelledby=\"nav-link--pages--blog--grid-modern\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/blog/blog-grid-modern-1.html\">Modern\r\n                                                1</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/blog/blog-grid-modern-2.html\">Modern\r\n                                                2</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <!-- End Submenu (level 2) -->\r\n                                </li>\r\n                                <!-- End Blog - Grid Modern -->\r\n\r\n                                <!-- Blog - Grid Overlap -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--pages--blog--grid-overlap\" class=\"nav-link\" href=\"#\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\"\r\n                                        aria-controls=\"nav-submenu--pages--blog--grid-overlap\">Grid Overlap</a>\r\n\r\n                                    <!-- Submenu (level 2) -->\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--pages--blog--grid-overlap\"\r\n                                        aria-labelledby=\"nav-link--pages--blog--grid-overlap\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/blog/blog-grid-overlap-2.html\">Column\r\n                                                2</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-grid-overlap-left-sidebar.html\">Column 2\r\n                                                <span class=\"g-opacity-0_5\">(left sidebar)</span></a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-grid-overlap-right-sidebar.html\">Column 2\r\n                                                <span class=\"g-opacity-0_5\">(right sidebar)</span></a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/blog/blog-grid-overlap-3.html\">Column\r\n                                                3</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-grid-overlap-3-fullwidth.html\">Column 3\r\n                                                <span class=\"g-opacity-0_5\">(full width)</span></a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-grid-overlap-4-fullwidth.html\">Column 4\r\n                                                <span class=\"g-opacity-0_5\">(full width)</span></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <!-- End Submenu (level 2) -->\r\n                                </li>\r\n                                <!-- End Blog - Grid Overlap -->\r\n\r\n                                <!-- Blog - Masonry -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--pages--blog--masonry\" class=\"nav-link\" href=\"#\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\"\r\n                                        aria-controls=\"nav-submenu--pages--blog--masonry\">Masonry</a>\r\n\r\n                                    <!-- Submenu (level 2) -->\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--pages--blog--masonry\"\r\n                                        aria-labelledby=\"nav-link--pages--blog--masonry\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/blog/blog-masonry-col-2.html\">Column\r\n                                                2</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/blog/blog-masonry-col-3.html\">Column\r\n                                                3</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-masonry-col-3-fullwidth.html\">Column 3\r\n                                                <span class=\"g-opacity-0_5\">(full width)</span></a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/blog/blog-masonry-col-4.html\">Column\r\n                                                4</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/blog/blog-masonry-col-4-fullwidth.html\">Column 4\r\n                                                <span class=\"g-opacity-0_5\">(full width)</span></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <!-- End Submenu (level 2) -->\r\n                                </li>\r\n                                <!-- End Blog - Masonry -->\r\n\r\n                                <!-- Blog - Single items -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--pages--blog--single-item\" class=\"nav-link\" href=\"#\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\"\r\n                                        aria-controls=\"nav-submenu--pages--blog--single-item\">Single items</a>\r\n\r\n                                    <!-- Submenu (level 2) -->\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--pages--blog--single-item\"\r\n                                        aria-labelledby=\"nav-link--pages--blog--single-item\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/blog/blog-single-item-1.html\">Single\r\n                                                item 1</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./unify-main/blog/blog-single-item-2.html\">Single\r\n                                                item 2</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <!-- End Submenu (level 2) -->\r\n                                </li>\r\n                                <!-- End Blog - Single items -->\r\n                            </ul>\r\n                        </li>\r\n                        <!-- End Blog -->\r\n\r\n                        <!-- Features -->\r\n                        <li class=\"nav-item hs-has-sub-menu  g-mx-10--lg g-mx-15--xl\" data-animation-in=\"fadeIn\"\r\n                            data-animation-out=\"fadeOut\">\r\n                            <a id=\"nav-link--features\" class=\"nav-link g-py-7 g-px-0\" href=\"#\" aria-haspopup=\"true\"\r\n                                aria-expanded=\"false\" aria-controls=\"nav-submenu--features\">Features</a>\r\n\r\n                            <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-18 g-mt-8--lg--scrolling\"\r\n                                id=\"nav-submenu--features\" aria-labelledby=\"nav-link--features\">\r\n                                <!-- Features - Headers -->\r\n                                <li class=\"dropdown-item \">\r\n                                    <a class=\"nav-link\" href=\"./unify-main/shortcodes/headers/index.html\">Headers</a>\r\n                                </li>\r\n                                <!-- End Features - Headers -->\r\n\r\n                                <!-- Features - Promo blocks -->\r\n                                <li class=\"dropdown-item \">\r\n                                    <a class=\"nav-link\" href=\"./unify-main/shortcodes/promo/index.html\">Promo Blocks</a>\r\n                                </li>\r\n                                <!-- End Features - Promo blocks -->\r\n\r\n                                <!-- Features - Sliders -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--features--sliders\" class=\"nav-link\" href=\"#\" aria-haspopup=\"true\"\r\n                                        aria-expanded=\"false\" aria-controls=\"nav-submenu--features--sliders\">Sliders</a>\r\n\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--features--sliders\"\r\n                                        aria-labelledby=\"nav-link--features--sliders\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./revolution-slider/index.html\">Revolution\r\n                                                sliders</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./master-slider/index.html\">Master sliders</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <!-- End Features - Sliders -->\r\n\r\n                                <!-- Features - Pop-ups -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--features--pop-ups\" class=\"nav-link\" href=\"#\" aria-haspopup=\"true\"\r\n                                        aria-expanded=\"false\" aria-controls=\"nav-submenu--features--pop-ups\">Pop-ups</a>\r\n\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--features--pop-ups\"\r\n                                        aria-labelledby=\"nav-link--features--pop-ups\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/shortcodes/shortcode-base-lightbox-options.html\">Lightbox</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/shortcodes/shortcode-base-modals.html\">Modals</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/shortcodes/shortcode-blocks-gallery-grid.html\">Gallery</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <!-- End Features - Pop-ups -->\r\n\r\n                                <!-- Features - Maps -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--features--maps\" class=\"nav-link\" href=\"#\" aria-haspopup=\"true\"\r\n                                        aria-expanded=\"false\" aria-controls=\"nav-submenu--features--maps\">Maps</a>\r\n\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--features--maps\" aria-labelledby=\"nav-link--features--maps\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/shortcodes/shortcode-base-google-maps.html\">Google\r\n                                                Maps</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/shortcodes/shortcode-base-maps-with-pins.html\">Maps\r\n                                                With Pins</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/shortcodes/shortcode-base-vector-maps.html\">Vector\r\n                                                Maps</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <!-- End Features - Maps -->\r\n\r\n                                <!-- Features - Footers -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--features--footers\" class=\"nav-link\" href=\"#\" aria-haspopup=\"true\"\r\n                                        aria-expanded=\"false\" aria-controls=\"nav-submenu--features--footers\">Footers</a>\r\n\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2\"\r\n                                        id=\"nav-submenu--features--footers\"\r\n                                        aria-labelledby=\"nav-link--features--footers\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/shortcodes/footers/shortcode-blocks-footer-classic.html\">Classic\r\n                                                Footers</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/shortcodes/footers/shortcode-blocks-footer-contact-forms.html\">Contact\r\n                                                Forms</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/shortcodes/footers/shortcode-blocks-footer-maps.html\">Footers\r\n                                                Maps</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\"\r\n                                                href=\"./unify-main/shortcodes/footers/shortcode-blocks-footer-modern.html\">Modern\r\n                                                Footers</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <!-- End Features - Footers -->\r\n                            </ul>\r\n                        </li>\r\n                        <!-- End Features -->\r\n\r\n                        <!-- Shortcodes -->\r\n                        <li class=\"nav-item  g-mx-10--lg g-mx-15--xl\">\r\n                            <a href=\"./unify-main/shortcodes/index.html\" class=\"nav-link g-py-7 g-px-0\">Shortcodes</a>\r\n                        </li>\r\n                        <!-- End Shortcodes -->\r\n\r\n                        <!-- Demos -->\r\n                        <li class=\"nav-item hs-has-sub-menu  g-mx-10--lg g-mx-15--xl\" data-animation-in=\"fadeIn\"\r\n                            data-animation-out=\"fadeOut\">\r\n                            <a id=\"nav-link-demos\" class=\"nav-link g-py-7 g-px-0\" href=\"#\" aria-haspopup=\"true\"\r\n                                aria-expanded=\"false\" aria-controls=\"nav-submenu-demos\">Demos</a>\r\n\r\n                            <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-18 g-mt-8--lg--scrolling\"\r\n                                id=\"nav-submenu-demos\" aria-labelledby=\"nav-link-demos\">\r\n                                <!-- Demos - One Pages -->\r\n                                <li class=\"dropdown-item hs-has-sub-menu \">\r\n                                    <a id=\"nav-link--demos--one-page\" class=\"nav-link\" href=\"#\" aria-haspopup=\"true\"\r\n                                        aria-expanded=\"false\" aria-controls=\"nav-submenu--demos--one-page\">One Pages</a>\r\n\r\n                                    <ul class=\"hs-sub-menu list-unstyled u-shadow-v11 u-dropdown-col-2 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2 hs-reversed\"\r\n                                        id=\"nav-submenu--demos--one-page\" aria-labelledby=\"nav-link--demos--one-page\">\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/accounting/index.html\"\r\n                                                target=\"_blank\">Accounting</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/agency/index.html\"\r\n                                                target=\"_blank\">Agency</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/app/index.html\"\r\n                                                target=\"_blank\">App</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/architecture/index.html\"\r\n                                                target=\"_blank\">Architecture</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/business/index.html\"\r\n                                                target=\"_blank\">Business</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/charity/index.html\"\r\n                                                target=\"_blank\">Charity</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/consulting/index.html\"\r\n                                                target=\"_blank\">\u0421onsulting</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/construction/index.html\"\r\n                                                target=\"_blank\">Construction</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/courses/index.html\"\r\n                                                target=\"_blank\">Courses</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/corporate/index.html\"\r\n                                                target=\"_blank\">Corporate</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/event/index.html\"\r\n                                                target=\"_blank\">Event</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/gym/index.html\"\r\n                                                target=\"_blank\">GYM</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/lawyer/index.html\"\r\n                                                target=\"_blank\">Lawyer</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/music/index.html\"\r\n                                                target=\"_blank\">Music</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/photography/index.html\"\r\n                                                target=\"_blank\">Photography</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/real-estate/index.html\"\r\n                                                target=\"_blank\">Real Estate</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/restaurant/index.html\"\r\n                                                target=\"_blank\">Restaurant</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/shipping/index.html\"\r\n                                                target=\"_blank\">Shipping</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/spa/index.html\"\r\n                                                target=\"_blank\">Spa</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/travel/index.html\"\r\n                                                target=\"_blank\">Travel</a>\r\n                                        </li>\r\n                                        <li class=\"dropdown-item \">\r\n                                            <a class=\"nav-link\" href=\"./one-pages/wedding/index.html\"\r\n                                                target=\"_blank\">Wedding</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <!-- End Demos - One Pages -->\r\n\r\n                                <!-- Demos - Admin Template -->\r\n                                <li class=\"dropdown-item \">\r\n                                    <a class=\"nav-link\" href=\"./admin-template/dashboards/dashboard-v1.html\"\r\n                                        target=\"_blank\">Admin\r\n                                        Template <span\r\n                                            class=\"u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5\">New</span></a>\r\n                                </li>\r\n                                <!-- End Demos - Admin Template -->\r\n\r\n                                <!-- Demos - E-Commerce -->\r\n                                <li class=\"dropdown-item \">\r\n                                    <a class=\"nav-link\" href=\"./e-commerce/home-page-1.html\" target=\"_blank\">E-Commerce\r\n                                        <span class=\"g-opacity-0_5\">(44 Pages)</span></a>\r\n                                </li>\r\n                                <!-- End Demos - E-Commerce -->\r\n\r\n                                <!-- Demos - University -->\r\n                                <li class=\"dropdown-item \">\r\n                                    <a class=\"nav-link\" href=\"./multipage/education/home-page-1.html\"\r\n                                        target=\"_blank\">University <span class=\"g-opacity-0_5\">(13 Pages)</span></a>\r\n                                </li>\r\n                                <!-- End Demos - University -->\r\n\r\n                                <!-- Demos - Marketing -->\r\n                                <li class=\"dropdown-item \">\r\n                                    <a class=\"nav-link\" href=\"./multipage/marketing/home-page-1.html\"\r\n                                        target=\"_blank\">Marketing <span class=\"g-opacity-0_5\">(10 Pages)</span></a>\r\n                                </li>\r\n                                <!-- End Demos - Marketing -->\r\n\r\n                                <!-- Demos - Real Estate -->\r\n                                <li class=\"dropdown-item \">\r\n                                    <a class=\"nav-link\" href=\"./multipage/real-estate/home-page-1.html\"\r\n                                        target=\"_blank\">Real Estate\r\n                                        <span class=\"g-opacity-0_5\">(13 Pages)</span></a>\r\n                                </li>\r\n                                <!-- End Demos - Real Estate -->\r\n\r\n                                <!-- Demos - Blogs & Magazines -->\r\n                                <li class=\"dropdown-item \">\r\n                                    <a class=\"nav-link\"\r\n                                        href=\"./multipage/blog-magazine/classic/bm-classic-home-page-1.html\"\r\n                                        target=\"_blank\">Blogs &amp; Magazines <span class=\"g-opacity-0_5\">(6\r\n                                            Pages)</span></a>\r\n                                </li>\r\n                                <!-- End Demos - Blogs & Magazines -->\r\n                            </ul>\r\n                        </li>\r\n                        <!-- End Demos -->\r\n                    </ul>\r\n                </div>\r\n                <!-- End Navigation -->\r\n\r\n                <div class=\"d-inline-block g-hidden-md-down g-pos-rel g-valign-middle g-pl-30 g-pl-0--lg\">\r\n                    <a class=\"btn u-btn-outline-primary g-font-size-13 text-uppercase g-py-10 g-px-15\"\r\n                        href=\"https://wrapbootstrap.com/theme/unify-responsive-website-template-WB0412697?ref=htmlstream\"\r\n                        target=\"_blank\">Purchase now</a>\r\n                </div>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n</header>\r\n<!-- End Header -->"
                },] }
    ];
    HeaderComponent.ctorParameters = function () { return [
        { type: platformBrowser.Title },
        { type: router.ActivatedRoute },
        { type: i1.ConfigStateService }
    ]; };

    var BannerComponent = /** @class */ (function () {
        function BannerComponent() {
        }
        BannerComponent.prototype.ngOnInit = function () {
        };
        return BannerComponent;
    }());
    BannerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'fs-banner',
                    template: "  <!-- Promo Block -->\r\n  <section class=\"g-pos-rel\">\r\n    <div class=\"dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll\"\r\n      data-options='{direction: \"reverse\", settings_mode_oneelement_max_offset: \"150\"}'>\r\n      <div\r\n        class=\"divimage dzsparallaxer--target w-100 g-bg-cover g-bg-pos-top-center g-bg-img-hero g-bg-bluegray-opacity-0_2--after\"\r\n        style=\"height: 130%; background-image: url(./assets/img-temp/1920x700/img3.jpg);\"></div>\r\n\r\n      <div class=\"container g-bg-cover__inner g-py-100\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-lg-6 g-mb-30 g-mb-0--lg\">\r\n            <h2 class=\"h1 text-uppercase g-color-white g-mb-30\">\r\n              <span class=\"g-bg-primary-dark-v3 g-px-5\">Clean &amp; Fresh</span><br>\r\n              <span class=\"g-bg-primary-dark-v3 g-px-5\">Fully Responsive</span><br>\r\n              <span class=\"g-bg-primary-dark-v3 g-px-5\">Design</span>\r\n            </h2>\r\n            <h3 class=\"h4 g-color-white\">\r\n              <span class=\"g-bg-black-opacity-0_6 g-px-5\">Start a new project with easy</span><br>\r\n              <span class=\"g-bg-black-opacity-0_6 g-px-5\">to use 1610+ Reusable</span><br>\r\n              <span class=\"g-bg-black-opacity-0_6 g-px-5\">UI Components</span>\r\n            </h3>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n            <!-- Vimeo Example -->\r\n            <div class=\"embed-responsive embed-responsive-16by9\">\r\n              <iframe src=\"//player.vimeo.com/video/47911018\" width=\"530\" height=\"300\" frameborder=\"0\"\r\n                webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\"></iframe>\r\n            </div>\r\n            <!-- End Vimeo Example -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!-- End Promo Block -->"
                },] }
    ];
    BannerComponent.ctorParameters = function () { return []; };

    var LayoutStateService = /** @class */ (function () {
        // getSkin() {
        //   return this.store.state.skin;
        // }
        // getSkin$() {
        //   return this.store.sliceState(state => state.skin);
        // }
        function LayoutStateService(domInsertionService) {
            this.domInsertionService = domInsertionService;
            this.store = new i1.InternalStore({});
        }
        LayoutStateService.prototype.getThemeSettings = function () {
            return this.store.state.themeSettings;
        };
        LayoutStateService.prototype.getThemeSettings$ = function () {
            return this.store.sliceState(function (state) { return state.themeSettings; });
        };
        return LayoutStateService;
    }());
    LayoutStateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LayoutStateService_Factory() { return new LayoutStateService(i0.ɵɵinject(i1.DomInsertionService)); }, token: LayoutStateService, providedIn: "root" });
    LayoutStateService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    LayoutStateService.ctorParameters = function () { return [
        { type: i1.DomInsertionService }
    ]; };

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
    SettingsComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "<h2>TheProject Settings</h2>\r\n<hr class=\"my-4\" />\r\n<form id=\"TheProjectThemeSettingsForm\" novalidate=\"novalidate\" [formGroup]=\"form\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12\">\r\n      <div>\r\n        <div class=\"form-group\">\r\n          <label for=\"Skin\">Skin</label>\r\n          <select\r\n            class=\"custom-select form-control valid\"\r\n            id=\"Skin\"\r\n            name=\"Skin\"\r\n            formControlName=\"skin\"\r\n          >\r\n            <option [ngValue]=\"0\">blue</option>\r\n            <option [ngValue]=\"1\">brown</option>\r\n            <option [ngValue]=\"2\">cool_green</option>\r\n            <option [ngValue]=\"3\">dark_cyan</option>\r\n            <option [ngValue]=\"4\">dark_red</option>\r\n            <option [ngValue]=\"5\">gold</option>\r\n            <option [ngValue]=\"6\">gray</option>\r\n            <option [ngValue]=\"7\">green</option>\r\n            <option [ngValue]=\"8\">light_blue</option>\r\n            <option [ngValue]=\"9\">orange</option>\r\n            <option [ngValue]=\"10\">pink</option>\r\n            <option [ngValue]=\"11\">purple</option>\r\n            <option [ngValue]=\"12\">red</option>\r\n            <option [ngValue]=\"13\">vivid_red</option>\r\n          </select>\r\n\r\n          <span\r\n            class=\"text-danger field-validation-valid\"\r\n            data-valmsg-for=\"Skin\"\r\n            data-valmsg-replace=\"true\"\r\n          ></span>\r\n        </div>\r\n      </div>\r\n      <hr class=\"my-4\" />\r\n      <div>\r\n        <abp-button buttonType=\"button\" (click)=\"save()\" [loading]=\"loading\" iconClass=\"fa fa-save\">\r\n            Save\r\n        </abp-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n",
                    styles: [""]
                },] }
    ];
    SettingsComponent.ctorParameters = function () { return [
        { type: ng_theme_shared.ToasterService },
        { type: router.Router },
        { type: i1.SubscriptionService },
        { type: LayoutStateService },
        { type: forms.FormBuilder }
    ]; };

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
    }(core.ValidationErrorComponent));
    ValidationErrorComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-validation-error',
                    template: "\n    <span\n      class=\"field-validation-error text-danger\"\n      data-valmsg-for=\"Role.Name\"\n      data-valmsg-replace=\"true\"\n      ><span *ngFor=\"let error of abpErrors; trackBy: trackByFn\">\n        {{ error.message | abpLocalization: error.interpoliteParams }}</span\n      ></span\n    >\n  ",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: ["\n      .custom-checkbox + * .field-validation-error span,\n      ngb-timepicker + * .field-validation-error span {\n        background: transparent !important;\n        border: 0 !important;\n        color: currentColor !important;\n        padding: 0 !important;\n      }\n    "]
                },] }
    ];

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
            var router$1 = injector.get(router.Router);
            var layoutStateService = injector.get(LayoutStateService);
            initial(router$1, layoutStateService);
        };
    }
    function initial(router$1, layoutStateService) {
        router$1.events
            .pipe(operators.filter(function (e) { return e instanceof router.NavigationEnd; }), operators.delay(0))
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
            var replaceableComponents = injector.get(i1.ReplaceableComponentsService);
            var layoutService = injector.get(LayoutStateService);
            var configState = injector.get(i1.ConfigStateService);
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
            deps: [i1.SettingTabsService],
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
    ThemeUnifyModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: __spread(LAYOUTS, [
                        HeaderComponent,
                        FooterComponent,
                        BannerComponent,
                        SettingsComponent
                    ]),
                    exports: __spread(LAYOUTS, [
                        HeaderComponent,
                        FooterComponent,
                        SettingsComponent
                    ]),
                    entryComponents: __spread(LAYOUTS),
                    imports: [
                        i1.CoreModule,
                        ng_theme_shared.ThemeSharedModule,
                        ngBootstrap.NgbDropdownModule,
                        core.NgxValidateCoreModule
                    ]
                },] }
    ];
    var RootUnifyModule = /** @class */ (function () {
        function RootUnifyModule() {
        }
        return RootUnifyModule;
    }());
    RootUnifyModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [
                        i1.CoreModule,
                        core.NgxValidateCoreModule.forRoot({
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
                    declarations: [
                        ValidationErrorComponent
                    ],
                    exports: [
                        ValidationErrorComponent
                    ]
                },] }
    ];

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
    exports.ɵa = UNIFY_THEME_SETTING_TAB_PROVIDERS;
    exports.ɵb = configureSettingTabs;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-theme-unify.umd.js.map
