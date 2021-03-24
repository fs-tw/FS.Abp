import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'fs-main',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  datas:any=[];
  blog_class:any=[];

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  



  goToHome(){
    this.router.navigate(['/']);
  }
  goToList(){
    this.router.navigate(['/announcement/list']);
  }

}
