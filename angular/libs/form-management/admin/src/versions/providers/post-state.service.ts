import { Injectable } from '@angular/core';
import { InternalStore } from '@abp/ng.core';
import { Observable } from 'rxjs';

import { Fs } from '@fs-tw/form-management/proxy';
import { ActivatedRoute } from '@angular/router';
import { PageService } from './page.service';
import { map, mergeMap, tap } from 'rxjs/operators';

export namespace Post {
  export interface State {
    VersionDefinition: Fs.FormManagement.Versions.Dtos.VersionDefinitionDto;
  }
}

@Injectable({
  providedIn: 'root',
})
export class PostStateService {
  private store = new InternalStore({} as Post.State);

  get VersionDefinition$(): Observable<Fs.FormManagement.Versions.Dtos.VersionDefinitionDto> {
    return this.store.sliceState((state) => state.VersionDefinition);
  }

  get VersionDefinition(): Fs.FormManagement.Versions.Dtos.VersionDefinitionDto {
    return this.store.state.VersionDefinition;
  }

  set VersionDefinition(versiondefinition: Fs.FormManagement.Versions.Dtos.VersionDefinitionDto) {
    this.store.patch({ VersionDefinition: versiondefinition });
  }

  constructor(
    private pageService: PageService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParamMap.subscribe((x) => {
      let versionsListId = x.get('versionsListId');
      if (versionsListId == null) {
        this.VersionDefinition = null;
        return;
      }
      // pageService
      //   .getGovernmentDefinitionById(versiondefinitionId)
      //   .pipe(
      //     tap((b) => {
      //       this.VersionDefinition = b as any;
      //     })
      //   )
      //   .subscribe();
    });
  }
}
