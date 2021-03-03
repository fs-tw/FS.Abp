import { ChangeDetectorRef, OnInit } from '@angular/core';
import { MSTopbarNavLink, MSTopbarService } from '../../services/topbar.service';
import { ApplicationInfo, EnvironmentService } from '@abp/ng.core';
export declare class MSTopbarComponent implements OnInit {
    private srv;
    private cdr;
    private environment;
    get appInfo(): ApplicationInfo;
    inited: boolean;
    links: MSTopbarNavLink[];
    allNav: boolean;
    userSrv: any;
    constructor(srv: MSTopbarService, cdr: ChangeDetectorRef, environment: EnvironmentService);
    ngOnInit(): void;
    private mergeLinks;
}
