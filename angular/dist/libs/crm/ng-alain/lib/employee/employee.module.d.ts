import { ModuleWithProviders, NgModuleFactory } from '@angular/core';
export declare class EmployeeModule {
    static forChild(): ModuleWithProviders<EmployeeModule>;
    static forLazy(): NgModuleFactory<EmployeeModule>;
    static forEarly(): NgModuleFactory<EmployeeModule>;
}
