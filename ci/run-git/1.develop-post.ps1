#¤Á´«¨ìLocal Release
. ".\0.common.ps1"
Set-Location $rootFolder

Write-Host "do all post start"

$command = WithDevelopBranch "
git fetch;git pull;git push"
#$command = CommandWithDevelopBranch "git branch"

git submodule foreach $command


Write-Host "do all post end"
Set-Location $rootFolder

