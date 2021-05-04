
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private router: Router, private route: ActivatedRoute) {
    router.events.subscribe((event: any) => {

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.route.queryParams.subscribe(x => {
          if (x['scroll']) {
            let el = document.getElementById(x['scroll']);
            if(el)
              el.scrollIntoView();
          }
      });
      }
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
