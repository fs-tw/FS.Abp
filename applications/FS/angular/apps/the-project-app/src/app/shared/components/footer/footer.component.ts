import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email:any = {};
  constructor(
    // private emailService:EmailingService
    ) { }

  ngOnInit(): void {


  }
  sendMail(){
    // this.emailService.sendSimpleEmail(this.email).subscribe(x=>{
    //   alert('信件已順利寄出');
    //   this.email = {};
    // });
  }

}
