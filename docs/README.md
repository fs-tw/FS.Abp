# FS.Abp
[![ABP version](https://img.shields.io/badge/dynamic/xml?style=flat-square&color=yellow&label=abp&query=%2F%2FProject%2FPropertyGroup%2FAbpVersion&url=https%3A%2F%2Fraw.githubusercontent.com%2Ffs-tw%2FFS.Abp%2Fdevelop%2Fcommon.props)](https://abp.io)
[![NuGet](https://img.shields.io/nuget/v/FS.Abp.Domain.Shared.svg?style=flat-square)](https://www.nuget.org/packages/FS.Abp.Domain.Shared)
[![NuGet Download](https://img.shields.io/nuget/dt/FS.Abp.Domain.Shared.svg?style=flat-square)](https://www.nuget.org/packages/FS.Abp.Domain.Shared)
[![GitHub stars](https://img.shields.io/github/stars/fs-tw/FS.Abp?style=social)](https://www.github.com/FurtherSoftware/FS.Abp)


this is an abp module that enhance function by [furthersoftware](http:www.furthersoftware.com.tw).

## Function List
1. VirtualFileSystem  
You can read json file as dataseed data.(if datas count has more than 1000+)  

2. CrudAppService  
We add two fields in getAsync(Read) : `fields`:inputEntity's name,`Value`:yoursearchText , It will list all of search result with pageing.     

3. Emailing  
We provide a angular ui(npm install @fs-tw/emailing),you can set smtp setting through angular .  

4. Account  
Current Version of abp(4.0.2), abp team remove angular's 'password' flow ,we add this back in our version(npm install @fs-tw/account).

## Installation
1. Install the following NuGet packages.  
    * FS.Abp.Application
    * FS.Abp.Application.Contracts
    * FS.Abp.Domain
    * FS.Abp.Domain.Shared
    * FS.Abp.EntityFrameworkCore
    * FS.Abp.HttpApi
    
2. Add `DependsOn(typeof(FS.Abp.AbpXxxModule))` attribute to configure the module dependencies.  
3. Add `builder.ConfigureAbp();` to the `OnModelCreating()` method in **MyProjectMigrationsDbContext.cs**.  

## Online Demo
`TODO`

## ScreenShot 
`TODO`














