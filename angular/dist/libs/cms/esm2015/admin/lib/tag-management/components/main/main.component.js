import { Component } from '@angular/core';
import { PageService } from '../../providers/page.service';
import { ConfirmationService } from '@abp/ng.theme.shared';
export class MainComponent {
    constructor(PageService, confirmation) {
        this.PageService = PageService;
        this.confirmation = confirmation;
        this.tagGroupList = [];
    }
    ngOnInit() {
        this.subscription = this.PageService.allTagData$.subscribe(result => {
            this.tagGroupList = result;
        });
    }
    deleteGroup(id) {
        // this.confirmation
        //   .warn(`確認要刪除嗎？`, '系統訊息')
        //   .pipe(
        //     filter(res => res === Confirmation.Status.confirm),
        //     switchMap(() => this.PageService.deleteGroup(id)),
        //     take(1)
        //   )
        //   .subscribe(() => {
        //     this.PageService.getTageListFromApi();
        //   });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
MainComponent.decorators = [
    { type: Component, args: [{
                template: "\r\n<nz-tabset nzType=\"card\">\r\n  <nz-tab nzTitle=\"\u5217\u8868\">\r\n    <nz-table #basicTable [nzData]=\"tagGroupList\" nzSize=\"small\" nzBordered>\r\n      <thead>\r\n        <tr>\r\n          <th nzWidth=\"75px\"></th>\r\n          <th>\u540D\u7A31</th>\r\n          <th>\u9805\u76EE</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let tagGroup of basicTable.data\" class=\"bg-white\">\r\n          <td nzWidth=\"75px\" nzAlign=\"center\">\r\n            <a nz-dropdown [nzDropdownMenu]=\"menu\">\r\n              \u64CD\u4F5C\r\n              <i nz-icon nzType=\"down\"></i>\r\n            </a>\r\n            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n              <ul nz-menu nzSelectable>\r\n                <li nz-menu-item>\r\n                  <a class=\"text-blue\" [routerLink]=\"tagGroup.id\">\u7DE8\u8F2F</a>\r\n                </li>\r\n                <li nz-menu-item><a class=\"text-red\" (click)=\"deleteGroup(tagGroup.id)\">\u522A\u9664</a></li>\r\n              </ul>\r\n            </nz-dropdown-menu>\r\n          </td>\r\n          <td>{{ tagGroup.tagGroupName }}</td>\r\n          <td>\r\n            <nz-tag *ngFor=\"let tagItem of tagGroup.tags\">\r\n              {{ tagItem.name }}\r\n            </nz-tag>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </nz-table>\r\n  </nz-tab>\r\n  <nz-tab nzTitle=\"\u65B0\u589E\">\r\n    <fs-tag-detail [isCreate]=\"true\"></fs-tag-detail>\r\n  </nz-tab>\r\n</nz-tabset>",
                styles: [".bg-white{background-color:#fff}"]
            },] }
];
MainComponent.ctorParameters = () => [
    { type: PageService },
    { type: ConfirmationService }
];
//# sourceMappingURL=main.component.js.map