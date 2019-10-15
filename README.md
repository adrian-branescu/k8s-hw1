# k8s-hw1
## Kubernetes Homework 1

##  hello-app
`hello-app` version 1.0 exposes a Rest API with Fastify.
- path `/hello` returns a HTML page with `Hello World!` message.
- to build `hello-app` docker image version 1.0 for Node.js backend application run this command in the project root:
```bash
docker build -t hello-app:1.0 -f dockerfiles/hello-app/v1/Dockerfile hello-app/
```
- to test this image locally run this command:
```bash
docker container run --publish 9001:9000 --detach hello-app:1.0
```
- you can now access it in your browser at this address:
```
http://localhost:9001/hello
```

`hello-app` version 2.0 exposes a Rest API with Fastify.
- path `/hello` returns a HTML page with `Hello Mars!` message.
- to build `hello-app` docker image version 2.0 for Node.js backend application run this command in the project root:
```bash
docker build -t hello-app:2.0 -f dockerfiles/hello-app/v2/Dockerfile hello-app/
```
- to test this image locally run this command:
```bash
docker container run --publish 9002:9000 --detach hello-app:2.0
```
- you can now access it in your browser at this address:
```
http://localhost:9002/hello
```

##  hello-nginx
`hello-nginx` version 2.0 overrides symbolic links of log files from `/var/log/nginx/` in the original image in order to be able to mount a PersistentVolume and keep the log files in a persistent way. Also, it extends `/etc/nginx/nginx.conf` by overriding `default.conf` file in order to configure `nginx` to act as a proxy for the `hello-app` server.
- to build `hello-nginx` docker image version 2.0 run this command in the project root:
```bash
docker build -t hello-nginx:2.0 -f dockerfiles/hello-nginx/Dockerfile hello-nginx/
```

## docker hub
You can skip the steps described above and find the built images in the docker hub public registry:

- [hello-app](https://cloud.docker.com/repository/docker/adrianbranescu93/hello-app)
- [hello-nginx](https://cloud.docker.com/repository/docker/adrianbranescu93/hello-nginx)


## kubernetes
In order to deploy the replicated Pod running the above images in two Containers on the same Pod and expose the Pods as a Service run this command in the project root:
```bash
kubectl apply -f k8s-manifests/hello-service/v1/hello-service.yaml
```

In order to upgrade the above deployment run this command in the project root:
```bash
kubectl apply -f k8s-manifests/hello-service/v2/hello-service.yaml
```
