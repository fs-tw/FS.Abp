using FS.Abp.Npoi.Mapper;
using FS.Abp.Npoi.Mapper.Attributes;
using FS.CmsKitManagement.Vocabularies;
using Microsoft.Extensions.Options;
using Npoi.Mapper.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Data;

namespace FS.CmsKitManagement.Data.Vocabularies
{
    public class VocabulariesSeederOptions : FS.Abp.Data.ISeederOptions
    {
        public VocabulariesSeederOptions()
        {
            FileNames = new List<string>();
        }
        public bool Ignore { get; set; }
        public List<string> FileNames { get; set; }
    }
    public class VocabulariesSeeder : FS.Abp.Data.Seeder<VocabulariesSeederOptions>
    {
        [LevelStartAt(2)]
        public class VocabulariesInfo : ITreeNode<VocabulariesInfo>
        {
            [Column("代碼")]
            public string No { get; set; }
            [Column("名稱")]
            public string DisplayName { get; set; }

            public List<VocabulariesInfo> Children { get; set; }
            public string Code { get; set; }
        }
        protected IVirtualFileNpoiReader VirtualFileNpoiReader => this.LazyServiceProvider.LazyGetRequiredService<IVirtualFileNpoiReader>();
        protected IVocabulariesStore VocabulariesStore => this.LazyServiceProvider.LazyGetRequiredService<IVocabulariesStore>();


        protected override async Task SeedAsync(DataSeedContext context)
        {

            foreach (var fileName in Options.FileNames)
            {
                var sheetNames = VirtualFileNpoiReader.GetSheetNames(fileName);

                var VocabularyDefinitions = await this.VocabulariesStore.VocabularyDefinition.GetListAsync();//db

                sheetNames = sheetNames.Except(VocabularyDefinitions.Select(x => x.No)).ToList();

                foreach (var sheetName in sheetNames)
                {
                    VocabularyDefinition definition = new VocabularyDefinition(this.GuidGenerator.Create());
                    definition.DisplayName = sheetName;
                    definition.No = sheetName;

                    var items = VirtualFileNpoiReader.ReadToTreeNode<VocabulariesInfo>(fileName, sheetName);

                    var vocabularys = items.Select(i => mapTo(definition.Id, null, i));

                    await this.VocabulariesStore.VocabularyDefinition.InsertAsync(definition, true);
                    await this.VocabulariesStore.Vocabulary.InsertManyAsync(vocabularys, true);
                };
            }
            Vocabulary mapTo(Guid definitionId, Guid? parentId, VocabulariesInfo item)
            {
                Vocabulary result = new Vocabulary(this.GuidGenerator.Create())
                {
                    TenantId = context.TenantId,
                    No = item.DisplayName,
                    DisplayName = item.DisplayName,
                    VocabularyDefinitionId = definitionId,
                    ParentId = parentId
                };

                result.Children = item.Children?.Select(c => mapTo(definitionId, result.Id, c)).ToList();
                return result;
            }
        }
    }
}
