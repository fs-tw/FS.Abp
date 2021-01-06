import { Component, ViewChild } from '@angular/core';
import { ListService } from '@abp/ng.core';
import { STComponent } from '@delon/abc/st';
import { CustomersApiService } from '@fs-tw/crm/proxy';
const TAG = {
    1: { text: '個人', color: 'green' },
    2: { text: '企業', color: 'red' }
};
const GENDER_TAG = {
    0: { text: '男', color: 'green' },
    1: { text: '女', color: 'red' },
    2: { text: '其他' }
};
export class MainComponent {
    constructor(
    //private modalService:NzModalService,
    list, customerService) {
        this.list = list;
        this.customerService = customerService;
        this.columns = [
            { title: '編號', index: 'no' },
            // { title: '企業名稱', index: 'name'},
            { title: '聯絡人', index: 'contactPerson' },
            { title: '性別', index: 'gender', type: 'tag', tag: GENDER_TAG },
            { title: '年齡', index: 'ageRange' },
            { title: '電話', index: 'phone' },
            { title: '來源管道', index: 'pipelineSource' },
            { title: '類型', index: 'discriminator', type: 'tag', tag: TAG },
            { title: '地址', index: 'address' },
            { title: '信箱', index: 'email' },
            { title: '職稱', index: 'jobTitle' },
        ];
        this.datas = [];
        this.count = 0;
        //this.modalService.error({nzTitle:'abp'});
    }
    ngOnInit() {
        const customerStreamCreator = query => this.customerService.getListByCustomerGetList(query);
        this.list.hookToQuery(customerStreamCreator).subscribe(res => {
            res.items = res.items.filter(x => x.discriminator == 1);
            this.datas = res.items;
            this.count = res.totalCount;
        });
    }
    ngOnDestroy() {
    }
}
MainComponent.decorators = [
    { type: Component, args: [{
                template: "\r\n<h1>yinchang</h1>\r\n<!-- <st ></st> -->",
                providers: [ListService],
                styles: [""]
            },] }
];
MainComponent.ctorParameters = () => [
    { type: ListService },
    { type: CustomersApiService }
];
MainComponent.propDecorators = {
    st: [{ type: ViewChild, args: ['st', { static: false },] }]
};
//# sourceMappingURL=main.component.js.map