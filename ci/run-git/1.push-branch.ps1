#¤Á´«¨ìLocal Release
. ".\0.common.ps1"
Set-Location $rootFolder

Write-Host "push branch start"

$branch='$(git branch --show-current)'

$command = "git push -u origin $branch"

git submodule foreach $command


Write-Host "push branch end"
Set-Location $rootFolder

