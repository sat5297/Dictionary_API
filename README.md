This is a normal API with rate limiting in action using express-rate-limit module.
Added an endpoint in the service which could be pinged by Health Service inorder to check health of service.
Also added 3 ports for service, all of which could be pinged to serve the request.
This was done already to understand the Load Balancer and try that in action.
The actual implementation to create three API instances to be load balanced will be pretty different from this approach.
This was used only to try Load Balancer in Action
