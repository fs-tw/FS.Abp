import { SubscriptionService } from '@abp/ng.core';
import { OnInit } from '@angular/core';
import { ToasterService } from '@abp/ng.theme.shared';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutStateService } from '../../service/layout-state.service';
import * as i0 from "@angular/core";
export declare class SettingsComponent implements OnInit {
    private toaster;
    private router;
    private subscription;
    private layoutStateService;
    private fb;
    loading: boolean;
    form: FormGroup;
    constructor(toaster: ToasterService, router: Router, subscription: SubscriptionService, layoutStateService: LayoutStateService, fb: FormBuilder);
    ngOnInit(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDef<SettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SettingsComponent, "ng-component", never, {}, {}, never, never>;
}
//# sourceMappingURL=settings.component.d.ts.map