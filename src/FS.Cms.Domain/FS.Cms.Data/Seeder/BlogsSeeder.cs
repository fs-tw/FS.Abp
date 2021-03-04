using FS.Abp.VirtualFileSystem;
using FS.Cms.Data.Definitions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Guids;


namespace FS.Cms.Data.Seeder
{
    public class BlogsSeeder : ITransientDependency
    {
        //private readonly string fileRoute = "/Files/Data/Codes/Definition.json";
        public IGuidGenerator guidGenerator { get; set; }
        public IVirtualFileJsonReader virtualFileJsonReader { get; set; }

       
        public async Task SeedAsync(DataSeedContext context)
        {
            //List<BaseCodesJson> sourceData = this.virtualFileJsonReader.ReadJson<List<BaseCodesJson>>(fileRoute);

            //foreach (var item in sourceData)
            //{
            //    var definition = this.codesTreeRepository.Where(x => x.No == item.No).FirstOrDefault();
            //    if (definition != null) continue;

            //    Codes codes = new Codes();
            //    codes.No = item.No;
            //    codes.DisplayName = item.DisplayName;
            //    codes.Enable = true;
            //    codes.Description = item.Description;
            //    codes.TenantId = context.TenantId;
            //    EntityHelper.TrySetId(codes, () => this.guidGenerator.Create(), true);
            //    await this.codesTreeRepository.InsertAsync(codes, true).ConfigureAwait(false);
            //    await createChildren(context, item.Children, codes);
            //}
        }


        //private async Task createChildren(DataSeedContext context, List<BaseCodesJson> children, Codes parent)
        //{
        //    foreach (var item in children)
        //    {

        //        Codes codes = new Codes();
        //        codes.No = item.No;
        //        codes.DisplayName = item.DisplayName;
        //        codes.Enable = true;
        //        codes.Description = item.Description;
        //        codes.ParentId = parent.Id;
        //        codes.DefinitionId = parent.DefinitionId == null ? parent.Id : parent.DefinitionId;
        //        codes.TenantId = context.TenantId;
        //        EntityHelper.TrySetId(codes, () => this.guidGenerator.Create(), true);
        //        await this.codesTreeRepository.InsertAsync(codes, true).ConfigureAwait(false);

        //        if (item.Children.Count > 0)
        //        {
        //            await createChildren(context, item.Children, codes);
        //        }

        //    }
        //}

    }
}
