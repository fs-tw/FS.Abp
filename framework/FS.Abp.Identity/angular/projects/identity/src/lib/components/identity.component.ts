import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../services/identity.service';

@Component({
  selector: 'lib-identity',
  template: ` <p>identity works!</p> `,
  styles: [],
})
export class IdentityComponent implements OnInit {
  constructor(private service: IdentityService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
