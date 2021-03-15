import { ApplicationInfo, eLayoutType, EnvironmentService } from '@abp/ng.core';
import { eThemeUnifyComponents } from '../../enums/components';
export declare class ApplicationLayoutComponent {
    private environment;
    static type: eLayoutType;
    headerComponentKey: eThemeUnifyComponents;
    footerComponentKey: eThemeUnifyComponents;
    get appInfo(): ApplicationInfo;
    constructor(environment: EnvironmentService);
}
