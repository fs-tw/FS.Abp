﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.2
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.CmsKitManagement.Vocabularies
{
    [Area("cms-kit-management")]
    [RemoteService(true)]
    [ControllerName("FS.CmsKitManagement.Vocabularies(cms-kit-management)")]
    [Route("api/cms-kit-management/vocabularies")]
    public partial class VocabulariesApi : CmsKitManagementController , IVocabulariesApi //auto-generated
    {

        protected IVocabularyDefinitionCrudAppService VocabularyDefinitionCrudAppService => this.LazyServiceProvider.LazyGetRequiredService<IVocabularyDefinitionCrudAppService>();

        protected IVocabularyCrudAppService VocabularyCrudAppService => this.LazyServiceProvider.LazyGetRequiredService<IVocabularyCrudAppService>();

        [HttpOptions]
        public Dtos.MetaData Options()
        {
            return new Dtos.MetaData();
        }
    }
}
