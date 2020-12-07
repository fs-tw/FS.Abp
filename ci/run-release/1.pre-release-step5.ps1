#Split angular/libs/*
#. ".\0.common.ps1"
Set-Location $fsFolder
Set-Location './applications/FS.WebSite/fs.website.ng'

Write-Host "pre-release-step5 start"

git flow init -d;git flow release start $Version; git checkout release/$Version

$command = CommandNgLibsBuilder '
git checkout angular/$sm_path;git pull'
git submodule foreach $command

git add . ; git commit -m "$Version pull split libs success" ; git push --set-upstream origin release/$Version -f 

Set-Location "../"
git add . ; git commit -m "$Version pull split libs success" ; git push --set-upstream origin release/$Version -f

Set-Location $fsFolder
git add . ; git commit -m "$Version pull split libs success" ; git push --set-upstream origin release/$Version -f


Write-Host "pre-release-setp5 end"
Set-Location $rootFolder

