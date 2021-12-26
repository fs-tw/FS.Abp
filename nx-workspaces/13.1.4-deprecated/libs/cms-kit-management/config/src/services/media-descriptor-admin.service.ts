import { Injectable, Injector } from "@angular/core";
import { Volo } from "@fs-tw/cms-kit-management/proxy/cms-kit";
import { ImagePicker } from "@fs-tw/components/image-picker";
import { forkJoin, Observable } from "rxjs";
import { RestService } from '@abp/ng.core';
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root',
})
export class MediaDescriptorAdminByListService {
  public apiService: MediaDescriptorAdminService;
  
  constructor(
    private readonly injector: Injector,
  ) {
    this.apiService = injector.get(MediaDescriptorAdminService);
  }

  uploadImage(
    entityType: string,
    files: Array<File>):
      Observable<string[]>
  {
    let apis: Observable<Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorDto>[] = [];

    for(let file of files) {
      let formData = new FormData();
      formData.append('File', file);
      apis.push(
        this.apiService.create(entityType, file.name, formData)
      )
    }
    
    return forkJoin(apis)
      .pipe(
        map((list) => list.map(x => x.id))
      );
  }
}

@Injectable({
  providedIn: 'root',
})
export class MediaDescriptorAdminService {
  apiName = 'CmsKitAdmin';

  create = (entityType: string, name: string, input: FormData) =>
    this.restService.request<any, Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorDto>({
      method: 'POST',
      url: `/api/cms-kit-admin/media/${entityType}`,
      params: { name: name },
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}