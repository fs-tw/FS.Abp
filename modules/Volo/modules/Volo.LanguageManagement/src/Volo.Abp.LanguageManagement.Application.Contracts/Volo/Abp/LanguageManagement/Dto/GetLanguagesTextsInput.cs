using Volo.Abp.Application.Dtos;

namespace Volo.Abp.LanguageManagement.Dto
{
    public class GetLanguagesTextsInput : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }

        public string ResourceName { get; set; }

        public string BaseCultureName { get; set; }

        public string TargetCultureName { get; set; }

        public bool GetOnlyEmptyValues { get; set; }
    }
}