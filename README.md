# cloud-resume
This repository hosts the front-end of my version of the [Cloud Resume Challenge by Forrest Brazeal](https://cloudresumechallenge.dev/docs/the-challenge/)
## Application Architecture
Here is a diagram I created that shows the resources utilized in this project:

![Application Diagram](https://github.com/tzaman98/cloud-resume/blob/main/cloud%20resume%20challenge%20diagram%202.PNG)

The project is a simple static website that utilizes AWS S3 to host the website's resources, which is simple HTML and CSS. After configuring the S3 bucket as a static website, I created a CloudFront distribution that uses the S3 bucket as an origin and used Amazon Certificate Manager to create an SSL certificate for the distribution. I then pointed the domain name (tayztech.com) which I purchased through Route 53 to the CloudFront distribution using Route 53 hosted zone. 

## Terraform, CI/CD with GitHub Actions, and E2E testing. 

In order to create the cloud-API that returns and increments that website's visitor counter, I utilized AWS Lambda, AWS DynamoDB, and Amazon API gateway. The Lambda function is written in Python and stores the website's visitor counter in a DynamoDB table, and the API gateway is a rest-API gateway that returns and updates the visitor counter using a Javascript function present in my S3 bucket's front-end code. 

I was able to provision and deploy the DynamoDB table, Lambda function, and API gateway by using Terraform Cloud. I chose Terraform Cloud due to the ease I found with managing the Terraform state file. I created a separate repository that hosts the back-end [Terraform code](https://github.com/tzaman98/cloud-resume-backend), and Terraform Cloud allows the back-end resources to be deployed and updated with any changes made to the respository's main.tf file. 

GitHub Actions is used to create a CI/CD pipeline that updates the S3 bucket and invalidates the CloudFront distribution whenever an update to the front-end code is pushed to GitHub. 
