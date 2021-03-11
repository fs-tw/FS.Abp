import { ChangeDetectionStrategy, Component, Injector, } from '@angular/core';
import { EXTENSIONS_ACTION_TYPE, } from '@abp/ng.theme.shared/extensions';
import { PageToolbarComponent as AbpPageToolbarComponent } from '@abp/ng.theme.shared/extensions';
export class PageToolbarComponent extends AbpPageToolbarComponent {
    constructor(_injector) {
        super(_injector);
        this._injector = _injector;
        this.trackByFn = (_, item) => item.action || item.component;
    }
}
PageToolbarComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'nzPageToolbar',
                selector: 'nz-page-toolbar',
                template: "<div class=\"row justify-content-end mx-n1\" id=\"AbpContentToolbar\">\r\n  <div class=\"col-auto px-1 pt-2\" *ngFor=\"let action of actionList; trackBy: trackByFn\">\r\n    <ng-container *ngIf=\"action.visible(data)\">\r\n      <ng-container *abpPermission=\"action.permission\">\r\n        <ng-container *ngIf=\"action.component as component; else button\">\r\n          <ng-container\r\n            *ngComponentOutlet=\"component; injector: createInjector(action)\"\r\n          ></ng-container>\r\n        </ng-container>\r\n\r\n        <ng-template #button>\r\n          <button nz-button nzType=\"primary\" (click)=\"action.action(data)\">\r\n            <i [ngClass]=\"action.icon\" [class.mr-1]=\"action.icon\"></i>\r\n            {{ action.text | abpLocalization }}\r\n          </button>\r\n        </ng-template>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n",
                providers: [
                    {
                        provide: EXTENSIONS_ACTION_TYPE,
                        useValue: 'toolbarActions',
                    },
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
PageToolbarComponent.ctorParameters = () => [
    { type: Injector }
];
//# sourceMappingURL=page-toolbar.component.js.map