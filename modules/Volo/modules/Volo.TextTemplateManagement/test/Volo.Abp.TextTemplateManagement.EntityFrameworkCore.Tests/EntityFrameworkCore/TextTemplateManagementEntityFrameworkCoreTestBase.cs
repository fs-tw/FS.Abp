namespace Volo.Abp.TextTemplateManagement.EntityFrameworkCore
{
    /* This class can be used as a base class for EF Core integration tests,
     * while TextTemplateRepository_Tests uses a different approach.
     */
    public abstract class TextTemplateManagementEntityFrameworkCoreTestBase : TextTemplateManagementTestBase<TextTemplateManagementEntityFrameworkCoreTestModule>
    {

    }
}