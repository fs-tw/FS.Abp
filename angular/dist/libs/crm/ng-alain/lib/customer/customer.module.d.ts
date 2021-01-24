import { ModuleWithProviders, NgModuleFactory } from '@angular/core';
export declare class CustomerModule {
    static forChild(): ModuleWithProviders<CustomerModule>;
    static forLazy(): NgModuleFactory<CustomerModule>;
    static forEarly(): NgModuleFactory<CustomerModule>;
}
