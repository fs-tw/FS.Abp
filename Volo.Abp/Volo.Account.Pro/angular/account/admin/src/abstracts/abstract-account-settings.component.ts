import { ApplicationConfigurationService, ConfigStateService } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AbstractAccountSettingsService } from './abstract-account-config.service';

@Component({
  template: '',
})
export class AbstractAccountSettingsComponent<Type, SubmitType = Type> implements OnInit {
  @Input() isTenant: boolean;

  settings$: Observable<Type>;

  // tslint:disable-next-line: variable-name
  private _loading: boolean;
  set loading(value: boolean) {
    this._loading = value;
    this.cdr.markForCheck();
  }

  get loading() {
    return this._loading;
  }

  constructor(
    protected service: AbstractAccountSettingsService<Type, SubmitType>,
    protected toaster: ToasterService,
    protected cdr: ChangeDetectorRef,
    protected store: Store,
    private configState: ConfigStateService,
    private appConfigService: ApplicationConfigurationService,
  ) {}

  ngOnInit() {
    this.settings$ = this.service.getSettings();
  }

  submit(newSettings: Partial<SubmitType>) {
    this.loading = true;
    this.service
      .updateSettings(this.isTenant ? this.mapTenantSettingsForSubmit(newSettings) : newSettings)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(() => {
        this.toaster.success('AbpSettingManagement::SuccessfullySaved', null);
        this.appConfigService.getConfiguration().subscribe(res => this.configState.setState(res));
      });
  }

  /**
   * should be overriden by children components
   * if it is not overridden,
   * it means that there is no difference between host and tenant for the particular child
   */
  mapTenantSettingsForSubmit(newSettings: Partial<SubmitType>) {
    return newSettings;
  }
}
