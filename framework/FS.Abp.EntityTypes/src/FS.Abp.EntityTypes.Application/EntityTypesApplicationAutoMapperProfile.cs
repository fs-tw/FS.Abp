using AutoMapper;
using FS.Abp.EntityTypes.Dtos;

namespace FS.Abp.EntityTypes
{
    public class EntityTypesApplicationAutoMapperProfile : Profile
    {
        public EntityTypesApplicationAutoMapperProfile()
        {
            /* You can configure your AutoMapper mapping configuration here.
             * Alternatively, you can split your mapping configurations
             * into multiple profile classes for a better organization. */
            this.CreateMap<DefaultEntityDefinition, EntityDefinitionDto>().ForMember(t => t.EntityType, o => o.MapFrom(s => s.Entity.FullName));
        }
    }
}