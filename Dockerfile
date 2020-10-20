FROM node

RUN npm cache clean --force
RUN chown -R 498:496 "/.npm"

EXPOSE 3000