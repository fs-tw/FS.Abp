import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fs-the-project-empty-layout',
  template: `
  <router-outlet></router-outlet>
  <abp-confirmation></abp-confirmation>
  <abp-toast-container right="30px" bottom="30px"></abp-toast-container>
`,
})
export class EmptyLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
