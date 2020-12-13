import { Component, Inject, Input } from '@angular/core';
import { PROFILE_PICTURE, ProfilePictureImage } from '@volo/abp.commercial.ng.ui';
import { BehaviorSubject } from 'rxjs';
import { ThemeLepton } from '../../models/theme-lepton';

@Component({
  selector: 'abp-current-user-image',
  template: `
    <ng-container *ngIf="profilePicture$ | async as pP">
      <ng-container [ngSwitch]="pP.type">
        <img *ngSwitchCase="'image'" [src]="pP.source" alt="user" [ngClass]="classes" />
        <i *ngSwitchCase="'icon'" [ngClass]="pP.source + ' ' + classes"></i>
      </ng-container>
    </ng-container>
  `,
  styleUrls: ['./current-user-image.component.scss'],
})
export class CurrentUserImageComponent implements ThemeLepton.CurrentUserImageComponentInputs {
  @Input()
  classes: string;

  constructor(
    @Inject(PROFILE_PICTURE) public profilePicture$: BehaviorSubject<ProfilePictureImage>,
  ) {}
}
