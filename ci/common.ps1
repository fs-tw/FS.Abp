# COMMON PATHS

$rootFolder = (Get-Item -Path "./" -Verbose).FullName

# List of solutions
$solutionPaths = (
    "..\framework",
    "..\modules\Volo",

    "..\applications\FS\aspnet-core"
    
    #"../"
    #"../tools/entitydeveloper/FS.ED"


)

#Write-Host $solutionPaths