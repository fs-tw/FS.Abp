import { ToasterService } from '@abp/ng.theme.shared';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Account } from '../../models/account';
import * as i0 from "@angular/core";
export declare class PersonalSettingsComponent implements OnInit, Account.PersonalSettingsComponentInputs, Account.PersonalSettingsComponentOutputs {
    private fb;
    private store;
    private toasterService;
    form: FormGroup;
    inProgress: boolean;
    constructor(fb: FormBuilder, store: Store, toasterService: ToasterService);
    ngOnInit(): void;
    buildForm(): void;
    submit(): void;
    static ɵfac: i0.ɵɵFactoryDef<PersonalSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PersonalSettingsComponent, "abp-personal-settings-form", ["abpPersonalSettingsForm"], {}, {}, never, never>;
}
//# sourceMappingURL=personal-settings.component.d.ts.map