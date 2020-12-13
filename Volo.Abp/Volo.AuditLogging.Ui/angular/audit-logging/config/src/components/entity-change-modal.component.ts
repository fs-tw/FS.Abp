import { TrackByService } from '@abp/ng.core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { EntityChangeWithUsernameDto } from '@volo/abp.ng.audit-logging';

@Component({
  selector: 'abp-entity-change-modal',
  templateUrl: './entity-change-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityChangeModalComponent {
  history: EntityChangeWithUsernameDto[] = [];

  entityId: string;

  entityTypeFullName: string;

  visible = false;

  constructor(public readonly cdRef: ChangeDetectorRef, public readonly track: TrackByService) {}
}
