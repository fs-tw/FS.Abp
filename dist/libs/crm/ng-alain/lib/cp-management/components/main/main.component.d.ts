import { OnInit } from '@angular/core';
export declare class MainComponent implements OnInit {
    expandSet: Set<number>;
    onExpandChange(id: number, checked: boolean): void;
    constructor();
    projectOptions: {
        title: string;
        id: string;
    }[];
    selectedProject: string;
    customerOptions: {
        title: string;
        id: string;
    }[];
    selectedCustomer: string;
    customerDatas: {
        plan_name: string;
        customer_number: string;
        customer_name: string;
    }[];
    projectDatas: {
        plan_name: string;
        project_number: string;
        project_name: string;
    }[];
    data: string[];
    group: number;
    isopen: boolean;
    span: number;
    ngOnInit(): void;
    click_button(): void;
    click_group(a: any): void;
}
