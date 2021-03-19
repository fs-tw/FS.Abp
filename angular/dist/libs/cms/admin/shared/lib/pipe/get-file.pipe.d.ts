import { PipeTransform } from '@angular/core';
import { EnvironmentService } from '@abp/ng.core';
export declare class GetFileByIdPipe implements PipeTransform {
    private environmentService;
    constructor(environmentService: EnvironmentService);
    transform(value: string): any;
}
