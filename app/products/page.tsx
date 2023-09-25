import { ProductsCat } from '@/constants'
import Image from 'next/image'
import React from 'react'



const Products = () => {
  return (
    <section className='px-2 py-4 md:px-8'>
      <div className='flex flex-col gap-4 md:flex-row md:justify-around'>
        <div className='md:flex md:items-start md:py-20'>
          <h2 className='font-Poppins md:font-neuton text-[1rem] md:text-[2.5rem]'>We offer the following <span className='text-[#4ecdc4]'>quality products</span> to you:</h2>
        </div>
        <div className='flex justify-end'>
          <Image
            src={'/products/ProductQuality.svg'}
            alt={'hero Img'}
            height={440}
            width={440}
          />
        </div>
      </div>
      <div
        className='flex flex-col gap-10 py-4'
      >
        {
          ProductsCat.map((category) => (
            <div
              key={category.title}
              className='flex flex-col gap-4'
            >
              <h2 className='font-medium font-Poppins text-[1.3rem]'>{category.title}</h2>
              <ul
                className='flex flex-col items-center gap-8 md:flex-row'
              >
                {
                  category.subProducts.map((product) => (
                    <div
                      key={product.id}
                      className='shadow-[2px_2px_6px_-2px_#4a5759] rounded-sm p-2  md:px-5 w-[15rem] h-[15rem] flex flex-col items-center justify-between'
                    >
                      <div>
                        <Image
                          src={product.productPic}
                          alt={'product pic'}
                          width={200}
                          height={200}
                        />
                      </div>
                        <div className='flex items-start w-[100%]'>
                        <p className='font-light font-Poppins text-[1rem]'>{product.productName}</p>
                      </div>
                    </div>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Products