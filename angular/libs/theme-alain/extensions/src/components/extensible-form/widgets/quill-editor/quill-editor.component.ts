import { Component, Inject, Injector, Input, Optional, TemplateRef } from "@angular/core";
import { FormProp } from '@abp/ng.theme.shared/extensions';
import { ReplaceableComponents } from '@abp/ng.core';
import { FormGroup } from "@angular/forms";
import { WidgetComponent } from "../widget.component";

@Component({
  templateUrl: './quill-editor.component.html',
})
export class QuillEditorComponent extends WidgetComponent {

  constructor(
    protected injector:Injector
  ) {
    super(injector);
  }
}
