import { NgModule } from '@angular/core';
// import { NgAlainBasicModule } from '@fs-tw/theme-ng-alain/basic';
import { ThemeAlainMsSharedModule } from '@fs-tw/theme-alain-ms/shared';
import { UiExtensionsModule } from '@fs-tw/theme-alain-ms/shared/extensions';
import { GetFileByIdPipe } from './pipe/get-file.pipe';
const COMPONENT = [GetFileByIdPipe];
export class SharedModule {
}
SharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...COMPONENT],
                imports: [
                    // NgAlainBasicModule,
                    ThemeAlainMsSharedModule,
                    UiExtensionsModule
                ],
                exports: [
                    // NgAlainBasicModule,
                    ...COMPONENT,
                    ThemeAlainMsSharedModule,
                    UiExtensionsModule
                ]
            },] }
];
//# sourceMappingURL=shared.module.js.map