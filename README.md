## Get Started by cloning the repo

`git clone git@github.com:sathishc/shopping-list.git`


## Install the necessary npm packages

`npm install`

Now you will have a frontend that includes just the React front-end. We are using React-Material-UI components to style the front-end. This is just boiler plate code without any backend integrations into AWS. In the repo, you fill find the files 'predictions.js' and 'db.js' under src/api folders. We will add code here after deploying the necessary backends using Amplify 

Run `npm start` to see the UI frontend

## Install Amplify CLI, Initialize the project and add necessary libraries

**Install the Amplify CLI globally**

`npm install -g @aws-amplify/cli`


**Initialize Amplify in the project from the root folder**

`amplify init`

**Follow the steps below for inputs**

```

? Enter a name for the project shopping-list
? Enter a name for the environment dev
? Choose your default editor: vscode
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

**Install Amplify javascript libraries needed from within the root folder of the repository**

`npm install --save aws-amplify @aws-amplify/ui-react`

## Add Authentication

**Add authentication backend to the app using the command**

`amplify add auth`

**Follow the steps below for inputs**

```
Select Default Configuration when asked if you'd like to use the default authentication and security configuration.
   
Select Username when asked how you want users to sign in.
   
Select "No, I am done." when asked about advanced settings.

Run `amplify push` and confirm with a 'Yes' to create these changes in the cloud.

Confirm you want Amplify to make changes in the cloud for you.
```

Wait for the provisioning to complete. This will take a few minutes. The above steps creates an Authentication backend provider using Cognito user and identity pools and connects that with the Amplify project.

**Add authentication front-end**

Open the file index.js and add the below line to import the AmplifyAuthenticator component

`import { AmplifyAuthenticator } from '@aws-amplify/ui-react';`

Replace the `<App />` component in the same file with `<AmplifyAuthenticator><App /></AmplifyAuthenticator>`. 

AmplifyAuthenticator is a React higher-order component that adds sign-in, sign-up features into a React App. Reloading the App should now show you the signup functionality

## Add the backend database and an API to interact with the DB

The backend will consist of a dynamodb database and a graphql API that integrates with DynamoDb. We will use Amplify to create the necessary infrastructure. 

**Add the api and backend to the app using the command**

`amplify add api`

**Follow the steps below for inputs**

```

   

```


