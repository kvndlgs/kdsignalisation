import NavBar from "./nav"
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi"
import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>KD Signalisation</title>
                <meta name="description" content="KD Signalisation, Signalisation routiere, saint-jerome, laurentides, quebec, securiter routiere, construction routiere, signaleur, le moin cher" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;800&display=swap" rel="stylesheet"/>
                </Head>
                    <div className='absolute top-0 bottom-0 left-0 right-0 min-w-[100%] min-h-[100%] flex items-center justify-center'>

                        <div className='flex flex-col w-full items-center'>
                            <img src='images/kd.png' alt='logo' className='w-[50%] md:w-[20%]' />
                            <h4 className='mb-4'> SITE BIENTOT EN LIGNE!</h4>
                            <div className='flex flex-col'>
                                <span className='inline-flex items-center justify-start w-full py-4'><HiOutlinePhone /> <a className='ml-4' href='tel:4385265465'> 438-526-5465 </a> </span>

                                <span className='inline-flex items-center justify-start w-full py-4'> <HiOutlineMail /><a className='ml-4' href='mailto:info@kdsignalisation.ca'>info@kdsignalisation</a></span>
                            </div>
                        </div>
                    </div>
                </>
                )
}