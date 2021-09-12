## author
ambergon
[twitter](https://twitter.com/Sc_lFoxGon)

## 用途

Google Chromeにおける操作をマウスを使わずに快適なブラウジングをするために作成<br>
![tutorial](/tutorial/tutorial.gif) <br>

## install 
```
git clone https://github.com/ambergon/Chrome_Vim_keybind
```
Chrome 拡張機能 を開く <br>
```
chrome://extensions/
```
デベロッパーモードを有効化 <br>
パッケージ化されていない拡張機能を読み込む <br>

![tutorial](/tutorial/tutorial.png) <br>
指定フォルダ ：~保存先/Chrome_Vim_keybind <br>
![tutorial](/tutorial/tutorial_2.png) <br>
読み込まれている場合は拡張機能画面で確認できるようになります<br>
![tutorial](/tutorial/tutorial_3.png) <br>


## key bind

- :default google chromeにもともと設定してあるkey(一部のみ記載)
    [Google ショートカット](https://support.google.com/chrome/answer/157179?hl=ja&co=GENIE.Platform%3DDesktop#zippy=%2C%E3%82%BF%E3%83%96%E3%81%A8%E3%82%A6%E3%82%A3%E3%83%B3%E3%83%89%E3%82%A6%E3%81%AE%E3%82%B7%E3%83%A7%E3%83%BC%E3%83%88%E3%82%AB%E3%83%83%E3%83%88%2C%E3%82%A2%E3%83%89%E3%83%AC%E3%82%B9%E3%83%90%E3%83%BC%E3%81%AE%E3%82%B7%E3%83%A7%E3%83%BC%E3%83%88%E3%82%AB%E3%83%83%E3%83%88%2Cgoogle-chrome-%E6%A9%9F%E8%83%BD%E3%81%AE%E3%82%B7%E3%83%A7%E3%83%BC%E3%83%88%E3%82%AB%E3%83%83%E3%83%88%2C%E3%82%A6%E3%82%A7%E3%83%96%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%AE%E3%82%B7%E3%83%A7%E3%83%BC%E3%83%88%E3%82%AB%E3%83%83%E3%83%88)
- :add この拡張機能で追加される動作。

| 対応 | key | 動作 |
|:--:|:--:|:--:|
| default | < Ctrl + T > | 新しいタブを開き移動 |
| default | < Ctrl + W > | タブを閉じる |
| default | < Ctrl + TAB > | 次のタブに移動 |
| default | < Ctrl + Shift + TAB > | 前のタブに移動 |
|||
| default | < ALT + Space & X > | サイズの最大化 |
| default | < ALT + Space & R > | サイズを元に戻す |
|||
| default | < Ctrl + L > | アドレスバーにフォーカス |
|||
| default | < Ctrl + D > | BookMarkする |
|||
| default | < Ctrl + Shift + I > | 検証 |
|||
| default | < Space > | 1画面ずつ下げる |
| default | < Shift + Space > | 1画面ずつ上げる |
| add | <> | |
| add | < Shift + N > | 次に進む |
| add | < Shift + P > | 前に戻る |
| add | < J > | 下に進む |
| add | < K > | 上に進む |
| add | < Shift + G > | Topに移動 |
| add | < G + G > | Bottomに移動 |
|||
| add | <> | Googleの検索結果において |
| add | < Shift + J > | 下に項目を選択 |
| add | < Shift + K > | 上に項目を選択 |
| add | < enter > | 選択している項目を現在のタブで開く |
| add | < Shift + enter > | 同上 |
| add | < Ctrl + enter > | 選択している項目を新しいtabで開く |
|||
| add | < Y + Y > | 現在表示しているサイトのURLをクリップボードにコピー |
|||
| add | < Ctrl + I > | input要素があれば入力モード(カーソルは末尾) |
| add | < J + J > | 入力モードを終了する。 |
|||
| add | < Shift + [ > | `<code>`要素を検索し、下に移動する |
| add | < Shift + ] > | `<code>`要素を検索し、上に移動する |
| add | < y + Y > | 選択している`<code>`要素をクリップボードにコピーする |



## license
MIT license
