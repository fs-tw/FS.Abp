import { ConfigStateService } from '@abp/ng.core';
import { AuthService } from '../../services/auth.service';
import { ToasterService } from '@abp/ng.theme.shared';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { eAccountComponents } from '../../enums/components';
import * as i0 from "@angular/core";
export declare class LoginComponent implements OnInit {
    private fb;
    private oauthService;
    private store;
    private toasterService;
    private authService;
    private configStateService;
    form: FormGroup;
    inProgress: boolean;
    isSelfRegistrationEnabled: boolean;
    authWrapperKey: eAccountComponents;
    constructor(fb: FormBuilder, oauthService: OAuthService, store: Store, toasterService: ToasterService, authService: AuthService, configStateService: ConfigStateService);
    ngOnInit(): void;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDef<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LoginComponent, "abp-login", never, {}, {}, never, never>;
}
//# sourceMappingURL=login.component.d.ts.map