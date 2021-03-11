import { AbpApplicationConfigurationService, ConfigStateService } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { OnInit, Injector, ChangeDetectorRef } from '@angular/core';
import { Fs } from '@fs-tw/emailing/proxy';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class EmailingSettingsComponent implements OnInit {
    protected injector: Injector;
    protected cdr: ChangeDetectorRef;
    protected toaster: ToasterService;
    private configState;
    private appConfigService;
    service: Fs.Abp.Emailing.EmailingApiService;
    settings$: Observable<Fs.Abp.Emailing.Dtos.EmailSettingsDto>;
    private _loading;
    set loading(value: boolean);
    get loading(): boolean;
    constructor(injector: Injector, cdr: ChangeDetectorRef, toaster: ToasterService, configState: ConfigStateService, appConfigService: AbpApplicationConfigurationService);
    ngOnInit(): void;
    submit(newSettings: any): void;
    static ɵfac: i0.ɵɵFactoryDef<EmailingSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<EmailingSettingsComponent, "lib-emailing-settings", never, {}, {}, never, never>;
}
//# sourceMappingURL=emailing-settings.component.d.ts.map