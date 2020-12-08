import { AbstractNgModelComponent } from '@abp/ng.core';
import { ChangeDetectionStrategy, Component, forwardRef, Input, TrackByFunction, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export type PicklistDataType<T = { [key: string]: any }> = Array<T & { left: boolean }>;

@Component({
  selector: 'abp-picklist',
  templateUrl: './picklist.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PicklistComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PicklistComponent extends AbstractNgModelComponent<PicklistDataType> {
  @Input()
  leftListTitle: string = '';

  @Input()
  rightListTitle: string = '';

  @Input()
  trackByProp: string = 'id';

  @Input()
  bindLabel: string = 'displayName';

  constructor(public injector: Injector) {
    super(injector);
  }

  trackByFn(): TrackByFunction<any> {
    return (index: number, item: any) => (item as any)[this.trackByProp] || index;
  }

  transferItem(label: string) {
    const index = this.value.findIndex(val => val[this.bindLabel] === label);
    this.value = [
      ...this.value.slice(0, index),
      { ...this.value[index], left: !this.value[index].left },
      ...this.value.slice(index + 1),
    ];
  }
}
