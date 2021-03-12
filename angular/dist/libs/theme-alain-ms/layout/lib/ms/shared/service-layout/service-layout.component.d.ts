import { MSMenu, MSServiceNavConfig } from './../../../models/layout';
import { BrandService } from '../../ms.service';
import * as i0 from "@angular/core";
export declare class MSServiceLayoutComponent {
    private srv;
    nav: boolean;
    navConfig: MSServiceNavConfig;
    navList: MSMenu[];
    hasConsoleCss: boolean;
    get hideNav(): boolean;
    constructor(srv: BrandService);
    static ɵfac: i0.ɵɵFactoryDef<MSServiceLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MSServiceLayoutComponent, "service-layout", never, { "nav": "nav"; "navConfig": "navConfig"; "navList": "navList"; "hasConsoleCss": "hasConsoleCss"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=service-layout.component.d.ts.map