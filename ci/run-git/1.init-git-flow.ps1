#¤Á´«¨ìLocal Release
. ".\0.common.ps1"
Set-Location $rootFolder

Write-Host "git flow init start"

#git add .;git commit -m '$Commit';
$command = WithDevelopBranch "
git flow init -d"

git submodule foreach $command


Write-Host "git flow init end"
Set-Location $rootFolder

