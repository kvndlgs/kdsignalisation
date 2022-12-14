import Layout from '../components/layout'
import PageTitle from '../components/page-title'
import Button from '../components/button'
import * as Icon from 'react-icons/hi'

export default function Contact(){
    return (
        <Layout hasFooter title='Nous joindre'>
            <div className='max-w-screen-xl mx-auto'>
            <PageTitle>
                Nous joindre
            </PageTitle>
            <div className='max-w-screen-xl mx-auto flex justify-center items-center pt-4 pb-8 px-14'>

            
            <p className='text-base text-thunder font-three'>Faites-nous part des détails de votre projet un de nos experts communiqueras avec vous dans les plus bref délais.</p>
            </div>
            <div className='w-full pb-20 min-h-full grid grid-cols-1 mx-auto md:grid-cols-2 justify-around items-center'>
                <form className='grid grid-span-2 grid-cols-1 place-self-center gap-3 w-5/6 border-2 border-thunder-300 md:px-10 py-5 px-5 md:py-10 rounded-lg'>
                    <input
                     type='text'
                     name='nom'
                     id='nom'
                     className='w-full py-4 px-4 bg-thunder-25 rounded placeholder:text-thunder-300 placeholder:font-three text-sm'
                     placeholder='Nom et prenom'
                     />
                     <input
                     type='text'
                     name='entreprise'
                     id='entreprise'
                     className='w-full py-4 px-4 bg-thunder-25 rounded placeholder:text-thunder-300 placeholder:font-three text-sm'
                     placeholder="Nom de l'entreprise"
                     />
                     
                     <input
                     type='text'
                     name='role'
                     id='role'
                     className='w-full py-4 px-4 bg-thunder-25 rounded placeholder:text-thunder-300 placeholder:font-three text-sm'
                     placeholder="Quelle est votre role ?"
                     />
                     <input
                     type='text'
                     name='phone'
                     id='phone'
                     className='w-full py-4 px-4 bg-thunder-25 rounded placeholder:text-thunder-300 placeholder:font-three text-sm'
                     placeholder="Numero de telephone"
                     />
                     <input
                     type='email'
                     name='mail'
                     id='mail'
                     className='w-full py-4 px-4 bg-thunder-25 rounded placeholder:text-thunder-300 placeholder:font-three text-sm' 
                     placeholder="Addresse courriel"
                     />
                     <textarea className='w-full pl-4 pt-4 h-28 bg-thunder-25 rounded placeholder:text-thunder-300 placeholder:font-three text-sm'
                     placeholder='Votre message'>

                     </textarea>

                     <Button label='Envoyer' />
                </form>
                <div className='grid md:grid-cols-2 grid-cols-1 grid-rows-5 gap-0 md:grid-rows-3 md:grid-span-1 md:justify-start justify-center px-10 py-9'>
                    <h4 className='py-2 font-two text-thunder-300 inline-flex items-stretch'>
                        <Icon.HiClock className='mr-3 -mt-1 text-3xl text-thunder-25' />Urgence 24/7</h4>
                    <h4 className='py-2 font-two text-thunder-300 inline-flex items-stretch'>
                        <Icon.HiMap className='mr-3 -mt-1 text-3xl text-thunder-25' /> Partout au Quebec</h4>
                    <h4 className='py font-one text-sm text-thunder-300 inline-flex items-stretch'>
                    <Icon.HiPhone className='mr-3 -mt-1 text-3xl text-thunder-25' />
                        <a href='tel:438-526-5465>' className='font-two  text-thunder-300'>
                         438-526-5465</a>
                        </h4>
                        <h4 className='py font-two text-sm text-thunder-300 inline-flex items-stretch'>
                    <Icon.HiMail className='mr-3 -mt-1 text-3xl text-thunder-25' />
                        <a href='mailto:info@kdsignalisation.ca'>
                         info@kdsignalisation.ca</a>
                        </h4>
                    <h4 className='py font-two text-sm text-thunder-300 inline-flex items-stretch'> <Icon.HiLocationMarker className='mr-3 -mt-1 text-3xl text-thunder-25' />
                     53 Boul Lajeunesse O, <br/> Saint-Jerome, <br/> Quebec, J7Y1W4 
                     </h4>
                </div>
            </div>
            </div>
        </Layout>
    )
}