export declare class PageService {
    private allTagData;
    private tagData;
    readonly allTagData$: import("rxjs").Observable<any[]>;
    readonly tagData$: import("rxjs").Observable<any>;
    getTageListFromApi(): void;
    getTagOneFromApi(groupId: string): void;
    constructor();
}
