$lib="cms"

$branch="angular/libs/"+$lib
$remote="origin"
$branchToPsuh=$branch+":"+$branch

git subtree split -P "$branch" -b "$branch"

git push "$remote" "$branchToPsuh"

