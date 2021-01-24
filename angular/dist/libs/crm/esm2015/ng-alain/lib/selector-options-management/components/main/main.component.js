import { Component } from '@angular/core';
export class MainComponent {
    constructor() {
        this.groups = [
            {
                title: '計畫別',
                key: 0,
                children: [
                    { options: '補助案_經濟部中企處', value: 0 },
                    { options: '補助案_高雄市青年局', value: 1 },
                    { options: '標案_高雄市青年局', value: 2 },
                    { options: '標案_高雄市勞工局', value: 3 },
                    { options: '進駐廠商', value: 4 },
                    { options: '補助案', value: 5 },
                    { options: '計畫別', value: 6 },
                ]
            },
            {
                title: '結案類型',
                key: 1,
                children: [
                    { options: '待評估', value: 0 },
                    { options: '派案中', value: 1 },
                    { options: '已結案_派案完成', value: 2 },
                    { options: '已結案_未派案', value: 3 },
                ]
            },
            {
                title: '產業別',
                key: 2,
                children: [
                    { options: '科技', value: 0 },
                    { options: '無', value: 1 },
                ]
            },
            {
                title: '管道來源',
                key: 3,
                children: [
                    { options: '親友介紹_XXX', value: 0 },
                    { options: '高科大網頁', value: 1 },
                    { options: '高市府網頁', value: 2 },
                    { options: '高科大FB、Line@', value: 3 },
                    { options: '其他(自填)', value: 4 },
                ]
            },
            {
                title: '性別 ',
                key: 4,
                children: [
                    { options: '男', value: 0 },
                    { options: '女', value: 1 },
                ]
            },
            {
                title: '年齡',
                key: 5,
                children: [
                    { options: '≧46', value: 0 },
                    { options: '41-45', value: 1 },
                    { options: '31-40', value: 2 },
                    { options: '21-30', value: 3 },
                    { options: '≤20', value: 4 },
                    { options: '-', value: 5 },
                ]
            }
        ];
        this.seleted_key = 0;
        this.showTable = [];
    }
    ngOnInit() {
        this.selChange();
    }
    selChange() {
        this.showTable = this.groups.find(x => x.key == this.seleted_key).children;
        this.selected_group_title = this.groups[this.seleted_key].title;
    }
}
MainComponent.decorators = [
    { type: Component, args: [{
                selector: 'fs-main',
                template: "<nz-row>\r\n    <nz-col nzSpan=\"24\"  style=\"margin-bottom: 20px;\">\r\n        <label class=\"h5\">\u9078\u9805\uFF1A</label>\r\n        <nz-select nzSize='small' style=\"width: 200px;\" nzPlaceHolder=\"\u8ACB\u9078\u64C7\" [(ngModel)]=\"seleted_key\"\r\n            (ngModelChange)=\"selChange()\">\r\n            <nz-option *ngFor=\"let item of groups\" [nzLabel]=\"item.title\" [nzValue]=\"item.key\"></nz-option>\r\n        </nz-select>\r\n    <fs-edit-vocabulary></fs-edit-vocabulary>\r\n</nz-col>\r\n    <nz-col nzSpan=\"24\">\r\n        <nz-table #borderedTable nzBordered [nzData]=\"showTable\" nzSize='small'>\r\n            <thead>\r\n                <tr>\r\n                    <th nzWidth=\"75px\"></th>\r\n                    <th>\u9078\u9805</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of borderedTable.data\" class=\"bg-white\">\r\n                    <td>\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\">\r\n                            <i nz-icon nzType=\"down\"></i>\r\n                            \u64CD\u4F5C\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item class=\"text-blue\">\r\n                                    <fs-edit-vocabulary [data]=\"item\" [groupoTitle]=\"selected_group_title\"></fs-edit-vocabulary>\r\n                                </li>\r\n                                <li nz-menu-item class=\"text-red\">\u522A\u9664</li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                    <td>{{ item.options }}</td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </nz-col>\r\n</nz-row>\r\n",
                styles: [""]
            },] }
];
MainComponent.ctorParameters = () => [];
//# sourceMappingURL=main.component.js.map