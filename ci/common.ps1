# COMMON PATHS

$rootFolder = (Get-Item -Path "./" -Verbose).FullName

# List of solutions
$solutionPaths = (
    "..\framework",
    "..\framework\Volo.Abp",

    "..\modules\FS.Theme\FS.Theme.NgAlainMs",
    "..\modules\FS.Theme\FS.Theme.TheProject",
    "..\modules\FS.Theme\FS.Theme.Unify",

    "..\applications\FS\aspnet-core"
    
    #"../"
    #"../tools/entitydeveloper/FS.ED"


)

#Write-Host $solutionPaths