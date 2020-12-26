import { AbpApplicationConfigurationService, ConfigStateService } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component, OnInit, Injector, ChangeDetectorRef } from '@angular/core';
import { Fs } from '@fs/emailing/proxy';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'lib-emailing-settings',
  templateUrl: './emailing-settings.component.html'
})
export class EmailingSettingsComponent implements OnInit {

  service: Fs.Abp.Emailing.EmailingApiService;
  settings$: Observable<Fs.Abp.Emailing.Dtos.EmailSettingsDto>;

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
    protected injector: Injector,
    protected cdr: ChangeDetectorRef,
    protected toaster: ToasterService,
    private configState: ConfigStateService,
    private appConfigService: AbpApplicationConfigurationService,
  ) {
    this.service = this.injector.get(Fs.Abp.Emailing.EmailingApiService);
    this.settings$=this.service.getByEmailSettingsGet({});
  }

  ngOnInit(): void {
  }
  submit(newSettings: any) {
    this.loading = true;
    this.service
      .updateByEmailSettingsAndProviderNameAndProviderKey(newSettings)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(() => {
        this.toaster.success('AbpSettingManagement::SuccessfullySaved', null);
        this.appConfigService.get().subscribe(res => this.configState.setState(res));
      });
  }
}
