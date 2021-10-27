import { Component, Injector } from "@angular/core";
import { WidgetComponent } from "../widget.component";

@Component({
  templateUrl: './quill-editor.component.html',
})
export class QuillEditorComponent extends WidgetComponent {
  isVisible: boolean;
  loading: boolean = false;
  editor: any;
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
      vm.editor = editor;
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
