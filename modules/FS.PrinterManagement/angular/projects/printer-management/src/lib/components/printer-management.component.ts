import { Component, OnInit } from '@angular/core';
import { PrinterManagementService } from '../services/printer-management.service';

@Component({
  selector: 'lib-printer-management',
  template: ` <p>printer-management works!</p> `,
  styles: [],
})
export class PrinterManagementComponent implements OnInit {
  constructor(private service: PrinterManagementService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
