import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { SharedModule } from './shared.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
//import { ThemeCoreModule } from '@fs/theme.core';

@NgModule({
    imports: [
        CoreModule,
        //ThemeCoreModule,
        ThemeSharedModule,
        SharedModule
    ],
    exports: [
        CoreModule,
        //ThemeCoreModule,
        ThemeSharedModule,
        SharedModule
    ]
})
export class NgAlainMsSharedModule {
    static forRoot(): ModuleWithProviders<NgAlainMsSharedModule> {
        return {
            ngModule: NgAlainMsSharedModule
        };
    }
}
