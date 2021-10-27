using FS.Abp.EntityTypes.Dtos;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace FS.Abp.EntityTypes
{
    public class EntityDefinitionAppService : EntityTypesAppService, IEntityDefinitionAppService
    {
        IOptions<EntityDefinitionOptions> Options => this.LazyServiceProvider.LazyGetRequiredService<IOptions<EntityDefinitionOptions>>();
        public List<EntityDefinitionDto> GetEntityDefinitionList()
        {
            IOptions<System.Text.Json.JsonSerializerOptions> o=this.LazyServiceProvider.LazyGetRequiredService<IOptions<System.Text.Json.JsonSerializerOptions>>();
            var options = Options.Value;
            return options.Values.Select(this.ObjectMapper.Map<DefaultEntityDefinition, EntityDefinitionDto>).ToList();
        }
    }
}
