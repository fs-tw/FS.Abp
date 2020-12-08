import { noop, SubscriptionService } from '@abp/ng.core';
import { collapse, ToasterService } from '@abp/ng.theme.shared';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, finalize, skip, take } from 'rxjs/operators';
import { Layout } from '../../models/layout';
import { LayoutStateService } from '../../services';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'abp-lepton-settings',
  templateUrl: './settings.component.html',
  animations: [collapse],
})
export class SettingsComponent implements OnInit, AfterViewInit {
  placements = { Left: Layout.MenuPlacement.Left, Top: Layout.MenuPlacement.Top };

  statuses = {
    AlwaysOpened: Layout.MenuStatus.AlwaysOpened,
    OpenOnHover: Layout.MenuStatus.OpenOnHover,
  };

  boxedLayout: boolean = false;

  loading: boolean;

  viewInitialized: boolean = false;

  form: FormGroup;

  get isSmallScreen(): boolean {
    return window.innerWidth < 992;
  }

  constructor(
    private toaster: ToasterService,
    private router: Router,
    private subscription: SubscriptionService,
    private layoutStateService: LayoutStateService,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      style: [],
      menuPlacement: [],
      menuStatus: [],
      boxedLayout: [],
    });
  }

  ngOnInit(): void {
    this.layoutStateService.fetchThemeSettings();

    this.subscription.addOne(
      this.layoutStateService.getThemeSettings$().pipe(filter(Boolean)),
      ({ boxedLayout, menuPlacement, menuStatus, style }: Layout.ThemeSettings) => {
        this.form.patchValue({
          menuPlacement,
          boxedLayout,
          style: style || 0,
          menuStatus: !menuStatus && menuStatus !== 0 ? Layout.MenuStatus.AlwaysOpened : menuStatus,
        });
      },
    );
  }

  ngAfterViewInit() {
    setTimeout(() => (this.viewInitialized = true), 0);
  }

  save() {
    this.loading = true;
    this.layoutStateService.updateThemeSettings(this.form.value);
    this.layoutStateService
      .getThemeSettings$()
      .pipe(
        skip(1),
        take(1),
        finalize(() => (this.loading = false)),
      )
      .subscribe(async () => {
        const { shouldReuseRoute } = this.router.routeReuseStrategy;

        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.navigated = false;

        await this.router.navigateByUrl(this.router.url).catch(noop);
        this.router.routeReuseStrategy.shouldReuseRoute = shouldReuseRoute;

        setTimeout(() => {
          this.toaster.success('LeptonThemeManagement::SuccessfullySaved', null);
        }, 0);
      });
  }
}
