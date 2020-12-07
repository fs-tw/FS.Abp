import { ConfigStateService } from '@abp/ng.core';
import { Injectable, Injector } from '@angular/core';
import { PROFILE_PICTURE } from '@volo/abp.commercial.ng.ui';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { DEFAULT_PROFILE_ICON } from '../constants';
import { ProfilePictureService } from '../services/profile-picture.service';

@Injectable({
  providedIn: 'root',
})
export class ProfilePictureHandler {
  private currentUserId: string;

  constructor(
    private profilePictureService: ProfilePictureService,
    private injector: Injector,
    private configState: ConfigStateService,
  ) {
    this.listenToAppConfig();
  }

  private listenToAppConfig() {
    const profilePictureStream = this.injector.get(PROFILE_PICTURE);
    this.configState
      .createOnUpdateStream(state => state)
      .pipe(
        map(() => this.configState.getDeep('currentUser.id')),
        filter(id => id !== this.currentUserId),
        tap(id => {
          this.currentUserId = id;

          if (!id) {
            profilePictureStream.next(null);
          }
        }),
        filter(id => !!id),
        switchMap(id => this.profilePictureService.getProfilePicture(id, true)),
      )
      .subscribe(
        res => {
          profilePictureStream.next({
            type: 'image',
            source: res.source || `data:image/png;base64,${res.fileContent}`,
          });
        },
        () => {
          profilePictureStream.next(DEFAULT_PROFILE_ICON);
        },
      );
  }
}
