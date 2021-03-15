import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class PageService {
    constructor() {
        this.allTagData = new Subject();
        this.tagData = new Subject();
        this.allTagData$ = this.allTagData.asObservable();
        this.tagData$ = this.tagData.asObservable();
    }
    getTageListFromApi() {
        // this.tagsApiService.tagGroupGetList().pipe(tap(x => this.allTagData.next(x))).subscribe()
    }
    getTagOneFromApi(groupId) {
        if (!groupId) {
            this.tagData.next(null);
            return;
        }
        ;
        // this.tagsApiService.tagGroupGetByIdById(groupId).pipe(tap(x => this.tagData.next(x))).subscribe();
    }
}
PageService.decorators = [
    { type: Injectable }
];
PageService.ctorParameters = () => [];
//# sourceMappingURL=page.service.js.map