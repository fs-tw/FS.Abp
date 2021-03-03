import { Component, ViewChild } from '@angular/core';
import { ListService } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { STComponent } from '@delon/abc/st';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ConsultationRecordsApiService } from '@fs-tw/crm/proxy';
const BADGE = {
    'true': { text: ' 是', color: 'success' },
    'false': { text: '否', color: 'error' },
};
export class MainComponent {
    constructor(list, consultationRecordService, store, modalService) {
        this.list = list;
        this.consultationRecordService = consultationRecordService;
        this.store = store;
        this.modalService = modalService;
        this.columns = [
            { title: '計畫編碼', index: 'counselingDate' },
            { title: '客戶編碼', index: 'counselingDate' },
            { title: '客戶名稱', index: 'customerId' },
            { title: '業師電話', index: 'phone' },
            { title: '輔導日期', index: 'counselingDate', type: 'date', dateFormat: 'yyyy-MM-dd' },
            { title: '輔導狀況', index: 'counselingStatus' },
            { title: '照片繳回', index: 'hasReturnPhoto', type: 'badge', badge: BADGE },
            { title: '紀錄表繳回', index: 'hasReturnForm', type: 'badge', badge: BADGE },
            { title: '企業滿意度表', index: 'hasReturnSatisfactionSurvey', type: 'badge', badge: BADGE },
            { title: '領據', index: 'hasReturnReceipt', type: 'badge', badge: BADGE },
            { title: '輔導費用', index: 'cost' },
            { title: '匯款日期', index: 'remittanceDate', type: 'date', dateFormat: 'yyyy-MM-dd' }
        ];
        this.datas = [];
        this.count = 0;
    }
    ngOnInit() {
        const consultationRecordStreamCreator = query => this.consultationRecordService.getListByConsultationRecordGetList(query);
        this.list.hookToQuery(consultationRecordStreamCreator).subscribe(res => {
            this.datas = res.items;
            this.count = res.totalCount;
        });
    }
    ngOnDestroy() {
    }
}
MainComponent.decorators = [
    { type: Component, args: [{
                template: "\r\n<st #st [widthMode]=\"{ type: 'strict' }\" [data]=\"datas\" [columns]=\"columns\"></st>",
                providers: [ListService],
                styles: [""]
            },] }
];
MainComponent.ctorParameters = () => [
    { type: ListService },
    { type: ConsultationRecordsApiService },
    { type: Store },
    { type: NzModalService }
];
MainComponent.propDecorators = {
    st: [{ type: ViewChild, args: ['st', { static: false },] }]
};
//# sourceMappingURL=main.component.js.map