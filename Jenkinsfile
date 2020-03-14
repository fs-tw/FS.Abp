pipeline {
   agent any

   stages {
	  stage('npm install') {
         steps {
            powershell '.\\ci\\npm-install.ps1'
         }
      }
      stage('push angular/libs') {
         steps {
            powershell '.\\ci\\push-angular-libs.ps1'
         }
      }
   }
}
