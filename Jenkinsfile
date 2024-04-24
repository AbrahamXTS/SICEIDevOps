pipeline {
    agent any

    stages {
        stage('Stop all previous container') {
            steps {
                echo 'Stoping all containers related to project'
                script {
                    def containerIds = sh(script: 'docker ps --format "{{.ID}} {{.Names}}" | awk -v pat="sicei" \'$0 ~ pat {print $1}\'', returnStdout: true).trim().split('\n')

                    containerIds.each { containerId ->
                        echo "Stoping ${containerId} container"
                        sh "docker stop ${containerId}"
                    }
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Build Docker image step started'
                sh "sudo docker build -t abraham-espinosa-${GIT_BRANCH}-sicei:${BUILD_NUMBER} ."
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy Docker image step started'
                sh "sudo docker run -d -p 8085:8085 abraham-espinosa-${GIT_BRANCH}-sicei:${BUILD_NUMBER}"
            }
        }
    }
}
