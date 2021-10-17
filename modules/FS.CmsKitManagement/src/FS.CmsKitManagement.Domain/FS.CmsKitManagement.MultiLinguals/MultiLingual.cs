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
        public async Task<TTranslation> GetOrDefaultTranslationAsync<TEntity, TTranslation>(IMultiLingualsStore store, TEntity entity, string culture = null)
            where TTranslation : class, new()
            where TEntity : Volo.Abp.Domain.Entities.IEntity<Guid>
        {
            var result = new TTranslation();

            var multiLingual = await store.FindMultiLingualAsync(entity);

            var translation = multiLingual.MultiLingualTranslations
                .SingleOrDefault(x => x.Culture == culture);

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

        public async Task AddOrReplaceTranslationAsync<TEntity, TTranslation>(IMultiLingualsStore store, string culture, TEntity entity, TTranslation translation)
            where TTranslation : class, new()
            where TEntity : Volo.Abp.Domain.Entities.IEntity<Guid>
        {
            var properties = translation.GetType().GetProperties()
                .Select(p =>
                {
                    return new Volo.Abp.NameValue(p.Name, p.GetValue(translation).ToString());
                }).ToList();

            await AddOrReplaceTranslationAsync(store, culture, properties);
        }

        public async Task AddOrReplaceTranslationAsync(IMultiLingualsStore store, string culture, List<Volo.Abp.NameValue> properties)
        {
            this.MultiLingualTranslations.Where(x => x.Culture == culture)
                .Skip(1)
                .ToList()
                .ForEach(t =>
                {
                    this.MultiLingualTranslations.Remove(t);
                });
            var translation = this.MultiLingualTranslations.SingleOrDefault(x => x.Culture == culture) ?? await store.CreateMultiLingualTranslationAsync(this, culture);

            translation.Properties = properties;

            this.MultiLingualTranslations.AddIfNotContains(translation);
        }
    }

}
