import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Phone from '@/components/Phone'
import { Icons } from '@/components/ui/Icons';
import { Reviews } from '@/components/ui/Reviews';
import { Check,  Star } from 'lucide-react';
import Image from "next/image"
import HowItWorks from '@/components/HowItWorks';

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className ='col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
               
                <img src="/logo2.jpeg" className='w-full'/>
              </div>
              <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
              Sell Your's {' '}
                <span className='bg-green-500 px-2 text-white'>Recyclables</span>{' '}
                Online
              </h1>
              <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
              Welcome to EcoDukan, where sustainability meets affordability. Discover our wide range,{' '}
                <span className='font-semibold'>recyclable and recycled products,</span> of all at unbeatable prices. Join us in making the world a greener place!
              </p>
              <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                <div className='space-y-2'>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-green-600' />
                    <span className='font-semibold'>Eco-Friendly:</span> Support sustainability with affordable products.
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-green-600' />
                    <span className='font-semibold'>Affordable Prices:</span>   Enjoy top-quality products at prices that won't break the bank, making eco-friendly living accessible to everyone.
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-green-600' />
                    <span className='font-semibold'>Positive Impact:</span> Reduce waste, promote recycling, healthier planet.
                  </li>

                  <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                <div className='flex -space-x-4'>
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-1.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-2.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-3.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-4.jpg'
                    alt='user image'
                  />
                  <img
                    className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-5.jpg'
                    alt='user image'
                  />
                </div>

                <div className='flex flex-col justify-between items-center sm:items-start'>
                  <div className='flex gap-0.5'>
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                  </div>

                  <p>
                    <span className='font-semibold'>3</span> happy customers
                  </p>
                  </div>
                </div>
                </div>
              </ul>
            </div>
          </div>
          {/* this Img section need a little cleaning i will do it latter. */}
          <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
            <div className='relative md:max-w-xl'>
              <img
                src='/your-image.png'
                className='absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block'
              />
              
              <Phone className='w-64' imgSrc='' />
            </div>
          </div>

        </MaxWidthWrapper>
      </section>
      {/* value proposition section */}
      
      <section className='bg-slate-100 grainy-dark py-24'>
        <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
          <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
            <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
              How it{' '}
              <span className='relative px-2'>
                Works{' '}
                <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500' />
              </span>{' '}
              .
            </h2>
            {/*<img src='/snake-2.png' className='w-24 order-0 lg:order-2' /> */}
          </div>
           {/* How it works steps */}
    <div className='flex justify-around w-full'>
      <div className='flex flex-col items-center bg-green-500 text-white p-8 rounded-md w-1/3 m-2'>
        <img src='/schedule.png' alt='Schedule a pickup' className='w-16 h-16 mb-4' />
        <h3 className='text-xl font-semibold'>Schedule a pickup</h3>
      </div>
      <div className='flex flex-col items-center bg-green-500 text-white p-8 rounded-md w-1/3 m-2'>
        <img src='/pickup.png' alt='Pickup at your address' className='w-16 h-16 mb-4' />
        <h3 className='text-xl font-semibold'>Pickup at your address</h3>
      </div>
      <div className='flex flex-col items-center bg-green-500 text-white p-8 rounded-md w-1/3 m-2'>
        <img src='/payment.png' alt='Receive payment' className='w-16 h-16 mb-4' />
        <h3 className='text-xl font-semibold'>Receive payment</h3>
      </div>
    </div>

          
              
            
            

            {/* second user review 
            <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
              <div className='flex gap-0.5 mb-2'>
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "I usually keep my phone together with my keys in my pocket
                  and that led to some pretty heavy scratchmarks on all of my
                  last phone cases. This one, besides a barely noticeable
                  scratch on the corner,{' '}
                  <span className='p-0.5 bg-slate-800 text-white'>
                    looks brand new after about half a year
                  </span>
                  . I dig it."
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <img
                  className='rounded-full h-12 w-12 object-cover'
                  src='/users/user-4.jpg'
                  alt='user'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'>Josh</p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                    <p className='text-sm'>Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div> */}
          
        </MaxWidthWrapper>

       
      </section>

    </div>
  );
}
