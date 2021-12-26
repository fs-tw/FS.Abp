import { Component, OnInit } from '@angular/core';
import { AuditLoggingService } from '../services/audit-logging.service';

@Component({
  selector: 'lib-audit-logging',
  template: ` <p>audit-logging works!</p> `,
  styles: [],
})
export class AuditLoggingComponent implements OnInit {
  constructor(private service: AuditLoggingService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
