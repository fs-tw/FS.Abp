import { Component, OnInit } from '@angular/core';
import { MultiLingualsService } from '../services/multi-linguals.service';

@Component({
  selector: 'lib-multi-linguals',
  template: ` <p>multi-linguals works!</p> `,
  styles: [],
})
export class MultiLingualsComponent implements OnInit {
  constructor(private service: MultiLingualsService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
