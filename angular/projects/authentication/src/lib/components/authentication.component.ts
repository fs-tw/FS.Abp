import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'lib-authentication',
  template: ` <p>authentication works!</p> `,
  styles: [],
})
export class AuthenticationComponent implements OnInit {
  constructor(private service: AuthenticationService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
