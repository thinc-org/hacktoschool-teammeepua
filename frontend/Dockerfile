FROM node:19-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]

LABEL org.opencontainers.image.source="https://github.com/thinc-org/hacktoschool-team"