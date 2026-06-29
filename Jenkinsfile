pipeline {
  agent any

  environment {
    CI = 'true'
  }

  stages {
    stage('Install dependencies') {
      steps {
        bat 'npm ci'
        bat 'npx playwright install --with-deps'
      }
    }

    stage('Run Playwright tests') {
      steps {
        bat 'npm run test:ci'
      }
    }

    stage('Generate Allure report') {
      steps {
        bat 'if exist allure-results (echo allure-results exists) else (echo allure-results missing)'
        bat 'allure generate allure-results -o "%WORKSPACE%\\allure-report" --clean'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true
    }
  }
}
