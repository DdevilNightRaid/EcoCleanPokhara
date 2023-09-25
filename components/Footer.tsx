import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer
            className='flex flex-col gap-4 py-10 px-2'
        >
            <section
                className='flex flex-col gap-2 md:justify-center md:items-center'
            >
                <div
                    className='flex flex-row gap-2 items-center'
                >
                    <div>
                        <Image
                            src='/eco-clean.jpg'
                            height={60}
                            width={60}
                            alt='hey there'
                        />
                    </div>
                    <h2 className='font-Poppins font-medium'>Eco Clean Pokhara</h2>
                </div>
                <div
                    className='font-medium font-Poppins flex flex-col gap-4'
                >
                    <div
                        className='border-2 border-[#4ecdc4] px-4 py-2 flex justify-center items-center hover:bg-[#4ecdc4] hover:text-[#f7fff7]'
                    >
                        <Link href={'https://www.facebook.com/ecocleaningnepal'}>
                            Message Us Now
                        </Link>
                    </div>
                    <div  className='border-2 border-[#4ecdc4] px-4 py-2 flex justify-center items-center hover:bg-[#4ecdc4] hover:text-[#f7fff7]'>
                        <a href={`tel:9817109084`}>
                            Call Now: +977 9817109084
                        </a>
                    </div>
                </div>
            </section>
            
            <section
                className='md:flex md:flex-row md:justify-between md:px-10'
            >
                <div>© 2023, Eco Clean. All rights reserved.</div>
                <div
                    className='flex flex-row gap-2 py-2'
                >
                    <p className='font-light font-NunitoSans text-[#011627]'>Developed By: </p>
                    <Link
                        href={'https://themisfitofnightraid.com'}
                    >
                        <p className='font-medium font-Playfair text-[#011627]'>TheMisFitOfNightRaid</p>
                    </Link>
                </div>
            </section>
        </footer>
    )
}

export default Footer