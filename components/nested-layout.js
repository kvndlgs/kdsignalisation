import * as Icon from 'react-icons/ri'
import Button from '../components/button'
import Image from 'next/image'


export default function NestedLayout(){
    return (
      <section id='hero' className='bg-thunder-400'>
        <div className='flex flex-col-reverse max-w-screen-xl md:flex-row items-center justify-center px-14 mx-auto py-16 md:py-32 space-y-0 md:space-y-0'>
          <div className="flex flex-col md:w-1/2">
            <h1 className="md:max-w-3/4 leading-8 tracking-0 text-white text-3xl mt-2 font-one text-center md:leading-[52px] md:text-5xl md:text-left">
             LES EXPERTS <br /> DE LA SIGNALISATION ROUTIÈRE
            </h1>
            <p className="max-w-md font-two text-1xl text-center pt-0 mt-0 text-thunder md:text-left">
              
            </p>
            <a href="/" className="py-4 px-6 flex md:mt-14 mt-8 md:w-[260px] mx-auto md:mx-0 items-center justify-center text-thunder bg-tusk font-two text-1xl rounded-md baseline hover:bg-light-200">
              Nos services
            </a>
          </div>
          <div className='md:w-1/2 md:p-16 bg-white h-['100vh']
            <img src="/images/arrow1.gif" alt="signalisation" />
          </div>
        </div>
      </section>
    )
}