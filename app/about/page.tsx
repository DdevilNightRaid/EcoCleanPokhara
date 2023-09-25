import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section
      className='px-2 py-4 md:px-8'
    >
      <header
        className='flex flex-col gap-7 items-center md:flex-row md:gap-4'
      >
        <div
          className='flex items-start justify-start md:h-[20rem] md:w-[50%]'
        >
          <h2 className='font-Poppins md:text-[1.7rem]'>We are the <span className='text-[#4ecdc4]'>best cleaning service</span> available to you.</h2>
        </div>
        <div className='w-20rem h-20rem'>
          <Image
            src={'/about/cleaningService.svg'}
            alt={"Hero Image"}
            width={850}
            height={800}
          />
        </div>
        <div
          className='md:w-[50%] md:h-[20rem] flex items-end py-8 font-Poppins'
        >
          <p>We provide both residential and commercial cleaning services. One of the best company in Pokhara for all cleaning work with latest and advance technology.</p>
        </div>
      </header>
      <section
        className='flex flex-col gap-8 py-8 md:flex-row md:gap-8'
      >
        <div
          className='flex flex-col gap-8 md:flex-row md:gap-8 md:w-[60%]'
        >
          <div          >
            <h2 className='text-[1.2rem] font-Poppins md:text-[3rem]'>Let's get <span className='text-[#4ecdc4]'>connected</span>.</h2>
          </div>
          <div
            className='w-20rem h-20rem'
          >
            <Image
              src={'/about/connected.gif'}
              alt={"Hero Image"}
              width={450}
              height={400}
            />
          </div>
        </div>
        <div
          className='md:w-[40%] md:flex md:items-end md:justify-end'
        >
          <div
            className='bg-[#ffe1ab] py-2 px-4 rounded-md md:w-fit md:px-10 md:py-8 '
          >
            <h2 className='text-[1.3rem] font-Poppins py-2 md:text-[2rem]'>Contact</h2>
            <div className='flex flex-col gap-3'>
              <p className='font-neuton'>Phone: <span className='font-Poppins md:text-[1.2rem]'> +977 9802809333</span></p>
              <p className='font-neuton'>Email: <span className='font-Poppins md:text-[1.2rem]'> info.ecopokhara@gmail.com</span></p>
              <p className='font-neuton'>Facebook: <span className='font-Poppins md:text-[1.2rem]'> @ecocleaningnepal</span></p>
            </div>
          </div>
        </div>
      </section>
      <section
        className='flex flex-col gap-8 items-center'
      >
        <div>
          <h1 className='font-Poppins text-[1.2rem] font-medium'>WE ARE LOCATED AT:</h1>
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.837693547717!2d83.96083257483389!3d28.212243403043487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595fa60c5d2dd%3A0x1e74e8dd027729cc!2sEco%20Cleaning%20Pokhara!5e0!3m2!1sen!2snp!4v1695518708292!5m2!1sen!2snp" width="400" height="350" loading="lazy"></iframe>
        </div>
      </section>
    </section>
  )
}

export default About