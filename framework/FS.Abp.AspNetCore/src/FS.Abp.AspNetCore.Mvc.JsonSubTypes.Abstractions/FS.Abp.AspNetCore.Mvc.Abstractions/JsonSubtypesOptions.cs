using JsonSubTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Volo.Abp.Collections;

namespace FS.Abp.AspNetCore.Mvc.JsonSubTypes
{
    public class JsonSubtypesOptions
    {
        public IList<IJsonSubtypesConverterProfile> Profiles { get; }
        public JsonSubtypesOptions()
        {
            Profiles = new List<IJsonSubtypesConverterProfile>();
        }
        public void AddProfiles<TModule>()
        {
            var converterTypes = typeof(TModule).Assembly
                .DefinedTypes
                .Where(type => typeof(IJsonSubtypesConverterProfile).IsAssignableFrom(type) && !type.IsAbstract && !type.IsGenericType);

            converterTypes.ToList().ForEach(converterType =>
            {
                var profile = (IJsonSubtypesConverterProfile)Activator.CreateInstance(converterType);
                this.Profiles.Add(profile);
            });
        }
        public List<Type> FindBaseClasses<T>()
        {
            return this.FindBaseClasses(typeof(T));
        }
        public List<Type> FindBaseClasses(Type baseType)
        {
            return this.Profiles.SelectMany(x => x.JsonSubtypesConverterDefinitions)
                .Where(x => x.BaseType == baseType)
                .SelectMany(x => x.Subtypes)
                .Select(x => x.Subtype)
                .ToList();
        }
    }
}
