import { Component, OnInit } from '@angular/core';
import { eLayoutType, ConfigState } from '@abp/ng.core';
import { Store,Select } from '@ngxs/store';
//import { ThemeState } from '@fs/theme.core';
//import { ThemeDto } from '@fs/theme.core/proxy';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './account-layout.component.html',
    styleUrls: ['./account-layout.component.less'],
})
export class AccountLayoutComponent implements OnInit {
    static type = eLayoutType.account;
    // @Select(ThemeState.getTheme)
    // data$: Observable<ThemeDto>;

    htmlDisplay = {
        title: "ng-alain",
        description: "武林中最有影响力的《葵花宝典》；欲练神功，挥刀自宫",
        footer: "Copyright<i nz-icon nzType='copyright'></i> 2017 <a href='//github.com/cipchk' target='_blank'>卡色</a>出品"
    };
    constructor(private store: Store) {
    }

    ngOnInit() {
        this.loadAndGetSetting();
        // this.data$.subscribe(x => {
            
        //     if (x.themeSetting) {
        //         this.htmlDisplay.title = x.themeSetting.webInfo.title;
        //         this.htmlDisplay.footer = x.themeSetting.webInfo.copyright;
        //       //this.titleService.setTitle(x.themeSetting.webInfo.title);
        //       //this.favIcon.href = this.configStateService.getApiUrl() + x.themeSetting.webInfo.favicon;
        //     }
        //   });
    }

    loadAndGetSetting() {
        this.htmlDisplay.title = this.store.selectSnapshot(ConfigState.getSetting("FS.Abp.Themes.Core.LoginPageOptions.Title"));
        this.htmlDisplay.description = this.store.selectSnapshot(ConfigState.getSetting("FS.Abp.Themes.Core.LoginPageOptions.Description"));
        this.htmlDisplay.footer = this.store.selectSnapshot(ConfigState.getSetting("FS.Abp.Themes.Core.LoginPageOptions.Footer"));
    }
}
