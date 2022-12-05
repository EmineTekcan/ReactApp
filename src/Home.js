import React, {Component} from "react"
import {Carousel} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import img10 from './images/img10.jpg';
import img11 from './images/img11.jpg';
import img12 from './images/img12.jpg';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';

class Home extends Component{
    render()
    {
        return(
            <div >
              <div className="cart1 float1">
              <Card style={{ width: '450px',height:'750px' }}>
              <Card.Img variant="top" src={img11} />
                <Card.Body>
              <Card.Title><i>APRIL 18, 2022</i></Card.Title>
             <Card.Text>
              <p><h3>Fashion News of the Week from Bella Hadid's Trend-Matching Choice to Loewe's New Collection</h3>

We are reviewing the news that has recently been on the radar of the fashion world.
<br></br>
ARTICLE: EMINE TEKCAN

</p>
               </Card.Text>
               </Card.Body>
              </Card>
              </div>
              <div className="cart1 float1">
              <Card style={{ width: '450px',height:'750px' }}>
              <Card.Img variant="top" src={img12} />
                <Card.Body>
              <Card.Title><i>APRIL 18, 2022</i></Card.Title>
             <Card.Text>
              <p><h3>2022 Met Gala Dress Code: Gilded Charm</h3>
This year's dress code of the Met Gala, which will be held on May 2, is set to put an emphasis on the Gilded Age, which is called the Gilded Age and represents the years dec 1870 and 1890 in America.
<br></br>
BY MERT ARIK<br></br>
COMPILED BY: ESMA DELI</p>
               </Card.Text>
               </Card.Body>
              </Card>
              </div>
              <div className="carousel float1">
           <Carousel style={{width:'500px', height:'500px'}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Jewelry That Meets the Spring</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>The Journey to the Metaverse with Sneaker</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Collaboration that Combines Naive Forms with Strong Colors</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img4}
      alt="Fourth slide"
    />

    <Carousel.Caption>
      <h3>Impressive Union of Zendaya and Valentino</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
           </div>
            </div>
        )
    }
}
export default Home;
