import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'lib-theme',
  template: ` <p>theme works!</p> `,
  styles: [],
})
export class ThemeComponent implements OnInit {
  constructor(private service: ThemeService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
