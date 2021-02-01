import { Component, Input } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import * as _ from 'lodash';
export class EditVocabularyComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.inputList = [
            { name: '' }
        ];
    }
    ngOnInit() {
        console.log(this.data);
    }
    createTplModal(tplTitle, tplContent, tplFooter) {
        this.modal = this.modalService.create({
            nzTitle: tplTitle,
            nzContent: tplContent,
            nzFooter: tplFooter,
            nzMaskClosable: false
        });
        if (this.data) {
            this._data = _.cloneDeep(this.data);
        }
        else {
            this._data = {
                title: '',
            };
        }
    }
    addOption() {
        this.inputList.push({ name: '' });
    }
    removeOption(index) {
        this.inputList.splice(index, 1);
    }
    save() {
        this.close();
    }
    close() {
        this.modal.destroy();
    }
}
EditVocabularyComponent.decorators = [
    { type: Component, args: [{
                selector: 'fs-edit-vocabulary',
                template: "<a *ngIf=\"data\" class=\"text-blue\" (click)=\"createTplModal(tplTitle,tplEditContent,tplFooter)\">\r\n  \u7DE8\u8F2F\r\n</a>\r\n\r\n<button *ngIf=\"!data\" nz-button nzType=\"primary\" nzGhost style=\"float: right;\"\r\n  (click)=\"createTplModal(tplTitle,tplCreateContent,tplFooter)\">\u65B0\u589E</button>\r\n\r\n<ng-template #tplTitle>\r\n  <span *ngIf=\"data\">{{groupoTitle}}</span>\r\n  <span *ngIf=\"!data\">\u65B0\u589E\u8CC7\u6599</span>\r\n</ng-template>\r\n\r\n<ng-template #tplEditContent>\r\n  <form nz-form #f=\"ngForm\" se-container=\"1\">\r\n    <se label=\"\u9078\u9805\u503C\">\r\n      <input type=\"text\" nz-input [(ngModel)]=\"_data.options\" name=\"title\" required>\r\n    </se>\r\n  </form>\r\n</ng-template>\r\n\r\n<ng-template #tplCreateContent>\r\n  <div>\r\n    <button nz-button (click)=\"addOption()\" class=\"mb-md\">\u65B0\u589E</button>\r\n    <div style=\"display: grid;grid-template-columns: repeat(auto-fill,200px);gap:8px\">\r\n      <div *ngFor=\"let inputItem of inputList;let i = index\">\r\n        <nz-input-group [nzAddOnBefore]=\"addOnBeforeTemplate\">\r\n          <input nz-input [(ngModel)]=\"inputItem.name\" />\r\n        </nz-input-group>\r\n        <ng-template #addOnBeforeTemplate>\r\n          <i nz-icon nzType=\"close\" class=\"pointer text-red\" (click)=\"removeOption(i)\"></i>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #tplFooter>\r\n  <button nz-button (click)=\"close()\">\u53D6\u6D88</button>\r\n  <button nz-button nzType=\"primary\" (click)=\"save()\">\u5132\u5B58</button>\r\n</ng-template>",
                styles: [""]
            },] }
];
EditVocabularyComponent.ctorParameters = () => [
    { type: NzModalService }
];
EditVocabularyComponent.propDecorators = {
    data: [{ type: Input }],
    groupoTitle: [{ type: Input }]
};
//# sourceMappingURL=edit-vocabulary.component.js.map