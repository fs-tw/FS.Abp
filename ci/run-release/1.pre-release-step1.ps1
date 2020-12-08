#�N�Ҧ�submodule��l�ƨñҥ�Git flow�A
#. ".\0.common.ps1"
Set-Location $rootFolder

Write-Host "pre-release-step1 start"

git flow init -d

git submodule update --init --recursive -j 10

$command = CommandWithoutReleaseBuilder "git flow init -d"
git submodule foreach $command

Write-Host "pre-release-step1 end"
Set-Location $rootFolder

