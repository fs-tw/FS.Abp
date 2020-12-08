. ".\common.ps1"

$env:GIT_REDIRECT_STDERR = '2>&1'

$Version = Read-Host -Prompt 'Input release version'

$ExcludeRelease = 'abp'

$ExcludeSplit = 'abp|tools/entitydeveloper|applications/*|modules/FS.Abp.Trees'

function ExeNgLib ($text) {

    return 'branch=$(git branch -r | grep origin/angular/libs/*); if [[ $branch ]]; then '+$text+'; else  echo "No"; fi'
}

Set-Location $rootFolder

Write-Host "start release-init"

git flow init -d

git submodule update --init --recursive

git submodule foreach 'case $name in $ExcludeRelease) ;; *) git flow init -d ;; esac'

git flow release start $Version

git submodule foreach 'case $name in $ExcludeSplit) ;; *) git flow release start $Version ;; esac'


#$__spliteCommand='git checkout -b ${branch##*origin/} $branch'
#$__command='branch=$(git branch -r | grep origin/angular/libs/*); if [[ $branch ]]; then '+$__spliteCommand+'; else  echo "No"; fi'

#git submodule foreach $__command



Write-Host "end release-init"
Set-Location $rootFolder

