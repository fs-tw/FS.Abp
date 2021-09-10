using JetBrains.Annotations;
using System.Collections.Generic;
using Volo.Abp.Localization;
using System;

namespace FS.CodingManagement.SerialNumbers
{
    public class ProviderDictionary : Dictionary<string, Provider>
    {
        public void AddOrReplace(
            [NotNull] string name,
            [NotNull] int length
            )
        {
            this[name] = new Provider(name, length);
        }
    }
}
