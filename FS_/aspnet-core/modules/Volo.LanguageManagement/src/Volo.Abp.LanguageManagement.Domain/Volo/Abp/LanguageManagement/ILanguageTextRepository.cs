using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Repositories;

namespace Volo.Abp.LanguageManagement
{
    public interface ILanguageTextRepository : IBasicRepository<LanguageText, Guid>
    {
        List<LanguageText> GetList(string resourceName, string cultureName);
    }
}