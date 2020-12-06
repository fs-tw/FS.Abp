import { ConfigStateService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'fs-header',
  templateUrl: './header.component.html',
  //styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private configStateService: ConfigStateService,
  ) {

  }

}
