import { Component, Injector, OnInit } from '@angular/core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { ListService } from '@abp/ng.core';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { FormControl, FormGroup } from '@angular/forms';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { filter, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { forkJoin, of, Subscription } from 'rxjs';
import {
  setDefaults,
} from '@fs-tw/theme-alain/extensions';
import {
  RATINGS_CREATE_FORM_PROPS,
  RATINGS_EDIT_FORM_PROPS,
  RATINGS_ENTITY_ACTIONS,
  RATINGS_ENTITY_PROPS,
  RATINGS_TOOLBAR_ACTIONS,
} from './defaults/index';

@Component({
  selector: 'fs-tw-ratings',
  templateUrl: './ratings.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: RatingsComponent.NAME,
    },
  ],
})
export class RatingsComponent implements OnInit {
  public static NAME: string = 'Ratings.RatingsComponent';
  subs: Subscription = new Subscription();

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    private confirmationService: ConfirmationService
  ) {
    const name = injector.get(EXTENSIONS_IDENTIFIER);
    this.subs.add(
      setDefaults(injector, RatingsComponent.NAME, {
        entityAction: RATINGS_ENTITY_ACTIONS,
        toolbarActions: RATINGS_TOOLBAR_ACTIONS,
        entityProps: RATINGS_ENTITY_PROPS,
        createFormProps: RATINGS_CREATE_FORM_PROPS,
        editFormProps: RATINGS_EDIT_FORM_PROPS,
      }).subscribe((x) => {
        switch (x.method) {
          case 'Create':
            break;
          case 'Edit':
            break;
          case 'Delete':
            break;
        }
      })
    );
  }

  ngOnInit(): void {}
}
