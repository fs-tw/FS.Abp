import { MSMenu, MSServiceNavConfig } from './../../../models/layout';
import { BrandService } from '../../ms.service';
export declare class MSServiceLayoutComponent {
    private srv;
    nav: boolean;
    navConfig: MSServiceNavConfig;
    navList: MSMenu[];
    get hideNav(): boolean;
    constructor(srv: BrandService);
}
