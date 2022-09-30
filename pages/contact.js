import Layout from '../components/layout'
import * as Icon from 'react-icons/hi'

export default function Contact(){
    return (
        <Layout hasFooter title='Nous joindre'>
            <div className='w-full flex items-center justify-center pt-6 md:pt-14'>
                <h1 className='text-5xl font-ultra text-dark-400 tracking-widesr'> Nous joindre </h1>
            </div>
            <div className='w-full pb-4 pt-4 md:py-20 min-h-full grid grid-cols-1 mx-auto md:grid-cols-2 justify-around items-center'>
                <form className='grid grid-span-2 grid-cols-1 place-self-center gap-3 w-[90%] md:w-4/6 border-2 border-dark-300 md:px-10 py-4 px-4 md:py-10 rounded'>
                    <input
                     type='text'
                     name='nom'
                     id='nom'
                     className='w-full py-4 px-4 bg-dark-25 rounded placeholder:text-dark-300 placeholder:font-main text-sm'
                     placeholder='Nom et prenom'
                     />
                     <input
                     type='text'
                     name='entreprise'
                     id='entreprise'
                     className='w-full py-4 px-4 bg-dark-25 rounded placeholder:text-dark-300 placeholder:font-main text-sm'
                     placeholder="Nom de l'entreprise"
                     />
                     
                     <input
                     type='text'
                     name='role'
                     id='role'
                     className='w-full py-4 px-4 bg-dark-25 rounded placeholder:text-dark-300 placeholder:font-main text-sm'
                     placeholder="Quelle est votre role ?"
                     />
                     <input
                     type='text'
                     name='phone'
                     id='phone'
                     className='w-full py-4 px-4 bg-dark-25 rounded placeholder:text-dark-300 placeholder:font-main text-sm'
                     placeholder="Numero de telephone"
                     />
                     <input
                     type='email'
                     name='mail'
                     id='mail'
                     className='w-full py-4 px-4 bg-dark-25 rounded placeholder:text-dark-300 placeholder:font-main text-sm' 
                     placeholder="Addresse courriel"
                     />
                     <textarea className='w-full pl-4 pt-4 h-28 bg-dark-25 rounded placeholder:text-dark-300 placeholder:font-main text-sm'
                     placeholder='Votre message'>

                     </textarea>

                     <button  className='w-full py-4 px-6 text-white bg-light-400 hover:bg-dark-25 rounded font-main text-sm'> Envoyer </button>
                </form>
                <div className='grid md:grid-cols-2 grid-cols-1 grid-rows-5 gap-0 md:grid-rows-3 md:grid-span-1 md:justify-start justify-center px-10 pt-9'>
                    <h4 className='py-2 font-ultra text-sm text-dark inline-flex items-stretch'>
                        <Icon.HiClock className='mr-3 -mt-1 text-3xl text-light' />Ouvert 24/7</h4>
                    <h4 className='py-2 font-ultra text-sm text-dark inline-flex items-stretch'>
                        <Icon.HiMap className='mr-3 -mt-1 text-3xl text-light' /> Partout au Quebec</h4>
                    <h4 className='py font-ultra text-sm text-dark inline-flex items-stretch'>
                    <Icon.HiPhone className='mr-3 -mt-1 text-3xl text-light' />
                        <a href='tel:438-526-5465'>
                         438-526-5465</a>
                        </h4>
                        <h4 className='py font-ultra text-sm text-dark inline-flex items-stretch'>
                    <Icon.HiMail className='mr-3 -mt-1 text-3xl text-light' />
                        <a href='mailto:info@kdsignalisation.ca'>
                         info@kdsignalisation.ca</a>
                        </h4>
                    <h4 className='py font-ultra text-sm text-dark inline-flex items-stretch'> <Icon.HiLocationMarker className='mr-3 -mt-1 text-3xl text-light' />
                     53 Boul Lajeunesse O, <br/> Saint-Jerome, <br/> Quebec, J7Y1W4 
                     </h4>
                </div>
            </div>
        </Layout>
    )
}