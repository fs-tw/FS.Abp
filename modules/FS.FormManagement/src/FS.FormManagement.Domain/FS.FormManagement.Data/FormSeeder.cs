using FS.Abp.VirtualFileSystem;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Guids;
using Volo.Forms;
using Volo.Forms.Forms;

namespace FS.FormManagement.Data
{
    public class FormSeederOptions:FS.Abp.Data.ISeederOptions
    {
        public bool Ignore { get; set; }
        public string FileName { get; set; }
    }
    public class ChoiceInfo
    {
        public int Index;
        public string Value;
    }
    public class QuestionInfo
    {
        public string Title;
        public QuestionTypes QuestionType;
        public List<ChoiceInfo> Choices;
    }
    public class InputInfo
    {
        public Guid? Id;
        public string Title;
        public List<QuestionInfo> Questions;
    }

    public class FormSeeder :FS.Abp.Data.Seeder<FormSeederOptions>, ITransientDependency
    {
        public IVirtualFileJsonReader virtualJsonReader { get; set; }
        private IFormRepository formRepository;
        private Volo.Forms.Questions.QuestionManager questionManager;
        public FormSeeder(
            IGuidGenerator guidGenerator,
            IFormRepository formRepository,
            Volo.Forms.Questions.QuestionManager questionManager
        )
        {
            this.formRepository = formRepository;
            this.questionManager = questionManager;
        }

        protected override async Task SeedAsync(DataSeedContext context)
        {
            if (string.IsNullOrEmpty(Options.FileName))
                return;
            var SourceData = Options.FileName;

            List<InputInfo> formals = virtualJsonReader.ReadJson<List<InputInfo>>(SourceData);
            var excludeTitle = (await formRepository.GetListAsync(x => formals.Select(y => y.Title).Contains(x.Title))).Select(x=>x.Title);

            formals = formals.Where(x => !excludeTitle.Contains(x.Title)).ToList();

            List<Form> inputForms = new List<Form> { };
            foreach (var data in formals)
            {
                Form form = new Form(GuidGenerator.Create(), data.Title, isQuiz: true, tenantId: context.TenantId);
                await formRepository.InsertAsync(form, true);
                foreach (var item in data.Questions)
                {
                    List<(string value, bool isCorrect)> choices = item.Choices.Select(x => (x.Value, false)).ToList();
                    await questionManager.CreateQuestionAsync(form, item.QuestionType, data.Questions.IndexOf(item), false, item.Title, item.Title, false, choices);
                }
            }
            await formRepository.InsertManyAsync(inputForms, true);
        }
    }
}