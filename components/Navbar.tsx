'use client'
import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const handleBurger = () => {
        setClicked(!clicked)
    }
    return (
        <nav className='flex justify-between items-center py-2 px-4'>
            <Image
                src='/eco-clean.jpg'
                height={60}
                width={60}
                alt='hey there'
            />

            <ul
                className='hidden md:flex gap-4 font-neuton text-[1.2rem]'
            >
                {
                    NavLinks.map((link) => (
                        <Link
                            href={link.href}
                            key={link.key}
                        >
                            {link.text}
                        </Link>
                    ))
                }
            </ul>
            <ul
                className='flex text-red-600 md:hidden '
            >
                {
                    clicked ?
                        <div
                            className='flex justify-end items-center flex-col-reverse absolute top-0 left-0 bg-white w-[100vw] h-[100vh] py-4'
                        >
                            <div
                                className='flex flex-col items-start w-[100%] p-3 font-neuton font-light text-[1.3rem]'
                            >
                                {
                                    NavLinks.map((link) => (
                                        <Link
                                            href={link.href}
                                            key={link.key}
                                            onClick={() => {
                                                setClicked(!clicked)
                                            }}
                                        >
                                            {link.text}
                                        </Link>
                                    ))
                                }
                                <div className='flex gap-7'>
                                    <button>
                                        <Link href={'https://www.facebook.com/ecocleaningnepal'}>
                                            <Image
                                                src={'/messenger.svg'}
                                                alt='facebook'
                                                width={30}
                                                height={30}
                                            />
                                        </Link>
                                    </button>
                                    <button>
                                        <a href={`tel:9817109084`}>
                                            <Image
                                                src={'/call.svg'}
                                                alt='facebook'
                                                width={22}
                                                height={22}
                                            />
                                        </a>
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    handleBurger();
                                }}
                                className='flex justify-end w-[100%] px-4'
                            >
                                <Image
                                    src={'./cross.svg'}
                                    alt="Hamburger Icon"
                                    width={40}
                                    height={40}
                                />
                            </button>
                        </div>
                        : (
                            <button
                                onClick={() => handleBurger()}
                            >
                                <Image
                                    src={'./hamburger-menu.svg'}
                                    alt="Hamburger Icon"
                                    width={40}
                                    height={40}
                                />
                            </button>
                        )
                }
            </ul>
            <div className='hidden md:flex gap-7'>
                <button>
                    <Link href={'https://www.facebook.com/ecocleaningnepal'}>
                        <Image
                            src={'/messenger.svg'}
                            alt='facebook'
                            width={30}
                            height={30}
                        />
                    </Link>
                </button>
                <button>
                    <a href={`tel:9817109084`}>
                        <Image
                            src={'/call.svg'}
                            alt='facebook'
                            width={22}
                            height={22}
                        />
                    </a>
                </button>
            </div>
        </nav>
    )
}

export default Navbar