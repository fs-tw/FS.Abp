import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { Layout, MSProduct, MSProductCategory, MSProductI18n } from '../../../models';
import { LayoutStateService } from '../../../services/layout-state.service';
import { BrandService } from '../../ms.service';
import { MSProductService } from '../../services/product.service';

@Component({
  selector: 'ms-sidebar',
  templateUrl: './sidebar.component.html',
  host: {
    '[class.alain-ms__sidebar]': 'true',
    '[class.alain-ms__sidebar-showproduct]': 'showProduct',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MSSidebarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('categoryEl', { static: false })
  private categoryEl!: ElementRef;

  showProduct = false;
  inited = false;

  get store$(): Observable<Layout.State> {
    return this.layoutStateService.getStore$();
  }

  get shortcuts$(): Observable<MSProduct[]> {
    return this.layoutStateService.getShortcuts$();
  }

  get l(): MSProductI18n {
    return this.srv.i18n;
  }

  q = '';
  searchList?: MSProductCategory[][];
  searchCategories: MSProductCategory[] = [];

  constructor(
    private layoutStateService:LayoutStateService,
    private brand: BrandService,
    private srv: MSProductService,
    private cdr: ChangeDetectorRef
  ) {
    brand.setSidebar(true);
  }

  search(scroll: boolean = true): void {
    const res = this.srv.search(this.q);
    this.searchList = res.list;
    this.searchCategories = res.categories;

    this.cdr.detectChanges();

    if (scroll) {
      // wait angular render
      setTimeout(() => {
        // 滚动至顶部
        this.categoryEl.nativeElement.scrollTop = 0;
      });
    }
  }

  ngAfterViewInit(): void {
    this.srv.getData().subscribe((x) => {
      this.inited = true;
      this.search();
    });
  }

  ngOnDestroy(): void {
    this.brand.setSidebar(false);
  }
}
