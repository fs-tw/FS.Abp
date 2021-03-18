import { Injectable } from '@angular/core';
import { EnvironmentService, RestService, AuditedEntityDto } from '@abp/ng.core';
// import { FileDescriptorDto } from '@volo/abp.ng.file-management'

// TODO USE @volo/abp.ng.file-management FileDescriptorDto
export interface FileDescriptorDto extends AuditedEntityDto<string> {
  directoryId?: string;
  name: string;
  mimeType: string;
  size: number;
}

@Injectable({ providedIn: 'root' })
export class FileService {

  constructor(
    private restService: RestService,
    private environmentService: EnvironmentService,
  ) {
  }

  getFileUrl(id) {
    if (!id) return "";
    return this.environmentService.getApiUrl() + "/api/file/files/file-content?id=" + id
  }

  uploadFile(file: File, directoryId: string) {    
    const formData = new FormData();
    formData.append("relativePath", null);
    formData.append("file", file);
    formData.append("name", file.name);   
    formData.append("type", file.type);
    return this.restService.request<any, FileDescriptorDto>({
      method: 'POST',
      url: `/api/file-management/file-descriptor/upload`,
      body: formData,
      params: { directoryId: directoryId }
    });
  }


  getFileBlobById(id: string) {
    return this.restService.request<any, Blob>({
      method: 'GET',
      url: `/api/file/files/file-content`,
      params: { id },
      responseType: 'blob'
    });
  }




}
