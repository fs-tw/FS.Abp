import { Component, ViewChild } from '@angular/core';
import { ListService } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { STComponent } from '@delon/abc/st';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProjectsApiService } from '@fs-tw/crm/proxy';
export class MainComponent {
    constructor(list, projectService, store, modalService) {
        this.list = list;
        this.projectService = projectService;
        this.store = store;
        this.modalService = modalService;
        this.columns = [
            { title: '編號', index: 'no' },
            { title: '計畫別', index: 'projectType' },
            { title: '計畫別備註', index: 'projectTypeRemark' },
            { title: '負責人', index: 'employeeId' },
            { title: '已結案狀態', index: 'projectState' },
            { title: '狀態說明', index: 'projectStateRemark' },
            { title: '狀態說明', index: 'projectStateRemark' },
            { title: "O'Star", index: 'isStar', type: 'enum', enum: { 'true': '是', 'false': '否' } },
        ];
        this.datas = [];
        this.count = 0;
    }
    ngOnInit() {
        const projectStreamCreator = query => this.projectService.getListByProjectGetList(query);
        this.list.hookToQuery(projectStreamCreator).subscribe(res => {
            this.datas = res.items;
            this.count = res.totalCount;
        });
    }
    ngOnDestroy() {
    }
}
MainComponent.decorators = [
    { type: Component, args: [{
                template: "<st #st [widthMode]=\"{ type: 'strict' }\" [data]=\"datas\" [columns]=\"columns\"></st>",
                providers: [ListService],
                styles: [""]
            },] }
];
MainComponent.ctorParameters = () => [
    { type: ListService },
    { type: ProjectsApiService },
    { type: Store },
    { type: NzModalService }
];
MainComponent.propDecorators = {
    st: [{ type: ViewChild, args: ['st', { static: false },] }]
};
//# sourceMappingURL=main.component.js.map