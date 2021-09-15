using System;
using System.Collections.Generic;
using System.Text;
using CrystalQuartzSample.Localization;
using Volo.Abp.Application.Services;

namespace CrystalQuartzSample
{
    /* Inherit your application services from this class.
     */
    public abstract class CrystalQuartzSampleAppService : ApplicationService
    {
        protected CrystalQuartzSampleAppService()
        {
            LocalizationResource = typeof(CrystalQuartzSampleResource);
        }
    }
}
