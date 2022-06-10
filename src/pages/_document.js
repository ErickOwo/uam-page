import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document{
  render(){
    return(
      <Html lang="es" className="scroll-smooth">
        <Head >
          <link href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto+Slab:wght@100&family=Ubuntu:wght@300&display=swap" rel="stylesheet" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  };
};

export default MyDocument;