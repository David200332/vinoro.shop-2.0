import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'


class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="http://fonts.cdnfonts.com/css/days-2" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="icon" href="/favicon.ico" />

                </Head>
                <body>
                    <Main />
                    <NextScript />

                </body>
            </Html>
        )
    }
}

export default MyDocument