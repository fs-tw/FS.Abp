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
  REACTIONS_CREATE_FORM_PROPS,
  REACTIONS_EDIT_FORM_PROPS,
  REACTIONS_ENTITY_ACTIONS,
  REACTIONS_ENTITY_PROPS,
  REACTIONS_TOOLBAR_ACTIONS,
} from './defaults/index';

@Component({
  selector: 'fs-tw-reactions',
  templateUrl: './reactions.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: ReactionsComponent.NAME,
    },
  ],
})
export class ReactionsComponent implements OnInit {
  public static NAME: string = 'Reactions.ReactionsComponent';
  subs: Subscription = new Subscription();

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    private confirmationService: ConfirmationService
  ) {
    const name = injector.get(EXTENSIONS_IDENTIFIER);
    this.subs.add(
      setDefaults(injector, ReactionsComponent.NAME, {
        entityAction: REACTIONS_ENTITY_ACTIONS,
        toolbarActions: REACTIONS_TOOLBAR_ACTIONS,
        entityProps: REACTIONS_ENTITY_PROPS,
        createFormProps: REACTIONS_CREATE_FORM_PROPS,
        editFormProps: REACTIONS_EDIT_FORM_PROPS,
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
