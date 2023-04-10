### Serverless AWS Node

This is a minimal application made using Serverless architecture with AWS Cloud and Lambda Functions. I used API Gateway, DynamoDB & CloudWatch as well.


Lambda Functions

```
addTodo: aws-node-http-api-project-dev-addTodo
fetchTodos: aws-node-http-api-project-dev-fetchTodos
fetchTodo: aws-node-http-api-project-dev-fetchTodo
updateTodo: aws-node-http-api-project-dev-updateTodo
```

Deploy all infrastructure

```
serverless deploy --verbose
```

Deploy only specific Lambda function

```
serverless deploy -f `functionName`
```
