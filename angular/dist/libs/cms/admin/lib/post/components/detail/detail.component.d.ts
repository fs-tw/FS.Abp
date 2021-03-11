import { OnInit } from '@angular/core';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { ActivatedRoute, Router } from '@angular/router';
import { Fs } from '@fs-tw/cms/proxy';
import { PageService } from '../../providers/page.service';
import { ImageFile, ImagePickerComponent } from '../image-picker/image-picker.component';
export declare class DetailComponent implements OnInit {
    private router;
    private activatedRoute;
    private pageService;
    private confirmationService;
    defaultImagePicker: ImagePickerComponent;
    postId: string;
    data: Fs.Cms.Posts.Dtos.PostDto;
    dateRange: Date[];
    defaultImages: ImageFile[];
    blogs: Fs.Cms.Blogs.Dtos.BlogDto[];
    isLoading: boolean;
    coverImage: string;
    constructor(router: Router, activatedRoute: ActivatedRoute, pageService: PageService, confirmationService: ConfirmationService);
    ngOnInit(): void;
    getPost(): void;
    getBlogs(): void;
    deleteFile(fileName: string): void;
    save(): void;
}
