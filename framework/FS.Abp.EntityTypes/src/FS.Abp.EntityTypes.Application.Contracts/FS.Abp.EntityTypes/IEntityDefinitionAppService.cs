using FS.Abp.EntityTypes.Dtos;
using System.Collections.Generic;

namespace FS.Abp.EntityTypes
{
    public interface IEntityDefinitionAppService
    {
        List<EntityDefinitionDto> GetEntityDefinitionList();
    }
}