import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MSRegionItem, MSRegionService } from './region.service';

@Component({
  selector: 'ms-region',
  templateUrl: './region.component.html',
  host: {
    '[class.alain-ms__topbar-item]': 'true',
    '[class.alain-ms__topbar-dd]': 'true',
    '[class.alain-ms__region]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MSRegionComponent implements OnInit {
  inited = false;

  constructor(public srv: MSRegionService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.srv.getData().subscribe(() => {
      this.inited = true;
      this.cdr.detectChanges();
    });
  }

  selected(item: MSRegionItem): void {
    this.srv.setSelected(item);
    this.cdr.detectChanges();
  }
}
