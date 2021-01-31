import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MSTopbarNavLink, MSTopbarService } from '../../services/topbar.service';

@Component({
  selector: 'ms-search',
  templateUrl: './search.component.html',
  host: {
    '[class.alain-ms__topbar-item]': 'true',
    '[class.mr-md]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MSSearchComponent implements OnDestroy {
  @ViewChild('ipt', { static: true }) private ipt!: ElementRef<any>;
  show = false;
  q = '';
  search$ = new Subject<string>();
  list: any[] = [];

  get l(): MSTopbarNavLink {
    return this.srv.getNav('search');
  }

  constructor(http: _HttpClient, private srv: MSTopbarService, private cdr: ChangeDetectorRef) {
    this.search$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((q: string) => http.get('/user', { no: q, pi: 1, ps: 5 })),
      )
      .subscribe((res: any) => {
        this.list = res.list;
        this.cdr.detectChanges();
      });
  }

  @HostListener('click')
  _click(): void {
    this.ipt.nativeElement.focus();
    this.show = true;
  }

  ngOnDestroy(): void {
    this.search$.unsubscribe();
  }
}
