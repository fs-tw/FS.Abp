import { OnInit } from '@angular/core';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Fs } from '@fs-tw/cms/proxy';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { PageService } from '../../providers/page.service';
import { ImageFile, ImagePickerComponent } from '@fs-tw/cms/admin/shared';
import { FileService } from '@fs-tw/cms/admin/shared';
import { FileInfo } from '../upload-file/upload-file.component';
export declare class DetailComponent implements OnInit {
    private router;
    private fileService;
    private activatedRoute;
    private pageService;
    private confirmationService;
    defaultImagePicker: ImagePickerComponent;
    defaultUploadFile: UploadFileComponent;
    postId: string;
    data: Fs.Cms.Posts.Dtos.PostDto;
    dateRange: Date[];
    defaultImages: ImageFile[];
    defaultFiles: FileInfo[];
    blogs: Fs.Cms.Blogs.Dtos.BlogDto[];
    isLoading: boolean;
    directory: any;
    coverImage: string;
    contentFileName: string;
    constructor(router: Router, fileService: FileService, activatedRoute: ActivatedRoute, pageService: PageService, confirmationService: ConfirmationService);
    ngOnInit(): void;
    getPost(): void;
    getBlogs(): void;
    deleteFile(fileName: string): void;
    getRand(): string;
    save(): void;
    private blobToFile;
    uploadFiles$(item: Fs.Cms.Posts.Dtos.PostDto): Observable<Fs.Cms.Posts.Dtos.AttachmentFileInfoDto[]>;
    uploadImage$(item: Fs.Cms.Posts.Dtos.PostDto): Observable<Fs.Cms.Posts.Dtos.PostImageDto[]>;
    savePost(item: Fs.Cms.Posts.Dtos.PostDto): void;
}
