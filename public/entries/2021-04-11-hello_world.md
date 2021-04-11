# Hello New Blog

Vercelへブログを移行してみました。

割と同じようなことをやっている人がいましたが、ミニマムにしたかったので、
NextJSベースでお手製で作りました。

基本的な流れは以下のようになりました。

- `public/entries/` フォルダに`yyyy-mm-dd-slug.md` でmarkdownファイルを作成
  - 一行目のヘッダの内容ををタイトルみなす
- react-markdownでmarkdownをレンダリングする

お試しでtailwind CSSを使っていますが、書き方が違いすぎて判断ができないので様子見。
markdownの部分との食い合わせは良くないので、置き換えるかもしれません。
