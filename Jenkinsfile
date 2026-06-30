pipeline {
    agent any

    stages {
        stage('Cleanup Workspace') {
            steps {
                // Kill lingering processes before cleanup
                bat 'taskkill /F /IM node.exe /T || exit 0'
                bat 'taskkill /F /IM java.exe /T || exit 0'
                cleanWs()  // Jenkins pipeline workspace cleanup
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run Playwright tests with Allure reporter
                bat 'npx playwright test --reporter=line,allure-playwright'
            }
        }

        stage('Generate Allure Report') {
            steps {
                bat '"%ALLURE_HOME%\\bin\\allure.bat" generate -c -o allure-report'
            }
        }

        stage('Publish Allure Report') {
            steps {
                allure([
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']]
                ])
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'allure-report/**', fingerprint: true
        }
        failure {
            echo 'Build failed — check cleanup or test execution logs.'
        }
    }
}
