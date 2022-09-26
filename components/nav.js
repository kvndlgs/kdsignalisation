import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import {  HiMenuAlt3, HiX, HiBellIcon } from 'react-icons/hi'

const navigation = [
    { name: 'Accueil', href:'#', current: true },
    { name: 'Services', href: '#', current: false },
    { name: 'A propos', href: '#', current: false },
    { name: 'Carriere', href: '#', current: false },
    { name: 'Nous joindre', href: '#', current: false },
]


export default function NavBar() {
    return (
        <nav classNames='flex'>
            <div className='inline-flex max-w-8xl mx-auto justify-between'>
            <a href='/' className='w-24 self-center lg:self-start'>
                <img src='images/kd.png' alt='kd' className='hidden lg:block' />
                <img src='images/kd.png' alt='kd' className='block lg:hidden' />
            </a>
            <div className='inline-flex ml-16 items-center justify-start w-full py-4'>
                {
                    navigation.map((item) => {
                        return (
                            <a 
                              key={item}
                              href={item.href}
                              className='mx-3'
                            >
                                {item.name}
                            </a>
                        )
                    })
                }
            </div>
            <div className='inline-flex items-center justify-center h-full'>
                <a href='#' className='inline-flex items-center justify-center bg-blue-700 py-2 px-4 h-2/3 rounded text-white'>
                    Connexion client
                </a>
            </div>
            </div>
        </nav>
    )
  }