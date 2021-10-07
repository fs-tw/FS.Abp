using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.EntityTypes
{
    public class EntityTypeDefinitionAppService : EntityTypesAppService, IEntityTypeDefinitionAppService
    {
        protected IEntityTypeDefinitionStore EntityTypeDefinitionStore => this.LazyServiceProvider.LazyGetRequiredService<IEntityTypeDefinitionStore>();

        public List<EntityTypeModel> GetList()
        {
            return EntityTypeDefinitionStore.GetList();
        }
        public List<string> FindEntityTypeFromEntity(string typeName)
        {
            return EntityTypeDefinitionStore.FindEntityTypeFromEntity(typeName);
        }
    }
}
