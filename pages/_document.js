import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'


export default class SiteDocument extends Document {
    render () {
        const sheet = new ServerStyleSheet()
        const main = sheet.collectStyles(<Main />)
        const styleTags = sheet.getStyleElement()
        return (
            <html dir="ltr" lang="en-US">
            <Head>
                <meta http-equiv="content-type" content="text/html; charset=utf-8" />
                <meta name="author" content="SemiColonWeb" />



                <link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Poppins:300,400,500,600,700|PT+Serif:400,400i&display=swap" rel="stylesheet" type="text/css" />
                <link rel="stylesheet" href="css/bootstrap.css" type="text/css" />
                <link rel="stylesheet" href="style.css" type="text/css" />
                <link rel="stylesheet" href="css/swiper.css" type="text/css" />
                <link rel="stylesheet" href="css/dark.css" type="text/css" />
                <link rel="stylesheet" href="css/font-icons.css" type="text/css" />
                <link rel="stylesheet" href="css/animate.css" type="text/css" />
                <link rel="stylesheet" href="css/magnific-popup.css" type="text/css" />

                <link rel="stylesheet" href="css/custom.css" type="text/css" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {styleTags}
            </Head>
            <body className="stretched">

            <div className="root">
                {main}
            </div>

            <div id="gotoTop" className="icon-angle-up"></div>



            <script src="js/jquery.js"></script>
            <script src="js/plugins.min.js"></script>


            <script src="js/functions.js"></script>
            <NextScript />
            </body>
            </html>
        )
    }
}
