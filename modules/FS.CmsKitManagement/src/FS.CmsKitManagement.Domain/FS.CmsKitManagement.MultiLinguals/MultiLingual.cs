using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Data;
using System.Threading.Tasks;

namespace FS.CmsKitManagement.MultiLinguals
{
    public partial class MultiLingual
    {
        public async Task<TTranslation> GetOrDefaultTranslationAsync<TTranslation>(IMultiLingualsStore store, string culture = null)
            where TTranslation : class, new()
        {
            var result = new TTranslation();

            var multiLingual = await store.FindMultiLingualAsync(this);

            var translation = multiLingual.MultiLingualTranslations
                .SingleOrDefault(x => x.Culture == (culture ?? multiLingual.DefaultCulture));

            typeof(TTranslation).GetProperties()
                .ToList()
                .ForEach(p =>
                {
                    var value = translation == null
                        ? this.GetType().GetProperties().SingleOrDefault(x => x.Name == p.Name).GetValue(this)
                        : translation.Properties.SingleOrDefault(y => y.Name == p.Name).Value;
                    p.SetValue(result, value);
                });

            return result;
        }

        public async Task<TTranslation> AddOrReplaceTranslationAsync<TTranslation>(IMultiLingualsStore store, string culture, TTranslation translation)
            where TTranslation : class, new()
        {
            TTranslation result = default(TTranslation);

            var multiLingual = await store.FindMultiLingualAsync(this);

            multiLingual.MultiLingualTranslations.RemoveAll(x => x.Culture == culture);

            var multiLingualTranslation = await store.CreateMultiLingualTranslationAsync(multiLingual, culture);

            multiLingualTranslation.Properties = translation.GetType().GetProperties()
                .Select(p =>
                {
                    return new Volo.Abp.NameValue(p.Name, p.GetValue(translation).ToString());
                }).ToList();

            return result;
        }
    }

}
