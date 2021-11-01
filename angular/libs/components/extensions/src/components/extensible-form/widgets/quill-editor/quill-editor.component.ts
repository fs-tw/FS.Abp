import { ChangeDetectorRef, Component, Injector, Input, ViewChild } from "@angular/core";
import { ImagePicker } from "@fs-tw/components/image-picker";
import { ImagePickerModalComponent } from "@fs-tw/components/image-picker";
import { WidgetComponent } from "../widget.component";

@Component({
  templateUrl: './quill-editor.component.html',
})
export class QuillEditorComponent extends WidgetComponent {
  @ViewChild(ImagePickerModalComponent) editorImage: ImagePickerModalComponent;

  @Input() entityType: string = "Page";

  editor: any;
  editorImageInfo: ImagePicker.ImageFile[] = [];

  constructor(
    protected injector:Injector,
    public readonly cdRef: ChangeDetectorRef,
  ) {
    super(injector);
  }

  onEditorCreate(editor) {
    let vm = this;
    let toolbar = editor.getModule('toolbar');
    toolbar.handlers['image'] = function (x) {
      vm.editorImage.openModal();

      vm.editor = editor;
      vm.cdRef.detectChanges()
    };
  }
}
