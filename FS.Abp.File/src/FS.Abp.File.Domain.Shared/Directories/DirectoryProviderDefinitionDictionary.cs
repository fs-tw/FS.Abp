using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.File.Directories
{
    public class DirectoryProviderDefinitionDictionary: Dictionary<string, DirectoryProviderDefinition>
    {
        public void AddOrReplace(DirectoryProviderDefinition directoryProviderDefinition)
        {
            this[directoryProviderDefinition.ProviderKey] = directoryProviderDefinition;
        }
    }
}
