import { Component, Injector } from "@angular/core";
import { ImagePicker } from "@fs-tw/components/image-picker";
import { WidgetComponent } from "../widget.component";
import * as _ from "lodash";

@Component({
  templateUrl: './quill-editor.component.html',
})
export class WidgetQuillEditorComponent extends WidgetComponent {
  entityType: string = "BlogPost";

  editorImageInfo: ImagePicker.ImageFile[] = [];
  
  constructor(
    protected injector:Injector,
  ) {
    super(injector);
  }

  ngOnDestroy(): void {
  }
}
