import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { FormManagementRoutingModule } from './form-management-routing.module';
import { FormManagementAdminSharedModule } from '@fs-tw/form-management/admin/shared';
import { MainComponent } from './component/main/main.component';
import { ThemeAlainSharedModule } from '@fs-tw/theme-alain/shared';
import { ViewComponent } from './component/view/view.component';
import { CheckboxComponent } from './component/view/questions/checkbox.component';
import { DropdownListComponent } from './component/view/questions/dropdown-list.component';
import { QuestionTypeComponent } from './component/view/questions/question-type.component';
import { QuestionInfoComponent } from './component/view/questions/question-info.component';
import { QuestionCardComponent } from './component/view/questions/question-card/question-card.component';
import { QuestionsComponent } from './component/view/questions/questions.component';

@NgModule({
  declarations: [
    MainComponent, ViewComponent,
    QuestionsComponent, QuestionCardComponent, QuestionInfoComponent, QuestionTypeComponent,
    CheckboxComponent, DropdownListComponent
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
