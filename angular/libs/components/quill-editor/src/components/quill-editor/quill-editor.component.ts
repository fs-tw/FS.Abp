import { ChangeDetectorRef, Component, Inject, Injector, Input, ViewChild } from "@angular/core";
import { ImagePicker } from "@fs-tw/components/image-picker";
import { ImagePickerModalComponent } from "@fs-tw/components/image-picker";
import { Subscription } from "rxjs";
import * as _ from "lodash";
import { FormGroup } from "@angular/forms";
import {  EnvironmentService } from '@abp/ng.core';
import { QUILL_EDITOR_DOWNLOAD_TOKEN } from "../../token/token";

@Component({
  selector: 'fs-quill-editor',
  templateUrl: './quill-editor.component.html',
})
export class QuillEditorComponent {
  @ViewChild(ImagePickerModalComponent) editorImage: ImagePickerModalComponent;

  @Input()
  entityType: string;

  @Input()
  form: FormGroup;

  @Input()
  controlName: string;
  
  @Input()
  editorImageInfo: ImagePicker.ImageFile[];

  editor: any;
  subs: Subscription = new Subscription();
  constructor(
    protected injector: Injector,
    private environmentService: EnvironmentService,
    public readonly cdRef: ChangeDetectorRef,
    @Inject(QUILL_EDITOR_DOWNLOAD_TOKEN) private token: string
  ) {
    this.environmentService = injector.get(EnvironmentService);
  }

  ngOnChanges() {
  }

  ngOnDestroy(): void {
  }

  onEditorCreate(editor) {
    let vm = this;
    let toolbar = editor.getModule('toolbar');
    toolbar.handlers['image'] = function (x) {
      
      vm.editorImage.initBehaviorSubject();
      vm.subs.add(
        vm.editorImage.openModal().subscribe(x => {
          if(!x || x.length <= 0) return;
          vm.setFormValue(_.head(x));
        })
      );

      vm.editor = editor;
      vm.cdRef.detectChanges()
    };
  }

  setFormValue(id: string) {
    this.form.patchValue({
      [this.controlName]: `<p><img src="${ this.environmentService.getApiUrl() + this.token + id }"></p>`
    })
  }
}
