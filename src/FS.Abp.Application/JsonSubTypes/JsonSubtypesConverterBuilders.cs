using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace JsonSubTypes
{
    //public class JsonSubtypesConverterOption
    //{
    //    public List<JsonConverter> JsonConverters { get; set; }

    //    public JsonSubtypesConverterOption()
    //    {
    //        this.JsonConverters = new List<JsonConverter>();
    //    }
    //    public void AddConverter(params JsonConverter[] jsonConverter)
    //    {
    //        JsonConverters.AddRange(jsonConverter);
    //    }
    //}
    public class JsonSubtypesConverterBuilders: IJsonSubtypesConverterBuilders
    {
        public List<JsonConverter> JsonConverters { get; set; }
        public JsonSubtypesConverterBuilders()
        {
            this.JsonConverters = new List<JsonConverter>();
        }
        public void CreateConverter<TBase>(string name, Func<JsonSubtypesConverterBuilder, JsonConverter> action)
        {
            var item = JsonSubtypesConverterBuilder.Of(typeof(TBase), name);

            JsonConverters.Add(action?.Invoke(item));
        }
    }
    public interface IJsonSubtypesConverterBuilders
    {
        List<JsonConverter> JsonConverters { get; set; }
    }
}
