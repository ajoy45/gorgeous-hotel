import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from "../../../images/slider/slider1.jpg";
import slider2 from "../../../images/slider/slider2.jpg";
import slider3 from "../../../images/slider/slider3.jpg";
import './Slider.css'
const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img style={{ height: "500px" }}
                    className="d-block w-100 "
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='slider-heading fs-1 fw-bold'>It IS Double Bed Room</h3>
                    <p className='fs-5 slider-details'>You can book this for one month or one year for your family</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: "500px" }}
                    className="d-block w-100 "
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-primary fs-1 fw-bold'>It is larger Room for your master Room</h3>
                    <p className='fs-5 slider-details'>It is for your family ,office chember can rent this for 1 year!!! </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: "500px" }}
                    className="d-block w-100 "
                    src={slider3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='slider-heading fs-1 fw-bold'>This is for single room</h3>
                    <p className='fs-5 slider-details'>
                    you can sleep here,bath,office can do everythins
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;