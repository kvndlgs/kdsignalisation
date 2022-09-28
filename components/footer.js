import Logo from '../components/logo'
import * as Icon from 'react-icons/ri'

export default function Footer() {
    return (
     
      
      <footer class="bg-dark">
        <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div class="lg:flex lg:gap-8">
      
            <div
              class="grid grid-cols-2 gap-8 mt-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16"
            >
              <div class="col-span-2">
                <div>
                  <h2 class="text-2xl font-medium text-white">Inscrivez vous a notre bulletin d'info!</h2>
                </div>
              </div>
      
              <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                <form class="w-full text-white">
                  <label for="email" class="sr-only"> Courriel </label>
      
                  <div class="p-2 sm:flex sm:items-center bg-white rounded">
                    <input
                      class="w-full h-12 p-3 font-medium tracking-widest placeholder-light bg-transparent border-none"
                      type="email"
                      id="email"
                      placeholder="Entrez votre addresse courriel"
                    />
      
                    <button
                      class="w-full h-12 px-6 py-3 mt-1 text-sm font-bold tracking-wide rounded uppercase bg-light-400 sm:ml-4 sm:flex-shrink-0 sm:w-auto sm:mt-0"
                      type="submit"
                    >
                      S'abonner
                    </button>
                  </div>
                </form>
              </div>
      
              <div class="col-span-2 pt-6 border-t sm:col-span-1 border-white/10">
                <p class="font-bold text-white">Nos services</p>
      
                <nav class="flex flex-col mt-6 space-y-4 text-sm text-white">
                  <a class="inline-block" href=""> Signalisation Routiere </a>
                  <a class="inline-block" href=""> Vehicule d'accompagnement </a>
                  <a class="inline-block" href=""> Location d'equipement (bientot) </a>
                </nav>
              </div>
      
              <div class="col-span-2 pt-6 border-t sm:col-span-1 border-white/10">
                <p class="font-bold text-white">L'entreprise</p>
      
                <nav class="flex flex-col mt-6 space-y-4 text-sm text-white">
                  <a class="inline-block" href=""> Qui sommes-nous ? </a>
                  <a class="inline-block" href=""> L'equipe </a>
                  <a class="inline-block" href=""> Carriere </a>
                </nav>
              </div>
      
              <div class="col-span-2 pt-6 border-t sm:col-span-1 border-white/10">
                <p class="font-bold text-dark-200">Liens utiles</p>
      
                <nav class="flex flex-col mt-6 space-y-4 text-sm text-dark-50 font-semibold">
                  <a class="inline-block" href=""> Nous joindre </a>
                  <a class="inline-block" href=""> FAQs </a>
                  <a class="inline-block" href=""> Clavarder </a>
                </nav>
              </div>
      
              <div class="col-span-2 pt-6 border-t sm:col-span-1 border-white/10">
                <p class="font-bold text-light-50">Client</p>
      
                <nav class="flex flex-col mt-6 space-y-4 text-sm font-semibold text-dark-200">
                  <a class="inline-block" href="">Connexion</a>
                  <a class="inline-block" href="">Inscription</a>
                </nav>
              </div>
      
              <div class="flex col-span-2 gap-5 text-dark-100 lg:col-span-5">
                <a class="hover:opacity-75" href="" target="_blank" rel="noreferrer">
                  <span class="sr-only"> Facebook </span>
                  <Icon.RiFacebookCircleFill className='text-2xl' />
                </a>
      
                <a class="hover:opacity-75" href="" target="_blank" rel="noreferrer">
                  <span class="sr-only"> Linkedin </span>
      
                 <Icon.RiLinkedinFill  className='text-2xl' />
                </a>
      
                <a class="hover:opacity-75" href="" target="_blank" rel="noreferrer">
                  <span class="sr-only"> Twitter </span>
                  <Icon.RiTwitterFill className='text-2xl' />
                </a>
      
              </div>
            </div>
          </div>
      
          <div class="pt-8 mt-12 border-t border-white/10">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">

              <p class="text-xs text-center text-dark-200 font-semibold lg:text-left">
                 &copy; 2022. KD Signalisation. Tout droits reserver
              </p>
              <Logo fill='#887F94' size='32px' />
            </div>
          </div>
        </div>
      </footer>

    )
}