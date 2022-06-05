import { Component, OnInit } from '@angular/core';
import { CodingService } from '../services/coding.service';

@Component({
  selector: 'lib-coding',
  template: ` <p>coding works!</p> `,
  styles: [],
})
export class CodingComponent implements OnInit {
  constructor(private service: CodingService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
