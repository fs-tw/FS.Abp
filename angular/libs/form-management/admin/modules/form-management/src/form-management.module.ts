import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { FormManagementRoutingModule } from './form-management-routing.module';
import { FormManagementAdminSharedModule } from '@fs-tw/form-management/admin/shared';
import { MainComponent } from './component/main/main.component';
import { ThemeAlainSharedModule } from '@fs-tw/theme-alain/shared';
import { ViewComponent } from './component/view/view.component';
import { CheckboxComponent } from './component/view/form/checkbox.component';
import { DropdownListComponent } from './component/view/form/dropdown-list.component';
import { QuestionTypeComponent } from './component/view/form/question-type.component';
import { QuestionInfoComponent } from './component/view/form/question-info.component';
import { QuestionCardComponent } from './component/view/form/question-card/question-card.component';
import { FormComponent } from './component/view/form/form/form.component';
import { PreviewComponent } from './component/preview/preview.component';
import { RadioComponent } from './component/view/form/radio.component';

@NgModule({
  declarations: [
    MainComponent, ViewComponent,
    FormComponent, QuestionCardComponent, QuestionInfoComponent, QuestionTypeComponent,
    RadioComponent, CheckboxComponent, DropdownListComponent,
    PreviewComponent
  ],
  imports: [
    FormManagementAdminSharedModule,
    CoreModule,
    FormManagementRoutingModule,
    ThemeAlainSharedModule
  ],
  exports: [
  ],
})
export class FormManagementModule {
  static forChild(): ModuleWithProviders<FormManagementModule> {
    return {
      ngModule: FormManagementModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<FormManagementModule> {
    return new LazyModuleFactory(FormManagementModule.forChild());
  }
  static forEarly(): NgModuleFactory<FormManagementModule> {
    return new LazyModuleFactory(FormManagementModule.forChild());
  }
}
