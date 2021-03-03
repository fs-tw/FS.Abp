import { OnInit } from '@angular/core';
export declare class MainComponent implements OnInit {
    groups: {
        title: string;
        key: number;
        children: {
            options: string;
            value: number;
        }[];
    }[];
    seleted_key: number;
    selected_group_title: string;
    showTable: any[];
    constructor();
    ngOnInit(): void;
    selChange(): void;
}
