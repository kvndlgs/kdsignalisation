import Navbar from "./nav"
import Facebook from './facebook'
import Head from 'next/head'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>KD Signalisation</title>
                <meta name="description" content="KD Signalisation, Signalisation routiere, saint-jerome, laurentides, quebec, securiter routiere, construction routiere, signaleur, le moin cher" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;800&display=swap" rel="stylesheet" />
                <link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="images/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="images/icons/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="images/icons/safari-pinned-tab.svg" color="#333333" />
                <meta name="msapplication-TileColor" content="#00aba9" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Facebook />
        </>
    )
}