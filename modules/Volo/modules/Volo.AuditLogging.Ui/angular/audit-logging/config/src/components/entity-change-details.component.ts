import { TrackByService, uuid } from '@abp/ng.core';
import { collapse } from '@abp/ng.theme.shared';
import { Component, Input } from '@angular/core';
import {
  EntityChangeDto,
  EntityChangeType,
  EntityChangeWithUsernameDto,
  EntityPropertyChangeDto,
} from '@volo/abp.ng.audit-logging';

@Component({
  selector: 'abp-entity-change-details',
  templateUrl: './entity-change-details.component.html',
  animations: [collapse],
})
export class EntityChangeDetailsComponent {
  @Input() set itemWithUserName(item: EntityChangeWithUsernameDto) {
    this.changeType = EntityChangeType[item.entityChange.changeType];
    this.color = this.colors[item.entityChange.changeType];
    this.userName = item.userName;
    this.entityChange = item.entityChange;
  }

  @Input() isCollapsed = false;

  entityChange: EntityChangeDto;

  userName: string;

  changeType: string;

  color: 'success' | 'info' | 'danger';

  private colors = {
    [EntityChangeType.Created]: 'success',
    [EntityChangeType.Updated]: 'info',
    [EntityChangeType.Deleted]: 'danger',
  } as const;

  uuid = uuid();

  constructor(public readonly track: TrackByService<EntityPropertyChangeDto>) {}

  getPropColor(propertyChange: EntityPropertyChangeDto): 'red' | undefined {
    return this.entityChange.changeType === EntityChangeType.Updated &&
      propertyChange.newValue !== propertyChange.originalValue
      ? 'red'
      : undefined;
  }

  getInterpolationParams(changeTime: string): string[] {
    return [this.changeType, changeTime, this.userName];
  }
}
