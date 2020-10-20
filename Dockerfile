FROM node:14-alpine

RUN npm cache clean --force

EXPOSE 3000