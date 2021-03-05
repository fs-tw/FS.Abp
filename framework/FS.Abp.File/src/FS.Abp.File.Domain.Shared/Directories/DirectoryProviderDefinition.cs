using System;
using System.Collections.Generic;
using System.Text;
using JetBrains.Annotations;

namespace FS.Abp.File.Directories
{
    public class DirectoryProviderDefinition
    {
        [NotNull]
        public string ProviderKey { get; }

        [NotNull]
        public string DirectoryPath { get; }

        public DirectoryProviderDefinition(string providerKey, string directoryPath)
        {
            ProviderKey = providerKey;
            DirectoryPath = directoryPath;
        }
    }
}
