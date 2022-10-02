import { useState } from 'react'
import Navbar from "./nav"
import Facebook from './facebook'
import Head from 'next/head'
import Script from 'next/script'
import Footer from './footer'


export default function Layout({ children, hasFooter, title }) {
    return (
        <>
        
            <Head>
                <title>KD SIGNALISATION | {title ? title : ""}</title>
                <meta name="description" content="KD SIGNALISATION, Signalisation routière, Laurentides, Laneudière, Montréal,Laval, Mauricie Quebec,Outaouais, 
                Montérégie, Canton-de-l'est, Centre-du-Quebec, Abitibi-Témiscamingue, Saguenay-Lac-Saint-Jean, Charlevoix, Côte-Nord, Îles-de-la-madeleine, Gaspésie, Bas-Saint-Laurent, 
                Chaudière-Appalache, Nunavik, Eeyou istchee, Baie-James 
                securité routière, construction routière, signaleur,signaleur routier"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="images/icons/safari-pinned-tab.svg" color="#333333" />
                <meta name="msapplication-TileColor" content="#00aba9" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
        
            <Navbar />
            <main>{children}</main>
            {hasFooter ?
                <Footer /> : ""}
            <Facebook />
            <Script>

                {`
                     (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                      ga('create', 'UA-243009363-1', 'auto');
                      ga('send', 'pageview');
                `}
            </Script>
            <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5539LBMLKX');
        `}
      </Script>
        </>
    )
}