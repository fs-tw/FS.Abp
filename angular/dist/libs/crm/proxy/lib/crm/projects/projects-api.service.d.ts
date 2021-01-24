import type { ProjectCreateDto, ProjectGetListDto, ProjectPrimaryKeyDto, ProjectUpdateDto, ProjectWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
export declare class ProjectsApiService {
    private restService;
    apiName: string;
    createByProjectCreate: (ProjectCreate: ProjectCreateDto) => import("rxjs").Observable<ProjectWithDetailsDto>;
    deleteByProjectPrimaryKey: (ProjectPrimaryKey: ProjectPrimaryKeyDto) => import("rxjs").Observable<void>;
    getByProjectPrimaryKey: (ProjectPrimaryKey: ProjectPrimaryKeyDto) => import("rxjs").Observable<ProjectWithDetailsDto>;
    getListByProjectGetList: (ProjectGetList: ProjectGetListDto) => import("rxjs").Observable<PagedResultDto<ProjectWithDetailsDto>>;
    updateByProjectPrimaryKeyAndProjectUpdate: (ProjectPrimaryKey: ProjectPrimaryKeyDto, ProjectUpdate: ProjectUpdateDto) => import("rxjs").Observable<ProjectWithDetailsDto>;
    constructor(restService: RestService);
}
