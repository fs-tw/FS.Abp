$full = $args[0]

# COMMON PATHS 

$rootFolder = (Get-Item -Path "./" -Verbose).FullName

# List of solutions used only in development mode
$solutionPaths = @(
		"../framework/FS.Abp.File"
		#"../modules/FS.Abp",
		#"../modules/FS.Cms",
		#"../modules/FS.FormManagement",
		#"../modules/FS.Theme"
	)

if ($full -eq "-f")
{
	# List of additional solutions required for full build
	#$solutionPaths += (
	#	"../modules/client-simulation",
	#	"../modules/virtual-file-explorer",
	#	"../modules/docs",
	#	"../modules/blogging",
	#	"../templates/module/aspnet-core",
	#	"../templates/app/aspnet-core",
	#	"../templates/console",
	#	"../templates/wpf",
	#	"../abp_io/AbpIoLocalization"
	#) 
}else{ 
	Write-host ""
	Write-host ":::::::::::::: !!! You are in development mode !!! ::::::::::::::" -ForegroundColor red -BackgroundColor  yellow
	Write-host "" 
} 