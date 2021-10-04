using JetBrains.Annotations;
using System.Collections.Generic;
using Volo.CmsKit;

namespace FS.CmsKitManagement.Contents
{
    public interface IEntityTypeOptions<T>
        where T : EntityTypeDefinition
    {
        IEntityTypeDefinitions<T> EntityTypes { get; }
    }

    public class ContentsOptions : IEntityTypeOptions<ContentsEntityTypeDefinition>
    {
        public ContentsOptions()
        {
            EntityTypes=new ContentsEntityTypeDefinitions();
        }

        public IEntityTypeDefinitions<ContentsEntityTypeDefinition> EntityTypes { get; }
    }
}
