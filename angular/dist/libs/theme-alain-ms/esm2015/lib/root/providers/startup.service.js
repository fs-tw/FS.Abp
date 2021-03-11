import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, Inject, Injectable } from '@angular/core';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SettingsService, TitleService } from '@delon/theme';
import { NzIconService } from 'ng-zorro-antd/icon';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/icon";
import * as i2 from "@delon/theme";
import * as i3 from "@angular/common/http";
// import { ICONS } from '../../../style-icons';
// import { ICONS_AUTO } from '../../../style-icons-auto';
// import { I18NService } from '../i18n/i18n.service';
/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
export class StartupService {
    constructor(iconSrv, settingService, 
    // private aclService: ACLService,
    httpClient, doc, 
    // @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    titleSrv) {
        this.settingService = settingService;
        this.httpClient = httpClient;
        this.doc = doc;
        this.titleSrv = titleSrv;
        // iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
    }
    load() {
        // only works with promises
        // https://github.com/angular/angular/issues/15088
        return new Promise((resolve) => {
            zip(this.httpClient.get(`assets/tmp/app-data.json`))
                .pipe(
            // 接收其他拦截器后产生的异常消息
            catchError(([appData]) => {
                resolve(null);
                return [appData];
            }))
                .subscribe(([appData]) => {
                // Load general language data
                //this.i18n.load(this.i18n.currentLang, langData);
                // application data
                const res = appData;
                // 应用信息：包括站点名、描述、年份
                this.settingService.setApp(res.app);
                // 用户信息：包括姓名、头像、邮箱地址
                this.settingService.setUser(res.user);
                // ACL：设置权限为全量
                //this.aclService.setFull(true);
                // 设置标题
                this.titleSrv.default = '';
                this.titleSrv.suffix = 'Ng Alain MS';
            }, () => { }, () => {
                resolve(null);
                this.removeLoading();
            });
        });
    }
    removeLoading() {
        const el = this.doc.querySelector('#j-preloader');
        if (el) {
            el.remove();
        }
    }
}
StartupService.ɵfac = function StartupService_Factory(t) { return new (t || StartupService)(i0.ɵɵinject(i1.NzIconService), i0.ɵɵinject(i2.SettingsService), i0.ɵɵinject(i3.HttpClient), i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(i2.TitleService)); };
StartupService.ɵprov = i0.ɵɵdefineInjectable({ token: StartupService, factory: StartupService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StartupService, [{
        type: Injectable
    }], function () { return [{ type: i1.NzIconService }, { type: i2.SettingsService }, { type: i3.HttpClient }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i2.TitleService }]; }, null); })();
// #region Startup Service
// tslint:disable-next-line: typedef
export function StartupServiceFactory(startupService) {
    return () => startupService.load();
}
export const APPINIT_PROVIDES = [
    StartupService,
    {
        provide: APP_INITIALIZER,
        useFactory: StartupServiceFactory,
        deps: [StartupService],
        multi: true,
    },
];
//# sourceMappingURL=startup.service.js.map