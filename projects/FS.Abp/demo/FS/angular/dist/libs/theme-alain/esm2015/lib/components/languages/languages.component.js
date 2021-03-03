import { Component } from '@angular/core';
export class LanguagesComponent {
    constructor() { }
    ngOnInit() {
    }
}
LanguagesComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-languages',
                template: "<div layout-default-header-item-trigger nz-dropdown [nzDropdownMenu]=\"settingsMenu\" nzTrigger=\"click\"\r\n    nzPlacement=\"bottomRight\">\r\n    <i nz-icon nzType=\"setting\"></i>\r\n</div>\r\n<nz-dropdown-menu #settingsMenu=\"nzDropdownMenu\">\r\n    <div nz-menu style=\"width: 200px;\">\r\n        <div nz-menu-item>\r\n            <header-i18n></header-i18n>\r\n        </div>\r\n    </div>\r\n</nz-dropdown-menu>",
                styles: [""]
            },] }
];
LanguagesComponent.ctorParameters = () => [];
//# sourceMappingURL=languages.component.js.map