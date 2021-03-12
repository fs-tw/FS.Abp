import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  removeShow(){
    document.getElementById('navBar').classList.remove("show");
    document.getElementById('modalIcon').classList.remove("is-active");
  }
}
