import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgAlainMsSharedModule } from '@fs/theme.ng-alain-ms/shared';
import { LayoutModule } from '@fs/theme.ng-alain-ms/layout';

@NgModule({
    declarations: [
    ],
    imports: [
        NgAlainMsSharedModule,
        LayoutModule
    ],
    exports: [
        NgAlainMsSharedModule,
        LayoutModule
    ]
})
export class NgAlainMsBasicModule {
    static forRoot(): ModuleWithProviders<NgAlainMsBasicModule> {
        return {
            ngModule: NgAlainMsBasicModule
        };
    }
}
