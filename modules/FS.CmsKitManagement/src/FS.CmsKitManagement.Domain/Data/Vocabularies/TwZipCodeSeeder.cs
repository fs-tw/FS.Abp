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
    public class TwZipCodeSeeder : DomainService, ITransientDependency
    {
        protected VocabulariesStore VocabulariesStore => this.LazyServiceProvider.LazyGetRequiredService<VocabulariesStore>();

        protected IVirtualFileProvider virtualFileProvider => this.LazyServiceProvider.LazyGetRequiredService<IVirtualFileProvider>();
        private const string SourceData = "Files/Vocabularies/TwZipCode.json";
        
        public async Task SeedAsync(DataSeedContext context)
        {

            var stream = virtualFileProvider.GetFileInfo(SourceData).CreateReadStream();

            var jsonText = new System.IO.StreamReader(stream).ReadToEnd();

            //todo: addOrReplace TwZipCode.json
            //1:VocabularyDefinition=>No:TwZipCode
            //2:Vocabulary=>2 Level tree data
            var vocabularyDefinitionCount = await this.VocabulariesStore.VocabularyDefinition.GetCountAsync();

            if (vocabularyDefinitionCount < 1)
            {
                VocabularyDefinition newVocabularyDefinition = new VocabularyDefinition();
                newVocabularyDefinition.DisplayName = "TwZipCode";
                newVocabularyDefinition.No = "0";
                await VocabulariesStore.VocabularyDefinition.InsertAsync(newVocabularyDefinition);
            }
            
            var vocabularyDefinitionList = await this.VocabulariesStore.VocabularyDefinition.GetListAsync();
            VocabularyDefinition vocabularyDefinition = vocabularyDefinitionList.Where(x => x.DisplayName == "TwZipCode").First();

            var dataList = System.Text.Json.JsonSerializer.Deserialize<List<Dictionary<string, dynamic>>>(jsonText);
            var vocabularyAddList=new List<Vocabulary>();
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
