import { OnInit } from '@angular/core';
import { ListService } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { STColumn } from '@delon/abc/st';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProjectsApiService } from '@fs-tw/crm/proxy';
export declare class MainComponent implements OnInit {
    readonly list: ListService;
    private projectService;
    private store;
    private modalService;
    private st;
    columns: STColumn[];
    datas: any[];
    count: number;
    constructor(list: ListService, projectService: ProjectsApiService, store: Store, modalService: NzModalService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
