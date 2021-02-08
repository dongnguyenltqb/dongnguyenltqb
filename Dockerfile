FROM node:alpine
RUN apk update && apk add --no-cache git
WORKDIR /blog
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]
