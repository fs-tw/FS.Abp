using AutoMapper;
using Volo.Abp.LanguageManagement.Dto;
using Volo.Abp.LanguageManagement.Pages.LanguageManagement;

namespace Volo.Abp.LanguageManagement
{
    public class LanguageManagementWebAutoMapperProfile : Profile
    {
        public LanguageManagementWebAutoMapperProfile()
        {
            CreateMap<LanguageDto, EditModel.LanguageEditModalView>()
                .MapExtraProperties();

            CreateMap<EditModel.LanguageEditModalView, UpdateLanguageDto>()
                .MapExtraProperties();

            CreateMap<CreateModel.LanguageCreateModalView, CreateLanguageDto>()
                .MapExtraProperties();
        }
    }
}