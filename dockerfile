FROM node:16.13

WORKDIR /landing-page

COPY . .

RUN npm install

RUN npm run build

EXPOSE 5173

CMD ["npm", "start"]
