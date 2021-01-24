import { Component, ViewChild } from '@angular/core';
import { ListService } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { STComponent } from '@delon/abc/st';
import { EmployeesApiService } from '@fs-tw/crm/proxy';
export class MainComponent {
    constructor(list, employeeService, store) {
        this.list = list;
        this.employeeService = employeeService;
        this.store = store;
        this.columns = [
            { title: '姓名', index: 'name' },
            { title: '編號', index: 'no' },
            { title: '職稱', index: 'jobTitle' }
        ];
        this.datas = [];
        this.count = 0;
    }
    ngOnInit() {
        const employeeStreamCreator = query => this.employeeService.getListByEmployeeGetList(query);
        this.list.hookToQuery(employeeStreamCreator).subscribe(res => {
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
    { type: EmployeesApiService },
    { type: Store }
];
MainComponent.propDecorators = {
    st: [{ type: ViewChild, args: ['st', { static: false },] }]
};
//# sourceMappingURL=main.component.js.map