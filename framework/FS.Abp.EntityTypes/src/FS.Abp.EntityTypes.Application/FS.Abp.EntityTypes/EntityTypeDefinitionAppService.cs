using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.EntityTypes
{
    public class EntityTypeDefinitionAppService : EntityTypesAppService, IEntityTypeDefinitionAppService
    {
        protected IEntityTypeStore EntityTypeDefinitionStore => this.LazyServiceProvider.LazyGetRequiredService<IEntityTypeStore>();

        public List<EntityType> GetList()
        {
            return EntityTypeDefinitionStore.GetList();
        }
        //public List<string> FindEntityTypeFromEntity(string typeName)
        //{
        //    return EntityTypeDefinitionStore.FindEntityTypeFromEntity(typeName);
        //}
    }
}
