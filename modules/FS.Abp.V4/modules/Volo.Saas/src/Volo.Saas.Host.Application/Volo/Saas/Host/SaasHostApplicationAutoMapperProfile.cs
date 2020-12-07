using AutoMapper;
using Volo.Abp.AutoMapper;
using Volo.Saas.Editions;
using Volo.Saas.Host.Dtos;
using Volo.Saas.Tenants;

namespace Volo.Saas.Host
{
    public class SaasHostApplicationAutoMapperProfile : Profile
    {
        public SaasHostApplicationAutoMapperProfile()
        {
            CreateMap<Tenant, SaasTenantDto>()
                .MapExtraProperties()
                .Ignore(t => t.EditionName);

            CreateMap<Edition, EditionDto>()
                .MapExtraProperties();
        }
    }
}