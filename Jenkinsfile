pipeline {
    agent any
    stages {
        stage("Installation") {
            sh "sudo apt install curl"
            sh "curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash"
            sh "source ~/.profile"
            sh "nvm install --lts"
        }
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/react-app"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/react-app/"
            }
        }
    }
}