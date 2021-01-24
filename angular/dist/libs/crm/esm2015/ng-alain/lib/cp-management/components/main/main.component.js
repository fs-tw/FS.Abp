import { Component } from '@angular/core';
export class MainComponent {
    constructor() {
        this.expandSet = new Set();
        this.projectOptions = [
            { title: "標案_高雄市勞工局-政府補助案", id: "1" },
            { title: "標案_高雄市勞工局-專利申請", id: "2" },
            { title: "補助案_經濟部中企處-連鎖展店", id: "3" }
        ];
        this.selectedProject = "1";
        this.customerOptions = [
            { title: "王億如", id: "1" },
            { title: "余盈君", id: "2" },
            { title: "張振豪", id: "2" },
        ];
        this.selectedCustomer = "1";
        this.customerDatas = [
            { plan_name: "計畫1", customer_number: "C001", customer_name: "客戶A" },
            { plan_name: "計畫2", customer_number: "C002", customer_name: "客戶B" },
            { plan_name: "計畫3", customer_number: "C003", customer_name: "客戶C" }
        ];
        this.projectDatas = [
            { plan_name: "標案_高雄市勞工局", project_number: "P001", project_name: "政府補助案" },
            { plan_name: "標案_高雄市勞工局", project_number: "P002", project_name: "專利申請" },
            { plan_name: "補助案_經濟部中企處	", project_number: "P003", project_name: "連鎖展店" }
        ];
        this.data = [""];
        this.group = 0;
        this.isopen = true;
        this.span = 16;
    }
    onExpandChange(id, checked) {
        if (checked) {
            this.expandSet.add(id);
        }
        else {
            this.expandSet.delete(id);
        }
    }
    ngOnInit() {
    }
    click_button() {
        // this.isopen == true?this.isopen=false:this.isopen=true;
        if (this.isopen == true) {
            this.isopen = false;
            this.span = 16;
        }
        else {
            this.isopen = true;
            this.span = 8;
        }
    }
    click_group(a) {
        this.group = a;
    }
}
MainComponent.decorators = [
    { type: Component, args: [{
                template: "<nz-row nzGutter=\"16\">\r\n        <nz-col [nzSpan]=\"8\" *ngIf=\"isopen\">\r\n            <nz-tabset nzType='card' [nzTabBarExtraContent]=\"extraTemplate\">\r\n                <nz-tab [nzTitle]=\"'\u5C08\u6848'\" (nzClick)=\"click_group(0)\">\r\n                    <nz-col nzSpan=\"24\" style=\"margin-bottom: 25px;\">\r\n                        <nz-select nzSize='small' style=\"width: 100%;\" nzPlaceHolder=\"\u8ACB\u9078\u64C7\" [(ngModel)]=\"selectedProject\">\r\n                            <nz-option *ngFor=\"let project of projectOptions\" [nzLabel]=\"project.title\" \r\n                                [nzValue]=\"project.id\"></nz-option>\r\n                        </nz-select>\r\n                    </nz-col>\r\n                    <nz-table #basicTable [nzData]=\"customerDatas\" nzSize=\"small\" nzBordered>\r\n                        <thead>\r\n                            <tr>\r\n                                <th>\u5BA2\u6236\u7DE8\u865F</th>\r\n                                <th>\u5BA2\u6236\u540D\u7A31</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let customer of customerDatas\" class=\"bg-white\">\r\n                                <td>{{ customer.customer_number }}</td>\r\n                                <td>{{ customer.customer_name }}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </nz-table>\r\n                </nz-tab>\r\n    \r\n                <nz-tab [nzTitle]=\"'\u5BA2\u6236'\" (nzClick)=\"click_group(1)\">\r\n                    <nz-col nzSpan=\"24\" style=\"margin-bottom: 25px;\">\r\n                        <nz-select nzSize='small' style=\"width: 100%;\" nzPlaceHolder=\"\u8ACB\u9078\u64C7\"  [(ngModel)]=\"selectedCustomer\">\r\n                            <nz-option *ngFor=\"let s of customerOptions\" [nzLabel]=\"s.title\" [nzValue]=\"s.id\"></nz-option>\r\n                        </nz-select>\r\n                    </nz-col>\r\n                    <nz-table #basicTable [nzData]=\"data\" nzSize=\"small\" nzBordered>\r\n                        <thead>\r\n                            <tr>\r\n                                <th>\u8A08\u756B\u5225</th>\r\n                                <th>\u8A08\u756B\u5099\u8A3B</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let project of projectDatas\" class=\"bg-white\">\r\n                                <td>{{ project.plan_name }}</td>\r\n                                <td>{{ project.project_name }}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </nz-table>\r\n                </nz-tab>\r\n            </nz-tabset>\r\n    \r\n            <ng-template #extraTemplate>\r\n                <button nz-button (click)=\"click_button()\" style=\"float: right\">\r\n                    <i nz-icon nzType=\"double-left\" nzTheme=\"outline\"></i>\r\n                </button>\r\n            </ng-template>\r\n    \r\n        </nz-col>\r\n    \r\n    \r\n        <nz-col [nzSpan]=\"span\">\r\n                <nz-divider nzText=\"\u57FA\u672C\u8CC7\u6599\"></nz-divider>\r\n            <nz-collapse>\r\n                <nz-collapse-panel  nzHeader=\"\u5BA2\u6236\u540D\u7A31: \u738B\u61B6\u5982\" [nzActive]=\"false\">\r\n                    <sv-container col=\"2\">\r\n                        <sv label=\"\u96FB\u8A71/\u4FE1\u7BB1\" >\t0933877100&nbsp;/&nbsp;wsx85299@gmail.com</sv>\r\n                        <sv label=\"\u5E74\u9F61/\u4F86\u6E90\u7BA1\u9053\">\t\u226420&nbsp;/&nbsp;\u5176\u4ED6(\u81EA\u586B)</sv>\r\n                        <sv label=\"\u985E\u578B/\u6027\u5225\" >\u500B\u4EBA&nbsp;/&nbsp;\u5973</sv>\r\n                        <sv label=\"\t\u5730\u5740\">\u9AD8\u96C4\u5E02XX\u5340</sv>\r\n                      </sv-container>\r\n                </nz-collapse-panel>\r\n                <nz-collapse-panel  nzHeader=\"\u5C08\u6848\u540D\u7A31: \u6A19\u6848_\u9AD8\u96C4\u5E02\u52DE\u5DE5\u5C40 \u5C08\u6848\u5099\u8A3B:\u653F\u5E9C\u88DC\u52A9\u6848\" [nzActive]=\"false\">\r\n                    <sv-container col=\"2\">\r\n                        <sv label=\"\u7D50\u6848\u72C0\u614B\" >\t\u5DF2\u7D50\u6848_\u672A\u6D3E\u6848</sv>\r\n                        <sv label=\"O'Star\">\u662F</sv>\r\n                        <sv label=\"\u8A08\u756B\u5225\u5099\u8A3B\" >\u653F\u5E9C\u88DC\u52A9\u6848</sv>\r\n                        <sv label=\"\u5176\u4ED6\u8AAA\u660E\">\t\u5B8C\u6210\u6D3E\u6848\u53CA\u6838\u92B7</sv>\r\n                      </sv-container>\r\n                  </nz-collapse-panel>\r\n              </nz-collapse>\r\n            <!-- <div style=\"height: 56px;\">\r\n                <button nz-button (click)=\"click_button()\" *ngIf=\"!isopen\">\r\n                    <i nz-icon nzType=\"double-right\" nzTheme=\"outline\"></i>\r\n                </button>\r\n            </div> -->\r\n            <nz-divider nzText=\"\u5217\u8868\"></nz-divider>\r\n            <nz-table #nzTable [nzData]=\"customerDatas\">\r\n                <thead>\r\n                    <tr>\r\n                        <th></th>\r\n                        <th>\u64CD\u4F5C</th>\r\n                        <th>\u696D\u5E2B\u8CC7\u8A0A</th>\r\n                        <th>\u8F14\u5C0E\u65E5\u671F</th>\r\n                        <th>\u5176\u4ED6</th>\r\n                        <th>\u8F14\u5C0E\u8CBB\u7528</th>\r\n                        <th>\u532F\u6B3E\u65E5\u671F</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <ng-container *ngFor=\"let data of nzTable.data\">\r\n                        <tr>\r\n                            <td [nzExpand]=\"expandSet.has(data.id)\" (nzExpandChange)=\"onExpandChange(data.id, $event)\"></td>\r\n                            <td>Actions</td>\r\n                            <td>\u696D\u5E2B1\r\n                                <br>\r\n                                0912345678\r\n                            </td>\r\n                            <td>2020-12-05 12:00:00</td>\r\n                            <td><nz-tag [nzColor]=\"'blue'\">\u7167\u7247\u7E73\u56DE:V</nz-tag><nz-tag [nzColor]=\"'blue'\">\u7D00\u9304\u8868\u7E73\u56DE:V</nz-tag> <br>\r\n                                <nz-tag [nzColor]=\"'red'\">\u4F01\u696D\u6EFF\u610F\u5EA6\u8868:X</nz-tag><nz-tag [nzColor]=\"'blue'\">\u9818\u64DA:V</nz-tag>\r\n                            </td>\r\n                            <td>1,000</td>\r\n                            <td>2020-12-01</td>\r\n                        </tr>\r\n                        <tr [nzExpand]=\"expandSet.has(data.id)\">\r\n                            <span>\u53E4\u6A02\u6709\u9650\u516C\u53F8\uFF0C\u81F4\u529B\u65BC\u958B\u767C\u592A\u967D\u80FD\u76F8\u95DC\u8EDF\u786C\u97CC\u9AD4\u3001\u7522\u54C1\u53CA\u7DB2\u9801\u8A2D\u8A08\u3001FDM 3D\u5217\u5370\u3002\u5B89\u6392\u9867\u554F\u5354\u52A9\u5275\u696D\u8A08\u756B\u66F8\u5167\u5BB9\u4FEE\u6539\u53CA\u7533\u8ACB\u8CC7\u6599\u6E96\u5099\u63D0\u9192\uFF0C\u4E14\u63D0\u4F9B\u672A\u4F86\u7D93\u71DF\u7BA1\u7406\u5EFA\u8B70\u3002</span>\r\n                        </tr>\r\n                    </ng-container>\r\n                </tbody>\r\n            </nz-table>\r\n        </nz-col>\r\n    </nz-row>",
                styles: [""]
            },] }
];
MainComponent.ctorParameters = () => [];
//# sourceMappingURL=main.component.js.map