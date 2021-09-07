import { Component, OnInit } from '@angular/core';
import { CodingManagementService } from '../services/coding-management.service';

@Component({
  selector: 'lib-coding-management',
  template: ` <p>coding-management works!</p> `,
  styles: [],
})
export class CodingManagementComponent implements OnInit {
  constructor(private service: CodingManagementService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
