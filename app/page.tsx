import ClientCoresel from "@/components/ClientCoresel";
import { Clients, ClientsFeedback } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section
      className="flex flex-col gap-4 px-2 md:px-8 md:py-4"
    >
      <section
        className="flex flex-col gap-4 md:flex-row md:justify-center md:items-center"
      >
        <h1
          className="text-[1rem] md:text-[3.5rem]"
        >
          A new generation of cleaning concepts with,
          <span className="text-[#4ecdc4] text-[1.2rem] font-Poppins font-semibold md:text-[4rem]">"Eco Clean."</span>
        </h1>
        <div
          className="w-full flex justify-end md:justify-start md:w-[30rem] md:h-[30rem]"
        >
          <Image
            src={'/home/heroImg.jpg'}
            alt="Hero Image Here"
            height={250}
            width={320}
          />
        </div>
      </section>
      <section
        className="flex flex-col gap-3 md:flex-row md:gap-4 md:py-10"
      >
        <div className="md:justify-start md:w-[30rem] md:h-[30rem]">
          <Image
            src={'/home/whyImg.jpg'}
            alt="Hero Image Here"
            height={250}
            width={320}
          />
        </div>
        <div
          className="flex flex-col gap-4 md:w-[50%]"
        >
          <div>
            <div
              className="flex flex-row gap-4"
            >
              <h2 className="font-Poppins font-medium text-[1.1rem] md:text-[2rem]">WHY CHOOSE US?</h2>
              <div
                className="h-[20rem] w-[20rem] lg:w-[20rem] lg:h-[20rem]"
              >
                <Image
                  src={'/home/curiosity-brain.gif'}
                  alt="Hero Image Here"
                  height={450}
                  width={420}
                />
              </div>
            </div>
            <span className="w-[2rem] bg-[#4ecdc4] h-[2px] block"></span>
          </div>
          <p
            className="font-Poppins font-light text-[0.8rem] md:text-[1rem]"
          >
            Eco cleaning is a cleaning service that focuses on using environmentally friendly products and techniques. Choosing us can help reduce your exposure to harmful chemicals, support sustainable business practices, and contribute to a cleaner environment. Additionally, it may also improve indoor air quality and healthier living environment
          </p>
        </div>
      </section>
      <section
        className="flex gap-8 flex-col"
      >
        <div>
          <h2 className="font-Poppins font-medium text-[1.1rem] md:text-[2rem]">OUR COSTUMER TYPES:</h2>
          <span className="w-[2rem] bg-[#4ecdc4] h-[2px] block"></span>
        </div>
        <div
          className="flex flex-wrap gap-4 justify-center md:gap-20"
        >
          <div
            className="flex flex-col gap-2 p-4 justify-center items-start shadow-[2px_2px_6px_-2px_#4a5759] w-[15rem] rounded-md hover:shadow-[-2px_-2px_-6px_2px_#4a5759]"
          >
            <div>
              <Image
                src={'/home/cservice.svg'}
                alt="Hero Image Here"
                height={250}
                width={220}
              />
            </div>
            <p className="font-Poppins">Residential Services</p>
            <button
              className="border-2 border-[#4ecdc4] py-2 px-4 text-[0.8rem] font-Poppins"
            >
              <Link href="/RService">Check Now</Link>
            </button>
          </div>
          <div
            className="flex flex-col gap-2 p-4 justify-center items-start shadow-[2px_2px_6px_-2px_#4a5759] w-[15rem] rounded-md hover:shadow-[-2px_-2px_-6px_2px_#4a5759]"
          >
            <div>
              <Image
                src={'/home/rservice.gif'}
                alt="Hero Image Here"
                height={250}
                width={220}
              />
            </div>
            <p className="font-Poppins">Residential Services</p>
            <button
              className="border-2 border-[#4ecdc4] py-2 px-4 text-[0.8rem] font-Poppins"
            >
              <Link href="/CServices">Check Now</Link>
            </button>
          </div>
        </div>
      </section>
      <section
        className="flex flex-col gap-4 md:flex-row-reverse md:gap-8 md:py-20"
      >
        <div
          className="flex flex-col gap-4"
        >
          <h2 className="font-Poppins font-light text-[1.1rem] md:text-[2rem]">SEE WHY OUR COSTUMER LOVE US.</h2>
          <div>
            <Image
              src={'/home/love.gif'}
              alt="Hero Image Here"
              height={450}
              width={420}
            />
          </div>
          
        </div>
        <div>
          <h2 className="font-Poppins font-medium text-[1.1rem] md:text-[2rem]">CLIENTS WHO TRUSTED US</h2>
          <div
            className="flex flex-wrap gap-4 justify-center items-center p-4"
          >
            {
              Clients.map((link) => (
                <div
                  className="h-[8rem] w-[8rem] bg-[#4ecdc4] p-[0.1rem]"
                >
                  <Image
                    src={link.href}
                    alt="Hero Image Here"
                    height={250}
                    width={220}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <ClientCoresel/>
      <section
        className="flex flex-col gap-4 py-2"
      >
        <div>
          <h1 className="font-Poppins font-medium md:text-[2rem] md:text-center">Also See Our:</h1>
        </div>
        <div
          className="flex gap-3 items-center justify-center md:gap-20"
        >
          <button
            className="shadow-[2px_2px_6px_-2px_#4a5759] text-[#4ecdc4] py-2 px-4 hover:bg-[#4ecdc4] hover:text-[#f7fff7]"
          >
            <Link href={'/services'} className="font-Poppins md:text-[1.8rem]"> Services...</Link>
          </button>
          <button
            className="shadow-[2px_2px_6px_-2px_#4a5759] text-[#4ecdc4] py-2 px-4 hover:bg-[#4ecdc4] hover:text-[#f7fff7]"
          >
            <Link href={'/products'} className="font-Poppins md:text-[1.8rem]"> Products...</Link>
          </button>
        </div>
      </section>
    </section>
  )
}