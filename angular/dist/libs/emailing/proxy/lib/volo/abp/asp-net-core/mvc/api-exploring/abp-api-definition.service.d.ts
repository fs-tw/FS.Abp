import { RestService } from '@abp/ng.core';
import type { ApplicationApiDescriptionModel, ApplicationApiDescriptionModelRequestDto } from '../../../http/modeling/models';
import * as i0 from "@angular/core";
export declare class AbpApiDefinitionService {
    private restService;
    apiName: string;
    getByModel: (model: ApplicationApiDescriptionModelRequestDto) => import("rxjs").Observable<ApplicationApiDescriptionModel>;
    constructor(restService: RestService);
    static ɵfac: i0.ɵɵFactoryDef<AbpApiDefinitionService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AbpApiDefinitionService>;
}
//# sourceMappingURL=abp-api-definition.service.d.ts.map