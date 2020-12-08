$env:GIT_REDIRECT_STDERR = '2>&1'
$ExcludeRelease = 'abp'
$rootFolder = (Get-Item  -Path "./" -Verbose).FullName
$fsFolder = (Get-Item  -Path "../../" -Verbose).FullName
$Version = Read-Host -Prompt 'Input release version'

function CommandWithoutReleaseBuilder ($text) {

    return 'case $name in abp) ;; *) '+$text+'  ;; esac'
}

function CommandNgLibsBuilder ($text) {

    return 'branch=$(git branch -r | grep origin/angular/libs/*); if [[ $branch ]]; then '+$text+'; else  echo No execu; fi'
}
