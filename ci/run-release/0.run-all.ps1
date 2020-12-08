Write-Host "run-all Start"
. ".\0.common.ps1"
. ".\1.pre-release-step1.ps1"
. ".\1.pre-release-step2.ps1"
. ".\1.pre-release-step3.ps1"
. ".\1.pre-release-step4.ps1"
. ".\1.pre-release-step5.ps1"



#$Version = Read-Host -Prompt 'Input release version'



#$ExcludeSplit = "abp|tools/entitydeveloper|applications/*|modules/FS.Abp.Trees)"




Write-Host "run-all End"
Set-Location $rootFolder
