import { ConfigStateService } from '@abp/ng.core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
export declare class HeaderComponent {
    private titleService;
    private activatedRoute;
    private configStateService;
    constructor(titleService: Title, activatedRoute: ActivatedRoute, configStateService: ConfigStateService);
}
