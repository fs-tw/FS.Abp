import { Pipe, PipeTransform } from '@angular/core';
import { EnvironmentService } from '@abp/ng.core'


@Pipe({
    name: 'getFileById'
})
export class GetFileByIdPipe implements PipeTransform {

    constructor(
        private environmentService: EnvironmentService,
    ) { }

    transform(value: string): any {
        return this.environmentService.getApiUrl() + "/api/file-management/file-descriptor/file-content?id=" + value
    }

}