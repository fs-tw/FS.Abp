#¤Á´«¨ìLocal Release
. ".\0.common.ps1"
$Feature = Read-Host -Prompt 'Input feature name'
Set-Location $rootFolder

Write-Host "add feature start"

#git add .;git commit -m '$Commit';
$command = WithDevelopBranch "
git flow feature start '$Feature' develop"

git submodule foreach $command


Write-Host "add feature end"
Set-Location $rootFolder

