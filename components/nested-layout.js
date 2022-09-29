import * as Icon from 'react-icons/ri'

export default function NestedLayout(){
    return (
        <div className='h-auto bg-white max-width-[1440px]'>
        <section className='lg:px-13 px-2 lg:py-10 py-2 lg:w-1/2 md:w-[80%] w-[90%] mx-auto h-auto pt-24 pb-24 lg:pt-36 lg:pb-36'>
            <h2 className='text-4xl lg:text-5xl font-black text-light pb-2 tracking-wider'> NOUS GARANTIRONS LA SÉCURITÉ DE VOS CHANTIERS A TRAVERS LE QUEBEC. </h2>
            <p className='pb-10 font-semibold text-dark-300'> Clavarder avec l'un de nos expert et obtener votre soumission en quelques minutes.Cliquer sur la bulle-message ci-dessous pour debuter.</p>
            <a href='#' className='py-4 px-5 mt-44 bg-light-400 font-bold text-white rounded'> SOUMISSION RAPIDE </a>
            
        </section>
        <section className='w-full bg-light h-auto flex items-center justify-center py-24'>
            
            <h4 className='text-2xl md:text-4xl font-black text-dark mb-14'> POURQUOI KD SIGNALISATION ? </h4>
        </section>
        </div>
    )
}