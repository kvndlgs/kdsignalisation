import Layout from '../components/layout'
import * as Icon from 'react-icons/hi'

export default function Contact(){
    return (
        <Layout hasFooter title='Nous joindre'>
            <div className='max-w-[1440px] py-20 min-h-full grid grid-cols-2 justify-around items-center'>
                <div className='grid grid-span-2 gap-3 grid-rows-10 w-5/6 mx-auto border-dark-200 shadow-md px-14 py-16 rounded'>
                    <input
                     type='text'
                     name='nom'
                     id='nom'
                     className='w-full py-4 px-4 bg-dark-50 rounded placeholder:text-white placeholder:font-semibold'
                     placeholder='Nom et prenom'
                     />
                     <input
                     type='text'
                     name='entreprise'
                     id='entreprise'
                     className='w-full py-4 px-4 bg-dark-50 rounded placeholder:text-white placeholder:font-semibold'
                     placeholder="Nom de l'entreprise"
                     />
                     
                     <input
                     type='text'
                     name='role'
                     id='role'
                     className='w-full py-4 px-4 bg-dark-50 rounded placeholder:text-white placeholder:font-semibold'
                     placeholder="Quelle est votre role ?"
                     />
                     <input
                     type='text'
                     name='phone'
                     id='phone'
                     className='w-full py-4 px-4 bg-dark-50 rounded placeholder:text-white placeholder:font-semibold'
                     placeholder="Numero de telephone"
                     />
                     <input
                     type='email'
                     name='mail'
                     id='mail'
                     className='w-full py-4 px-4 bg-dark-50 rounded placeholder:text-white placeholder:font-semibold'
                     placeholder="Addresse courriel"
                     />
                     <textarea className='w-full pl-4 pt-4 h-28 bg-dark-50 rounded placeholder:text-white placeholder:font-semibold'
                     placeholder='Votre message'>

                     </textarea>

                     <button  className='w-full py-4 px-6 text-white bg-light-400 hover:bg-light rounded font-semibold'> Envoyer </button>
                </div>
                <div className='grid grid-cols-2 grid-rows-3 grid-span-1 max-h-30 justify-start px-10'>
                    <h4 className='py-2 font-bold text-2xl text-dark'>Ouvert 24/7</h4>
                    <h4 className='py-2 font-bold text-2xl text-light'>Partout au Quebec</h4>
                    <h4 className='py font-bold text-2xl text-light'><a href='tel:438-526-5465'>438-526-5465</a></h4>
                    <h4 className='py font-bold text-2xl text-dark'><a href='mailto:info@kdsignalisation.ca'>info@kdsignalisation</a></h4>
                    <h3 className='py font-bold text-2xl text-dark'>53 Boul Lajeunesse O, <br/> Saint-Jerome, <br/> Quebec, J7Y1W4 </h3>
                </div>
            </div>
        </Layout>
    )
}