import Layout from '../components/layout'
import Button from '../components/button'
import Image from 'next/image'
import PageTitle from '../components/page-title'
import { HiUser, HiMail, HiPhone, HiUpload } from 'react-icons/hi'


function Input({type, label, value, icon , name, placeholder}){
    return (
        <div className='inline-flex my-2 mx-auto w-full'>
            <label className='flex items-center justify-center px-3 py-2 text-1xl text-dark-25 bg-dark rounded-l border-l-2 border-b-2 border-dark' htmlFor={name}>{icon ? icon : label }</label>
            <input
            className='bg-dark-25 py-2 px-2 rounded-r text-dark font-medium border-b-2 border-t-2 border-r-2 border-dark placeholder:text-dark placeholder:font-medium focus:outline-none focus:ring-none focus:bg-light-100'
             name={name}
             type={type}
             value={value}
             placeholder={placeholder}
            />
        </div>
    )
}

export default function Job(){
    return (
        <Layout hasFooter title='Carrieres'>
        <div className='max-w-screen-xl flex flex-col w-full h-auto mx-auto'>
            <PageTitle>
                Joins-toi a l'équipe !
            </PageTitle>

            <div className='flex md:flex-row flex-col w-full h-auto items-center justify-center'>
            <div className='flex items-center justify-center md:w-1/2 w-full'>
                <form className=' flex items-start justify-center bg-white flex-col py-6 px-6 mb-10 border-2 border-bourg w-5/6 rounded-lg'>
                    <Input
                      icon={<HiUser />}
                      name='nom'
                      type='text'
                      placeholder='Nom et prénom'
                    />

                     <Input
                       icon={<HiPhone />}
                       name='phone'
                       type='text'
                       placeholder='Telephone'
                    />
                    <Input
                      icon={<HiMail />}
                      type='email'
                      name='mail'
                      placeholder='Addresse courriel'
                     />

                     <Input 
                       icon={<HiUpload />}
                       type='file'
                       name='cv'
                       placeholder='CV'
                    />

                     <div className='flex items-center justify-start my-2 py-2'>
                     <Button label='Envoyer'/>
                    </div>
                </form>
            </div>
            <div className='flex items-center justify-center md:w-1/2 w-full h-auto px-8 md:px-0'>
                <Image width='500px' height='600px'  src='/images/IMG_0868.JPG' alt='retard' />
            </div>
            </div>
        </div>
        </Layout>
    )
}