import React from 'react';
import service from '../../assets/service.png'
const Service = () => {
    return (
       <section className='relative my-20 py-20 overflow-hidden bg-[#03373D] rounded-2xl'>
        <div className='absolute -top-20 -left-20 w-72 h-72 '></div>
        <div></div>
        <div className='relative z-10 px-6 text-center '>

        <h2 className='text-4xl font-bold mb-4'>Our Services</h2>
        <p className='max-w-2xl mx-auto mb-12'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>

        <div className='grid grid-cols-3 gap-8'>
            {/* 1 */}

         <div className='bg-white text-black text-center rounded-2xl'>
        <img className='mx-auto mt-5' src={service} alt="" />
        <h3 className='font-semibold mt-7'>Express  & Standard Delivery</h3>
        <p className='mt-5 '>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
         </div>

         {/* 2 */}

          <div className='bg-white text-black text-center rounded-2xl'>
        <img className='mx-auto mt-5' src={service} alt="" />
        <h3 className='font-semibold mt-7'>Nationwide Delivery</h3>
        <p className='mt-5 '>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
         </div>

         {/* 3 */}

          <div className='bg-white text-black text-center rounded-2xl'>
        <img className='mx-auto mt-5' src={service} alt="" />
        <h3 className='font-semibold mt-7'>Fulfillment Solution</h3>
        <p className='mt-5 '>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
         </div>

         {/* 4 */}

          <div className='bg-white text-black text-center rounded-2xl'>
        <img className='mx-auto mt-5' src={service} alt="" />
        <h3 className='font-semibold mt-7'>Parcel Return</h3>
        <p className='mt-5 '>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
         </div>

         {/* 5 */}

          <div className='bg-white text-black text-center rounded-2xl'>
        <img className='mx-auto mt-5' src={service} alt="" />
        <h3 className='font-semibold mt-7'>Cash on Home Delivery</h3>
        <p className='mt-5 '>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
         </div>

         {/* 6 */}

          <div className='bg-white text-black text-center rounded-2xl'>
        <img className='mx-auto mt-5' src={service} alt="" />
        <h3 className='font-semibold mt-7'>Corporate Service / Contract In Logistics</h3>
        <p className='mt-5 '>Customized corporate services which includes warehouse and inventory management support.</p>
         </div>
        </div>
        </div>
       </section>
    );
};

export default Service;