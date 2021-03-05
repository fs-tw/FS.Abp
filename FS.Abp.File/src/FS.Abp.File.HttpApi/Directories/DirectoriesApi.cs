﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.DependencyInjection;
using Volo.FileManagement;
using Volo.FileManagement.Directories;

namespace FS.Abp.File.Directories
{

    [RemoteService]
    [Route("api/file-management/directory-descriptor")]
    [ControllerName("DirectoryDescriptors")]
    //[ExposeServices(
    //    typeof(DirectoryDescriptorController)
    //)]
    public class DirectoriesApi : FileController, IDirectoriesApi
    {
        private IDirectoriesAppService directoriesAppService => this.LazyServiceProvider.LazyGetRequiredService<IDirectoriesAppService>();

        [HttpGet]
        [Route("provider/{key}")]
        public Task<DirectoryDescriptorDto> FindByProviderAsync(string key, string group = null)
        {
            return this.directoriesAppService.FindByProviderAsync(key, group);
        }
    }
}
