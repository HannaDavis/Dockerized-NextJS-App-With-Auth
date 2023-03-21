FROM node:alpine

WORKDIR /nextjs

COPY ["web/package.json", "/nextjs"]

RUN yarn install

COPY ./web /nextjs
ENV NODE_ENV=development

CMD [ "yarn", "run", "start" ]
