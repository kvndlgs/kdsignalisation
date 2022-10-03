import * as Icon from 'react-icons/ri'
import Button from '../components/button'


export default function NestedLayout(){
    return (

        <div>
        <div className='relative overflow-hidden bg-light-100 py-10'>
       <main className="mx-auto max-w-1/2 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-ultra tracking-tight text-dark sm:text-5xl md:text-6xl">
                 La signalisation routière, c'est notre affaire !
              </h1>
              <p className="mt-3 text-main text-dark-300 sm:mx-auto sm:mt-5 sm:max-w-screen-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Nous assurons la sécurité de vos chantiers a travers le Québec.
              </p>
              <div className="mt-5 sm:mt-8 inline-flex items-start justify-center">
                <div className="rounded-md pb-8">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md  bg-light border-2 border-light px-8 py-3 text-base font-medium text-white hover:bg-light-300 md:py-4 md:px-10 md:text-lg"
                  >
                    Get started
                  </a>
                </div>
                <div className="ml-8 rounded-md">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border-2 border-light-300 bg-light-300 px-8 py-3 text-base font-medium text-white hover:bg-light-200 md:py-4 md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-screen-md w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full md:mt-0  sm:mt-0 lg:mt-[79.37px]"
          src="/images/bgroad.jpg"
          alt=""
        />
      </div>
        </div>
    )
}