import { Component, Inject, OnInit } from '@angular/core';
import { Fs } from '@fs-tw/abp/audit-logging/proxy/audit-logging';
import { Observable } from 'rxjs';

@Component({
  selector: 'fs-tw-main-page',
  templateUrl: './main-page.component.html',
  styles: [],
})
export class MainPageComponent implements OnInit {
  constructor(
    @Inject(Fs.Abp.AuditLogging.AuditLoggingService)
    private service: Fs.Abp.AuditLogging.AuditLoggingService
  ) {}

  Selected$: Observable<Fs.Abp.AuditLogging.Dtos.AuditLogDto>;

  selectedId(arg) {
    this.Selected$ = this.service.get(arg);
  }

  ngOnInit() {}
}
