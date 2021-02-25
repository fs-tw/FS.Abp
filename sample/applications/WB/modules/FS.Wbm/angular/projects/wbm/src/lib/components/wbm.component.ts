import { Component, OnInit } from '@angular/core';
import { WbmService } from '../services/wbm.service';

@Component({
  selector: 'lib-wbm',
  template: ` <p>wbm works!</p> `,
  styles: [],
})
export class WbmComponent implements OnInit {
  constructor(private service: WbmService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
