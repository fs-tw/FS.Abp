﻿using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Data;
using System.Threading.Tasks;
using FS.Entity.MultiLinguals;

namespace FS.Entity.MultiLinguals
{
    public partial class MultiLingual
    {
        public Task<TTranslation> GetOrDefaultTranslationAsync<TEntity, TTranslation>(IMultiLingualsStore store, TEntity entity, string culture = null)
            where TTranslation : class, new()
            where TEntity : Volo.Abp.Domain.Entities.IEntity<Guid>
        {
            var result = new TTranslation();

            var translation = MultiLingualTranslations
                .SingleOrDefault(x => x.Culture == culture);

            typeof(TTranslation).GetProperties()
                .ToList()
                .ForEach(p =>
                {
                    var value = translation == null
                        ? entity.GetType().GetProperties().SingleOrDefault(x => x.Name == p.Name).GetValue(entity)
                        : translation.Properties.SingleOrDefault(y => y.Name == p.Name).Value;
                    p.SetValue(result, value);
                });

            return Task.FromResult(result);
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
            MultiLingualTranslations.Where(x => x.Culture == culture)
                .Skip(1)
                .ToList()
                .ForEach(t =>
                {
                    MultiLingualTranslations.Remove(t);
                });
            var translation = MultiLingualTranslations.SingleOrDefault(x => x.Culture == culture) ?? await store.CreateMultiLingualTranslationAsync(this, culture);

            translation.Properties = properties;

            MultiLingualTranslations.AddIfNotContains(translation);
        }
    }

}
