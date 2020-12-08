using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace Volo.Abp.LanguageManagement.MongoDB
{
    [Collection(MongoTestCollection.Name)]
    public class LanguageTextRepository_Tests : LanguageTextRepository_Tests<LanguageManagementMongoDbTestModule>
    {

    }
}
