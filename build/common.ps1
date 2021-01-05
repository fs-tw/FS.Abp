$full = $args[0]

# COMMON PATHS 

$rootFolder = (Get-Item -Path "./" -Verbose).FullName

# List of solutions used only in development mode
$solutionPaths = @(
		"../modules/FS.Abp.AspNetCore",
		"../modules/FS.Abp.Line",
		"../modules/FS.Abp.Npoi.Mapper",
        "../"
	)

if ($full -eq "-f")
{
	# List of additional solutions required for full build
}else{ 
	Write-host ""
	Write-host ":::::::::::::: !!! You are in development mode !!! ::::::::::::::" -ForegroundColor red -BackgroundColor  yellow
	Write-host "" 
} 