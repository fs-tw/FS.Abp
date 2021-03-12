import { PipeTransform } from '@angular/core';
import { EnvironmentService } from '@abp/ng.core';
import * as i0 from "@angular/core";
export declare class GetFileByIdPipe implements PipeTransform {
    private environmentService;
    constructor(environmentService: EnvironmentService);
    transform(value: string): any;
    static ɵfac: i0.ɵɵFactoryDef<GetFileByIdPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<GetFileByIdPipe, "getFileById">;
}
//# sourceMappingURL=get-file.pipe.d.ts.map