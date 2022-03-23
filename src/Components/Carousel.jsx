import { Carousel } from 'react-bootstrap';


function CarouselComponent(){
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('../Style/images/med1.jpg')}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('../Style/images/med2.jpg')}
                alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}


export default CarouselComponent;