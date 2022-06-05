import { Component, OnInit } from '@angular/core';
import { PrinterService } from '../services/printer.service';

@Component({
  selector: 'lib-printer',
  template: ` <p>printer works!</p> `,
  styles: [],
})
export class PrinterComponent implements OnInit {
  constructor(private service: PrinterService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
