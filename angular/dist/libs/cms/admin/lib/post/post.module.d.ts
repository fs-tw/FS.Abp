import { ModuleWithProviders, NgModuleFactory } from '@angular/core';
export declare class PostModule {
    static forChild(): ModuleWithProviders<PostModule>;
    static forLazy(): NgModuleFactory<PostModule>;
    static forEarly(): NgModuleFactory<PostModule>;
}
