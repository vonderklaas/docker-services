### Docker CRUD

This is a project where using Docker we can spin up Node and MongoDB instances in a container and communicate between them. Also, added Nginx image to add it as a Load Balancer for multiple Node instances

### Architecture

![Architecture](https://github.com/garbalau-github/docker-node-mongo/blob/main/architecture.png?raw=true)

### Run DEV Containers

```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```

### Kill DEV Containers

```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down
```

### Scale Node Instances

```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --scale node-app=2
```
