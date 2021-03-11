import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fs } from '@fs-tw/cms/proxy';
import { PageService } from '../../providers/page.service';
import { PostStateService } from '../../providers/post-state.service';
import * as i0 from "@angular/core";
export declare class MainComponent implements OnInit {
    private pageService;
    private postStateService;
    blog$: Observable<Fs.Cms.Blogs.Dtos.BlogDto>;
    blogId: string;
    blogName: string;
    postParams: Fs.Cms.Posts.Dtos.GetPostByBlogIdInput;
    posts: Fs.Cms.Posts.Dtos.PostWithDetailsDto[];
    totalCount: number;
    loading: boolean;
    constructor(pageService: PageService, postStateService: PostStateService);
    ngOnInit(): void;
    onBlogChange(): void;
    gotoDetail(): void;
    changePage(page: number): void;
    deleteItem(item: Fs.Cms.Posts.Dtos.PostWithDetailsDto): void;
    static ɵfac: i0.ɵɵFactoryDef<MainComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MainComponent, "fs-main", never, {}, {}, never, never>;
}
//# sourceMappingURL=main.component.d.ts.map