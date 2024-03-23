pipeline {
   agent none
   environment {
        ENV = "dev"
        NODE = "build"
    }

   stages {
    stage('Build Image') {
        agent {
            node {
                label "build"
                customWorkspace "/home/jenkins/build"
                }
            }
        environment {
            TAG = sh(returnStdout: true, script: "git rev-parse -short=10 HEAD | tail -n +2").trim()
        }
         steps {
            sh "docker build . -t  discount-campaign-builder-$ENV:latest --build-arg BUILD_ENV=$ENV -f Dockerfile"


            sh "cat docker.txt | docker login -u tuannva020699 --password-stdin"
            // tag docker image
            sh "docker tag discount-campaign-builder-$ENV:latest tuannva020699/discount-campaign-builder:$TAG"

            //push docker image to docker hub
            sh "docker push tuannva020699/discount-campaign-builder:$TAG"

	    // remove docker image to reduce space on build server	
            sh "docker rmi -f tuannva020699/discount-campaign-builder:$TAG"

           }
         
       }
	  stage ("Deploy ") {
	    agent {
        node {
            label "build"
                customWorkspace "/home/jenkins/build-$ENV/"
            }
        }
        environment {
            TAG = sh(returnStdout: true, script: "git rev-parse -short=10 HEAD | tail -n +2").trim()
        }
	steps {
            sh "sed -i 's/{tag}/$TAG/g' /home/jenkins/build-$ENV/docker-compose.yaml"
            sh "docker-compose up -d"
        }      
       }
   }
    
}