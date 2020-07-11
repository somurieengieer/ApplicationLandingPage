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



