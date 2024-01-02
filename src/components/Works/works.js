import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "./works.css";
import Portfolio1 from '../../assets/portfolio1.png';
import Portfolio2 from '../../assets/portfolio2.png';
import Portfolio3 from '../../assets/portfolio3.png';
import Portfolio4 from '../../assets/portfolio4.png';
import Portfolio5 from '../../assets/portfolio5.png';

const Works = () => {

    return (
        <section id="works" className="works-container">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book.
            </span>
            <div className= "carousel">
                <Carousel className='carousel_viewport' fade pause="hover">
                <Carousel.Item className='carousel_item' interval={1500}>
                    <img
                    className="d-block w-100 h-100"
                    src={Portfolio1}
                    alt="Portfolio 1"
                    />
                </Carousel.Item>
                <Carousel.Item className='carouselItem' interval={500}>
                    <img
                    className="d-block w-100 h-100"
                    src={Portfolio2}
                    alt="Portfolio 2"
                    />
                </Carousel.Item>

                <Carousel.Item className='carouselItem' interval={500}>
                    <img
                    className="d-block w-100 h-100"
                    src={Portfolio3}
                    alt="Portfolio3"
                    />
                </Carousel.Item>

                <Carousel.Item className='carouselItem' interval={500}>
                    <img
                    className="d-block w-100 h-100"
                    src={Portfolio4}
                    alt="Portfolio4"
                    />
                </Carousel.Item>

                <Carousel.Item className='carouselItem' interval={500}>
                    <img
                    className="d-block w-100 h-100"
                    src={Portfolio5}
                    alt="Portfolio5"
                    />
                </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
}

export default Works;
