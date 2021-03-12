import { ApplicationInfo, eLayoutType, EnvironmentService } from '@abp/ng.core';
import { eThemeUnifyComponents } from '../../enums/components';
import * as i0 from "@angular/core";
export declare class ApplicationLayoutComponent {
    private environment;
    static type: eLayoutType;
    headerComponentKey: eThemeUnifyComponents;
    footerComponentKey: eThemeUnifyComponents;
    get appInfo(): ApplicationInfo;
    constructor(environment: EnvironmentService);
    static ɵfac: i0.ɵɵFactoryDef<ApplicationLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ApplicationLayoutComponent, "fs-application-layout", never, {}, {}, never, never>;
}
//# sourceMappingURL=application-layout.component.d.ts.map