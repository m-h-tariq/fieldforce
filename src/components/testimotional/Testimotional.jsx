

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './testimotional.css';
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

// import required modules
import { Navigation } from 'swiper/modules';
import Images from '../../Images';
import Client from '../../SubComponents/clients/Client';




const Testimotional = (props) => {
  
  return (
    <>
    
    <p className='text-center ai'>{props.firstText} <span style={{color:"#05B2DC"}}>{props.midText}</span>  {props.lastText}</p>
    <div className='slide'>
    <Swiper modules={[Pagination, Navigation]} 
        slidesPerView={1}
        navigation={{clickable:true}}
        pagination={{ clickable: true }}
        className="mySwiper p-5">
          
      <SwiperSlide >
      <Client review="FieldForce.AI has revolutionized our field operations and transformed the way we manage tasks. The app's real-time tracking feature has provided us with complete visibility into our field agents' activities, allowing us to monitor task progress and performance effortlessly. We can now assign tasks, track their locations, and receive instant updates on task status, all in one place. The sales prediction feature powered by AI has been a game-changer for our business. With accurate forecasts based on historical data, we can make proactive decisions and plan our resources effectively. This has resulted in improved sales strategies and better allocation of our sales team's efforts." pic={Images.Client1} name="John Anderson" post="CEO of ABC Logistics"/>
      
      </SwiperSlide >
      <SwiperSlide > <Client review="FieldForce.AI has revolutionized our field operations and transformed the way we manage tasks. The app's real-time tracking feature has provided us with complete visibility into our field agents' activities, allowing us to monitor task progress and performance effortlessly. We can now assign tasks, track their locations, and receive instant updates on task status, all in one place. The sales prediction feature powered by AI has been a game-changer for our business. With accurate forecasts based on historical data, we can make proactive decisions and plan our resources effectively. This has resulted in improved sales strategies and better allocation of our sales team's efforts." pic={Images.Client2} name="Mark Jacobs" post="CEO of Unimart"/></SwiperSlide>
      <SwiperSlide >
      <Client review="FieldForce.AI has revolutionized our field operations and transformed the way we manage tasks. The app's real-time tracking feature has provided us with complete visibility into our field agents' activities, allowing us to monitor task progress and performance effortlessly. We can now assign tasks, track their locations, and receive instant updates on task status, all in one place. The sales prediction feature powered by AI has been a game-changer for our business. With accurate forecasts based on historical data, we can make proactive decisions and plan our resources effectively. This has resulted in improved sales strategies and better allocation of our sales team's efforts." pic={Images.Client3} name="William Basken" post="CEO of Wide lens"/>
</SwiperSlide>

      <SwiperSlide >
      <Client review="FieldForce.AI has revolutionized our field operations and transformed the way we manage tasks. The app's real-time tracking feature has provided us with complete visibility into our field agents' activities, allowing us to monitor task progress and performance effortlessly. We can now assign tasks, track their locations, and receive instant updates on task status, all in one place. The sales prediction feature powered by AI has been a game-changer for our business. With accurate forecasts based on historical data, we can make proactive decisions and plan our resources effectively. This has resulted in improved sales strategies and better allocation of our sales team's efforts." pic={Images.Client4} name="Alex Morgan" post="CEO of Meriane"/></SwiperSlide>
      
            
    </Swiper>
  </ div>
  </>
  )
}

export default Testimotional