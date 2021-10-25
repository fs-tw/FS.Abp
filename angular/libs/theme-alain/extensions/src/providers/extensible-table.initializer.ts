import { ReplaceableComponentsService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { CheckboxComponent, DateComponent, DateTimeComponent, HiddenComponent, InputComponent, MultiselectComponent, QuillEditorComponent, SelectComponent, TextareaComponent, TimeComponent, TypeaheadComponent } from '../components/extensible-form/widgets';

export const EXTENSIBLE_FORM_INITIALIZER = [
  {
    provide: APP_INITIALIZER,
    useFactory: configure,
    deps: [ReplaceableComponentsService],
    multi: true,
    import: [QuillModule.forRoot()]
  },
];
const replaceableComponents: Array<any> = [
  {
    name: 'checkbox',
    component: CheckboxComponent,
  },
  {
    name: 'date',
    component: DateComponent,
  },
  {
    name: 'dateTime',
    component: DateTimeComponent,
  },
  {
    name: 'hidden',
    component: HiddenComponent,
  },
  {
    name: 'input',
    component: InputComponent,
  },
  {
    name: 'multiselect',
    component: MultiselectComponent,
  },
  {
    name: 'quill-editor',
    component: QuillEditorComponent,
  },
  {
    name: 'select',
    component: SelectComponent,
  },
  {
    name: 'textarea',
    component: TextareaComponent,
  },
  {
    name: 'time',
    component: TimeComponent,
  },
  {
    name: 'typeahead',
    component: TypeaheadComponent,
  },

];

export function configure(
  replaceableComponentsService: ReplaceableComponentsService,
) {
  return () => {
    replaceableComponents.forEach(item=>{
      replaceableComponentsService.add({
        key: item.name,
        component: item.component,
      });
    });
    return Promise.resolve();
  };
}


