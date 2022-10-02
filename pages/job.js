import Layout from '../components/layout'
import Button from '../components/button'
import Image from 'next/image'
import PageTitle from '../components/page-title'
import { HiUser, HiMail, HiPhone, HiUpload } from 'react-icons/hi'


export default function Job(){
    return (
        <Layout hasFooter title='Carrieres'>
        <div className='max-w-screen-xl flex flex-col w-full h-auto mx-auto'>
            <PageTitle>
                Joins-toi a l'équipe !
            </PageTitle>
            <div className='flex md:flex-row flex-col w-full h-auto items-center justify-center'>
            <div className='flex items-center justify-center md:w-1/2 w-full'>
                <form className='bg-white flex-col py-6 px-6 mb-10 border-2 border-dark w-5/6 rounded-lg'>
                    <div className='inline-flex p-2'>
                        <label htmlFor='nom' className='px-3 py-2 text-1xl text-dark-25 bg-dark rounded-l border-l-2 border-t-2 border-b-2 border-dark'> <HiUser /> </label>
                    <input
                     type='text'
                     name='nom'
                     id='nom'
                     className='bg-dark-25 w-full py-2 px-4 rounded-r text-dark font-medium border-b-2 border-t-2 border-r-2 border-dark placeholder:text-dark placeholder:font-medium focus:outline-none focus:ring-none focus:bg-light-100'
                     placeholder='Nom et prénom'
                     />
                     </div>
                     <div className='inline-flex p-2'>
                        <label htmlFor='phone' className='px-3 py-2 text-1xl text-dark-25 bg-dark rounded-l border-l-2 border-t-2 border-b-2 border-dark'> <HiPhone /> </label>
                    <input
                     type='text'
                     name='phone'
                     id='phone'
                     className='bg-dark-25 py-2 px-4 rounded-r text-dark font-medium border-b-2 border-t-2 border-r-2 border-dark placeholder:text-dark placeholder:font-medium focus:outline-none focus:ring-none focus:bg-light-100'
                     placeholder='Numero de téléphone'
                     />
                     </div>
                     <div className='inline-flex p-2'>
                        <label htmlFor='nom' className='px-3 py-2 text-1xl text-dark-25 bg-dark rounded-l border-l-2 border-t-2 border-b-2 border-dark'> <HiMail /> </label>
                    <input
                     type='text'
                     name='mail'
                     id='mail'
                     className='bg-dark-25 w-full py-2 px-4 rounded-r text-dark font-medium border-b-2 border-t-2 border-r-2 border-dark placeholder:text-dark placeholder:font-medium focus:outline-none focus:ring-none focus:bg-light-100'
                     placeholder='Adresse courriel'
                     />
                     </div>
                     <div className='inline-flex p-2'>
                     <label htmlFor='cv' className='flex items-center justify-center px-3 py-2 text-1xl text-dark-25 bg-dark rounded-l border-l-2 border-t-2 border-b-2 border-dark'> <HiUpload /> </label>
                        <input
                          type='file'
                          name='cv'
                          id='cv'
                          className='bg-dark-25 w-full py-2 px-4 rounded-r text-dark font-medium border-b-2 border-t-2 border-r-2 border-dark placeholder:text-dark placeholder:font-medium focus:outline-none focus:ring-none focus:bg-light-100'
                          placeholder='cv'
                          />
                     </div>
                     <div className='flex items-center justify-start my-2 p-2'>
                    <Button label='Envoyer'/>
                    </div>
                </form>
            </div>
            <div className='flex items-center justify-center md:w-1/2 w-full h-auto px-8 md:px-0'>
                <Image width='450%' height='500%' src='/images/IMG_0868.JPG' alt='retard' />
            </div>
            </div>
        </div>
        </Layout>
    )
}