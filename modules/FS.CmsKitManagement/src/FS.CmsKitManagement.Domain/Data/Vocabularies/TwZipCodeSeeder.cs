using FS.CmsKitManagement.Vocabularies;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Services;

namespace FS.CmsKitManagement.Data.Vocabularies
{
    public class TwZipCodeSeeder : DomainService, ITransientDependency
    {
        protected VocabulariesStore VocabulariesStore => this.LazyServiceProvider.LazyGetRequiredService<VocabulariesStore>();

        public async Task SeedAsync(DataSeedContext context)
        {
            //todo: addOrReplace TwZipCode.json
            //1:VocabularyDefinition=>No:TwZipCode
            //2:Vocabulary=>2 Level tree data


        }

    }
}
