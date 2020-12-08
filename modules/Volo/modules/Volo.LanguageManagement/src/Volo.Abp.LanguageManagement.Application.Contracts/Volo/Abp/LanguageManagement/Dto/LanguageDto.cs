using System;
using Volo.Abp.Application.Dtos;

namespace Volo.Abp.LanguageManagement.Dto
{
    public class LanguageDto : ExtensibleCreationAuditedEntityDto<Guid>
    {
        public string CultureName { get; set; }

        public string UiCultureName { get; set; }

        public string DisplayName { get; set; }

        public string FlagIcon { get; set; }

        public bool IsEnabled { get; set; }

        public bool IsDefaultLanguage { get; set; }
    }
}