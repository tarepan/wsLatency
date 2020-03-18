# WebSocket Latency

Performance test for webScoket in various envs.

- local
- local Docker multi-container with Bridge
- AWS ECS

AWS ECS is set with CI/CD

## Architecture

`server.js` & `client.js`  
Connection is made with Node.js `ws` library

## Run

### local

In console,  
`node ./src/server.js`  
then in another console,  
`node ./src/client.js`

### local Docker multi-container with Bridge

`docker-compose up`

### AWS ECS

## Result example

- local machine
  - Surface Pro (5th Gen.)
    - local: 1.5 msec RTT
    - local Docker: 2.3 msec RTT
