import { Injectable } from '@angular/core';
import { CodesWithDetailsDto } from '@fs/coding-management/core';
import { SettingManagementDto } from '@fs/setting-management';
import * as _ from 'lodash';

export class CodeDetailWithSettingObj extends CodesWithDetailsDto {
  settings: SettingManagementDto.setting[];
  settingObj: {[key: string]: any};

  constructor(item) {    
    super(item);
    if(item.settings){
      this.settingObj = {};      
      item.settings.forEach(setting => {
        var rename = _.last(setting.name.split("."));
        this.settingObj[rename] = setting.value
      });
    }        
  }
}

export class CodesWthSettingDto extends CodesWithDetailsDto{
  settings: SettingManagementDto.setting[];
}

@Injectable({
  providedIn: 'root'
})
export class CodeProcessService {  
  constructor(   
  ) { 
  }

  getCodeChildrenDetail(children: CodesWthSettingDto[], codeList: CodesWthSettingDto[]): CodeDetailWithSettingObj[] {        
    var childrenIds = children.map(x => x.id);
    codeList = codeList.filter(x => !childrenIds.includes(x.id));

    var datas: CodeDetailWithSettingObj[] = [];
    for (var i = 0; i < children.length; i++) {
      var item = children[i];      

      var childrenCodes = _.sortBy(codeList.filter(x => x.parentId == children[i].id && x.enable == true), "no");
      var codeListCodes = codeList.filter(x => _.startsWith(x.code, children[i].code));
      item.children = this.getCodeChildrenDetail(childrenCodes, codeListCodes);
      item.codeList = codeListCodes;

      var check= codeList.find(x=>{return children[i].id == x.id});
      if(check && check.settings) item.settings = check.settings;      
      datas.push(new CodeDetailWithSettingObj(item));
      
    }    
    return datas;
  }
}