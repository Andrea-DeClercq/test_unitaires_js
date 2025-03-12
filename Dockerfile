FROM mcr.microsoft.com/playwright:latest

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "test:unit"] && ["npm", "run", "test:e2e"]
