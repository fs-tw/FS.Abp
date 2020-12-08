using AutoMapper;
using Volo.Abp.AutoMapper;
using Volo.Abp.TextTemplateManagement.TextTemplates;
using Volo.Abp.TextTemplating;

namespace Volo.Abp.TextTemplateManagement
{
    public class TextTemplateManagementApplicationAutoMapperProfile : Profile
    {
        public TextTemplateManagementApplicationAutoMapperProfile()
        {
            CreateMap<TemplateDefinition, TemplateDefinitionDto>()
                .Ignore(x => x.DisplayName);

            CreateMap<TextTemplateContent, TextTemplateContentDto>();
        }
    }
}