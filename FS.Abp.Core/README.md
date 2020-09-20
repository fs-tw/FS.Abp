# How to use
Domain
Application
EntityFrameworkCore

#Abp Module

## Main Function (Api)
Domain:

	Repository:
		IEntityChangeRepository
	Helper:
		HasExtraPropertiesExtensions
	Settings:
		FS.Abp.Settings.IFactory
		SettingProviderExtensions
	Specifications:
		PropertiesEqualitySpecification
		SearchSpecification
	VirtualFileSystem:
		IVirtualFileJsonReader


Application:
	AppSerivce:
		CrudAppService : abstract CrudAppService
		ISearchedPagedAndSortedOperation : search common method


## Dependencies
Domain 
--depend 
	Volo.Abp.Specifications
	EasyAbp.Abp.Trees

EntityFrameworkCore
--depend 
	EasyAbp.Abp.Trees.EntityFrameworkCore

Application
--depend 
	Volo.Abp.FluentValidation


HttpApi
--depend Volo.Abp.IdentityServer.Domain

## Todo
angular ui
unit test