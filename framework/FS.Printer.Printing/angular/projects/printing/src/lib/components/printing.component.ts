import { Component, OnInit } from '@angular/core';
import { PrintingService } from '../services/printing.service';

@Component({
  selector: 'lib-printing',
  template: ` <p>printing works!</p> `,
  styles: [],
})
export class PrintingComponent implements OnInit {
  constructor(private service: PrintingService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
