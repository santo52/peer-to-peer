FROM node
WORKDIR /opt/server
EXPOSE 80
COPY . .
CMD ["npm", "start"]