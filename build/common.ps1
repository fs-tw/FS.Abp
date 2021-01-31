$full = $args[0]

# COMMON PATHS 

$rootFolder = (Get-Item -Path "./" -Verbose).FullName

# List of solutions used only in development mode
$solutionPaths = @(
		"../framework/FS.Abp.AspNetCore",
		"../framework/FS.Abp.Npoi.Mapper",
		"../modules/FS.LineNotify",
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