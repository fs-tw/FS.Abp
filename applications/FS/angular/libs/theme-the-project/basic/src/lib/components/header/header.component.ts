import { ConfigStateService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
//import { Router, RouterState, ThemeState } from '@fs/theme.core';
//import { ThemeDto } from '@fs/theme.core/proxy';
import { Select } from '@ngxs/store';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
@Component({
  selector: 'fs-the-project-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  favIcon: HTMLLinkElement = document.querySelector('#appIcon');
  //@Select(ThemeState.getTheme)
  //data$: Observable<ThemeDto>;

  //@Select(RouterState.getProfile)
  //profile$: Observable<Router.Profile>;

  currentRoute: string;

  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private configStateService: ConfigStateService,
  ) {
    
  }

  getCurrentUrl() {
  
  }

  ngAfterViewInit() {
    $.getScript('./assets/js/template.js', function () { });
  }

  ngOnDestroy() {

  }
  ngOnInit() {
    // this.data$.subscribe(x => {
    //   if (x.themeSetting) {
    //     this.titleService.setTitle(x.themeSetting.webInfo.title);
    //     this.favIcon.href = this.configStateService.getApiUrl() + x.themeSetting.webInfo.favicon;
    //   }
    // });
  }

}
