import { Component, OnInit } from '@angular/core';
import { EntityTypesService } from '../services/entity-types.service';

@Component({
  selector: 'lib-entity-types',
  template: ` <p>entity-types works!</p> `,
  styles: [],
})
export class EntityTypesComponent implements OnInit {
  constructor(private service: EntityTypesService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
