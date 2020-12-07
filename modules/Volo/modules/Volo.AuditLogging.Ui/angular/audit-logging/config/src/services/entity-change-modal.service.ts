import { ContentProjectionService, PROJECTION_STRATEGY } from '@abp/ng.core';
import { ComponentRef, Injectable } from '@angular/core';
import { AuditLogsService } from '@volo/abp.ng.audit-logging';
import { EntityChangeModalComponent } from '../components/entity-change-modal.component';

@Injectable({
  providedIn: 'root',
})
export class EntityChangeModalService {
  private modalRef: ComponentRef<EntityChangeModalComponent>;

  constructor(
    private auditLogsService: AuditLogsService,
    private contentProjectionService: ContentProjectionService,
  ) {
    this.projectModal();
  }

  private projectModal() {
    this.modalRef = this.contentProjectionService.projectContent(
      PROJECTION_STRATEGY.AppendComponentToBody(EntityChangeModalComponent),
    );

    this.modalRef.changeDetectorRef.detectChanges();
  }

  detectChanges() {
    this.modalRef.changeDetectorRef.detectChanges();
    this.modalRef.instance.cdRef.detectChanges();
  }

  showDetails(entityChangeId: string) {
    this.auditLogsService.getEntityChangeWithUsername(entityChangeId).subscribe(change => {
      this.modalRef.instance.entityId = change.entityChange.entityId;
      this.modalRef.instance.entityTypeFullName = change.entityChange.entityTypeFullName;
      this.modalRef.instance.history = [change].filter(Boolean);
      this.modalRef.instance.visible = true;
      this.detectChanges();
    });
  }

  showHistory(entityId: string, entityTypeFullName: string) {
    this.auditLogsService
      .getEntityChangesWithUsername({ entityId, entityTypeFullName })
      .subscribe(changes => {
        this.modalRef.instance.entityId = entityId;
        this.modalRef.instance.entityTypeFullName = entityTypeFullName;
        this.modalRef.instance.history = changes;
        this.modalRef.instance.visible = true;
        this.detectChanges();
      });
  }
}
