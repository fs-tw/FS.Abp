import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { PageService } from '../../providers/page.service';
import { ToasterService } from '@abp/ng.theme.shared';
export class TagDetailComponent {
    constructor(pageService, location, toasterService) {
        this.pageService = pageService;
        this.location = location;
        this.toasterService = toasterService;
        this.isCreate = false;
        this.deleteTargetTagIds = [];
        this.data = {};
        this.inputList = [
        // { name: '' }
        ];
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    ngOnInit() {
        this.subscription = this.pageService.tagData$.subscribe(x => {
            this.data = x;
        });
    }
    addOption() {
        this.inputList.push();
    }
    removeOption(index) {
        this.inputList.splice(index, 1);
    }
    removeOldOption(id) {
        // this.data.tags = this.data.tags.filter(x => x.id != id);
        this.deleteTargetTagIds.push(id);
    }
    save() {
        // if (this.inputList.filter(x => x.name == '').length > 0 && this.data.tagGroupName != '') {
        //   this.toasterService.error("不能有空值！")
        //   return;
        // }
        // if (this.isCreate) this.create()
        // else this.update();
    }
    update() {
        // this.pageService.updateGroup(this.data.id, this.data.tagGroupName).subscribe(x => {
        //   let createTarget = this.pageService.createGroupAndTags(this.data.id, this.inputList);
        //   let target = this.updateTags().concat(this.deleteTags());
        //   target.push(createTarget)
        //   forkJoin(target).subscribe(()=>{
        //     this.location.back();
        //     this.toasterService.success("修改成功！")
        //   })
        // })
    }
    updateTags() {
        // let obsList = this.data.tags.map(x => {
        //   return this.pageService.updateTag(x.id, x.name)
        // });
        // return obsList
        // forkJoin(obsList).subscribe();
    }
    deleteTags() {
        // let obsList = this.deleteTargetTagIds.map(x => {
        //   return this.pageService.delteTag(x);
        // })
        // return obsList;
        // forkJoin(obsList).subscribe()
    }
    create() {
        // this.pageService.createGroup({
        //   tagGroupName: this.data.tagGroupName
        // }).pipe(tap(x => this.createTags(x.id))).subscribe()
    }
    createTags(groupId) {
        // this.pageService.createGroupAndTags(groupId, this.inputList).subscribe(() => {
        //   this.pageService.getTageListFromApi();
        //   this.toasterService.success("新增成功！");
        //   this.clear();
        // })
    }
    clear() {
        // this.inputList = [
        //   { name: '' }
        // ];
        // this.deleteTargetTagIds = [];
        // this.data = {
        //   id: '',
        //   tagGroupName: '',
        //   tags: [
        //     {
        //       id: '',
        //       name: ''
        //     }
        //   ]
        // };
    }
}
TagDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'fs-tag-detail',
                template: "<nz-card>\r\n  <form nz-form #f=\"ngForm\" se-container=\"1\">\r\n    <!-- <se label=\"\u540D\u7A31\">\r\n      <input type=\"text\" nz-input name=\"Createname\" required [(ngModel)]=\"data.tagGroupName\"  *ngIf=\"isCreate==false\"/>\r\n      <input type=\"text\" nz-input name=\"name\" required [(ngModel)]=\"data.tagGroupName\"   *ngIf=\"isCreate==true\"/>\r\n    </se>\r\n\r\n    <se [label]=\"addItem\" col=\"1\">\r\n      <ng-template #addItem>\r\n        <button nz-button (click)=\"addOption()\">\u65B0\u589E\u9805\u76EE</button>\r\n      </ng-template>\r\n      <div style=\"display: grid;grid-template-columns: repeat(auto-fill,200px);gap:8px\" *ngIf=\"isCreate==false\">\r\n        <div *ngFor=\"let inputItem of data.tags;let i = index\">\r\n          <nz-input-group [nzAddOnBefore]=\"addOnBeforeTemplate\">\r\n            <input nz-input [(ngModel)]=\"inputItem.name\" [ngModelOptions]=\"{standalone: true}\"/>\r\n          </nz-input-group>\r\n          <ng-template #addOnBeforeTemplate>\r\n            <i nz-icon nzType=\"close\" class=\"pointer text-red\" (click)=\"removeOldOption(inputItem.id)\"></i>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n\r\n      <div  style=\"display: grid;grid-template-columns: repeat(auto-fill,200px);gap:8px\" >\r\n        <div *ngFor=\"let i of inputList\">\r\n          <nz-input-group [nzAddOnBefore]=\"addOnBeforeTemplate\">\r\n            <input nz-input [(ngModel)]=\"i.name\"  [ngModelOptions]=\"{standalone: true}\" />\r\n          </nz-input-group>\r\n\r\n          <ng-template #addOnBeforeTemplate>\r\n            <i nz-icon nzType=\"close\" class=\"pointer text-red\" (click)=\"removeOption(i)\"></i>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </se> -->\r\n\r\n\r\n    <se>\r\n      <button nz-button nzType=\"primary\" (click)=\"save()\">\u5B58\u6A94</button>\r\n    </se>\r\n  </form>\r\n</nz-card>",
                styles: [""]
            },] }
];
TagDetailComponent.ctorParameters = () => [
    { type: PageService },
    { type: Location },
    { type: ToasterService }
];
TagDetailComponent.propDecorators = {
    isCreate: [{ type: Input }]
};
//# sourceMappingURL=tag-detail.component.js.map