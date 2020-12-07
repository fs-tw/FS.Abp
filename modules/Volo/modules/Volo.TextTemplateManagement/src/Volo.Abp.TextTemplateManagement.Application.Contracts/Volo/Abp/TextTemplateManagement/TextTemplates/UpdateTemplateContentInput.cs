﻿using System.ComponentModel.DataAnnotations;
using Volo.Abp.Validation;

namespace Volo.Abp.TextTemplateManagement.TextTemplates
{
    public class UpdateTemplateContentInput
    {
        [Required]
        [DynamicStringLength(typeof(TextTemplateConsts), nameof(TextTemplateConsts.MaxNameLength))]
        public string TemplateName { get; set; }

        [DynamicStringLength(typeof(TextTemplateConsts), nameof(TextTemplateConsts.MaxCultureNameLength))]
        public string CultureName { get; set; }

        public string Content { get; set; }
    }
}