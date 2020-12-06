import { Component, OnInit, OnDestroy } from '@angular/core';
import { eLayoutType, LocalizationService } from '@abp/ng.core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MSServiceNavConfig, MSMenu } from '@fs/theme.ng-alain-ms/shared';
import { LayoutState,Layout } from '@fs/theme.ng-alain-ms/core';
import { Subject } from 'rxjs';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { BrandService } from '@fs/theme.ng-alain-ms/shared';

@Component({
  selector: 'fs-application-layout',
  templateUrl: './application-layout.component.html'
})
export class ApplicationLayoutComponent implements OnInit, OnDestroy {
  static type = eLayoutType.application;
  @Select(LayoutState.getAll) msLayoutState$: Observable<Layout.State>;
  nav$:Observable<boolean>;
  navList$:Observable<MSMenu[]>;
  navConfig: MSServiceNavConfig = {
    title: '管理',
    doc: ''
  };
  //TODO:Need Review 
  //navConfig$ = this.msLayoutState$.pipe(map(x => { return { ...this.navConfig, ...x.pageConfig } }));
  navConfig$:Observable<any>;

  get hideNav() {
    return this.srv.hideNav;
  }

  constructor(
    private srv: BrandService,
    private locale:LocalizationService
  ) { 
    this.nav$ = this.msLayoutState$.pipe(map(x => x.navList.length > 0));
    this.navList$ = this.msLayoutState$.pipe(map(x => x.navList));
    this.navConfig$= this.msLayoutState$.pipe(mergeMap(x => this.locale.get(x.pageConfig.title).pipe(map(y=> {
      x.pageConfig.title = y;
      return { ...this.navConfig, ...x.pageConfig };
    }))));
  }
  ngOnInit(): void {
    
  }
  private destroy$ = new Subject<void>();
  ngOnDestroy() {
    this.destroy$.next();
  }


}
