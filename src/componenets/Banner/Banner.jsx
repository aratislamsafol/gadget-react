import bannerImg from '../../../src/assets/banner.jpg';

export default function Banner() {
  return (
    <div className='bg-[#9538E2] max-h-[600px] w-full h-full text-center mb-[50px] sm:mb-[160px] md:mb-[150px] lg:mb-[240px]'>
     <div className='w-4/5 mx-auto pt-4 sm:pt-6 md:pt-8 lg:pt-10'>
      <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
        <p className='text-white py-4 sm:py-6'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <button type='button' className='p-3 px-6 cursor-pointer bg-gray-50 rounded-4xl font-bold text-[#9538E2]'>Shop Now</button>
     </div>
      {/*  */}
      <div className="w-11/12 md:w-3/5 mx-auto border-2 rounded-lg border-gray-100 p-3 md:p-5 bg-white/5 transform translate-y-10 z-10">
        <img
          src={bannerImg}
          className="w-full max-h-[563px] rounded-lg"
          alt="banner "
        />
      </div>
    </div>

  );
}
