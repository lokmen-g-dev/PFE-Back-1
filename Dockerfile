
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install -f
COPY . .

EXPOSE 5000
CMD ["npm", "run", "start"]
