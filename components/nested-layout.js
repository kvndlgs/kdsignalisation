import * as Icon from 'react-icons/ri'

export default function NestedLayout(){
    return (
        <div className='h-auto bg-white max-width-[1440px]'>
        <section className='px-13 py-10 w-1/2 mx-auto h-auto pt-40 pb-40'>
            <h2 className='text-3xl md:text-5xl font-black text-dark-400 pb-2'> NOUS GARANTIRONS LA SÉCURITÉ DE VOS CHANTIERS A TRAVERS LE QUEBEC. </h2>
            <p className='pb-10 font-semibold text-dark-300'> Clavarder avec l'un de nos expert et obtener votre soumission en quelques minutes.Cliquer sur la bulle-message ci-dessous pour debuter.</p>
            <a href='#' className='py-4 px-5 mt-44 bg-light-400 font-bold text-white rounded'> SOUMISSION RAPIDE </a>
            
        </section>
        <section className='w-full bg-light h-auto flex items-center justify-center py-24'>
            
            <h4 className='text-2xl md:text-4xl font-black text-dark mb-14'> POURQUOI KD SIGNALISATION ? </h4>
        </section>
        </div>
    )
}