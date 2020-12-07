#Split angular/libs/*
#. ".\0.common.ps1"
Set-Location $rootFolder

Write-Host "pre-release-step4 start"

$command = CommandNgLibsBuilder "
git push --set-upstream origin release/$Version -f"
git submodule foreach $command

git add . ; git commit -m "$Version split libs success" ; git push --set-upstream origin release/$Version -f 

Write-Host "pre-release-setp4 end"
Set-Location $rootFolder

