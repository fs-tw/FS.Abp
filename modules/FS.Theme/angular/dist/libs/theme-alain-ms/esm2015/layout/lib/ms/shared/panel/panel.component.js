import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class MSPanelComponent {
}
MSPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'panel',
                template: "<div class=\"ms-panel__hd\">\r\n  <div *ngIf=\"title\" class=\"ms-panel__hd-title\">\r\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n  </div>\r\n  <div *ngIf=\"extra\" class=\"ms-panel__hd-extra\">\r\n    <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"ms-panel__bd\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                host: {
                    '[class.ms-panel]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSPanelComponent.propDecorators = {
    title: [{ type: Input }],
    extra: [{ type: Input }]
};
//# sourceMappingURL=panel.component.js.map