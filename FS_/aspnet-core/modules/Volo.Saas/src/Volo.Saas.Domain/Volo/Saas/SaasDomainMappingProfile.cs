using AutoMapper;
using Volo.Abp.Data;
using Volo.Abp.MultiTenancy;
using Volo.Saas.Editions;
using Volo.Saas.Tenants;

namespace Volo.Saas
{
    public class SaasDomainMappingProfile : Profile
    {
        public SaasDomainMappingProfile()
        {
            CreateMap<Tenant, TenantConfiguration>()
                .ForMember(ti => ti.ConnectionStrings, opts =>
                {
                    opts.MapFrom((tenant, ti) =>
                    {
                        var connStrings = new ConnectionStrings();

                        foreach (var connectionString in tenant.ConnectionStrings)
                        {
                            connStrings[connectionString.Name] = connectionString.Value;
                        }

                        return connStrings;
                    });
                });

            CreateMap<Edition, EditionEto>();
            CreateMap<Tenant, TenantEto>();
        }
    }
}
