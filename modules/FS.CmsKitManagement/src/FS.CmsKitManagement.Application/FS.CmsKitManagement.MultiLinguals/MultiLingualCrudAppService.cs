﻿using FS.CmsKitManagement.MultiLinguals.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace FS.CmsKitManagement.MultiLinguals
{
    public partial class MultiLingualCrudAppService : IMultiLingualCrudAppService
    {
        protected IMultiLingualsStore MultiLingualsStore => this.LazyServiceProvider.LazyGetRequiredService<IMultiLingualsStore>();
        public async Task<MultiLingualWithDetailsDto> FindAsync(MultiLingualFindDto input)
        {
            var query = await this.Repository.WithDetailsAsync();
            var entity = input.ApplyFilterTo(query).SingleOrDefault();
            var dto = await MapToGetListOutputDtoAsync(entity);
            return dto;
        }

        public async Task PatchAsync(MultiLingualPatchDto input)
        {
            var query = await this.Repository.WithDetailsAsync();

            MultiLingualFindDto find = new MultiLingualFindDto() { CombineWith = AutoFilterer.Enums.CombineType.And, EntityType = input.EntityType, EntityId = input.EntityId };
            var exist = find.ApplyFilterTo(query).SingleOrDefault();

            var multiLingual = exist ?? await MultiLingualsStore.CreateMultiLingualAsync(input.EntityType, input.EntityId);

            //to delete
            var toDeleteCultures = multiLingual.MultiLingualTranslations.Select(x => x.Culture).Except(input.Translations.Select(x => x.Culture));
            multiLingual.MultiLingualTranslations.RemoveAll(x => toDeleteCultures.Contains(x.Culture));

            //to add or update
            await input.Translations.ForEachAsync(async x =>
            {
                await multiLingual.AddOrReplaceTranslationAsync(MultiLingualsStore, x.Culture, x.Properties);
            });

            if (exist == null)
            {
                await Repository.InsertAsync(multiLingual);
            }
            else
            {
                await Repository.UpdateAsync(multiLingual);
            }

        }
    }
}
