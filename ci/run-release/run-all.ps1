. ".\0.common.ps1"
. ".\1.pre-release-step1.ps1"



#$Version = Read-Host -Prompt 'Input release version'



#$ExcludeSplit = "abp|tools/entitydeveloper|applications/*|modules/FS.Abp.Trees)"




Write-Host "run-all"
Set-Location $rootFolder
