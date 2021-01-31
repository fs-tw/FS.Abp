import { Component, OnInit } from '@angular/core';
import { LineNotifyService } from '../services/line-notify.service';

@Component({
  selector: 'lib-line-notify',
  template: ` <p>line-notify works!</p> `,
  styles: [],
})
export class LineNotifyComponent implements OnInit {
  constructor(private service: LineNotifyService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
