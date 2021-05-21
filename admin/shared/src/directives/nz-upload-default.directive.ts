import {
  Directive,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  Output,
} from '@angular/core';
import { NzUploadComponent, NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { NzUploadDefaultComponent } from './nz-upload-default.component';

@Directive({
  selector: 'nz-upload[default]',
  exportAs: 'nzUploadDefault',
})
export class NzUploadDefaultDirective {
  @Input() default: NzUploadDefaultComponent;
  @Output() file:EventEmitter<NzUploadFile>=new EventEmitter<NzUploadFile>();

  constructor(private injector: Injector, private upload: NzUploadComponent) {
    this.setInitialValues();
  }
  private setInitialValues() {
    const el = this.injector.get(ElementRef);
    el.nativeElement.style = 'display: grid';
    this.upload.nzListType="picture-card";
    
    this.upload.nzBeforeUpload = (file: NzUploadFile): Observable<boolean> => {
      let getBase64 = new Observable<string>((observer) => {
        const reader = new FileReader();
        reader.onload = () => {
          observer.next(reader.result.toString());
          observer.complete();
        };
        reader.onerror = (error) => observer.error(error);
        reader.readAsDataURL(file as any);
        return { unsubscribe() {} };
      }).pipe(take(1));

      return getBase64.pipe(
        map((d) => {
          file.thumbUrl = d;
          file.url = d;
          this.file.next(file);
          return false;
        })
      );
    };

    this.upload.nzPreview = async (file: NzUploadFile) => {
      console.log(this.default);
      this.default.open(file.thumbUrl);
    };
  }
}
