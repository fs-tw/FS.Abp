import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MSLink } from '../../../models/layout';
export declare class MSLinkToDirective {
    private router;
    constructor(router: Router);
    i: MSLink;
    linkToChanged: EventEmitter<MouseEvent>;
    _click(e: MouseEvent): void;
}
