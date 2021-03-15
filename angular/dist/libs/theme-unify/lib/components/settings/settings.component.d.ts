import { SubscriptionService } from '@abp/ng.core';
import { OnInit } from '@angular/core';
import { ToasterService } from '@abp/ng.theme.shared';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutStateService } from '../../service/layout-state.service';
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
}
