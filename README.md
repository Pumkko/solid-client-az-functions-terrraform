# What did i Learn

## Terraform 
I wanted to try if I could setup a static web app using Terraform, retrieve the deployment token, set it as a github repo secrets
and use it to deploy the web app. All in the same github workflow.
I did not work

The secret is created without problem but it's not known by the workflow at first, the worfklow has to be restarted
I could not find a action to refresh the workflow environment variables.

## Deployment
It seems like there's a problem right now with SWA deployment : https://github.com/Azure/static-web-apps/issues/1404
~~Furthermore i need to upgrade my SWA because the free tier does not allow backend API~~
EDIT : I was wrong : You can add your own API using a free SWA it's the "Bring your own" that's unavailable
