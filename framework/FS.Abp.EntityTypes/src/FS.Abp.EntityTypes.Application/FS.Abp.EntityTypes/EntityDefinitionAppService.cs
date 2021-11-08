using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Text;

namespace FS.Abp.EntityTypes
{
    public class EntityDefinitionAppService : EntityTypesAppService, IEntityDefinitionAppService
    {
        IOptions<EntityDefinitionOptions> Options => this.LazyServiceProvider.LazyGetRequiredService<IOptions<EntityDefinitionOptions>>();
        public List<EntityDefinition> GetEntityDefinitionList()
        {
            var options = Options.Value;
            return options.Values.ToList();
        }
    }
}
