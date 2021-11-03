using System;

namespace FS.Abp.EntityTypes
{
    [AttributeUsage(AttributeTargets.Property, Inherited = false)]
    public class EntityPropertyDefinitionAttribute : Attribute
    {
        public string Type { get; set; }
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public string Permission { get; set; }
        public bool Sortable { get; set; }
        public int ColumnWidth { get; set; }
        public bool Visible { get; set; } = true;


    }
}
