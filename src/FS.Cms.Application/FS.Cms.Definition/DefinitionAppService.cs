using FS.Abp.CodingManagement.Coding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FS.Cms.Definition
{
    public partial class DefinitionAppService : CmsAppService, IDefinitionAppService
    {
        private readonly ICodesService _codesService;
        private readonly ICodesTreeRepository _codesTreeRepository;


        public DefinitionAppService(
            ICodesService codesService,
            ICodesTreeRepository codesTreeRepository
            )
        {
            _codesService = codesService;
            _codesTreeRepository = codesTreeRepository;
        }

    }
}
