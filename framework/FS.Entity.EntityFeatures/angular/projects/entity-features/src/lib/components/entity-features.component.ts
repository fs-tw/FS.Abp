import { Component, OnInit } from '@angular/core';
import { EntityFeaturesService } from '../services/entity-features.service';

@Component({
  selector: 'lib-entity-features',
  template: ` <p>entity-features works!</p> `,
  styles: [],
})
export class EntityFeaturesComponent implements OnInit {
  constructor(private service: EntityFeaturesService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
