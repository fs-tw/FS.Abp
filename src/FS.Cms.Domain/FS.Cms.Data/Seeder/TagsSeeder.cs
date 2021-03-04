//using FS.Abp.CodingManagement.CodeSetting.Models;
//using FS.Abp.CodingManagement.Coding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace FS.Cms.Data.Seeder
{
    public class TagsSeeder : ITransientDependency
    {
        //private readonly ICodingStore codingStore;

        public TagsSeeder(
            //ICodingStore codingStore
            )
        {
            //this.codingStore = codingStore;
        }
        //todo 改成讀檔
        public async Task SeedAsync(DataSeedContext context) 
        {
            //var definition = await codingStore.Codes
            //   .GetOrInsertDefinitionAsync(CmsDefinition.CmsTagDefinition, CmsDefinition.CmsTagDefinition);

            //if (definition.Children.Count() != 0) return;

            //CreateCodesModel codes1 = new CreateCodesModel() 
            //{
            //    DisplayName = "類型",
            //    No= "類型",                
            //    Children = new List<CreateCodesModel>() 
            //    {
            //        new CreateCodesModel(){ No="★",DisplayName ="★" },
            //        new CreateCodesModel(){ No="★★",DisplayName ="★★" },
            //        new CreateCodesModel(){ No="★★★",DisplayName ="★★★" },
            //        new CreateCodesModel(){ No="★★★★",DisplayName ="★★★★" },
            //        new CreateCodesModel(){ No="★★★★★",DisplayName ="★★★★★" }
            //    }
            //};


            //CreateCodesModel codes2 = new CreateCodesModel()
            //{
            //    DisplayName = "地區",
            //    No = "地區",
            //    Children = new List<CreateCodesModel>()
            //    {
            //        new CreateCodesModel(){ No="北部",DisplayName ="北部" },
            //        new CreateCodesModel(){ No="中部",DisplayName ="中部" },
            //        new CreateCodesModel(){ No="南部",DisplayName ="南部" },
            //        new CreateCodesModel(){ No="東部",DisplayName ="東部" }
            //    }
            //};

            //await codingStore.CreateCodeSetting(definition.Id, definition.Id, codes1);
            //await codingStore.CreateCodeSetting(definition.Id, definition.Id, codes2);
        }

    }
}
