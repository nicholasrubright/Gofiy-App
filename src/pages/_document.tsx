import Navbar from "@shared/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="container">
          <div className="row">
            <Navbar />
          </div>
          <div className="row">
            <Main />
          </div>
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
