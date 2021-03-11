import { ChangeDetectionStrategy, Component, Injector, Input, } from '@angular/core';
import { GridActionsComponent as AbpGridActionsComponent } from '@abp/ng.theme.shared/extensions';
import { EXTENSIONS_ACTION_TYPE } from '@abp/ng.theme.shared/extensions';
export class GridActionsComponent extends AbpGridActionsComponent {
    constructor(injector) {
        super(injector);
        this.icon = 'fa fa-cog';
        this.text = '';
        this.trackByFn = (_, item) => item.text;
    }
}
GridActionsComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'nzGridActions',
                selector: 'nz-grid-actions',
                template: "<ng-container *ngIf=\"actionList.length > 0\">\r\n  <button\r\n    nz-button\r\n    nzType=\"default\"\r\n    nz-dropdown\r\n    [nzDropdownMenu]=\"menu\"\r\n    class=\"ml-md\"\r\n  >\r\n    <i nz-icon nzType=\"down\"></i>\r\n    <span>{{ 'AbpUi::Actions' | abpLocalization }}</span>\r\n  </button>\r\n\r\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n    <ul nz-menu>\r\n      <ng-container *ngFor=\"let action of actionList; trackBy: trackByFn\">\r\n        <ng-container *abpPermission=\"action.permission\">\r\n          <li nz-menu-item *ngIf=\"action.visible(data)\">\r\n            <a (click)=\"action.action(data)\">{{\r\n              action.text | abpLocalization\r\n            }}</a>\r\n          </li>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n\r\n    </ul>\r\n  </nz-dropdown-menu>\r\n</ng-container>",
                providers: [
                    {
                        provide: EXTENSIONS_ACTION_TYPE,
                        useValue: 'entityActions',
                    },
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
GridActionsComponent.ctorParameters = () => [
    { type: Injector }
];
GridActionsComponent.propDecorators = {
    icon: [{ type: Input }],
    index: [{ type: Input }],
    text: [{ type: Input }]
};
//# sourceMappingURL=grid-actions.component.js.map