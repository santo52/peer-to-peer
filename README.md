1. Se crea una red
docker network create p2p

2. Se crean los nodos

docker run -d --name server1 -v /Users/saruiz/data/p2p/p2p:/opt/server -p 80:80 node tail -f /dev/null
docker run -d --name server2 -v /Users/saruiz/data/p2p/p2p:/opt/server -p 81:80 node tail -f /dev/null
docker run -d --name server3 -v /Users/saruiz/data/p2p/p2p:/opt/server -p 82:80 node tail -f /dev/null
docker run -d --name server4 -v /Users/saruiz/data/p2p/p2p:/opt/server -p 83:80 node tail -f /dev/null
docker run -d --name server5 -v /Users/saruiz/data/p2p/p2p:/opt/server -p 84:80 node tail -f /dev/null
docker run -d --name server6 -v /Users/saruiz/data/p2p/p2p:/opt/server -p 85:80 node tail -f /dev/null

3. Agregar a la red

docker network connect p2p server1
docker network connect p2p server2
docker network connect p2p server3
docker network connect p2p server4
docker network connect p2p server5
docker network connect p2p server6

4. Inspeccionar la red

docker network inspect p2p

5. Entrar a modo interactivo y ejecutar proyecto

docker exec -it server1 bash
docker exec -it server2 bash
docker exec -it server3 bash
docker exec -it server4 bash
docker exec -it server5 bash
docker exec -it server6 bash
