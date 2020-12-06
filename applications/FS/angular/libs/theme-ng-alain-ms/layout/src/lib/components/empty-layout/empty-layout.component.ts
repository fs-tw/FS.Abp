import { Component, OnInit, OnDestroy } from '@angular/core';
import { eLayoutType } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { LayoutService } from '@fs/theme.ng-alain-ms/core';
import { BrandService } from '@fs/theme.ng-alain-ms/shared';

@Component({
  selector: 'fs-empty-layout',
  templateUrl: './empty-layout.component.html'
})
export class EmptyLayoutComponent implements OnInit, OnDestroy {
  static type = eLayoutType.empty;
  constructor(
    private srv: BrandService,
    private layoutService: LayoutService,
    private store: Store,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
  }
  private destroy$ = new Subject<void>();
  ngOnDestroy() {
    this.destroy$.next();
  }


}
