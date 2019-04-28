import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return <html>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
            <meta name="robots" content="noindex, nofollow" />
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>

        </Head>

        <body>
            <Main/>
            <NextScript/>
        </body>
        <style global jsx>{`
        body {
            font-family: 'Roboto', sans-serif;
        }
        `}</style>

        </html>
    }
}
