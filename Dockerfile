FROM node:20.13.1

RUN apt-get update && apt-get install -y xdg-utils

WORKDIR /app

COPY . ./

RUN npm install -g pnpm
RUN pnpm i
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "dev"]