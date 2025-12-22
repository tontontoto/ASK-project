# 無限サイト Reactプロジェクト

このプロジェクトは、Reactを使用して構築された無限に伸びるサイトです。

## 機能

- 「こんにちは」のテキストを表示する入口画面
- ナンバリングされたボタンをクリックするとサイトが伸びる機能
- 伸びた先のセクションにランダムにボタンが配置される
- 煽り文を表示するボタン

## セットアップ

### 必要な環境

- Node.js (v16以上推奨)
- npm または yarn

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

### ビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```

## プロジェクト構造

```
src/
  components/
    Greeting.jsx              # 「こんにちは」テキスト表示コンポーネント
    NumberedButton.jsx        # ナンバリングボタンコンポーネント
    NumberedButtonsContainer.jsx  # ボタンコンテナコンポーネント
    ExtendedSection.jsx       # 拡張セクションコンポーネント
    TauntButton.jsx           # 煽り文ボタンコンポーネント
  styles/
    greeting.css              # グリーティングスタイル
    numbered-buttons.css     # ボタンスタイル
    index.css                # グローバルスタイル
  App.jsx                    # メインアプリケーションコンポーネント
  main.jsx                   # エントリーポイント
```

## 技術スタック

- React 18.2.0
- Vite 5.0.8
- CSS Modules

