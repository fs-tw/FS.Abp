using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using System.Text;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.Json.Newtonsoft
{
    public class ExtraPropertyDictionaryConverter : JsonConverter<ExtraPropertyDictionary>, ITransientDependency
    {
        public override bool CanWrite => false;
        public override bool CanRead => true;


        public override void WriteJson(JsonWriter writer, ExtraPropertyDictionary value, JsonSerializer serializer)
        {
            throw new NotImplementedException();
        }

        public override ExtraPropertyDictionary ReadJson(JsonReader reader, Type objectType, ExtraPropertyDictionary existingValue, bool hasExistingValue, JsonSerializer serializer)
        {
            var extraPropertiesProperty = ((JTokenReader)reader).CurrentToken;

            var jsonDictionary = ((JObject)extraPropertiesProperty).ToDictionary();

            ExtraPropertyDictionary result = new ExtraPropertyDictionary(jsonDictionary);

            result.ToList().ForEach(kv =>
            {
                existingValue[kv.Key] = kv.Value;
            });

            return result;
        }
    }
}
