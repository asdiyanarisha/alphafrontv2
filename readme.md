## Aplhafront v2 Build with nextjs & react

please be preparing `.env` file first from `.env.example`


### how to build docker
```
docker build --no-cache -t personal-fe:0.0.1 -f Dockerfile .
```

### how to run Docker

```
docker run --env-file .env --network personal-proj_default -p 5000:3000 --name personal-fe personal-fe:0.0.1

```