using AutoMapper;

namespace Volo.Abp.AuditLogging
{
    public class AbpAuditLoggingApplicationAutoMapperProfile : Profile
    {
        public AbpAuditLoggingApplicationAutoMapperProfile()
        {
            CreateMap<AuditLog, AuditLogDto>()
                .MapExtraProperties();
            
            CreateMap<EntityChange, EntityChangeDto>()
                .MapExtraProperties();
            
            CreateMap<EntityChangeWithUsername, EntityChangeWithUsernameDto>();
            
            CreateMap<EntityPropertyChange, EntityPropertyChangeDto>();
            
            CreateMap<AuditLogAction, AuditLogActionDto>()
                .MapExtraProperties();
        }
    }
}
