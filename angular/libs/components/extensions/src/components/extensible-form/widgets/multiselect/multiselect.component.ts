import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget.component';

@Component({
  templateUrl: './multiselect.component.html',
  styles: [
  ]
})
export class MultiselectComponent extends WidgetComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
   }

  ngOnInit(): void {
  }

}
