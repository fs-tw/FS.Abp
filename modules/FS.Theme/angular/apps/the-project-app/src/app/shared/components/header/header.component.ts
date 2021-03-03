import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT,Location } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'fs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private document,
  private router: Router,
  private location:Location) { }

  ngOnInit(): void {
  }

  scrollToElement(element): void {
    
    var item = this.document.getElementById(element);
    if(item)
      item.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
      else{
        this.router.navigate(['/']);
      }
  }

}
