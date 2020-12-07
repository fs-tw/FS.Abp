using System;
using AutoMapper;
using Volo.Abp.Account.ExternalProviders;

namespace Volo.Abp.Account
{
    public class AbpAccountPubicApplicationModuleAutoMapperProfile : Profile
    {
        public AbpAccountPubicApplicationModuleAutoMapperProfile()
        {
            CreateMap<ExternalProviderSettings, ExternalProviderItemDto>(MemberList.Destination);
            CreateMap<ExternalProviderSettings, ExternalProviderItemWithSecretDto>(MemberList.Destination)
                .ForMember(d => d.Success, opt => opt.MapFrom(x => !x.Name.IsNullOrWhiteSpace()));
        }
    }
}
