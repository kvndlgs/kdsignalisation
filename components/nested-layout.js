import * as Icon from 'react-icons/ri'
import Button from '../components/button'
import Image from 'next/image'


export default function NestedLayout(){
    return (
      <section id='hero' className='bg-thunder-25'>
        <div className='flex flex-col-reverse max-w-screen-xl md:flex-row items-center justify-center px-14 mx-auto py-16 md:py-32 space-y-0 md:space-y-0'>
          <div className="flex flex-col md:w-1/2  h-1/1 ">
            <h1 className="md:max-w-full mx-auto leading-10 tracking-0 text-light-600 text-center md:text-left h-1/1 text-4xl mt-2 font-one  md:leading-[52px] md:text-5xl ">
              LA SECURITE SUR LES CHANTIERS ROUTIERS, C'EST NOTRE AFFAIRE!
            </h1>
            <p className="max-w-lg font-two text-1xl text-center pt-0 mt-0 text-thunder md:text-left">
              
            </p>
            <a href="/" className="py-4 px-6 flex md:mt-14 mt-10 md:w-[260px] mx-auto md:mx-0 items-center tracking-wider justify-center text-white bg-light-400 font-two text-main rounded-md baseline hover:bg-light-200">
            Nos services
            </a>
          </div>
          <div className='md:w-1/2 w-1/1 md:mx-auto'>
            <img src="/images/arrow1.gif" alt="signalisation routière" className='px-11 max-w-md md:max-w-lg' />
          </div>
        </div>
      </section>
    )
}


// 89302500220722892431