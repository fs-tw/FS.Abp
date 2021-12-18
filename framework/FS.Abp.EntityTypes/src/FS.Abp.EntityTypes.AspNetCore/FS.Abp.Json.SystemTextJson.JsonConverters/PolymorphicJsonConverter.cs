using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace FS.Abp.Json.SystemTextJson.JsonConverters
{
    //ref https://getyourbitstogether.com/polymorphic-serialization-in-system-text-json/
    public class PolymorphicJsonConverter<T> : JsonConverter<T>
    {
        public override bool CanConvert(Type typeToConvert)
        {
            return typeof(T).IsAssignableFrom(typeToConvert);
        }

        public override T Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            throw new NotImplementedException();
        }

        public override void Write(Utf8JsonWriter writer, T value, JsonSerializerOptions options)
        {
            if (value is null)
            {
                writer.WriteNullValue();
                return;
            }

            writer.WriteStartObject();
            foreach (var property in value.GetType().GetProperties())
            {
                if (!property.CanRead)
                    continue;
                var propertyValue = property.GetValue(value);
                writer.WritePropertyName(options.PropertyNamingPolicy.ConvertName(property.Name));
                JsonSerializer.Serialize(writer, propertyValue, options);
            }
            writer.WriteEndObject();
        }
    }
}
