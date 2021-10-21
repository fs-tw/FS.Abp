import { Component, Inject, Input, Optional, TemplateRef } from "@angular/core";
import { FormProp } from '@abp/ng.theme.shared/extensions';
import { ReplaceableComponents } from '@abp/ng.core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'fs-quill-editor',
  templateUrl: './quill-editor.component.html',
})
export class QuillEditorComponent {
  protected _form: FormGroup = null;

  @Input()
  get form(): FormGroup {
    if (this.replaceableData) return this.replaceableData.inputs.form;
    return this._form;
  }
  set form(value: FormGroup) {
    this._form = value;
  }
  
  protected _label: TemplateRef<any> = null;

  @Input()
  get label(): TemplateRef<any> {
    if (this.replaceableData) return this.replaceableData.inputs.label;
    return this._label;
  }
  set label(value: TemplateRef<any>) {
    this._label = value;
  }

  protected _prop: FormProp = null;

  @Input()
  get prop(): FormProp {
    if (this.replaceableData) return this.replaceableData.inputs.prop;
    return this._prop;
  }
  set prop(value: FormProp) {
    this._prop = value;
  }

  constructor(
    @Optional()
    @Inject('REPLACEABLE_DATA')
    public replaceableData: ReplaceableComponents.ReplaceableTemplateData<
      any,
      any
    >
  ) {}
}
