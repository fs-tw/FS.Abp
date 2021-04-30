import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { _HttpClient } from '@delon/theme';

import {
  MSTopbarNavLink,
  MSTopbarService,
} from '../../services/topbar.service';
import { EnvironmentService ,ConfigStateService} from '@abp/ng.core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-topbar',
  templateUrl: './topbar.component.html',
  host: {
    '[class.alain-ms__topbar]': 'true',
    '[class.alain-ms__topbar-single]': 'allNav',
  },
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MSTopbarComponent implements OnInit {
  get appInfo(): Observable<any> {
    return this.environment.getEnvironment$();
  }
  inited = false;

  links!: MSTopbarNavLink[];

  @Input() allNav = false;
  userSrv: any;
  constructor(
    private srv: MSTopbarService,
    //  public userSrv: UserService,
    private cdr: ChangeDetectorRef,
    private environment: EnvironmentService,
    public configService:ConfigStateService
  ) { }

  ngOnInit(): void {
    this.srv.getData().subscribe(() => {
      this.inited = true;
      this.mergeLinks();
      this.cdr.detectChanges();
    });
  }

  private mergeLinks(): void {
    const res = this.srv.data.navLinks!;
    this.links = [res.finance, res.workorder, res.support].map((i) => {
      if (i.className == null) {
        i.className = '';
      }
      if (!i.links || i.links.length === 0) {
        i.links = undefined;
      } else {
        i.className += ' alain-ms__topbar-dd';
      }
      return i;
    });
  }
}
