import { Component, OnInit } from '@angular/core';
import { MetadataService } from '../services/metadata.service';

@Component({
  selector: 'lib-metadata',
  template: ` <p>metadata works!</p> `,
  styles: [],
})
export class MetadataComponent implements OnInit {
  constructor(private service: MetadataService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
