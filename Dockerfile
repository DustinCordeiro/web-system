FROM node:16.15.1

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

EXPOSE 3001

CMD /wait && npm run start