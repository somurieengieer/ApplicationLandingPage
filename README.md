# Netlifyへのデプロイ

今回universalモード、staticをターゲットとしている
（nuxt.config.js上、mode:'universal', target: 'static'）

Netlify上のコマンドは以下の通り。distに出力される。generateではないので注意

```
$ nuxt build && nuxt export
```


# application-landing-page

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
