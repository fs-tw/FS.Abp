import type { EmployeeCreateDto, EmployeeGetListDto, EmployeePrimaryKeyDto, EmployeeUpdateDto, EmployeeWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
export declare class EmployeesApiService {
    private restService;
    apiName: string;
    createByEmployeeCreate: (EmployeeCreate: EmployeeCreateDto) => import("rxjs").Observable<EmployeeWithDetailsDto>;
    deleteByEmployeePrimaryKey: (EmployeePrimaryKey: EmployeePrimaryKeyDto) => import("rxjs").Observable<void>;
    getByEmployeePrimaryKey: (EmployeePrimaryKey: EmployeePrimaryKeyDto) => import("rxjs").Observable<EmployeeWithDetailsDto>;
    getListByEmployeeGetList: (EmployeeGetList: EmployeeGetListDto) => import("rxjs").Observable<PagedResultDto<EmployeeWithDetailsDto>>;
    updateByEmployeePrimaryKeyAndEmployeeUpdate: (EmployeePrimaryKey: EmployeePrimaryKeyDto, EmployeeUpdate: EmployeeUpdateDto) => import("rxjs").Observable<EmployeeWithDetailsDto>;
    constructor(restService: RestService);
}
