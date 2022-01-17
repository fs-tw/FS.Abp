import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'lib-settings',
  template: ` <p>settings works!</p> `,
  styles: [],
})
export class SettingsComponent implements OnInit {
  constructor(private service: SettingsService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
