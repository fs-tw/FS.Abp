using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FS.Abp.CodeSettings
{
    public interface IDtoWithSettings
    {
        object this[string name] { get; }
        List<string> SettingsPropertyName { get; }
    }
    public abstract class BaseDtoWithSettings<T> : IDtoWithSettings
        where T : new()
    {
        public object this[string name]
        {
            get
            {
                return typeof(T).GetProperty(name).GetValue(Setting);
            }
        }
        [Newtonsoft.Json.JsonIgnore]
        public T Setting {  get; set; }


        [JsonProperty("Setting")]
        private T ObsoleteSettingAlternateSetter
        {
            // get is intentionally omitted here
            set { Setting = value; }
        }

        [Newtonsoft.Json.JsonIgnore]
        public List<string> SettingsPropertyName => typeof(T).GetProperties().Select(x => x.Name).ToList();

        public BaseDtoWithSettings()
        {
            this.Setting = new T();
        }


     

    }

    public class CodesDtoWithSettingsForCreate<T> : BaseDtoWithSettings<T>
       where T : new()
    {
        public string DisplayName { get; set; }
        public string No { get; set; }
       
    }


    public class CodesDtoWithSettings<T>: BaseDtoWithSettings<T>
        where T:new()
    {
        public string DisplayName { get; set; }
        public string No { get; set; }
        public Guid Id { get; set; }             
    }

    public class DtoWithSettingsConverter : Newtonsoft.Json.JsonConverter
    {     
        public override bool CanConvert(Type objectType)
        {
            return typeof(IDtoWithSettings).IsAssignableFrom(objectType);
        }

        public override void WriteJson(JsonWriter writer, object value, Newtonsoft.Json.JsonSerializer serializer)
        {
            var obj = ((IDtoWithSettings)value);
            writer.WriteStartObject();

            JObject jObj = JObject.FromObject(value);
            foreach (var f in jObj.Properties())
            {
                writer.WritePropertyName(f.Name);
                serializer.Serialize(writer, f.Value);
            }
            foreach (string foo in obj.SettingsPropertyName)
            {
                writer.WritePropertyName(foo);
                var jsonValue = ((IDtoWithSettings)value)[foo];
                serializer.Serialize(writer, jsonValue);
            }
            writer.WriteEndObject();
        }

        public override bool CanRead
        {
            get { return true; }
        }

       
        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, Newtonsoft.Json.JsonSerializer serializer)
        {
            const string settingKey = "Setting";
            if (reader.TokenType == JsonToken.Null) return null;

            //建立來源實體
            object instance = Activator.CreateInstance(objectType);

            //讀取input資料
            var jObj = JObject.Load(reader);

            //取得已有屬性
            List<string> ignoreKey = objectType.GetProperties().Select(x => x.Name).ToList();
            serializer.Populate(jObj.CreateReader(), instance);

            var target = JObject.FromObject(instance);
            foreach (var f in jObj.Properties())
            {
                //過濾掉已有屬性
                if (!ignoreKey.Contains(f.Name))
                {               
                    //判斷Setting屬性是否已存在
                    if(target.ContainsKey(settingKey)) target[settingKey][f.Name] = f.Value;
                    else target.Add(new JProperty(settingKey, new JObject(new JProperty(f.Name, f.Value))));
                }
            }
            
            return target.ToObject(objectType);
        }
      
    }
}
