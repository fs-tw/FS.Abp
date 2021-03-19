import { NgModule } from '@angular/core';
import { TagManagementRoutingModule } from './tag-management-routing.module';
import { MainComponent } from './components/main/main.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LazyModuleFactory } from '@abp/ng.core';
import { SharedModule } from '@fs-tw/cms/admin/shared';
import { TagDetailComponent } from './components/tag-detail/tag-detail.component';
import { PageService } from './providers/page.service';
import { NzTagModule } from 'ng-zorro-antd/tag';
export class TagManagementModule {
    static forChild() {
        return {
            ngModule: TagManagementModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(TagManagementModule.forChild());
    }
    static forEarly() {
        return new LazyModuleFactory(TagManagementModule.forChild());
    }
}
TagManagementModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MainComponent, LayoutComponent, TagDetailComponent],
                imports: [
                    SharedModule,
                    NzTagModule,
                    TagManagementRoutingModule
                ],
                providers: [PageService]
            },] }
];
//# sourceMappingURL=tag-management.module.js.map