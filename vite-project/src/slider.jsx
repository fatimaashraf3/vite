import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/img1.webp'
import img2 from './images/img2.webp'
import img3 from './images/img3.webp'

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          height={800}
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          height={800}
        />
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          height={800}
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;