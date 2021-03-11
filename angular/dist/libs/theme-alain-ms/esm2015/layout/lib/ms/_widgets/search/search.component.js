import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MSTopbarService } from '../../services/topbar.service';
export class MSSearchComponent {
    constructor(http, srv, cdr) {
        this.srv = srv;
        this.cdr = cdr;
        this.show = false;
        this.q = '';
        this.search$ = new Subject();
        this.list = [];
        this.search$
            .pipe(debounceTime(300), distinctUntilChanged(), switchMap((q) => http.get('/user', { no: q, pi: 1, ps: 5 })))
            .subscribe((res) => {
            this.list = res.list;
            this.cdr.detectChanges();
        });
    }
    get l() {
        return this.srv.getNav('search');
    }
    _click() {
        this.ipt.nativeElement.focus();
        this.show = true;
    }
    ngOnDestroy() {
        this.search$.unsubscribe();
    }
}
MSSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'ms-search',
                template: "<div class=\"alain-ms__search\" [ngClass]=\"{ 'alain-ms__search-active': show }\">\r\n  <input\r\n    class=\"alain-ms__search-ipt\"\r\n    #ipt\r\n    placeholder=\"{{ l.placeholder }}\"\r\n    nz-input\r\n    [(ngModel)]=\"q\"\r\n    (input)=\"search$.next($event.target?.value)\"\r\n    [nzAutocomplete]=\"searchAuto\"\r\n    (blur)=\"show = false\"\r\n  />\r\n  <i class=\"alain-ms__search-icon\" nz-icon nzType=\"search\"></i>\r\n  <i class=\"alain-ms__search-outline\"></i>\r\n  <nz-autocomplete #searchAuto class=\"asdlfkjlj\">\r\n    <nz-auto-option *ngFor=\"let item of list\" [nzValue]=\"item\">\r\n      {{ item }}\r\n    </nz-auto-option>\r\n  </nz-autocomplete>\r\n</div>\r\n",
                host: {
                    '[class.alain-ms__topbar-item]': 'true',
                    '[class.mr-md]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSSearchComponent.ctorParameters = () => [
    { type: _HttpClient },
    { type: MSTopbarService },
    { type: ChangeDetectorRef }
];
MSSearchComponent.propDecorators = {
    ipt: [{ type: ViewChild, args: ['ipt', { static: true },] }],
    _click: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=search.component.js.map