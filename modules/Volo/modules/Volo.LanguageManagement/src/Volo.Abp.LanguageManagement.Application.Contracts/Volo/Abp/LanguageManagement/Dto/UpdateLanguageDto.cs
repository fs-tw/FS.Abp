using Volo.Abp.ObjectExtending;

namespace Volo.Abp.LanguageManagement.Dto
{
    public class UpdateLanguageDto : ExtensibleObject
    {
        public string DisplayName { get; set; }

        public string FlagIcon { get; set; }

        public bool IsEnabled { get; set; }

        public UpdateLanguageDto()
            : base(false)
        {

        }
    }
}