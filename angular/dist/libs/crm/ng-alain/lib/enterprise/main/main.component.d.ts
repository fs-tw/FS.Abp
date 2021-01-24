import { OnInit } from '@angular/core';
import { ListService } from '@abp/ng.core';
import { STColumn } from '@delon/abc/st';
import { CustomersApiService } from '@fs-tw/crm/proxy';
export declare class MainComponent implements OnInit {
    readonly list: ListService;
    private customerService;
    private st;
    columns: STColumn[];
    datas: any[];
    count: number;
    constructor(list: ListService, customerService: CustomersApiService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
