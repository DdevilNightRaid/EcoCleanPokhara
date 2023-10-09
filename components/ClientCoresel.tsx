'use client'
import { ClientsFeedback } from '@/constants'
import Image from 'next/image'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

const ClientCoresel = () => {
    return (
        <div>
            <div
                className="px-2 flex flex-col gap-8 md:px-8 border-2 border-[#4ecdc4] justify-center items-center"
            >
                <Carousel
                    showThumbs={false}
                    autoPlay
                    infiniteLoop
                    interval={2000}
                    showArrows={false}
                    showStatus={false}
                    swipeable={true}
                    className='w-[98%] md:py-10 md:w-[70%]'
                >
                    {
                        ClientsFeedback.map((info) => (
                            <div
                                className="w-full h-full p-2 flex gap-8"
                                key={info.key}
                            >
                                <div
                                    className="flex gap-4"
                                >
                                    <div
                                        className="rounded-sm md:w-[10rem]"
                                    >
                                        <Image
                                            src={info.profile}
                                            alt="Hero Image Here"
                                            height={250}
                                            width={220}
                                            className="rounded-full"
                                        />
                                    </div>
                                </div>
                                <div className="py-2 flex flex-col text-left gap-4">
                                    <div
                                        className="flex flex-col"
                                    >
                                        <p className="text-[1rem] font-Poppins font-medium md:text-[2.3rem]">{info.name}</p>
                                        <p className="text-[0.8rem] font-neuton md:text-[1.2rem] opacity-50">Customer</p>
                                    </div>
                                    <p className="text-[0.8rem] font-Poppins font-light md:text-[1.2rem]">{info.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default ClientCoresel