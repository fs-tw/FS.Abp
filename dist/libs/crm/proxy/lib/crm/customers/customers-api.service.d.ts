import type { CustomerCreateDto, CustomerGetListDto, CustomerPrimaryKeyDto, CustomerUpdateDto, CustomerWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
export declare class CustomersApiService {
    private restService;
    apiName: string;
    createByCustomerCreate: (CustomerCreate: CustomerCreateDto) => import("rxjs").Observable<CustomerWithDetailsDto>;
    deleteByCustomerPrimaryKey: (CustomerPrimaryKey: CustomerPrimaryKeyDto) => import("rxjs").Observable<void>;
    getByCustomerPrimaryKey: (CustomerPrimaryKey: CustomerPrimaryKeyDto) => import("rxjs").Observable<CustomerWithDetailsDto>;
    getListByCustomerGetList: (CustomerGetList: CustomerGetListDto) => import("rxjs").Observable<PagedResultDto<CustomerWithDetailsDto>>;
    updateByCustomerPrimaryKeyAndCustomerUpdate: (CustomerPrimaryKey: CustomerPrimaryKeyDto, CustomerUpdate: CustomerUpdateDto) => import("rxjs").Observable<CustomerWithDetailsDto>;
    constructor(restService: RestService);
}
