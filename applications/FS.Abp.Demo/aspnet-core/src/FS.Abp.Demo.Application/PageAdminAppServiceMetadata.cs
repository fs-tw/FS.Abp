using FS.Abp.AuditLogging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FS.Abp.Demo
{
    [ModifyCurrentAuditLogInfo(ApplicationName ="Volo.CmsKit",ClientName ="Web")]
    public class PageAdminAppServiceMetadata : FS.Abp.Metadata.IMetadataProvider<Volo.CmsKit.Admin.Pages.PageAdminAppService>
    {
    }
}
