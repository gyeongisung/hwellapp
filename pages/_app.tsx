import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config.js';

import Script from 'next/script.js';
import Head from 'next/head.js';
import * as gtag from '../lib/gtag';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
