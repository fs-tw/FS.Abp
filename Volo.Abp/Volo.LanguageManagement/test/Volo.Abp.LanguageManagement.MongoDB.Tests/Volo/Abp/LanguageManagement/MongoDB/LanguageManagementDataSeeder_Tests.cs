using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace Volo.Abp.LanguageManagement.MongoDB
{
    [Collection(MongoTestCollection.Name)]
    public class LanguageManagementDataSeeder_Tests : LanguageManagementDataSeeder_Tests<LanguageManagementMongoDbTestModule>
    {
    }
}
