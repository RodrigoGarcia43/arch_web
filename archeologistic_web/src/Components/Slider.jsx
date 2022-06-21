import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider(props) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,

    };

    return (
        <div>
            <Slider {...settings} >
                <Slider {...settings}>
                    {props.images.map((img) => (
                        <div >
                            <img src={img.src} alt="" />
                        </div>
                    ))}
                </Slider>
            </Slider>
        </div>
    );
}
