#¤Á´«¨ìLocal Release
#. ".\0.common.ps1"
Set-Location $rootFolder

Write-Host "pre-release-step2 start"

git flow release start $Version; git checkout release/$Version

$command = CommandWithoutReleaseBuilder "git flow release start $Version; git checkout release/$Version"
git submodule foreach $command


Write-Host "pre-release-setp2 end"
Set-Location $rootFolder

