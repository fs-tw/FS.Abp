import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NzTableListDirective } from './directives/nz-table-list.directive';
import { ExtensibleTableComponent } from './components/extensible-table/extensible-table.component';
import { GridActionsComponent } from './components/grid-actions/grid-actions.component';
import { PageToolbarComponent } from './components/page-toolbar/page-toolbar.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { UiExtensionsModule as AbpUiExtensionsModule } from '@abp/ng.theme.shared/extensions';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NzTableRowDetailDirective } from './directives/nz-table-row-detail.directive';
import { SVModule } from '@delon/abc/sv';
import { NzSelectDefaultDirective } from './directives/nz-select-default.directive';
import { NzSelectLoadingComponent } from './directives/nz-select-loading.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { ExtensibleFormComponent } from './components/extensible-form/extensible-form.component';
import { ExtensibleFormPropComponent } from './components/extensible-form/extensible-form-prop.component';
import { QuillModule } from 'ngx-quill';
import { QuillEditorComponent } from './components/extensible-form/widgets/quill-editor/quill-editor.component';
import { InputComponent } from './components/extensible-form/widgets/input/input.component';
import { WidgetComponent, WidgetComponentRef } from './components/extensible-form/widgets/widget.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CheckboxComponent } from './components/extensible-form/widgets/checkbox/checkbox.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { DateComponent } from './components/extensible-form/widgets/date/date.component';
import { DateTimeComponent } from './components/extensible-form/widgets/date-time/date-time.component';
import { HiddenComponent } from './components/extensible-form/widgets/hidden/hidden.component';
import { MultiselectComponent } from './components/extensible-form/widgets/multiselect/multiselect.component';
import { TextareaComponent } from './components/extensible-form/widgets/textarea/textarea.component';
import { TimeComponent } from './components/extensible-form/widgets/time/time.component';
import { TypeaheadComponent } from './components/extensible-form/widgets/typeahead/typeahead.component';
import { SelectComponent } from './components/extensible-form/widgets/select/select.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

const PUBLIC = [
  ExtensibleTableComponent,
  NzTableRowDetailDirective,
  GridActionsComponent,
  PageToolbarComponent,
  NzTableListDirective,
  NzSelectDefaultDirective,
  ExtensibleFormComponent,
  ExtensibleFormPropComponent,

  QuillEditorComponent,
];
const PRIVATE = [NzSelectLoadingComponent];

const ZORRO_MODULES = [
  NzButtonModule,
  NzDropDownModule,
  NzIconModule,
  NzTableModule,
  NzSpinModule,
  NzInputModule,
  NzCheckboxModule,
  NzDatePickerModule,
  NzTimePickerModule,
  NzAutocompleteModule,
];

const FORM_WIDGETs = [
  WidgetComponentRef,
  WidgetComponent,
  InputComponent,
  CheckboxComponent,
  DateComponent,
  DateTimeComponent,
  HiddenComponent,
  MultiselectComponent,
  TextareaComponent,
  TimeComponent,
  TypeaheadComponent,
  SelectComponent,
];

@NgModule({
  exports: [...PUBLIC],
  declarations: [...PUBLIC, ...PRIVATE, ...FORM_WIDGETs],
  imports: [
    CoreModule,
    ThemeSharedModule,
    NgxValidateCoreModule,
    AbpUiExtensionsModule,
    SVModule,
    ...ZORRO_MODULES,

    QuillModule,
  ],
})
export class ThemeAlainUiExtensionsModule {}
