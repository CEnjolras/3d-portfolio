FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


EXPOSE 5173

# Keep the container running indefinitely
CMD npm run dev

