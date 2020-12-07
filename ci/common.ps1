# COMMON PATHS

$rootFolder = (Get-Item -Path "./" -Verbose).FullName

# List of solutions
$solutionPaths = (
    "..\framework",
    "..\modules\FS.Abp",
    "..\modules\FS.Abp.V4",
    "..\modules\FS.Cms",
    "..\modules\FS.Theme"
    
    #"../"
    #"../tools/entitydeveloper/FS.ED"


)

#Write-Host $solutionPaths