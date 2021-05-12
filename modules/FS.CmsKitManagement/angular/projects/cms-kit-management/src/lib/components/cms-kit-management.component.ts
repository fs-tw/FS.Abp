import { Component, OnInit } from '@angular/core';
import { CmsKitManagementService } from '../services/cms-kit-management.service';

@Component({
  selector: 'lib-cms-kit-management',
  template: ` <p>cms-kit-management works!</p> `,
  styles: [],
})
export class CmsKitManagementComponent implements OnInit {
  constructor(private service: CmsKitManagementService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
