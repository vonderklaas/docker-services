### Docker with Node and MongoDB

REST API split into two isolated Docker containers, one running Node, another running MongoDB instance. Third container runs Nginx, which does the Load Balancing between different Node instances.

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
