import { noop, SubscriptionService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { ToasterService } from '@abp/ng.theme.shared';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, finalize, skip, take } from 'rxjs/operators';
import { LayoutStateService } from '../../service/layout-state.service';
import { Layout } from '../../models/layout';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less'],
})
export class SettingsComponent implements OnInit {
  loading: boolean;

  form: FormGroup;

  currentThemeSettings: Layout.ThemeSettings;

  constructor(
    private toaster: ToasterService,
    private router: Router,
    private subscription: SubscriptionService,
    private layoutStateService: LayoutStateService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      skin: [],
    });
  }
  ngOnInit(): void {
    this.layoutStateService.fetchThemeSettings();
    this.subscription.addOne(
      this.layoutStateService.getThemeSettings$().pipe(filter(Boolean)),
      (x: Layout.ThemeSettings) => {
        this.currentThemeSettings = x;
        this.form.patchValue({
          skin: x.skin,
        });
      }
    );
  }

  save() {
    if (this.currentThemeSettings.skin === this.form.value.skin) return;
    this.loading = true;
    this.layoutStateService.updateThemeSettings(this.form.value);
    this.layoutStateService
      .getThemeSettings$()
      .pipe(
        skip(1),
        take(1),
        finalize(() => (this.loading = false))
      )
      .subscribe(async () => {
        const { shouldReuseRoute } = this.router.routeReuseStrategy;

        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.navigated = false;

        await this.router.navigateByUrl(this.router.url).catch(noop);
        this.router.routeReuseStrategy.shouldReuseRoute = shouldReuseRoute;

        setTimeout(() => {
          this.toaster.success(
            'LeptonThemeManagement::SuccessfullySaved',
            null
          );
        }, 0);
      });
  }
}
