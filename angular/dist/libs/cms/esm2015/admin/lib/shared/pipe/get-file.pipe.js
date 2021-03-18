import { Pipe } from '@angular/core';
import { EnvironmentService } from '@abp/ng.core';
export class GetFileByIdPipe {
    constructor(environmentService) {
        this.environmentService = environmentService;
    }
    //TODO:if api route  this will broke;
    transform(value) {
        return this.environmentService.getApiUrl() + `${"/api/file/files/file-content" /* FileContentPath */}?id=${value}`;
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