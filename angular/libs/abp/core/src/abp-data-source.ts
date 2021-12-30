import {
  ListService,
  PagedResultDto, QueryStreamCreatorCallback,
  ABP
} from '@abp/ng.core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import {
  concatMap,
  debounceTime,
  distinct, mergeMap,
  take
} from 'rxjs/operators';



export class AbpDataSource<T> extends DataSource<T> {
  private subscription = new Subscription();

  private get pageSize() {
    return this.listService.maxResultCount;
  }

  private cachedData: T[];

  private dataStream: BehaviorSubject<T[]>;

  private data$: Observable<
    PagedResultDto<T>
  >;

  public toFetchPageSubject: Subject<number>;

  constructor(
    private listService: ListService,
    private streamCreatorCallback: QueryStreamCreatorCallback<
      T, ABP.PageQueryParams
    >
  ) {
    super();

    this.data$ = listService.hookToQuery(streamCreatorCallback);

    this.cachedData = Array.from<T>({
      length: listService.maxResultCount,
    });

    this.dataStream = new BehaviorSubject<
      T[]
    >(this.cachedData);

    this.toFetchPageSubject = new Subject<number>();

    this.toFetchPageSubject
      .pipe(
        distinct(),
        concatMap((x) => {
          return this.fetchPage$(x);
        })
      )
      .subscribe();
  }

  connect(
    collectionViewer: CollectionViewer
  ): Observable<readonly T[]> {
    this.toFetchPageSubject.next(0);
    this.subscription.add(
      collectionViewer.viewChange.pipe(debounceTime(450)).subscribe((range) => {
        const startPage = this.getPageForIndex(range.start);
        const endPage = this.getPageForIndex(range.end - 1);
        for (let i = startPage; i <= endPage; i++) {
          this.toFetchPageSubject.next(i);
        }
      })
    );
    return this.dataStream;
  }
  disconnect(collectionViewer: CollectionViewer): void {
    this.subscription.unsubscribe();
  }

  private getPageForIndex(index: number): number {
    return Math.floor(index / this.pageSize);
  }

  private fetchPage$(page: number): Observable<void> {
    let result = new Subject<void>();

    this.listService.query$
      .pipe(
        mergeMap((x) => this.data$),
        take(1)
      )
      .subscribe((d) => {
        if (this.cachedData.findIndex((x) => !!x) === -1) {
          this.cachedData = Array.from({
            length: d.totalCount,
          }) as T[];
        }

        this.cachedData.splice(page * this.pageSize, this.pageSize, ...d.items);
        this.dataStream.next(this.cachedData);
        result.complete();
      });

    this.listService.page = page;

    return result;
  }
}
