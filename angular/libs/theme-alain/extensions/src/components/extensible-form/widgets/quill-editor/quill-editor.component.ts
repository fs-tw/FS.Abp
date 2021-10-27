import { Component, Inject, Injector, Input, Optional, TemplateRef } from "@angular/core";
import { FormProp } from '@abp/ng.theme.shared/extensions';
import { ReplaceableComponents } from '@abp/ng.core';
import { FormGroup } from "@angular/forms";
import { WidgetComponent } from "../widget.component";

@Component({
  templateUrl: './quill-editor.component.html',
})
export class QuillEditorComponent extends WidgetComponent {
  isVisible: boolean;
  loading: boolean = false;
  constructor(
    protected injector:Injector
  ) {
    super(injector);
  }

  onEditorCreate(editor) {
    let vm = this;
    let toolbar = editor.getModule('toolbar');
    toolbar.handlers['image'] = function (x) {
      vm.isVisible = true;
    };
  }

  handleOk() {
    this.loading = true;
  }

  handleClose() {
    if (this.loading) return;
    this.isVisible = false;
  }
}
