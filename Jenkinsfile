pipeline {
   agent any

   stages {
      stage('push angular/libs') {
         steps {
            powershell '.\\ci\\push-angular-libs.ps1'
         }
      }
   }
}
