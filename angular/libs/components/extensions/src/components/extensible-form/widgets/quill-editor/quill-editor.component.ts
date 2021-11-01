import { ChangeDetectorRef, Component, Injector, ViewChild } from "@angular/core";
import { ImagePicker, ImagePickerComponent } from "@fs-tw/components/image-picker";
import { WidgetComponent } from "../widget.component";

@Component({
  templateUrl: './quill-editor.component.html',
})
export class QuillEditorComponent extends WidgetComponent {
  @ViewChild("EditorImage") editorImage: ImagePickerComponent;
  
  editor: any;
  isVisible: boolean;
  loading: boolean = false;
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
      vm.isVisible = true;

      for(let img of vm.editorImage.showFiles){
        vm.editorImage.deleteFile(img.fileName)
      }

      vm.editor = editor;
      vm.cdRef.detectChanges()
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
