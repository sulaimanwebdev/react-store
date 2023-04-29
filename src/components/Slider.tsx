import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';
import { Link } from 'react-router-dom';

const Slider = () => {

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
  
  
    const [addClass, setaddClass] = React.useState('');
  
    React.useEffect(() => {
      setTimeout(() => {
        setaddClass('z-[99]');
      }, 1000);
    }, []);
  
    let data = [
      {
        image: "/images/banner1.jpg",
        link: "/"
      },

      {
        image: "/images/banner2.jpg",
        link: "/"
      },

      {
        image: "/images/banner3.jpg",
        link: "/"
      },
     
    ];

  return (
      
        <Swiper
          slidesPerView={1}
          rewind={true}
          pagination={data.length >= 0 ? { clickable: true } : false}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          // onSwiper={(swiper) => {
          //   // Delay execution for the refs to be defined
          //   setTimeout(() => {
          //     // Override prevEl & nextEl now that refs are defined
          //     swiper.params.navigation.prevEl = navigationPrevRef.current
          //     swiper.params.navigation.nextEl = navigationNextRef.current

          //     // Re-init navigation
          //     swiper.navigation.destroy()
          //     swiper.navigation.init()
          //     swiper.navigation.update()
          //   })
          // }}
          modules={[Navigation, Pagination]}
          className='relative w-full'
        >
          {data.map((ele) => {
            return (
              <SwiperSlide
                key={Math.random()}
                className='relative transition overflow-hidden '
              >
                <Link to={ele.link} className='relative'>
                  <img src={ele.image} alt="banner" className='w-full h-full' />
                </Link>
              </SwiperSlide>
            );
          })}

          <div ref={navigationPrevRef} className='z-30 absolute top-1/2 left-5 -translate-y-1/2 flex items-center justify-center w-[45px] h-[45px] rounded-full border-solid border border-gray-400 cursor-pointer bg-white bg-opacity-50'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg></div>
          <div ref={navigationNextRef} className='z-30 absolute top-1/2 right-5 -translate-y-1/2 flex items-center justify-center w-[45px] h-[45px] rounded-full border-solid border border-gray-400 cursor-pointer bg-white bg-opacity-50'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></div>
        </Swiper>

  )
}

export default Slider