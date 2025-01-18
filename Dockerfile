FROM node:22 AS builder

WORKDIR /app

COPY package*.json ./

RUN pnpm install

COPY . .

RUN pnpm run build --configuration=production

FROM nginx:alpine

COPY --from=builder /app/dist/my-angular-app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
