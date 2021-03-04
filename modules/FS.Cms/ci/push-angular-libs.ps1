$ErrorActionPreference = "Stop"

git subtree split -P angular/libs/cms -b angular/libs/cms

git push origin angular/libs/cms:angular/libs/cms

