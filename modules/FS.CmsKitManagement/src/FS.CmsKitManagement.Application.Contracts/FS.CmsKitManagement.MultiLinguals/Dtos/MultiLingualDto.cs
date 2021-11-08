using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;
using FS.Abp.Application.Dtos;
using AutoFilterer.Types;

namespace FS.CmsKitManagement.MultiLinguals.Dtos
{
    public partial class MultiLingualFindDto : FilterRequestDto
    {
        public string EntityType { get; set; }
        public string EntityId { get; set; }

    }
    public partial class TranslationDto
    {
        public virtual string Culture { get; set; }

        public virtual List<Volo.Abp.NameValue> Properties { get; set; }
    }
    public partial class MultiLingualPatchDto
    {

        public string EntityType { get; set; }
        public string EntityId { get; set; }

        public List<TranslationDto> Translations { get; set; }
    }
}
