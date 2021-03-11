import { OnInit } from '@angular/core';
import { Fs } from '@fs-tw/cms/proxy';
import { PageService } from '../../../providers/page.service';
import { PostStateService } from '../../../providers/post-state.service';
import * as i0 from "@angular/core";
export declare class ListComponent implements OnInit {
    private pageService;
    private postStateService;
    blogDatas: Fs.Cms.Blogs.Dtos.BlogWithDetailsDto[];
    selectBlogCodeId: string;
    loading: boolean;
    constructor(pageService: PageService, postStateService: PostStateService);
    ngOnInit(): void;
    reload(): void;
    showDetail(blog: Fs.Cms.Blogs.Dtos.BlogWithDetailsDto): void;
    deleteBlog(blog: Fs.Cms.Blogs.Dtos.BlogWithDetailsDto): void;
    static ɵfac: i0.ɵɵFactoryDef<ListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ListComponent, "fs-list", never, {}, {}, never, never>;
}
//# sourceMappingURL=list.component.d.ts.map