import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fs-view-form',
  templateUrl: 'view-form.component.html',
})
export class ViewFormComponent implements OnInit {
    formId: string = null;

    constructor(
        private route: ActivatedRoute
    ) {
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.get('id')) return null;
            this.formId = paramMap.get('id');
        });
    }

    ngOnInit() {}
}