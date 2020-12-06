import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { SharedModule } from './shared.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CoreModule } from '@abp/ng.core';

@NgModule({
    imports: [
        CoreModule,
        ThemeSharedModule,
        SharedModule
    ],
    exports: [
        CoreModule,
        ThemeSharedModule,
        SharedModule
    ]
})
export class TheProjectSharedModule {
    static forRoot(): ModuleWithProviders<TheProjectSharedModule> {
        return {
            ngModule: TheProjectSharedModule
        };
    }
}
