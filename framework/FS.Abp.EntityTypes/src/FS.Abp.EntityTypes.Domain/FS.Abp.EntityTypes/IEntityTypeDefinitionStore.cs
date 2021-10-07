using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;

namespace FS.Abp.EntityTypes
{
    public interface IEntityTypeDefinitionStore
    {
        List<EntityTypeModel> GetList();
        List<string> FindEntityTypeFromEntity(string typeName);
        List<string> FindEntityTypeFromEntity<T>();
    }
}