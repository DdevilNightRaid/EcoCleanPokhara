import { CService } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CServices = () => {
    return (
        <>
            <div>
                <section className='px-2 py-4 text-[0.7rem] md:px-8'>
                    <header className='flex flex-col gap-4 my-4'>
                        <div className='md:flex gap-2'>
                            <h2 className='md:text-[2rem]'>Eco Cleaning provides a consistent, <span className='md:text-[#4ECDC4]'>high-quality cleaning experience.</span></h2>
                            <Image
                                src={'/services/cleaning-service.svg'}
                                alt={'sofa cleaning'}
                                width={650}
                                height={630}
                            />
                        </div>
                        <p className='md:text-[2rem] text-center'>Here are the list of Residental services that we provide: </p>
                    </header>
                    <div className='flex flex-col md:flex-row flex-wrap md:gap-12 md:justify-center'>
                        {
                            CService.map((items) => (
                                <div className='flex flex-col gap-4 shadow-[2px_2px_6px_-2px_#4a5759] rounded-sm p-2  md:px-5 md:py-4 md:w-[22rem]' key={items.key}>
                                    <div>
                                        <Image
                                            src={items.picture}
                                            alt={'sofa cleaning'}
                                            width={450}
                                            height={230}
                                        />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <div>
                                            <h2 className='text-[1.2rem] md:text-[1.7rem]'>{items.name}</h2>
                                            <span className="w-[2rem] bg-[#4ecdc4] h-[2px] block"></span>
                                        </div>
                                        <div>
                                            <p className='md:text-[0.9rem]'>{items.text}</p>
                                        </div>
                                        <div>
                                            <button className='border-2 border-[#4ECDC4] py-2 px-4 font-Poppins hover:bg-[#4ECDC4] hover:text-[#F7FFF7]'>
                                                <Link href='https://www.facebook.com/ecocleaningnepal'>
                                                    Book Now
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>

            </div>
        </>
    )
}

export default CServices