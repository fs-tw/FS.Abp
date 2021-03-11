import { Pipe } from '@angular/core';
import { EnvironmentService } from '@abp/ng.core';
export class GetFileByIdPipe {
    constructor(environmentService) {
        this.environmentService = environmentService;
    }
    transform(value) {
        return this.environmentService.getApiUrl() + "/api/file-management/file-descriptor/file-content?id=" + value;
    }
}
GetFileByIdPipe.decorators = [
    { type: Pipe, args: [{
                name: 'getFileById'
            },] }
];
GetFileByIdPipe.ctorParameters = () => [
    { type: EnvironmentService }
];
//# sourceMappingURL=get-file.pipe.js.map