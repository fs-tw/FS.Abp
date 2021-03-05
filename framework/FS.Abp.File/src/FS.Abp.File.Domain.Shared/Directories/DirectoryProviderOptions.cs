using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.File.Directories
{
    public class DirectoryProviderOptions
    {
        public DirectoryProviderDefinitionDictionary DirectoryProviders { get; }
        public DirectoryProviderOptions()
        {
            DirectoryProviders = new DirectoryProviderDefinitionDictionary();
        }
    }
}
