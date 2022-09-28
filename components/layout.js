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
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Facebook />
        </>
    )
}