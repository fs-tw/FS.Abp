#Split angular/libs/*
#. ".\0.common.ps1"
Set-Location $rootFolder

Write-Host "pre-release-step3 start"

$command = CommandNgLibsBuilder '
git subtree split --rejoin -P ${branch##*origin/} -b ${branch##*origin/}
git push origin ${branch##*origin/}:${branch##*origin/} -f'
git submodule foreach $command

Write-Host "pre-release-setp3 end"
Set-Location $rootFolder

