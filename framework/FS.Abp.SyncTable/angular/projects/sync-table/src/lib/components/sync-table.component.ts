import { Component, OnInit } from '@angular/core';
import { SyncTableService } from '../services/sync-table.service';

@Component({
  selector: 'lib-sync-table',
  template: ` <p>sync-table works!</p> `,
  styles: [],
})
export class SyncTableComponent implements OnInit {
  constructor(private service: SyncTableService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
