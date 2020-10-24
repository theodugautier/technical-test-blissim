FROM node:14.11.0
WORKDIR /usr/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 100000
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]