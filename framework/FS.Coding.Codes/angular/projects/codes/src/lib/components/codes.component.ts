import { Component, OnInit } from '@angular/core';
import { CodesService } from '../services/codes.service';

@Component({
  selector: 'lib-codes',
  template: ` <p>codes works!</p> `,
  styles: [],
})
export class CodesComponent implements OnInit {
  constructor(private service: CodesService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
