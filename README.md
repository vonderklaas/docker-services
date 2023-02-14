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
