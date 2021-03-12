import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MSLink } from '../../../models/layout';
import * as i0 from "@angular/core";
export declare class MSLinkToDirective {
    private router;
    constructor(router: Router);
    i: MSLink;
    linkToChanged: EventEmitter<MouseEvent>;
    _click(e: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<MSLinkToDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MSLinkToDirective, "[link-to]", never, { "i": "link-to"; }, { "linkToChanged": "linkToChanged"; }, never>;
}
//# sourceMappingURL=link-to.directive.d.ts.map