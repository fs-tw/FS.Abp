import { ModuleWithProviders, NgModuleFactory } from '@angular/core';
export declare class ProjectModule {
    static forChild(): ModuleWithProviders<ProjectModule>;
    static forLazy(): NgModuleFactory<ProjectModule>;
    static forEarly(): NgModuleFactory<ProjectModule>;
}
