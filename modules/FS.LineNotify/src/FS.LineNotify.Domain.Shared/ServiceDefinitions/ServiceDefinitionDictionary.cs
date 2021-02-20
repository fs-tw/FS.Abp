using JetBrains.Annotations;
using System.Collections.Generic;
using Volo.Abp.Localization;
using System;

namespace FS.LineNotify.ServiceDefinitions
{
    public class ServiceDefinitionDictionary : Dictionary<string, ServiceDefinition>
    {
        public void AddOrReplace(
            [NotNull] string no,
            [CanBeNull] string displayName = null,
            [CanBeNull] string description = null
            )
        {
            this[no] = new ServiceDefinition(no, displayName, description);
        }
    }
}
