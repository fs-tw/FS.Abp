import { Injector, Injectable, Type } from '@angular/core';
import { Fs } from '@fs-tw/form-management/proxy';

// @dynamic
@Injectable({
  providedIn: 'root',
})
export class PageService {
  private VersionsApiService: Fs.FormManagement.Versions.VersionsApiService;
  
  
  constructor(private injector: Injector) {
    this.VersionsApiService = injector.get(Fs.FormManagement.Versions.VersionsApiService);
    
  }

  //#region  VersionDefinition
  getVersionDefinition(input: Fs.FormManagement.Versions.Dtos.VersionDefinitionGetListDto) {
    return this.VersionsApiService.getListByVersionDefinitionGetList(input);
  }

  // getVersionDefinitionById(id: string) {
  //   return this.VersionsApiService.getByGovernmentPrimaryKey({ id: id });
  // }

  // createVersionDefinition(input: Fs.FormManagement.Versions.Dtos.VersionDefinitionCreateDto) {
  //   return this.VersionsApiService.createByGovernmentCreate(input);
  // }

  // updateVersionDefinition(id: string, input: Fs.FormManagement.Versions.Dtos.VersionDefinitionUpdateDto) {
  //   return this.VersionsApiService.updateByGovernmentPrimaryKeyAndGovernmentUpdate(
  //     { id: id },
  //     input
  //   );
  // }

  // deleteGovernment(id:string){
  //   return this.VersionsApiService.deleteByGovernmentPrimaryKey({id});
  // }
  //#endregion


  //#region Version
  getVersion(input: Fs.FormManagement.Versions.Dtos.VersionGetListDto) {
    return this.VersionsApiService.getListByVersionGetList(input);
  }

  // getVersionById(id: string) {
  //   return this.VersionsApiService.getByGovernmentDefinitionPrimaryKey({ id: id });
  // }

  // createVersion(input: Fs.FormManagement.Versions.Dtos.VersionCreateDto) {
  //   return this.VersionsApiService.createByGovernmentDefinitionCreate(input);
  // }

  // updateVersion(id: string, input: Fs.FormManagement.Versions.Dtos.VersionUpdateDto) {
  //   return this.VersionsApiService.updateByGovernmentDefinitionPrimaryKeyAndGovernmentDefinitionUpdate(
  //     { id: id },
  //     input
  //   );
  // }

  // deleteVersion(id: string) {
  //   return this.VersionsApiService.deleteByGovernmentDefinitionPrimaryKey({ id });
  // }
  
}
