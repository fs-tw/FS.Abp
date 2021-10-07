using System.Collections.Generic;

namespace FS.Abp.EntityTypes
{
    public interface IEntityTypeDefinitionAppService
    {
        List<string> FindEntityTypeFromEntity(string typeName);
        List<EntityTypeModel> GetList();
    }
}