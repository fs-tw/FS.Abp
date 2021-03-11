﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.1
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;
using FS.Abp.Application.Dtos;

namespace FS.Theme.Banners.Dtos
{
    public partial class MetaData
    {
        public BannerPrimaryKeyDto BannerPrimaryKeyDto => new BannerPrimaryKeyDto();
        public BannerDto BannerDto => new BannerDto();
        public BannerCreateDto BannerCreateDto => new BannerCreateDto();
        public BannerUpdateDto BannerUpdateDto => new BannerUpdateDto();
        public BannerGetListDto BannerGetListDto => new BannerGetListDto();
        public BannerWithDetailsDto BannerWithDetailsDto => new BannerWithDetailsDto();
    }

    public partial class BannerPrimaryKeyDto : EntityDto<Guid>
    {
    }

    public partial class BannerDto : Volo.Abp.Application.Dtos.AuditedEntityDto<Guid>
    {
        public virtual string No { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual string Description { get; set; }

        public virtual bool Disable { get; set; }

        public virtual string FileName { get; set; }

        public virtual System.Guid? ImageFileId { get; set; }

        public virtual int Sequence { get; set; }

        public virtual System.Guid BannerDefinitionId { get; set; }

    }

    public partial class BannerCreateDto
    {
        public virtual string No { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual string Description { get; set; }

        public virtual bool Disable { get; set; }

        public virtual string FileName { get; set; }

        public virtual System.Guid? ImageFileId { get; set; }

        public virtual int Sequence { get; set; }

        public virtual System.Guid BannerDefinitionId { get; set; }

    }

    public partial class BannerUpdateDto
    {
        public virtual string No { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual string Description { get; set; }

        public virtual bool Disable { get; set; }

        public virtual string FileName { get; set; }

        public virtual System.Guid? ImageFileId { get; set; }

        public virtual int Sequence { get; set; }

        public virtual System.Guid BannerDefinitionId { get; set; }

    }

    public partial class BannerGetListDto : SearchResultRequestDto
    {
    }

    public partial class BannerWithDetailsDto : BannerDto
    {
        public BannerDefinitionDto BannerDefinition { get; set; }

    }
}
