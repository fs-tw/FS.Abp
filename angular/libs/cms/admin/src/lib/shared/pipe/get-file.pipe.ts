import { Pipe, PipeTransform } from '@angular/core';
import { EnvironmentService } from '@abp/ng.core';
import {eCmsUrlNames} from '../enum/url-names';


@Pipe({
    name: 'getFileById'
})
export class GetFileByIdPipe implements PipeTransform {

    constructor(
        private environmentService: EnvironmentService,
    ) { }

    //TODO:if api route  this will broke;
    transform(value: string): any {
        return this.environmentService.getApiUrl() +`${eCmsUrlNames.FileContentPath}?id=${value}`;
    }

}