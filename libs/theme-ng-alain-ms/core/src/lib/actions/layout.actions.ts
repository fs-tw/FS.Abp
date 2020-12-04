import { Layout, } from '../models/layout';
import { MSProduct, } from '@fs/theme.ng-alain-ms/layout';
import { MSMenu } from '@fs/theme.ng-alain-ms/shared';

export class SetShortcuts {
  static readonly type = '[NgAlainMsLayout] Set Shortcuts';
  constructor(public shortcuts: MSProduct[]) { }
}
export class SetNavList {
  static readonly type = '[NgAlainMsLayout] Set NavList';
  constructor(public navList: MSMenu[]) { }
}
export class SetPageConfig {
  static readonly type = '[NgAlainMsLayout] Set PageConfig';
  constructor(public payload: Layout.PageConfig) { }
}
export class UpdateProfile {
  static readonly type = '[NgAlainMsLayout] UpdateProfile';
  constructor(public payload: Layout.Profile) {}
}
export class UpdateProcessor {
  static readonly type = '[NgAlainMsLayout] UpdateProcessor';
  constructor(public payload: Layout.Processor) {}
}
