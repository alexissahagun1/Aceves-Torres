import React from 'react'
import carouselImages from './CarouselImages'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = ({height}) => {
    return (
        <div className="flex flex-col items-center md:mt-[40px]  lg:mx-[200px] m-6  ">
           <Carousel showThumbs={false} autoPlay interval={3000} infiniteLoop showStatus={false} showIndicators={true}>
                {carouselImages && carouselImages.map((item) =>
                        <div key={item.id}>
                            <img src={item.image} alt="" className={`object-contain ${height} rounded-xl md:rounded-none lg:max-w-3xl max-w-sm `}/>
                        </div>
                    )}
           </Carousel>
            
        </div>
    )
}

export default CarouselComponent
