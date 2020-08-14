FROM node:12.18.2-alpine3.9
USER node
RUN mkdir /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start"]