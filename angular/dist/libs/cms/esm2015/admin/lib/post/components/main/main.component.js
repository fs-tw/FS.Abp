import { ListService } from '@abp/ng.core';
import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExtensionsService } from '@fs-tw/cms/config';
import { forkJoin } from 'rxjs';
import { PageService } from '../../providers/page.service';
import { PostStateService } from '../../providers/post-state.service';
const ɵ0 = "Cms::FS.Cms.PostManagement" /* Post */;
export class MainComponent {
    constructor(extensionsService, router, toasterService, confirmationService, pageService, list, postStateService) {
        this.extensionsService = extensionsService;
        this.router = router;
        this.toasterService = toasterService;
        this.confirmationService = confirmationService;
        this.pageService = pageService;
        this.list = list;
        this.postStateService = postStateService;
        this.postParams = {
            skipCount: 0,
            maxResultCount: 10,
            keyword: "",
            blogId: null
        };
        this.posts = [];
        this.totalCount = 0;
    }
    ngOnInit() {
        this.extensionsService.Actions$["Cms::FS.Cms.PostManagement" /* Post */].subscribe((x) => {
            switch (x.name) {
                case 'Edit':
                    this.gotoDetail(x.record.id);
                    break;
                case 'Delete':
                    this.deleteItem(x.record);
                    break;
            }
        });
        this.blog$ = this.postStateService.getBlog();
        this.onBlogChange();
    }
    onBlogChange() {
        this.sub = this.blog$.subscribe((blog) => {
            this.blogId = blog == null ? null : blog.id;
            this.blogName = blog == null ? "全部" : blog.displayName;
            this.postParams.blogId = this.blogId;
            this.hookToQuery();
        });
    }
    gotoDetail(id) {
        if (id)
            this.router.navigate(["/cms/post/detail/" + id]);
        else
            this.router.navigate(["/cms/post/detail"], {
                queryParams: {
                    blogId: this.postParams.blogId
                }
            });
    }
    hookToQuery() {
        if (this.hookToQueryScribe)
            this.hookToQueryScribe.unsubscribe();
        const query = (query) => {
            query.keyword = this.postParams.keyword;
            query.blogId = this.postParams.blogId;
            return this.pageService.getPostsByBlogId(query);
        };
        this.hookToQueryScribe = this.list.hookToQuery(query).subscribe((res) => {
            this.posts = res.items;
            this.totalCount = res.totalCount;
        });
    }
    deleteItem(item) {
        this.confirmationService
            .warn('確認要刪除嗎？', '系統訊息', {
            cancelText: "取消",
            yesText: "確定"
        })
            .subscribe((status) => {
            if (status === Confirmation.Status.confirm) {
                let files = item.attachmentFileInfos.map(x => x.fileId);
                let images = item.postImages.map(x => x.imageId);
                let deleteFileActions = files.concat(images).map(x => this.pageService.deleteFile(x));
                forkJoin(deleteFileActions).subscribe();
                this.pageService.deletePost(item.id).subscribe(x => {
                    this.toasterService.success("刪除成功！");
                    this.list.get();
                });
            }
        });
    }
    ngOnDestroy() {
        if (this.hookToQueryScribe)
            this.hookToQueryScribe.unsubscribe();
        if (this.sub)
            this.sub.unsubscribe();
    }
}
MainComponent.decorators = [
    { type: Component, args: [{
                template: "<nz-row nzGutter=\"16\">\r\n  <nz-col nzSpan=\"8\">\r\n    <cms-list></cms-list>\r\n  </nz-col>\r\n  <nz-col nzSpan=\"16\">\r\n    <div>\r\n      <div class=\"mb-md\">\r\n        <h5>{{'Cms::FS.Cms.BlogType' | abpLocalization}}:{{ blogName }}</h5>\r\n        <button nz-button nzType=\"primary\" (click)=\"gotoDetail()\" style=\"margin-right: 20px;\">\r\n          {{'AbpIdentityServer::Add'|abpLocalization}}\r\n        </button>\r\n        <nz-input-group nzSearch [nzAddOnAfter]=\"suffixIconButton\" style=\"width: 300px;\">\r\n          <input type=\"text\" [(ngModel)]=\"postParams.keyword\" nz-input placeholder=\"\u8F38\u5165\u540D\u7A31\" />\r\n        </nz-input-group>\r\n        <ng-template #suffixIconButton>\r\n          <button nz-button nzType=\"primary\" (click)=\"hookToQuery()\" nzSearch>\r\n            <i nz-icon nzType=\"search\"></i>\r\n          </button>\r\n        </ng-template>\r\n      </div>\r\n      <nz-extensible-table [data]=\"posts\" [scroll]=\"{x:'600px'}\" [recordsTotal]=\"totalCount\" [list]=\"list\"\r\n        [haveRowDetail]=\"false\">\r\n     \r\n        <ng-template row-detail-template let-node>\r\n          <div>\r\n            <h3>{{'Cms::FS.Post.Subtitle' | abpLocalization}}</h3>\r\n            <p>{{ node.subtitle || '-' }}</p>\r\n            <div *ngIf=\"node.displayMode == 0\">\r\n              <h3>{{'Cms::FS.Post.Content' | abpLocalization}}</h3>\r\n              <quill-view [content]=\"node.content\"></quill-view>\r\n            </div>\r\n            <div *ngIf=\"node.displayMode == 1\">\r\n              <h3>{{'Cms::FS.Post.Url' | abpLocalization}}</h3>\r\n              <p>{{ node.url }}</p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n        \r\n      </nz-extensible-table>\r\n    </div>\r\n  </nz-col>\r\n</nz-row>",
                providers: [
                    ListService,
                    {
                        provide: EXTENSIONS_IDENTIFIER,
                        useValue: ɵ0,
                    },
                ],
                styles: ["nz-select{margin-right:8px;width:220px}.bg-white{background-color:#fff}"]
            },] }
];
MainComponent.ctorParameters = () => [
    { type: ExtensionsService },
    { type: Router },
    { type: ToasterService },
    { type: ConfirmationService },
    { type: PageService },
    { type: ListService },
    { type: PostStateService }
];
export { ɵ0 };
//# sourceMappingURL=main.component.js.map