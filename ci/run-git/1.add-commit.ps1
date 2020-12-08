#¤Á´«¨ìLocal Release
. ".\0.common.ps1"
$Commit = Read-Host -Prompt 'Input commit message'
Set-Location $rootFolder

Write-Host "add commit start"

#git add .;git commit -m '$Commit';
$command = "git add .;git diff-index --quiet HEAD || git commit -m '$Commit'"

git submodule foreach $command


Write-Host "add commit end"
Set-Location $rootFolder

