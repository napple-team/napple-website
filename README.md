# Napple Website

[![Greenkeeper badge](https://badges.greenkeeper.io/napple-team/napple-website.svg)](https://greenkeeper.io/)

[https://napple.team/](https://napple.team/)

## Description

このリポジトリは [Eli](https://github.com/windyakin/Eli) をベースに開発しています。

## Usage

### Development

```
make dev
```

* BrowserSync サーバーが立ち上がり、ファイル更新を検出するとビルドが走ります
* `dev/` ディレクトリを使用します

### Build

```
make build
```

* アセットをビルドしたものが `dist/` ディレクトリに展開されます

### Run local nginx server

```
make local
```

* `make build` したものを nginx サーバー上で確認することができます
* http://localhost:8080/

### For production

以下は Production 環境上で動かすためのコマンドです。実行には `docker-compose.production.yml` が必要になります。

```
make up
```
```
make down
```

## License

[MIT License](LICENSE)


## Author

* windyakin ([@MITLicense](https://twitter.com/MITLicense))
