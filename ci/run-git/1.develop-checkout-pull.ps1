#¤Á´«¨ìLocal Release
. ".\0.common.ps1"
Set-Location $rootFolder

Write-Host "pull develop start"

$command = DevelopBuilder "
git checkout develop;git fetch;git pull"

git submodule foreach $command


Write-Host "pull develop end"
Set-Location $rootFolder

