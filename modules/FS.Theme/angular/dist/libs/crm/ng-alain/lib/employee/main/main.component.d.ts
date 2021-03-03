import { OnInit } from '@angular/core';
import { ListService } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { STColumn } from '@delon/abc/st';
import { EmployeesApiService } from '@fs-tw/crm/proxy';
export declare class MainComponent implements OnInit {
    readonly list: ListService;
    private employeeService;
    private store;
    private st;
    columns: STColumn[];
    datas: any[];
    count: number;
    constructor(list: ListService, employeeService: EmployeesApiService, store: Store);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
