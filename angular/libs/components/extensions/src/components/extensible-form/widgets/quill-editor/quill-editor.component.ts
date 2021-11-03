import { ChangeDetectorRef, Component, Injector, Input, ViewChild } from "@angular/core";
import { ImagePicker } from "@fs-tw/components/image-picker";
import { ImagePickerModalComponent } from "@fs-tw/components/image-picker";
import { QuillEditorComponent } from "@fs-tw/components/quill-editor";
import { Subscription } from "rxjs";
import { WidgetComponent } from "../widget.component";
import * as _ from "lodash";

@Component({
  templateUrl: './quill-editor.component.html',
})
export class WidgetQuillEditorComponent extends WidgetComponent {
  @ViewChild(ImagePickerModalComponent) editorImage: ImagePickerModalComponent;
  @ViewChild(QuillEditorComponent) quillEditor: QuillEditorComponent;

  @Input() entityType: string = "BlogPost";

  subs: Subscription = new Subscription();
  editorImageInfo: ImagePicker.ImageFile[] = [];
  
  constructor(
    protected injector:Injector,
    public readonly cdRef: ChangeDetectorRef,
  ) {
    super(injector);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngAfterViewInit() {
    this.subs.add(
      this.quillEditor.initBehaviorSubject().subscribe(x => {
        if(!x) return;
        this.editorImage.initBehaviorSubject();
        this.subs.add(
          this.editorImage.openModal().subscribe(x => {
            if(!x || x.length <= 0) return;
            this.quillEditor.setFormValue(_.head(x));
          })
        );
      })
    )
  }
}
