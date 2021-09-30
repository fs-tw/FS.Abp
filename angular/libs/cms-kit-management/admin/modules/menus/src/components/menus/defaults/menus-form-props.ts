import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';

export const MENUS_CREATE_FORM_PROPS = FormProp.createMany<Volo.CmsKit.Menus.MenuItemDto>([
  {
    type: ePropType.String,
    name: 'parentId',
    id:'parentId',
    displayName: 'CmsKit::ParentId'
  },
  {
    type: ePropType.String,
    name: 'displayName',
    id:'displayName',
    displayName: 'CmsKit::DisplayName',
    validators: () => [Validators.required],
  },,
  {
    type: ePropType.Boolean,
    name: 'isActive',
    id:'isActive',
    displayName: 'CmsKit::IsActive',
    defaultValue: false
  },
  {
    type: ePropType.String,
    name: 'url',
    id:'url',
    displayName: 'CmsKit::Url'
  },
  {
    type: ePropType.String,
    name: 'icon',
    id:'icon',
    displayName: 'CmsKit::Icon'
  },
  {
    type: ePropType.Number,
    name: 'order',
    id:'order',
    displayName: 'CmsKit::Order',
    validators: () => [Validators.required],
  },
  {
    type: ePropType.String,
    name: 'target',
    id:'target',
    displayName: 'CmsKit::Target'
  },
  {
    type: ePropType.String,
    name: 'elementId',
    id:'elementId',
    displayName: 'CmsKit::ElementId'
  },
  {
    type: ePropType.String,
    name: 'cssClass',
    id:'cssClass',
    displayName: 'CmsKit::CssClass'
  },
  {
    type: ePropType.String,
    name: 'pageId',
    id:'pageId',
    displayName: 'CmsKit::PageId'
  }
]);

export const MENUS_EDIT_FORM_PROPS = MENUS_CREATE_FORM_PROPS;