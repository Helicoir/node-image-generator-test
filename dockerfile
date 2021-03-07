FROM node:12
WORKDIR /usr/src/app

# アプリケーションの依存関係をインストールする
# ワイルドカードを使用して、package.json と package-lock.json の両方が確実にコピーされるようにします。
# 可能であれば (npm@5+)
COPY package*.json ./
RUN npm install
RUN rm -rf node_modules/sharp

RUN npm install --arch=x64 --platform=linux --verbose sharp


COPY . .
