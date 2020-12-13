using AutoMapper;
using Volo.Abp.AutoMapper;
using Volo.Saas.Host.Dtos;

namespace Volo.Saas.Host.Blazor
{
    public class SaasHostBlazorAutoMapperProfile : Profile
    {
        public SaasHostBlazorAutoMapperProfile()
        {
            CreateMap<SaasTenantDto, SaasTenantUpdateDto>()
                .IgnoreExtraProperties();
            
            CreateMap<EditionDto, EditionUpdateDto>()
                .IgnoreExtraProperties();
        }
    }
}
