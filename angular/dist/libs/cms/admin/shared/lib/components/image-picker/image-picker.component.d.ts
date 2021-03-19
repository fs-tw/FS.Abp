import { OnInit, TemplateRef } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { FileService } from '../../services/file.service';
import { ToasterService } from '@abp/ng.theme.shared';
export declare class ImageFile {
    fileName: string;
    fileUrl: string;
    constructor(fileName?: string, fileUrl?: string);
}
export declare class SaveFile {
    isUpload: boolean;
    file: File;
    fileName: string;
    fileUrl: string;
    constructor(fileName: string, fileUrl: string, file: File);
}
declare class ViewImage {
    image: ImageFile;
    isVisabled: boolean;
    constructor();
}
export declare class ImagePickerComponent implements OnInit {
    private toasterService;
    private fileService;
    /** 縮圖寬度，單位 px，預設 104px */
    imageWidth: string;
    /** 縮圖高度，單位 px ，預設 104px */
    imageHeight: string;
    /** 外框寬度，單位 px ，預設 104px */
    borderWidth: string;
    /** 外框高度，單位 px ，預設 104px */
    borderHeight: string;
    /** 上傳最大數量 */
    maxImageCount: number;
    /** 是否可同時選多張圖片 */
    isMultiple: boolean;
    /** 顯示圖片 Template ，縮圖比例功能會失效 */
    imageTemplate: TemplateRef<any>;
    /** 上傳圖片 Template，可完整替換成其他形式，如︰按鈕上傳 */
    uploadTemplate: TemplateRef<any>;
    /** 上傳按鈕文字 Template，若 uploadTemplate 有值則無效 */
    uploadTextTemplate: TemplateRef<any>;
    /** 是否排列在同一行，同一行時行寬同 imageWidth */
    inLine: boolean;
    /** 上傳按鈕顯示於前面 */
    showFrontButton: boolean;
    /** 原已上傳圖片 */
    existFiles: ImageFile[];
    /** 原已上傳圖片被刪除的檔名 */
    private deleteFiles;
    /** 本次上傳所顯示圖片 */
    showFiles: ImageFile[];
    /** 本次上傳圖片 */
    private uploadFiles;
    /** 顯示預覽圖 modal */
    viewImage: ViewImage;
    get canUpload(): boolean;
    constructor(toasterService: ToasterService, fileService: FileService);
    ngOnInit(): void;
    ngOnChanges(): void;
    clear(): void;
    beforeUpload: (file: NzUploadFile) => boolean;
    private getBase64;
    deleteFile(fileName: string): void;
    controllModal(state: boolean, image?: ImageFile): void;
    getDeleteFileNames(): string[];
    getNewUploadFiles(): SaveFile[];
    getUploadFiles(): SaveFile[];
}
export {};