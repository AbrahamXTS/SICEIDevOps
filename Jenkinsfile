pipeline {
    agent any

    stages {
        stage('Stop all previous container') {
            steps {
                echo 'Stoping all containers related to project'
                script {
                    sh 'docker ps -a | grep sicei | awk \'{print $1}\' | xargs docker stop'
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Build Docker image step started'
                sh "docker build -t abraham-espinosa-${GIT_BRANCH}-sicei:${BUILD_NUMBER} ."
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy Docker image step started'
                sh "docker run -d -p 8085:8085 --name sicei-${BUILD_NUMBER} abraham-espinosa-${GIT_BRANCH}-sicei:${BUILD_NUMBER}"
            }
        }
    }
}
