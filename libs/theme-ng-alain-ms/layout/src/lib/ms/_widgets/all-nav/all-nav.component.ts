import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy,
  Inject,
  HostListener,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil, auditTime } from 'rxjs/operators';

import { BrandService } from '@fs/theme.ng-alain-ms/shared';
import { MSAllNavService, MSAllNavData, MSAllNav } from './all-nav.service';

const ANT_TIMEOUT = 150;

/**
 * 顶部所有菜单组件，当单页布局模式时渲染
 */
@Component({
  selector: 'ms-all-nav',
  templateUrl: './all-nav.component.html',
  host: {
    '[class.alain-ms__an-active]': 'validOpen',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MSAllNavComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  @ViewChild('dropdown', { static: true })
  private dropdownEl: ElementRef;
  private loading = false;

  $mouse = new Subject<{ i: MSAllNav; status: boolean }>();
  open = false;
  data: MSAllNavData;

  get allL2() {
    return this.srv.allL2;
  }

  get allPanel() {
    return this.srv.allPanel;
  }

  get validOpen() {
    return this.data && this.open;
  }

  constructor(
    private srv: MSAllNavService,
    private brandSrv: BrandService,
    private cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private doc: any,
  ) {}

  private handleOpen(status: boolean) {
    this.doc.body.classList[status ? 'add' : 'remove']('alain-ms__an-body');
    this.open = status;
    this.cdr.markForCheck();
    this.updateHeight().load();
  }

  private load() {
    if (this.loading || this.data) {
      return;
    }
    this.loading = true;
    this.srv.getData().subscribe(res => {
      this.data = res;
      this.cdr.markForCheck();
    });
  }

  private updateHeight(): this {
    const height = window.innerHeight - this.brandSrv.topHeight;
    (this.dropdownEl.nativeElement as HTMLElement).style.height = `${height}px`;
    return this;
  }

  @HostListener('mouseenter')
  _enter() {
    if (!this.validOpen) {
      this.handleOpen(true);
    }
  }

  @HostListener('mouseleave')
  _leave() {
    this.handleOpen(false);
  }

  mouseHandle(i: MSAllNav, status: boolean) {
    this.$mouse.next({ i, status });
  }

  private handleMouse(i: MSAllNav): void {
    this.srv.refreshActive(i);
    this.cdr.detectChanges();
  }

  ngOnInit() {
    // this._enter();
    const { $mouse, unsubscribe$ } = this;
    $mouse
      .asObservable()
      .pipe(
        takeUntil(unsubscribe$),
        auditTime(ANT_TIMEOUT),
      )
      .subscribe(res => this.handleMouse(res.i));
  }

  ngOnDestroy() {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
