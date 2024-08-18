###< Окружение сборки - общее
FROM node:18-alpine as buildtime-node18

WORKDIR /opt/app

RUN chown -R node:node /opt/app

USER node

# Пакеты для запуска Nest CLI + SWC
RUN yarn global add @nestjs/cli @swc/cli @swc/core


###< Окружение сборки - development
FROM buildtime-node18 as buildtime-development

ENV NODE_ENV=development

WORKDIR /opt/app

USER node

# Установка с дев-зависимостями
RUN yarn install

COPY --chown=node:node . .

# Чистим за собой после установки всего, что нужно
RUN rm .npmrc template.npmrc


###< Окружение сборки - production
FROM buildtime-node18 as buildtime-production

ARG APP_ENV

ENV NODE_ENV=production
ENV APP_ENV=$APP_ENV

WORKDIR /opt/app

USER node

# Установка с прод-зависимостями
RUN yarn install --frozen-lockfile

COPY --chown=node:node . .

RUN yarn build

# Чистим за собой после установки всего, что нужно
RUN rm .npmrc template.npmrc && \
    rm -rf env.d src tests && \
    yarn global remove @nestjs/cli @swc/cli @swc/core

###< Окружение исполнения - development
FROM buildtime-development as runtime-development

WORKDIR /opt/app

USER node

EXPOSE 3000

CMD ["yarn", "start:dev"]

###< Окружение исполнения - production
FROM buildtime-production as runtime-production

WORKDIR /opt/app

USER node

COPY --chown=node:node . .

EXPOSE 3000

CMD ["yarn", "start:prod"]
