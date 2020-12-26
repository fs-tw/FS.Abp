import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import * as screenfull from 'screenfull';
export class HeaderFullScreenComponent {
    constructor() {
        this.status = false;
    }
    get sf() {
        return screenfull;
    }
    _resize() {
        this.status = this.sf.isFullscreen;
    }
    _click() {
        if (this.sf.isEnabled) {
            this.sf.toggle();
        }
    }
}
HeaderFullScreenComponent.decorators = [
    { type: Component, args: [{
                selector: 'header-fullscreen',
                template: `
  <div layout-default-header-item-trigger nzPlacement="bottomRight">
    <i nz-icon [nzType]="status ? 'fullscreen-exit' : 'fullscreen'"></i>
  </div>
  `,
                // tslint:disable-next-line: no-host-metadata-property
                host: {
                    '[class.d-block]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
HeaderFullScreenComponent.propDecorators = {
    _resize: [{ type: HostListener, args: ['window:resize',] }],
    _click: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=fullscreen.component.js.map