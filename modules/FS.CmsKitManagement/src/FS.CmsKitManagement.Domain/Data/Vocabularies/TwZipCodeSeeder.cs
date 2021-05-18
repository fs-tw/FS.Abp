using FS.CmsKitManagement.Vocabularies;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Services;
using System.IO;
using System.Linq;
using System;
using System.Reflection;
using Volo.Abp.VirtualFileSystem;

namespace FS.CmsKitManagement.Data.Vocabularies
{
    public class TwZipCodeSeederOptions : FS.Abp.Data.ISeederOptions
    {
        public bool Ignore { get; set; }
        public string FileName { get; set; } = "Files/Vocabularies/TwZipCode.json";
    }
    public class TwZipCodeSeeder : FS.Abp.Data.Seeder<TwZipCodeSeederOptions>, ITransientDependency
    {
        protected VocabulariesStore VocabulariesStore => this.LazyServiceProvider.LazyGetRequiredService<VocabulariesStore>();

        protected IVirtualFileProvider virtualFileProvider => this.LazyServiceProvider.LazyGetRequiredService<IVirtualFileProvider>();

        protected override async Task SeedAsync(DataSeedContext context)
        {
            var sourceData = Options.FileName;
            var no = "TwZipCode";
            var stream = virtualFileProvider.GetFileInfo(sourceData).CreateReadStream();

            var jsonText = new System.IO.StreamReader(stream).ReadToEnd();

            var isExist = this.VocabulariesStore.VocabularyDefinition.Any(x => x.No == no);
            if (isExist) return;
            VocabularyDefinition newVocabularyDefinition = new VocabularyDefinition();
            newVocabularyDefinition.DisplayName = no;
            newVocabularyDefinition.No = no;
            await VocabulariesStore.VocabularyDefinition.InsertAsync(newVocabularyDefinition, true);

            var vocabularyDefinition = this.VocabulariesStore.VocabularyDefinition.Single(x => x.No == no);

            var dataList = System.Text.Json.JsonSerializer.Deserialize<List<Dictionary<string, dynamic>>>(jsonText);
            var vocabularyAddList = new List<Vocabulary>();
            foreach (var obj in dataList)
            {
                Vocabulary vocabulary = new Vocabulary();
                vocabulary.VocabularyDefinitionId = vocabularyDefinition.Id;
                vocabulary.DisplayName = obj.Keys.Single();
                vocabulary.No = vocabulary.DisplayName;
                vocabularyAddList.Add(vocabulary);
            }
            await VocabulariesStore.Vocabulary.InsertManyAsync(vocabularyAddList, true);

            var vocabularyValueAddList = new List<Vocabulary>();
            foreach (var obj in dataList)
            {
                string jsonTextLevel2 = Convert.ToString(obj.Values.Single());
                var objValueList = System.Text.Json.JsonSerializer.Deserialize<List<Dictionary<string, string>>>(jsonTextLevel2);
                var vocabularyList = await this.VocabulariesStore.Vocabulary.GetListAsync();
                Vocabulary vocabularyParent = vocabularyList.Where(x => x.DisplayName == obj.Keys.Single()).FirstOrDefault();

                foreach (var objValue in objValueList)
                {
                    Vocabulary vocabulary = new Vocabulary();
                    vocabulary.DisplayName = objValue.Keys.Single();
                    vocabulary.No = objValue.Values.Single();
                    vocabulary.VocabularyDefinitionId = vocabularyDefinition.Id;
                    vocabulary.ParentId = vocabularyParent.Id;
                    vocabularyValueAddList.Add(vocabulary);
                }
            }
            await VocabulariesStore.Vocabulary.InsertManyAsync(vocabularyValueAddList, true);
        }
    }
}
