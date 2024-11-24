FROM node:18.20.5
ENV PORT 5000
COPY ...
RUN npm install
EXPOSE 5000
CMD [ "npm", "run", "start"]