# Netlifyへのデプロイ

今回universalモード、staticをターゲットとしている
（nuxt.config.js上、mode:'universal', target: 'static'）

Netlify上のコマンドは以下の通り。distに出力される。generateではないので注意

```
$ nuxt build && nuxt export
```

# デザイン

全体デザインの参考にしたWebサイト
https://colorlib.com/demo?theme=ca-app

画像にiPhone11のフレームをつける
・スマホアプリ（ScreenshotMakerProを使う）　※1日2つしか取れない
・iPhoneのショートカットを使う
　1.画像のりサイズ（2で対応している横幅に変更する。iPhone11の横幅はデフォルトで828）
    https://apple.problo.net/1730.html#toc1
　2.フレームを付ける
    https://mobilelaby.com/blog-entry-shortcut-iphone-xs-and-xs-max-screen-shot-frame.html

## レスポンシブ

840px までは普通に表示される
375px (iPhone6~8, X)

960px以上と以下で分ける。（sm）

960px以下の動き
・タイトルバーの表示を少なくする
・文字と画像を上下に並べる
・画像のサイズを小さくする


### 参考（v-flexのサイズ基準）
0px    600px    960px    1264px    1904px
    xs       sm       md       lg          xl
   スマホ   タブレット   PC

### 参考（Bootstrapのサイズ基準）
0px    554px    768px    992px    1200px
    xs       sm       md       lg          xl



