﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using the template for generating AbpSettings.
// 4.3.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using FS.CmsKitManagement.Blogs.Dtos;
using System.Threading.Tasks;

namespace FS.CmsKitManagement.Blogs
{
    public partial interface IBlogPostSettingAppService : // auto-generated
        Volo.Abp.Application.Services.IApplicationService
    {
        Task<BlogPostSettingDto> GetAsync(BlogPostSettingGetDto BlogPostSettingGet = null, bool fallback = true);

        Task UpdateAsync(BlogPostSettingDto BlogPostSetting, string providerName = null, string providerKey = null);
    }
}
