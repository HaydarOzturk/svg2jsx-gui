import React, { Fragment } from 'react';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class AugmentedDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const initialRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        initialRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      const styleTags = sheet.getStyleElement();
      const initialStyles = initialProps.styles;

      return {
        ...initialProps,
        styles: (
          <Fragment>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:400,700|Inconsolata"
            />
            {initialStyles}
            {styleTags}
          </Fragment>
        ),
        head: (
          <Fragment>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Convert SVG to valid JSX" />
            <meta name="keywords" content="svg, jsx, svg2jsx" />
            <meta name="author" content="Bălaj Marius" />
            <meta name="copyright" content="Copyright Bălaj Marius 2019. All Rights Reserved." />
            <link rel="shortcut icon" href="/static/favicon.ico" />
            <title>Editor - Convert SVG to valid JSX</title>
          </Fragment>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

export default AugmentedDocument;
