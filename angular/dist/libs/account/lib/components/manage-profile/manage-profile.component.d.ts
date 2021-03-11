import { OnInit } from '@angular/core';
import { eAccountComponents } from '../../enums/components';
import { Store } from '@ngxs/store';
import * as i0 from "@angular/core";
export declare class ManageProfileComponent implements OnInit {
    private store;
    selectedTab: number;
    changePasswordKey: eAccountComponents;
    personalSettingsKey: eAccountComponents;
    isProfileLoaded: boolean;
    hideChangePasswordTab: boolean;
    constructor(store: Store);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<ManageProfileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ManageProfileComponent, "abp-manage-profile", never, {}, {}, never, never>;
}
//# sourceMappingURL=manage-profile.component.d.ts.map