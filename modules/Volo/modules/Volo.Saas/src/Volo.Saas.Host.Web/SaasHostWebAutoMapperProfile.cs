using AutoMapper;
using Volo.Saas.Host.Dtos;
using Volo.Saas.Host.Pages.Saas.Host.Tenants;

namespace Volo.Saas.Host
{
    public class SaasHostWebAutoMapperProfile : Profile
    {
        public SaasHostWebAutoMapperProfile()
        {
            CreateMap<SaasTenantDto, EditModalModel.TenantInfoModel>()
                .MapExtraProperties();

            CreateMap<CreateModalModel.TenantInfoModel, SaasTenantCreateDto>()
                .MapExtraProperties();

            CreateMap<EditModalModel.TenantInfoModel, SaasTenantUpdateDto>()
                .MapExtraProperties();

            CreateMap<EditionDto, Pages.Saas.Host.Editions.EditModalModel.EditionInfoModel>()
                .MapExtraProperties();

            CreateMap<Pages.Saas.Host.Editions.CreateModalModel.EditionInfoModel, EditionCreateDto>()
                .MapExtraProperties();

            CreateMap<Pages.Saas.Host.Editions.EditModalModel.EditionInfoModel, EditionUpdateDto>()
                .MapExtraProperties();
        }
    }
}