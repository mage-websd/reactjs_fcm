FROM node:13.12-buster-slim


RUN mkdir -p /app/code
ENV PATH /app/code/node_modules/.bin:$PATH

ADD ./code/package.json /app/code/package.json
ADD ./code/yarn.lock /app/code/yarn.lock

RUN apt update -y

WORKDIR /app/code

RUN yarn install

# RUN npm install react-scripts -g --silent
# RUN npm install -g create-react-app
# RUN npm init react-app my-app

COPY ./code/ /app/code/

## clear cache OS
RUN apt-get purge -y --auto-remove && \
    rm -rf /var/lib/apt/lists/*

# EXPOSE 3000

WORKDIR /app/code

# RUN yarn start
# COPY ./run.sh /app/
# RUN chmod +x /app/run.sh

CMD ["yarn", "start"]