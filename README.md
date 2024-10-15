## はじめに / Getting Started

これは "CoderDojo 八戸" の Web サイト開発プロジェクトです。  
プロジェクトは Next.js で構築されており、開発の際は `pnpm` がインストールされていることが前提となります。
開発時の推奨エディタは Visual Studio Code か Cursor となります。

This is a development project for "CoderDojo Hachinohe."
The project is built with Next.js, and it assumes that pnpm is installed for development.
The recommended editors for development are Visual Studio Code or Cursor.

### パッケージのインストール / Package install

最初に PJ の依存パッケージのインストールを行います。

First, install the project's dependencies.

```bash
pnpm install
```

### 環境変数設定 (.env) / Environment Variable Setup (.env)

開発用の環境変数を .env に記載します。

Add the development environment variables to the .env file.

```env
NEXT_PUBLIC_CONTACT_ADDRESS=青森県八戸市X町XXX1-234
NEXT_PUBLIC_CONTACT_PERSON=山田
NEXT_PUBLIC_CONTACT_PHONE_NUMBER=0X0-1234-5678
NEXT_PUBLIC_CONTACT_EMAIL=email@exsample.com
NEXT_PUBLIC_GOOGLE_MAP_EMBED_URL=`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194238.33585874768!2d141.3356902226572!3d40.47584025803483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9b4d6d1a08926b%3A0x5de124698da3784!2z6Z2S5qOu55yM5YWr5oi45biC!5e0!3m2!1sja!2sjp!4v1725814336428!5m2!1sja!2sjp`

MICROCMS_DOMAIN=xxxxxxx (共有いたしますので、Contributor 宛にご連絡ださい)
MICROCMS_API_KEY=xxxxxxx (共有いたしますので、Contributor 宛にご連絡ださい)

# metadata
NEXT_PUBLIC_SITE_TITLE="CoderDojo〇〇"
NEXT_PUBLIC_SITE_DESCRIPTION="たくさん考えよう。たくさん話そう。みんなのプログラミング道場「CoderDojo〇〇」"
NEXT_PUBLIC_SITE_KEYWORDS="CoderDojo,CoderDojo〇〇,青森県八戸市"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_TWITTER_SITE_URL="@foobar"
```

### 開発サーバーの起動 / Starting Dev Server

```bash
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開き、結果を確認してください。

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### プロジェクトに関する備考 / PJ Remarks

このプロジェクトでは、[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) を使用して、カスタム Google フォントである Inter を自動的に最適化し、読み込んでいます。

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## プロジェクトに参加するには / To Join the PJ

プロジェクトは誰でも参加可能です。  
例えば以下のような形です。

- 課題を作成する  
  Web サイトを訪問して問題がある場合は、課題 (Issue) を作成することができます。
- Web サイトへの提案  
  サイトをより良くするために、新たな提案をすることができます。
- PR (プルリクエスト) を作成する  
  課題の解決、もしくは自分が新たに何らかの機能を追加した場合、PR を作成できます。

Anyone can participate in the project.
For example, you can:

- Create an issue  
  If you find a problem while visiting the website, you can create an issue.
- Suggest improvements for the website  
  You can propose new ideas to improve the site.
- Create a PR (Pull Request)  
  If you solve an issue or add a new feature, you can create a PR.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
