
FROM node:14-alpine

WORKDIR /app

COPY . .

RUN npm install -f

EXPOSE 5000

CMD ["npm", "run", "start"]
