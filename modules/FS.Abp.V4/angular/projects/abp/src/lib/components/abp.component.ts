import { Component, OnInit } from '@angular/core';
import { AbpService } from '../services/abp.service';

@Component({
  selector: 'lib-abp',
  template: ` <p>abp works!</p> `,
  styles: [],
})
export class AbpComponent implements OnInit {
  constructor(private service: AbpService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
