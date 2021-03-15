import { ListService, ConfigStateService } from '@abp/ng.core';
import { Injector, TemplateRef, EventEmitter, OnInit } from '@angular/core';
import { ExtensibleTableComponent as AbpExtensibleTableComponent } from '@abp/ng.theme.shared/extensions';
import { NzTableRowDetailDirective } from '../../directives/nz-table-row-detail.directive';
export declare class ExtensibleTableComponent<R = any> extends AbpExtensibleTableComponent<R> implements OnInit {
    private _locale;
    private _config;
    responsive: boolean;
    expandSet: Set<string>;
    selectId: any;
    onExpandChange(id: string, check: boolean): void;
    protected _actionsText: string;
    set actionsText(value: string);
    get actionsText(): string;
    rowDetailTemplate: NzTableRowDetailDirective;
    data: R[];
    list: ListService;
    recordsTotal: number;
    set actionsColumnWidth(width: number);
    actionsTemplate: TemplateRef<any>;
    haveRowDetail: boolean;
    haveSelect: boolean;
    svRowCount: number;
    set defaultSelectId(value: string);
    scroll: {
        x?: string | null;
        y?: string | null;
    };
    select: EventEmitter<R>;
    constructor(_locale: string, _config: ConfigStateService, _injector: Injector);
    ngOnInit(): void;
    private _setColumnWidths;
    selected(data: R): void;
}
