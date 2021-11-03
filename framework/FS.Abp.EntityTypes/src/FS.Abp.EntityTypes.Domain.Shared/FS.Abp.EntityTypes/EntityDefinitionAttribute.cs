using System;

namespace FS.Abp.EntityTypes
{
    [AttributeUsage(AttributeTargets.Class, Inherited = false)]
    public class EntityDefinitionAttribute : Attribute
    {
        public Type AppServiceType { get; set; }
        public Type EntityType { get; set; }
        public Type CreateType { get; set; }
        public Type UpdateType { get; set; }
        public Type SearchType { get; set; }
        public Type ListType { get; set; }
    }
}
