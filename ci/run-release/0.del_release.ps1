#del release
#. ".\0.common.ps1"
Set-Location $rootFolder

Write-Host "del release start"

function CommandRemoteReleaseBuilder ($text) {
    
    return 'branch=$(git branch -r | grep origin/release/'+"$Version"+'); if [[ $branch ]]; then '+$text+'; else  echo No execu; fi'
}

$command = CommandRemoteReleaseBuilder "git push origin --delete release/$Version"
git submodule foreach $command

Write-Host "del release end"
Set-Location $rootFolder

