import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { FormManagementRoutingModule } from './form-management-routing.module';
import { FormManagementAdminSharedModule } from '@fs-tw/form-management/admin/shared';
import { MainComponent } from './component/main/main.component';
import { ThemeAlainSharedModule } from '@fs-tw/theme-alain/shared';
import { EditFormComponent } from './component/edit-form/edit-form.component';
import { QuestionCardComponent } from './component/edit-form/form/question-card/question-card.component';
import { FormComponent } from './component/edit-form/form/form/form.component';
import { QuestionInfoComponent } from './component/edit-form/form/question-card/question-info.component';
import { QuestionTypeComponent } from './component/edit-form/form/question-card/question-type.component';
import { RadioComponent } from './component/edit-form/form/choice/radio.component';
import { CheckboxComponent } from './component/edit-form/form/choice/checkbox.component';
import { DropdownListComponent } from './component/edit-form/form/choice/dropdown-list.component';
import { ResponsesComponent } from './component/edit-form/responses/responses.component';
import { ViewFormComponent } from './component/view-form/view-form.component';

@NgModule({
  declarations: [
    MainComponent, EditFormComponent,
    FormComponent, QuestionCardComponent, QuestionInfoComponent, QuestionTypeComponent,
    RadioComponent, CheckboxComponent, DropdownListComponent,
    ViewFormComponent, ResponsesComponent
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
