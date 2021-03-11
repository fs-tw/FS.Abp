import { EventEmitter, OnInit } from '@angular/core';
import { Fs } from '@fs-tw/cms/proxy';
import { PageService } from '../../../providers/page.service';
import { ImageFile, ImagePickerComponent } from '../../image-picker/image-picker.component';
import * as i0 from "@angular/core";
export declare class CreateComponent implements OnInit {
    private pageService;
    defaultImagePicker: ImagePickerComponent;
    blogId: string;
    onSave: EventEmitter<any>;
    isVisible: boolean;
    data: Fs.Cms.Blogs.Dtos.BlogDto;
    defaultImages: ImageFile[];
    constructor(pageService: PageService);
    ngOnInit(): void;
    showModal(): void;
    handleCancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDef<CreateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CreateComponent, "fs-create", never, { "blogId": "blogId"; }, { "onSave": "onSave"; }, never, never>;
}
//# sourceMappingURL=create.component.d.ts.map