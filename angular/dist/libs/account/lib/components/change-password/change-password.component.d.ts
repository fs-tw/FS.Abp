import { ToasterService } from '@abp/ng.theme.shared';
import { Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validation } from '@ngx-validate/core';
import { Store } from '@ngxs/store';
import { Account } from '../../models/account';
import * as i0 from "@angular/core";
export declare class ChangePasswordComponent implements OnInit, Account.ChangePasswordComponentInputs, Account.ChangePasswordComponentOutputs {
    private fb;
    private store;
    private toasterService;
    private injector;
    form: FormGroup;
    inProgress: boolean;
    hideCurrentPassword: boolean;
    mapErrorsFn: Validation.MapErrorsFn;
    constructor(fb: FormBuilder, store: Store, toasterService: ToasterService, injector: Injector);
    ngOnInit(): void;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDef<ChangePasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ChangePasswordComponent, "abp-change-password-form", ["abpChangePasswordForm"], {}, {}, never, never>;
}
//# sourceMappingURL=change-password.component.d.ts.map