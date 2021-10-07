using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;

namespace FS.Abp.EntityTypes
{
    [Area("entity-types")]
    [RemoteService(Name = "entity-types")]
    [ControllerName("FS.Abp.EntityTypes.EntityType(entity-types)")]
    [Route("api/entity-types")]
    public class EntityTypeApi : EntityTypesController, IEntityTypeApi
    {
        protected IEntityTypeDefinitionAppService EntityTypeDefinitionAppService => this.LazyServiceProvider.LazyGetRequiredService<IEntityTypeDefinitionAppService>();

        [HttpGet]
        [Route("definitions/type-name")]
        [RemoteService(true)]
        public List<string> FindEntityTypeFromEntity(string typeName)
        {
            return EntityTypeDefinitionAppService.FindEntityTypeFromEntity(typeName);
        }

        [HttpGet]
        [Route("definitions")]
        [RemoteService(true)]
        public List<EntityTypeModel> GetList()
        {
            return EntityTypeDefinitionAppService.GetList();
        }
    }
}
