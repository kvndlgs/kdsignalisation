
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {HiChevronDown,  HiArrowsExpand, HiCalendar, HiChartBar, HiCursorClick, HiPlay,HiShieldCheck, HiChartSquareBar, HiBellIcon, HiX, HiMenuAlt3 } from 'react-icons/hi'
import Logo from '../components/logo'

const navigation = [
    { name: 'Services', href: '/services', current: true },
    { name: 'A propos', href: '/about', current: false },
    { name: 'Carriere', href: '/job', current: false },
    { name: 'Nous joindre', href: '/contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Navbar() {

         return (
            <Popover className="relative bg-dark">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
                <div className="flex items-center justify-between  py-4 md:justify-start md:space-x-14">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="#">
                      <span className="sr-only">KD Signalisation</span>
                      <Logo />
                    </a>
                  </div>
                  <div className="-my-2 -mr-2 md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-dark hover:bg-white hover:text-light-400 focus:outline-none ">
                      <span className="sr-only">Open menu</span>
                      <HiMenuAlt3 className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                  <Popover.Group as="nav" className="hidden space-x-8  md:flex">
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? 'text-light' : 'text-white',
                              'group inline-flex items-center text-base font-medium'
                            )}
                          >
                            <span className='text-white'>Nos Services</span>
                            <HiChevronDown
                              className={classNames(
                                open ? 'text-light' : 'text-white',
                                'mt-1 ml-1 h-6 w-6'
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>
        
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/3">
                              <div className="overflow-hidden shadow-lg">
                                <div className="relative text-white font-semibold bg-dark grid gap-6 px-4 py-0 mt-4 sm:gap-8 sm:p-2">
                                <a href='#' className='space-y-6 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-8'>
                                Signalisation routiere
                                </a>
                                </div>
                                <div className="relative text-white font-semibold bg-dark  grid gap-6 px-5 py-0 border border-t-1 sm:gap-8 sm:p-2">
                                <a href='#' className='space-y-6 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-8'>
                                Vehicule d'accompanement
                                </a>
                                </div>
                                <div className="relative text-white font-semibold bg-dark  grid gap-6 px-5 py-0 border border-t-1 sm:gap-8 sm:p-2">
                                <a href='#' className='space-y-6 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-8'>
                                Location d'equipements
                                </a>
                                </div>
                               
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
    
                    <a href="#" className="font-medium text-white">
                      Carriere
                    </a>
                    <a href="#" className=" font-medium text-white">
                        A Propos
                    </a>
                    <a href="#" className="font-medium  text-white">
                        Nous Joindre
                    </a>
                  </Popover.Group>
                  <div className="hidden items-center justify-center md:flex md:flex-1 lg:w-0">
    
                    <a
                      href="#"
                      className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded border border-transparent bg-light-200 px-5 py-3 text-base
                      font-semibold tracking-wider
                      text-white shadow-sm"
                    >
                      Se connecter
                    </a>
                    <a href='/' className='text-light-200 ml-6 font-medium'>Nouveau client ?</a>
                  </div>
                </div>
              </div>
        
              <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform transition md:hidden">
                  <div className="divide-y-2 divide-light bg-dark shadow-lg">
                    <div className="px-5 pt-5 pb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <Logo />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-dark  hover:text-light ">
                            <span className="sr-only">Close menu</span>
                            <HiX className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
 
                    </div>
                    <div className="space-y-6 py-6 px-5">
                      <div className="grid grid-cols-2 gap-y-4 gap-x-15 text-white">
                        { navigation.map((item)=> {
                            return (
                                <a className='p-3 hover:text-light' href={item.href}
                                   key={item}
                                   >{item.name}</a>
                            )
                        })}
                      </div>
                      <div>
                        <a
                          href="#"
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-light px-4 py-2 text-base font-medium text-white shadow-sm"
                        >
                          Nouveau client
                        </a>
             
                          <a href="#" className="flex w-full items-center justify-center mt-4 rounded-md border border-transparent bg-light px-4 py-2 text-base font-medium text-white shadow-sm">
                            Se connecter
                          </a>
                    
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
         )
          
        }
