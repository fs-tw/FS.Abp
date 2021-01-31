import {
  ListService,
  ConfigStateService
} from '@abp/ng.core';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
  Input,
  LOCALE_ID,
  TemplateRef
} from '@angular/core';
import { ExtensibleTableComponent as AbpExtensibleTableComponent} from '@abp/ng.theme.shared/extensions'
const DEFAULT_ACTIONS_COLUMN_WIDTH = 75;

@Component({
  exportAs: 'nzExtensibleTable',
  selector: 'nz-extensible-table',
  templateUrl: './extensible-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExtensibleTableComponent<R = any> extends AbpExtensibleTableComponent<R> {
  protected _actionsText: string;
  @Input()
  set actionsText(value: string) {
    this._actionsText = value;
  }
  get actionsText(): string {
    return this._actionsText ?? (this.actionList.length > 1 ? 'AbpUi::Actions' : '');
  }

  @Input() data: R[];
  @Input() list: ListService;
  @Input() recordsTotal: number;
  @Input() set actionsColumnWidth(width: number) {
    this._setColumnWidths(width ? Number(width) : undefined);
  }
  @Input() actionsTemplate: TemplateRef<any>;

  constructor(
    @Inject(LOCALE_ID) private _locale: string,
    private _config: ConfigStateService,
    _injector: Injector,
  ) {
    super(_locale,_config,_injector);
    this._setColumnWidths(DEFAULT_ACTIONS_COLUMN_WIDTH);
  }

  private _setColumnWidths(actionsColumn: number) {
    const widths = [actionsColumn];
    this.propList.forEach(({ value: prop }) => {
      widths.push(prop.columnWidth);
    });
    (this.columnWidths as any) = widths;
  }
}
