using FS.Abp.AuditLogging.Samples;

namespace FS.Abp.AuditLogging.EntityFrameworkCore.Samples
{
    public class SampleRepository_Tests : SampleRepository_Tests<AuditLoggingEntityFrameworkCoreTestModule>
    {
        /* Don't write custom repository tests here, instead write to
         * the base class.
         * One exception can be some specific tests related to EF core.
         */
    }
}
