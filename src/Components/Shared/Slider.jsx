import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Slider = () => {
    //this slider will be shown in the left nav 
    return (
        <div className='md:block hidden'>
            <Carousel autoPlay showThumbs={false} infiniteLoop={true} showStatus={false} swipeable>
                <div>
                    <img src="https://img.freepik.com/free-photo/man-african-ethnicity-using-conference-webcam-communication_482257-5579.jpg?w=1060&t=st=1666724810~exp=1666725410~hmac=064783c947dcc791f49f9a33857a377c5fc05bb80fdf751c9049861a64939f01" alt='carousel-img' />
                    <p className="legend">coming soon...</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/e-learning-student-university-concept_31965-2456.jpg?w=1060" alt='carousel-img' />
                    <p className="legend">coming soon...</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/illustration-global-icon_53876-9267.jpg?w=1060&t=st=1666725609~exp=1666726209~hmac=ec40d7a7c13b25de6136767be32c513da7d9164ec9c4de123f7882c23ee55306" alt='carousel-img' />
                    <p className="legend">coming soon...</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;