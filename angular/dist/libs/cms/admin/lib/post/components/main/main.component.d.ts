import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Fs } from '@fs-tw/cms/proxy';
import { PageService } from '../../providers/page.service';
import { PostStateService } from '../../providers/post-state.service';
export declare class MainComponent implements OnInit {
    private router;
    private pageService;
    private postStateService;
    blog$: Observable<Fs.Cms.Blogs.Dtos.BlogDto>;
    blogId: string;
    blogName: string;
    postParams: Fs.Cms.Posts.Dtos.GetPostByBlogIdInput;
    posts: Fs.Cms.Posts.Dtos.PostWithDetailsDto[];
    totalCount: number;
    loading: boolean;
    constructor(router: Router, pageService: PageService, postStateService: PostStateService);
    ngOnInit(): void;
    onBlogChange(): void;
    gotoDetail(id?: string): void;
    changePage(page: number): void;
    deleteItem(item: Fs.Cms.Posts.Dtos.PostWithDetailsDto): void;
}
