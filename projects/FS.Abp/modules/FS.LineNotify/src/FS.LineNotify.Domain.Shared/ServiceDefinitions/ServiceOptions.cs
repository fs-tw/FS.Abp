using JetBrains.Annotations;

namespace FS.LineNotify.ServiceDefinitions
{
    public class ServiceOptions
    {
        [NotNull]
        public ServiceDefinitionDictionary ServiceDefinitions { get; } = new ServiceDefinitionDictionary();
    }
}
