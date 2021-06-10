import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  HostBinding,
  Inject,
  Injector,
  Input,
  OnDestroy,
  ViewContainerRef,
} from '@angular/core';
import {
  ColumnMode,
  DatatableComponent,
  ScrollerComponent,
} from '@swimlane/ngx-datatable';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { PageHeaderComponent } from '@delon/abc/page-header';
import { PageHeaderDefaultComponent } from './page-header-default.component';

@Directive({
  // tslint:disable-next-line
  selector: 'page-header[default]',
  exportAs: 'pageHeaderDefault',
})
export class PageHeaderDefaultDirective implements AfterViewInit, OnDestroy {
  subscription: Subscription = new Subscription();
  private static componentRef: ComponentRef<PageHeaderDefaultComponent> = null;

  constructor(
    public readonly cdr: ChangeDetectorRef,
    private injector: Injector,
    private pageHeader: PageHeaderComponent
  ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngAfterViewInit(): void {
    const resolver = this.injector.get(ComponentFactoryResolver);
    const vcr = this.injector.get(ViewContainerRef);
    const componentRef = getComponentRef();

    this.subscription.add(
      componentRef.instance.ready$.pipe(filter((x) => x)).subscribe((x) => {
        if (!this.pageHeader.breadcrumb)
          this.pageHeader.breadcrumb = componentRef.instance.breadcrumb;

        if (!this.pageHeader.action)
          this.pageHeader.action = componentRef.instance.action;

        this.pageHeader.refresh();
      })
    );

    function getComponentRef() {
      //if (!PageHeaderDefaultDirective.componentRef) {
      const factory = resolver.resolveComponentFactory(
        PageHeaderDefaultComponent
      );
      PageHeaderDefaultDirective.componentRef = vcr.createComponent(factory);
      //}
      return PageHeaderDefaultDirective.componentRef;
    }
  }
}
