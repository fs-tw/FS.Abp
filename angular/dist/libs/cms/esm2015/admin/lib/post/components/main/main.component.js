import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../../providers/page.service';
import { PostStateService } from '../../providers/post-state.service';
// 
// import { PostWithDetailsDto } from '@fs-tw/cms/proxy';
// import { CodesDto } from '@fs-tw/theme-core';
// import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';
// import { Select, Store } from '@ngxs/store';
// import { Observable, Subscription } from 'rxjs';
// import { Deletepost, GetPosts } from '../../providers/post/post.actions';
// import { PostState } from '../../providers/post/post.state';
// import { PostsStateService } from '../../providers/post/poststate.service';
// import { PageService } from '../../providers/page.service';
export class MainComponent {
    constructor(router, pageService, postStateService) {
        this.router = router;
        this.pageService = pageService;
        this.postStateService = postStateService;
        this.postParams = {
            skipCount: 0,
            maxResultCount: 10,
            keyword: "",
            blogId: null
        };
        this.posts = [];
        this.totalCount = 0;
        this.loading = false;
    }
    ngOnInit() {
        this.blog$ = this.postStateService.getBlog();
        this.onBlogChange();
    }
    onBlogChange() {
        this.blog$.subscribe((blog) => {
            this.blogId = blog == null ? null : blog.id;
            this.blogName = blog == null ? "" : blog.displayName;
            this.postParams.blogId = this.blogId;
            this.changePage(1);
        });
    }
    gotoDetail(id) {
        if (id)
            this.router.navigate(["/cms/post/detail/" + id]);
        else
            this.router.navigate(["/cms/post/detail"]);
    }
    changePage(page) {
        this.postParams.skipCount = (page - 1) * this.postParams.maxResultCount;
        this.loading = true;
        this.pageService.getPostsByBlogId(this.postParams).subscribe((x) => {
            this.loading = false;
            this.posts = x.items;
            this.totalCount = x.totalCount;
        });
    }
    deleteItem(item) {
    }
}
MainComponent.decorators = [
    { type: Component, args: [{
                selector: 'fs-main',
                template: "<nz-row nzGutter=\"16\">\r\n  <nz-col nzSpan=\"8\">\r\n    <fs-list></fs-list>\r\n  </nz-col>\r\n  <nz-col nzSpan=\"16\">\r\n    <div>\r\n      <div class=\"mb-md\">\r\n        <h5>\u985E\u578B\uFF1A{{ blogName }}</h5>\r\n        <button nz-button nzType=\"primary\" (click)=\"gotoDetail()\" style=\"margin-right: 20px;\">\r\n          \u65B0\u589E\r\n        </button>\r\n        <nz-input-group nzSearch [nzAddOnAfter]=\"suffixIconButton\" style=\"width: 300px;\">\r\n          <input type=\"text\" [(ngModel)]=\"postParams.keyword\" nz-input placeholder=\"\u8F38\u5165\u540D\u7A31\" />\r\n        </nz-input-group>\r\n        <ng-template #suffixIconButton>\r\n          <button nz-button nzType=\"primary\" (click)=\"changePage(1)\" nzSearch>\r\n            <i nz-icon nzType=\"search\"></i>\r\n          </button>\r\n        </ng-template>\r\n      </div>\r\n      <nz-table #listTable [nzData]=\"posts\" nzSize=\"small\" nzPageSize=\"10\" [nzTotal]=\"totalCount\"\r\n        [nzFrontPagination]=\"false\" [nzLoading]=\"loading\" (nzPageIndexChange)=\"changePage($event)\" nzBordered>\r\n        <thead>\r\n          <tr>\r\n            <th nzWidth=\"110px\"></th>\r\n            <th>\u555F\u7528</th>\r\n            <th>\u6A19\u984C</th>\r\n            <th>\u986F\u793A\u6A21\u5F0F</th>\r\n            <th>\u767C\u4F48\u65E5\u671F</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <ng-container *ngFor=\"let item of listTable.data\">\r\n            <tr class=\"bg-white\">\r\n              <td nzShowExpand [(nzExpand)]=\"item.expand\" nzWidth=\"110px\">\r\n                <a nz-dropdown [nzDropdownMenu]=\"menu\">\r\n                  {{ 'AbpIdentity::Actions' | abpLocalization }}\r\n                  <i nz-icon nzType=\"down\"></i>\r\n                </a>\r\n                <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                  <ul nz-menu>\r\n                    <li nz-menu-item (click)=\"gotoDetail(item.id)\">\r\n                      <a>\u7DE8\u8F2F</a>\r\n                    </li>\r\n                    <li nz-menu-item (click)=\"deleteItem(item)\">\r\n                      <a class=\"text-red\">\u522A\u9664</a>\r\n                    </li>\r\n                  </ul>\r\n                </nz-dropdown-menu>\r\n              </td>\r\n              <td>\r\n                <span *ngIf=\"item.published\"><i nz-icon nzType=\"check\" nzTheme=\"outline\"></i></span>\r\n                <span *ngIf=\"!item.published\"><i nz-icon nzType=\"close\" nzTheme=\"outline\"></i></span>\r\n              </td>\r\n              <td>\r\n                {{ item.title }}\r\n              </td>\r\n              <td>\r\n                <span *ngIf=\"item.displayMode == 0\">\u5167\u5BB9</span>\r\n                <span *ngIf=\"item.displayMode == 1\">\u9023\u7D50</span>\r\n              </td>\r\n              <td>{{ item.published_At | date: 'yyyy-MM-dd HH:mm:ss' }}</td>\r\n            </tr>\r\n\r\n            <tr [nzExpand]=\"item.expand\">\r\n              <div>\r\n                <h3>\u526F\u6A19\u984C</h3>\r\n                <p>{{ item.subtitle || '-' }}</p>\r\n                <div *ngIf=\"item.displayMode == 0\">\r\n                  <h3>\u5167\u5BB9\uFF1A</h3>\r\n                  <quill-view [content]=\"item.content\"></quill-view>\r\n                </div>\r\n                <div *ngIf=\"item.displayMode == 1\">\r\n                  <h3>\u9023\u7D50</h3>\r\n                  <p>{{ item.url }}</p>\r\n                </div>\r\n              </div>\r\n            </tr>\r\n          </ng-container>\r\n        </tbody>\r\n      </nz-table>\r\n    </div>\r\n  </nz-col>\r\n</nz-row>",
                styles: ["nz-select{margin-right:8px;width:220px}.bg-white{background-color:#fff}"]
            },] }
];
MainComponent.ctorParameters = () => [
    { type: Router },
    { type: PageService },
    { type: PostStateService }
];
//# sourceMappingURL=main.component.js.map