import {
  Component,
  Input,
  ChangeDetectionStrategy,
  TemplateRef,
  OnDestroy,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, merge } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Menu, MenuService } from '@delon/theme';
import { InputBoolean } from '@delon/util';

import { BrandService } from '../../ms.service';

@Component({
  selector: 'page-bar',
  templateUrl: './page-bar.component.html',
  host: {
    '[class.ms-page-bar]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MSPageBarComponent implements AfterViewInit, OnDestroy {
  private router$: Subscription;
  private _menus: Menu[];
  private get menus() {
    if (this._menus) {
      return this._menus;
    }
    this._menus = this.menuSrv.getPathByUrl(this.router.url.split('?')[0], this.recursiveBreadcrumb);

    return this._menus;
  }

  // #region fields

  /**
   * 自动生成标题，以当前路由从主菜单中定位
   */
  @Input() @InputBoolean() autoTitle = true;
  @Input() @InputBoolean() recursiveBreadcrumb = true;
  @Input() title: string | TemplateRef<any>;
  @Input() subTitle: string | TemplateRef<any>;

  // #endregion

  constructor(
    private router: Router,
    private srv: BrandService,
    private menuSrv: MenuService,
    private cdr: ChangeDetectorRef,
  ) {}

  private setTitle() {
    if (typeof this.title === 'undefined' && this.autoTitle && this.menus.length > 0) {
      const item = this.menus[this.menus.length - 1];
      this.title = item.text;
    }

    this.cdr.detectChanges();
  }

  ngAfterViewInit() {
    this.router$ = merge(
      this.router.events.pipe(filter(e => e instanceof NavigationEnd)),
      this.srv.notify,
      this.menuSrv.change,
    ).subscribe(() => {
      this._menus = null;
      this.setTitle();
    });
  }

  ngOnDestroy() {
    this.router$.unsubscribe();
  }
}
