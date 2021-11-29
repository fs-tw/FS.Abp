using AutoMapper;
using Volo.Abp.AuditLogging;

namespace FS.Abp.AuditLogging
{
    public class AuditLoggingApplicationAutoMapperProfile : Profile
    {
        public AuditLoggingApplicationAutoMapperProfile()
        {
            /* You can configure your AutoMapper mapping configuration here.
             * Alternatively, you can split your mapping configurations
             * into multiple profile classes for a better organization. */

            CreateMap<AuditLog, AuditLogDto>()
                .MapExtraProperties(Volo.Abp.ObjectExtending.MappingPropertyDefinitionChecks.None);

            CreateMap<EntityChange, EntityChangeDto>()
                .MapExtraProperties(Volo.Abp.ObjectExtending.MappingPropertyDefinitionChecks.None);

            //CreateMap<EntityChangeWithUsername, EntityChangeWithUsernameDto>();

            CreateMap<EntityPropertyChange, EntityPropertyChangeDto>();

            CreateMap<AuditLogAction, AuditLogActionDto>()
                .MapExtraProperties(Volo.Abp.ObjectExtending.MappingPropertyDefinitionChecks.None);
        }
    }
}