import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'fs-main',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(){

  }

  goToHome(){
    this.router.navigate(['/']);
  }

}
