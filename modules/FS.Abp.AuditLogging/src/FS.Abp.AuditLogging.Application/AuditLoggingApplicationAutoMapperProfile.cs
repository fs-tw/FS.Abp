using AutoMapper;
using Volo.Abp.AuditLogging;

namespace FS.Abp.AuditLogging
{
    public class AuditLoggingApplicationAutoMapperProfile : Profile
    {
        public AuditLoggingApplicationAutoMapperProfile()
        {
            CreateMap<AuditLog, Dtos.AuditLogDto>()
                .MapExtraProperties(Volo.Abp.ObjectExtending.MappingPropertyDefinitionChecks.None);

            CreateMap<EntityChange, Dtos.EntityChangeDto>()
                .MapExtraProperties(Volo.Abp.ObjectExtending.MappingPropertyDefinitionChecks.None);

            //CreateMap<EntityChangeWithUsername, EntityChangeWithUsernameDto>();

            CreateMap<EntityPropertyChange, Dtos.EntityPropertyChangeDto>();

            CreateMap<AuditLogAction, Dtos.AuditLogActionDto>()
                .MapExtraProperties(Volo.Abp.ObjectExtending.MappingPropertyDefinitionChecks.None);
        }
    }
}