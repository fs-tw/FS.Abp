import { PagedResultDto } from '@abp/ng.core';
import {
  CultureInfoDto,
  LanguageDto,
  LanguageResourceDto,
  LanguageTextDto,
} from '../proxy/dto/models';

export namespace LanguageManagement {
  export interface State {
    languageResponse: PagedResultDto<LanguageDto>;
    languageTextsResponse: PagedResultDto<LanguageTextDto>;
    selectedItem: LanguageDto;
    cultures: CultureInfoDto[];
    resources: LanguageResourceDto[];
  }
}
