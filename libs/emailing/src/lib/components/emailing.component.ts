import { Component, OnInit } from '@angular/core';
import { EmailingService } from '../services/emailing.service';

@Component({
  selector: 'lib-emailing',
  template: ` <p>emailing works!</p> `,
  styles: [],
})
export class EmailingComponent implements OnInit {
  constructor(private service: EmailingService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
