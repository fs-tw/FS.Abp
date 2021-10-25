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
  MENUS_CREATE_FORM_PROPS,
  MENUS_EDIT_FORM_PROPS,
  MENUS_ENTITY_ACTIONS,
  MENUS_ENTITY_PROPS,
  MENUS_TOOLBAR_ACTIONS,
} from './defaults/index';

@Component({
  selector: 'fs-tw-menus',
  templateUrl: './menus.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: MenusComponent.NAME,
    },
  ],
})
export class MenusComponent implements OnInit {
  public static NAME: string = 'Menus.MenusComponent';
  subs: Subscription = new Subscription();
  service: Volo.CmsKit.Admin.Menus.MenuItemAdminService;

  createModalVisible = false;
  createSubItemModalVisible = false;
  addForm: FormGroup;

  editModalVisible = false;
  editForm: FormGroup;
  editSelectedRecord: Volo.CmsKit.Admin.Blogs.BlogDto;

  treeData: Volo.CmsKit.Menus.MenuItemDto[];
  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    private confirmationService: ConfirmationService
  ) {
    const name = injector.get(EXTENSIONS_IDENTIFIER);
    this.subs.add(
      setDefaults(injector, MenusComponent.NAME, {
        entityAction:  MENUS_ENTITY_ACTIONS,
        toolbarActions:  MENUS_TOOLBAR_ACTIONS,
        entityProps:  MENUS_ENTITY_PROPS,
        createFormProps:  MENUS_CREATE_FORM_PROPS,
        editFormProps:  MENUS_EDIT_FORM_PROPS,
      }).subscribe((x) => {
        switch (x.method) {
            case 'Create':
                this.onAdd();
                break;
            case 'Edit':
                this.onEdit(x.data.record.id);
                break;
            case 'Delete':
                this.delete(x.data.record.id, x.data.record.displayName);
                break;
        }
      })
    );

    this.service = this.injector.get(Volo.CmsKit.Admin.Menus.MenuItemAdminService);
  }

  ngOnInit(): void {
    this.hookToQuery();
  }

  hookToQuery = () => {
    const StreamCreator = () => {
      return this.service.getList();
    };

    this.list.hookToQuery(StreamCreator).subscribe((res) => {
      this.treeData = res.items;
    });
  };

  onAdd() {
    const data = new FormPropData(
      this.injector,
      {} as Volo.CmsKit.Admin.Menus.MenuItemCreateInput
    );
    this.addForm = generateFormFromProps(data);
    this.createModalVisible = true;
  }
  onAddSubItem(id: string) {
    const data = new FormPropData(
      this.injector,
      { parentId: id } as Volo.CmsKit.Admin.Menus.MenuItemCreateInput
    );
    this.addForm = generateFormFromProps(data);
    this.createSubItemModalVisible = true;
  }
  create(formValue) {
    this.service
      .create(formValue)
      .pipe(take(1))
      .subscribe((_) => {
        this.createModalVisible = false;
        this.createSubItemModalVisible = false;
        this.list.get();
      });
  }

  onEdit(id: string) {
    this.service
      .get(id)
      .pipe(take(1))
      .pipe(
        tap((selected) => {
          this.editSelectedRecord = selected;
          const data = new FormPropData(this.injector, selected);
          this.editForm = generateFormFromProps(data);
        })
      )
      .subscribe((x) => {
        this.editModalVisible = true;
      });
  }
  edit(formValue) {
    const request: Volo.CmsKit.Admin.Menus.MenuItemUpdateInput = {
      ...formValue,
    };

    this.service
      .update(this.editSelectedRecord.id, request)
      .pipe(take(1))
      .subscribe((_) => {
        this.editModalVisible = false;
        this.list.get();
      });
  }

  delete(id: string, displayName: string) {
    this.confirmationService
      .warn('CmsKit::MenuDeletionConfirmationMessage', 'CmsKit::AreYouSure', {
        messageLocalizationParams: [displayName],
      })
      .pipe(
        filter((status) => status === Confirmation.Status.confirm),
        switchMap((_) => this.service.delete(id)),
        take(1)
      )
      .subscribe((_) => {
        this.list.get();
      });
  }
}
