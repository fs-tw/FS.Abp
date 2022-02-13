import { Component, OnInit } from '@angular/core';
import { EntityDefaultsService } from '../services/entity-defaults.service';

@Component({
  selector: 'lib-entity-defaults',
  template: ` <p>entity-defaults works!</p> `,
  styles: [],
})
export class EntityDefaultsComponent implements OnInit {
  constructor(private service: EntityDefaultsService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
