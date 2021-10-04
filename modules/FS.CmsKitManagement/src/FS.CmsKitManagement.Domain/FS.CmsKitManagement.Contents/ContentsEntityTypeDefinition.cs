using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Volo.CmsKit;

namespace FS.CmsKitManagement.Contents
{
    public interface IEntityTypeDefinitions<TEntityTypeDefinition>
        where TEntityTypeDefinition : EntityTypeDefinition
    {
        TEntityTypeDefinition this[Type key] { get; set; }
        void AddOrReplace([NotNull] Type Type);
        void AddOrReplace<T>();
        TEntityTypeDefinition Get(string typeName);
    }

    public class ContentsEntityTypeDefinitions :
        Dictionary<Type, ContentsEntityTypeDefinition>,
        IEntityTypeDefinitions<ContentsEntityTypeDefinition>
    {
        public void AddOrReplace<T>()
        {
            this.AddOrReplace(typeof(T));
        }
        public void AddOrReplace(
            [NotNull] Type Type
            )
        {
            this[Type] = new ContentsEntityTypeDefinition(Type.Name);
        }
        public ContentsEntityTypeDefinition Get(string typeName)
        {
            return this.Values.ToList().FirstOrDefault(x => x.EntityType == typeName);
        }
    }
    public class ContentsEntityTypeDefinition : EntityTypeDefinition
    {
        public ContentsEntityTypeDefinition(
            [NotNull] string entityType) : base(entityType)
        { }
    }
}
