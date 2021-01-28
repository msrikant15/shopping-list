## Get Started by cloning the repo

`git clone git@github.com:sathishc/shopping-list.git`


## Install the necessary npm packages

`npm install`

Now you will have a frontend that includes just the React front-end. We are using React-Material-UI components to style the front-end. This is just boiler plate code without any backend integrations into AWS. In the repo, you fill find the files 'predictions.js' and 'db.js' under src/api folders. We will add code here after deploying the necessary backends using Amplify 

Run `npm start` to see the UI frontend

## Install Amplify CLI, Initialize the project and add necessary libraries

Install the Amplify CLI globally

`npm install -g @aws-amplify/cli`

Install Amplify javascript libraries needed from within the root folder of the repository

`npm install --save aws-amplify @aws-amplify/ui-react`

After the libraries are installed, initialize Amplify in the project from the root folder using

`amplify init`

**Follow the steps below for inputs**

```

? Enter a name for the project kycapp
? Enter a name for the environment master
? Choose your default editor: None
? Choose the type of app that you are building: javascript

Please tell us about your project

? What javascript framework are you using: react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start

Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use default

```



