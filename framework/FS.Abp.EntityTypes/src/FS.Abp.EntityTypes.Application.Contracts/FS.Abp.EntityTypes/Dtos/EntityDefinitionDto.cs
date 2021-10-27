using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.EntityTypes.Dtos
{
    public class EntityDefinitionDto
    {
        public string EntityType { get; set; }
        public List<EntityPropertyDefinition> CreateFormProps { get; set; }
    }
}
