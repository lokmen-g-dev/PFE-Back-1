
FROM node:latest

WORKDIR /app

COPY . .

RUN npm install -f

EXPOSE 5000

CMD ["npm", "run", "start"]
