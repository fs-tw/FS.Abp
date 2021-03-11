import { RestService } from '@abp/ng.core';
import type { ApplicationApiDescriptionModel, ApplicationApiDescriptionModelRequestDto } from '../../../http/modeling/models';
export declare class AbpApiDefinitionService {
    private restService;
    apiName: string;
    getByModel: (model: ApplicationApiDescriptionModelRequestDto) => import("rxjs").Observable<ApplicationApiDescriptionModel>;
    constructor(restService: RestService);
}
