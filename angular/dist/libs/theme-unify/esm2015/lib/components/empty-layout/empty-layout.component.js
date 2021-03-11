import { Component } from '@angular/core';
export class EmptyLayoutComponent {
}
// required for dynamic component
EmptyLayoutComponent.type = "empty" /* empty */;
EmptyLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'fs-layout-empty',
                template: `
    <router-outlet></router-outlet>
  `
            },] }
];
//# sourceMappingURL=empty-layout.component.js.map