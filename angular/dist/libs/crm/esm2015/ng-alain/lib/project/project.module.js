import { NgModule } from '@angular/core';
import { ProjectRoutingModule } from './project-routing.module';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { LazyModuleFactory } from '@abp/ng.core';
import { SharedModule } from '@fs-tw/crm/ng-alain/shared';
import { STModule } from '@delon/abc/st';
export class ProjectModule {
    static forChild() {
        return {
            ngModule: ProjectModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(ProjectModule.forChild());
    }
    static forEarly() {
        return new LazyModuleFactory(ProjectModule.forChild());
    }
}
ProjectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MainComponent, LayoutComponent],
                imports: [
                    STModule,
                    SharedModule,
                    ProjectRoutingModule,
                ]
            },] }
];
//# sourceMappingURL=project.module.js.map