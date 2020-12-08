using FS.Abp.CodingManagement.CodeSetting.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FS.Cms.Tags
{
    public partial class TagAppService : CmsAppService
    {
        public async Task<List<TagGroupDto>> TagGroupGetListAsync()
        {
            var definition = await CodingStore.Codes
                .GetOrInsertDefinitionAsync(CmsDefinition.CmsTagDefinition, CmsDefinition.CmsTagDefinition);
            List<TagGroupDto> result = new List<TagGroupDto>();

            //foreach (var item in definition.Children) 
            //{
            //    TagGroupDto group = new TagGroupDto();
            //    group.TagGroupName = item.DisplayName;
            //    ObjectMapper.Map(item.Children, group.Tags);
            //    result.Add(group);
            //}
            List<TagGroupDto> fakeData = new List<TagGroupDto>() 
            {
                new TagGroupDto()
                {
                    Id=GuidGenerator.Create(),
                    TagGroupName = "地區",
                    Tags = new List<TagDto>()
                    {
                        new TagDto(){ Id = GuidGenerator.Create(),Name = "北區" },
                        new TagDto(){ Id = GuidGenerator.Create(),Name = "中區" },
                        new TagDto(){ Id = GuidGenerator.Create(),Name = "南區" },
                        new TagDto(){ Id = GuidGenerator.Create(),Name = "離島區" },
                        new TagDto(){ Id = GuidGenerator.Create(),Name = "東區" }
                    }
                },
                new TagGroupDto()
                {
                    Id=GuidGenerator.Create(),
                    TagGroupName = "星等",
                    Tags = new List<TagDto>()
                    {
                        new TagDto(){ Id = GuidGenerator.Create(),Name = "★" },
                        new TagDto(){ Id = GuidGenerator.Create(),Name = "★★" },
                        new TagDto(){ Id = GuidGenerator.Create(),Name = "★★★" },
                        new TagDto(){ Id = GuidGenerator.Create(),Name = "★★★★" },
                        new TagDto(){ Id = GuidGenerator.Create(),Name = "★★★★★" }
                    }
                },
                new TagGroupDto()
                {
                    Id=GuidGenerator.Create(),
                    TagGroupName = "測試分類",
                    Tags = new List<TagDto>()
                    {
                        new TagDto(){ Id = GuidGenerator.Create(),Name = "分類1" },
                        new TagDto(){ Id = GuidGenerator.Create(),Name = "分類2" },
                        new TagDto(){ Id = GuidGenerator.Create(),Name = "分類3" },
                        new TagDto(){ Id = GuidGenerator.Create(),Name = "分類4" },
                        new TagDto(){ Id = GuidGenerator.Create(),Name = "分類5" },
                        new TagDto(){ Id = GuidGenerator.Create(),Name = "分類6" },
                        new TagDto(){ Id = GuidGenerator.Create(),Name = "分類7" },
                        new TagDto(){ Id = GuidGenerator.Create(),Name = "分類8" }
                    }
                }
            };
            return fakeData;
        }


        public async Task TagGroupCreateAsync(TagForCreateDto input)
        {
            var definition = await CodingStore.Codes
                .GetOrInsertDefinitionAsync(CmsDefinition.CmsTagDefinition, CmsDefinition.CmsTagDefinition);
            CreateCodesModel codes = new CreateCodesModel();
            ObjectMapper.Map(input, codes);
            await CodingStore.CreateCodeSetting(definition.Id, definition.Id, codes);
        }

    }
}
