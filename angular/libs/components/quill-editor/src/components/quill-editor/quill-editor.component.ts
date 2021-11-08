import { ChangeDetectorRef, Component, Injector, Input, ViewChild } from "@angular/core";
import { ImagePicker } from "@fs-tw/components/image-picker";
import { ImagePickerModalComponent } from "@fs-tw/components/image-picker";
import { BehaviorSubject, Subscription } from "rxjs";
import * as _ from "lodash";
import { FormGroup } from "@angular/forms";
import { QuillEditor, QUILL_EDITOR_DOWN_TOKEN } from "../..";

@Component({
  selector: 'fs-quill-editor',
  templateUrl: './quill-editor.component.html',
})
export class QuillEditorComponent {
  @ViewChild(ImagePickerModalComponent) editorImage: ImagePickerModalComponent;

  private token: string;

  @Input()
  form: FormGroup;

  @Input()
  controlName: string;

  editor: any;
  subs: Subscription = new Subscription();
  editorImageInfo: ImagePicker.ImageFile[] = [];
  outputResult: BehaviorSubject<any>;
  constructor(
    protected injector: Injector,
    public readonly cdRef: ChangeDetectorRef,
  ) {
    this.token = injector.get(QUILL_EDITOR_DOWN_TOKEN);
  }

  ngOnChanges() {
  }

  ngOnDestroy(): void {
    this.outputResult.complete();
  }

  initBehaviorSubject(): BehaviorSubject<any> {
    this.outputResult = new BehaviorSubject<any>(null);
    return this.outputResult;
  }

  onEditorCreate(editor) {
    let vm = this;
    let toolbar = editor.getModule('toolbar');
    toolbar.handlers['image'] = function (x) {
      
      vm.outputResult.next(x);

      vm.editor = editor;
      vm.cdRef.detectChanges()
    };
  }

  setFormValue(id: string) {
    this.form.patchValue({
      [this.controlName]: `<p><img src="${ this.token + id }"></p>`
    })
  }
}
