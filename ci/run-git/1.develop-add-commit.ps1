#¤Á´«¨ìLocal Release
. ".\0.common.ps1"
$Commit = Read-Host -Prompt 'Input commit message'
Set-Location $rootFolder

Write-Host "develop add and commit start"

#git add .;git commit -m '$Commit';
$command = WithDevelopBranch "
git add .;git diff-index --quiet HEAD || git commit -m '$Commit'"

git submodule foreach $command


Write-Host "develop add and commit end"
Set-Location $rootFolder

