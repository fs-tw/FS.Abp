import {
  ListService,
  RoutesService,
  ABP,
  TreeNode,
  LocalizationPipe,
} from '@abp/ng.core';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Fs } from '@fs-tw/abp/audit-logging/proxy/audit-logging';
import {
  map,
} from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { AbpDataSource } from '@fs-tw/abp/core';

@Component({
  selector: 'fs-tw-logs-list',
  templateUrl: './audit-log-list.component.html',
  styles: [
    `
      .demo-infinite-container {
        height: 622px;
        border: 1px solid #e8e8e8;
        border-radius: 4px;
      }

      nz-list {
        padding: 0px;
      }
      nz-tree-select {
        width: 100%;
      },
      nz-range-picker {
        width: 100%;
      }
    `,
  ],
  providers: [ListService],
})
export class AuditLogListComponent implements OnInit {
  subs: Subscription = new Subscription();

  searchForm: FormGroup;

  @Output()
  selectedId$ = new EventEmitter<string>();

  dataSource: AbpDataSource<Fs.Abp.AuditLogging.Dtos.AuditLogDto>;

  treeOptions$ = this.routesService.tree$.pipe(
    map((x) => {
      return x.map((y) => this.transToTreeOption(y));
    })
  );

  transToTreeOption(route: TreeNode<ABP.Route>): NzTreeNodeOptions {
    let result: NzTreeNodeOptions = {
      title: this.localizationPipe.transform(route.name),
      key: route.name,
      children: route.children.map((c) => this.transToTreeOption(c)),
      isLeaf: route.children.length === 0,
      selectable: route.children.length === 0,
    };
    return result;
  }

  constructor(
    @Inject(Fs.Abp.AuditLogging.AuditLogMediator.AuditLogMediatorQueryService)
    private queryService: Fs.Abp.AuditLogging.AuditLogMediator.AuditLogMediatorQueryService,
    public listService: ListService,
    public routesService: RoutesService,
    private localizationPipe: LocalizationPipe
  ) {
    this.searchForm = new FormGroup({
      AbpRouteName: new FormControl(),
      ExecutionTime: new FormControl([
        new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
        new Date(),
      ]),
    });

    this.searchForm.valueChanges.subscribe((x) => {
      this.loadData();
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dataSource = new AbpDataSource(this.listService, (q) => {
      let request: Fs.Abp.AuditLogging.AuditLogMediator.ListAuditLogByAbpRouteName =
        {
          ...{
            maxResultCount: 30,
            skipCount: 0,
          },
          ...q,
          ...this.searchForm.value,
        };
      return this.queryService.listAuditLogByAbpRouteName(request);
    });
  }
}



