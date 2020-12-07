import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { SharedModule } from './shared.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { STWidgetModule } from './st-widget/st-widget.module';

@NgModule({
    imports: [
        CoreModule,
        ThemeSharedModule,
        SharedModule,
        STWidgetModule
    ],
    exports: [
        CoreModule,
        ThemeSharedModule,
        SharedModule,
        STWidgetModule
    ]
})
export class NgAlainMsSharedModule {
    static forRoot(): ModuleWithProviders<NgAlainMsSharedModule> {
        return {
            ngModule: RootNgAlainMsSharedModule
        };
    }
}
// #region JSON Schema form (using @delon/form)
import { JsonSchemaModule } from './json-schema/json-schema.module';
const FORM_MODULES = [JsonSchemaModule];
// #endregion

@NgModule({
    imports: [
        ...FORM_MODULES,
    ],
  })
  export class RootNgAlainMsSharedModule { }