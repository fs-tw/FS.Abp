import { Component, Input } from '@angular/core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.theme.shared";
import * as i2 from "ng-zorro-antd/upload";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/icon";
import * as i5 from "ng-zorro-antd/table";
import * as i6 from "@angular/common";
function UploadFileComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵelementStart(2, "a");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵelementStart(5, "a", 8);
    i0.ɵɵlistener("click", function UploadFileComponent_tr_15_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r4); const data_r2 = ctx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.delete(data_r2); });
    i0.ɵɵtext(6, "\u522A\u9664");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r2);
} }
// import { Confirmation, ConfirmationService,ToasterService } from '@abp/ng.theme.shared';
// import { Store } from '@ngxs/store';
// import { NzModalRef } from 'ng-zorro-antd/modal';
// import { FileService } from '@fs-tw/theme-core';
export class UploadFileComponent {
    constructor(confirmationService) {
        this.confirmationService = confirmationService;
        this.existFileUrls = [];
        this.fileList = [];
        this.beforeUpload = (file) => {
            let exist = this.existFileUrls.findIndex(x => x == file.name) > -1 ||
                this.fileList.findIndex(x => x.name == file.name) > -1;
            if (exist)
                return false;
            this.fileList = this.fileList.concat(file);
            return false;
        };
    }
    ngOnInit() {
    }
    delete(url) {
        this.confirmationService
            .warn('確認刪除嗎？', '系統訊息')
            .subscribe((status) => {
            if (status === Confirmation.Status.confirm) {
                this.existFileUrls = this.existFileUrls.filter(x => x != url);
            }
        });
    }
}
UploadFileComponent.ɵfac = function UploadFileComponent_Factory(t) { return new (t || UploadFileComponent)(i0.ɵɵdirectiveInject(i1.ConfirmationService)); };
UploadFileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UploadFileComponent, selectors: [["fs-upload-file"]], inputs: { existFileUrls: "existFileUrls" }, decls: 16, vars: 6, consts: [["nzType", "drag", 3, "nzFileList", "nzBeforeUpload", "nzMultiple", "nzFileListChange"], [1, "ant-upload-drag-icon"], ["nz-icon", "", "nzType", "inbox"], [1, "ant-upload-text"], [1, "my-md"], ["nzSimple", "false", "nzSize", "small", 3, "nzData", "nzShowPagination"], ["basicTable", ""], [4, "ngFor", "ngForOf"], [1, "text-red", 3, "click"]], template: function UploadFileComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-upload", 0);
        i0.ɵɵlistener("nzFileListChange", function UploadFileComponent_Template_nz_upload_nzFileListChange_0_listener($event) { return ctx.fileList = $event; });
        i0.ɵɵelementStart(1, "p", 1);
        i0.ɵɵelement(2, "i", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p", 3);
        i0.ɵɵtext(4, "\u9EDE\u64CA\u6B64\u8655\u6216\u5C07\u6A94\u6848\u62D6\u62FD\u81F3\u6B64\u8655\u9032\u884C\u4E0A\u50B3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "div", 4);
        i0.ɵɵelementStart(6, "nz-table", 5, 6);
        i0.ɵɵelementStart(8, "thead");
        i0.ɵɵelementStart(9, "tr");
        i0.ɵɵelementStart(10, "th");
        i0.ɵɵtext(11, "\u6A94\u540D");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "th");
        i0.ɵɵtext(13, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "tbody");
        i0.ɵɵtemplate(15, UploadFileComponent_tr_15_Template, 7, 1, "tr", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("nzFileList", ctx.fileList)("nzBeforeUpload", ctx.beforeUpload)("nzMultiple", true);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("nzData", ctx.existFileUrls)("nzShowPagination", false);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngForOf", ctx.existFileUrls);
    } }, directives: [i2.NzUploadComponent, i3.ɵNzTransitionPatchDirective, i4.NzIconDirective, i5.NzTableComponent, i5.NzTheadComponent, i5.NzTrDirective, i5.NzTableCellDirective, i5.NzThMeasureDirective, i5.NzTbodyComponent, i6.NgForOf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UploadFileComponent, [{
        type: Component,
        args: [{
                selector: 'fs-upload-file',
                templateUrl: './upload-file.component.html',
                styleUrls: ['./upload-file.component.css']
            }]
    }], function () { return [{ type: i1.ConfirmationService }]; }, { existFileUrls: [{
            type: Input
        }] }); })();
//# sourceMappingURL=upload-file.component.js.map