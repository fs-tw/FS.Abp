import { Component, OnInit } from '@angular/core';
import { FormManagementService } from '../services/form-management.service';

@Component({
  selector: 'lib-form-management',
  template: ` <p>form-management works!</p> `,
  styles: [],
})
export class FormManagementComponent implements OnInit {
  constructor(private service: FormManagementService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
