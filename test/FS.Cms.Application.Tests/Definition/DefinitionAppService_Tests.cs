using FS.Cms.Definitions;
using Shouldly;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;
using Shouldly;
using System.Linq;
using Volo.Abp.ObjectMapping;

namespace FS.Cms.Samples
{
    public class PostAppService_Tests : CmsApplicationTestBase
    {
        private readonly IDefinitionsAppService _definitionAppService;
        private readonly IObjectMapper _ObjectMapper;
        public PostAppService_Tests()
        {
            _ObjectMapper = GetRequiredService<IObjectMapper>();
            _definitionAppService = GetRequiredService<IDefinitionsAppService>();
        }

        [Fact]
        public async Task Blog_GetList_Async()
        {
            var blogs = await _definitionAppService.BlogGetListAsync();
            blogs.Count.ShouldBe(3);
        }


        //[Fact]
        //public async Task Tag_CRU_Async()
        //{
        //    List<TagDto> result = new List<TagDto>();

        //    await WithUnitOfWorkAsync(() =>
        //    {
        //        TagForCreateDto input1 = new TagForCreateDto()
        //        {
        //            DisplayName = "地區",
        //            Tags = new List<TagForCreateDto>()
        //        {
        //            new TagForCreateDto(){ DisplayName = "北區" },
        //            new TagForCreateDto(){ DisplayName = "中區" },
        //            new TagForCreateDto(){ DisplayName = "南區" },
        //            new TagForCreateDto(){ DisplayName = "東區" }
        //        }
        //        };

        //        TagForCreateDto input2 = new TagForCreateDto()
        //        {
        //            DisplayName = "類型",
        //            Tags = new List<TagForCreateDto>()
        //        {
        //            new TagForCreateDto(){ DisplayName = "★" },
        //            new TagForCreateDto(){ DisplayName = "★★" },
        //            new TagForCreateDto(){ DisplayName = "★★★" },
        //            new TagForCreateDto(){ DisplayName = "★★★★" },
        //            new TagForCreateDto(){ DisplayName = "★★★★★" }
        //        }
        //        };

        //        this._definitionAppService.TagCreateAsync(input1);
        //        this._definitionAppService.TagCreateAsync(input2);
        //    });
           
        //    await WithUnitOfWorkAsync(async () =>
        //    {
        //       result = await this._definitionAppService.TagGetListAsync();
        //       result.Count().ShouldBe(2);
             
        //    });

        //    await WithUnitOfWorkAsync(async () =>
        //    {
        //        TagForUpdateDto updateTarget = new TagForUpdateDto();
        //        _ObjectMapper.Map(result.First(), updateTarget);
        //        updateTarget.DisplayName = "修改測試";
        //        updateTarget.Tags[0].DisplayName = "Test";
        //        updateTarget.Tags.Add(new TagForUpdateDto() { DisplayName = "新的一筆" });
        //        await this._definitionAppService.TagUpdateAsync(updateTarget);

        //        var checkList = await this._definitionAppService.TagGetListAsync();

        //        var count = checkList.SelectMany(x => x.Tags).ToList().Count();
        //        count.ShouldBe(10);
        //    });

        //}
    }
}
