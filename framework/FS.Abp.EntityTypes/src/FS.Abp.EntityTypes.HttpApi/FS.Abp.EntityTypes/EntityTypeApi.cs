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
        protected IEntityDefinitionAppService EntityDefinitionAppService => this.LazyServiceProvider.LazyGetRequiredService<IEntityDefinitionAppService>();

        [HttpGet]
        [RemoteService(true)]
        [Route("entity-type-definitions")]
        public List<EntityType> GetEntityTypeDefinitionList()
        {
            return EntityTypeDefinitionAppService.GetEntityTypeDefinitionList();
        }

        [HttpGet]
        [RemoteService(true)]
        [Route("entity-definitions")]
        public List<EntityDefinition> GetEntityDefinitionList()
        {
            return EntityDefinitionAppService.GetEntityDefinitionList();
        }

    }
}
