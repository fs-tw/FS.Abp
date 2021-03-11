import { SubscriptionService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { ToasterService } from '@abp/ng.theme.shared';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutStateService } from '../../service/layout-state.service';
export class SettingsComponent {
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
SettingsComponent.decorators = [
    { type: Component, args: [{
                template: "<h2>TheProject Settings</h2>\r\n<hr class=\"my-4\" />\r\n<form id=\"TheProjectThemeSettingsForm\" novalidate=\"novalidate\" [formGroup]=\"form\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12\">\r\n      <div>\r\n        <div class=\"form-group\">\r\n          <label for=\"Skin\">Skin</label>\r\n          <select\r\n            class=\"custom-select form-control valid\"\r\n            id=\"Skin\"\r\n            name=\"Skin\"\r\n            formControlName=\"skin\"\r\n          >\r\n            <option [ngValue]=\"0\">blue</option>\r\n            <option [ngValue]=\"1\">brown</option>\r\n            <option [ngValue]=\"2\">cool_green</option>\r\n            <option [ngValue]=\"3\">dark_cyan</option>\r\n            <option [ngValue]=\"4\">dark_red</option>\r\n            <option [ngValue]=\"5\">gold</option>\r\n            <option [ngValue]=\"6\">gray</option>\r\n            <option [ngValue]=\"7\">green</option>\r\n            <option [ngValue]=\"8\">light_blue</option>\r\n            <option [ngValue]=\"9\">orange</option>\r\n            <option [ngValue]=\"10\">pink</option>\r\n            <option [ngValue]=\"11\">purple</option>\r\n            <option [ngValue]=\"12\">red</option>\r\n            <option [ngValue]=\"13\">vivid_red</option>\r\n          </select>\r\n\r\n          <span\r\n            class=\"text-danger field-validation-valid\"\r\n            data-valmsg-for=\"Skin\"\r\n            data-valmsg-replace=\"true\"\r\n          ></span>\r\n        </div>\r\n      </div>\r\n      <hr class=\"my-4\" />\r\n      <div>\r\n        <abp-button buttonType=\"button\" (click)=\"save()\" [loading]=\"loading\" iconClass=\"fa fa-save\">\r\n            Save\r\n        </abp-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n",
                styles: [""]
            },] }
];
SettingsComponent.ctorParameters = () => [
    { type: ToasterService },
    { type: Router },
    { type: SubscriptionService },
    { type: LayoutStateService },
    { type: FormBuilder }
];
//# sourceMappingURL=settings.component.js.map