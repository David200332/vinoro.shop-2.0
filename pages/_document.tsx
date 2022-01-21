import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
// import Head from 'next/head';


class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    {/* <title>Vinoro 2.0</title> */}
                    <meta name="keywords" content="keywords" />
                    <meta name="description" content="description" />
                    {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
                    <meta charSet="utf-8" />
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

// MyDocument.getInitialProps = async (ctx) => {
//     const originalRenderPage = ctx.renderPage;
//     ctx.renderPage = () => {
//       return originalRenderPage({
//         enhanceApp: (App) => (props) => <App {...props} />,
//       });
//     };
//     const initialProps = await Document.getInitialProps(ctx);
//     return {
//       ...initialProps,
//       styles: [
//         ...React.Children.toArray(initialProps.styles),
//       ],
//     };
//   };

export default MyDocument