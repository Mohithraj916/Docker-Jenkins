pipeline {
    agent { dockerfile true }
    stages {
        stage('Test') {
            steps {
                sh 'git clone https://github.com/Mohithraj916/node_blog.git'
                sh 'node node_blog/app.js'
                
            }
        }
    }
   post {
    success {
   
      emailext (
          subject: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
          body: """<p>SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
            <p>Check console output at '<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>'</p>""",
          recipientProviders: [[$class: 'RequesterRecipientProvider']]
        )
    }

    failure {

      emailext (
          subject: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
          body: """<p>FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
            <p>Check console output at '<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>'</p>""",
          recipientProviders: [[$class: 'RequesterRecipientProvider']]
        )
    }
  }
    
}