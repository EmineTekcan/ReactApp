import React, {Component} from "react"
import {Carousel, Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

import img28 from './images/img28.jpg';
import img27 from './images/img27.jpg';
import img26 from './images/img26.jpg';
import img17 from './images/img17.jpg';
import img18 from './images/img18.jpg';
import img23 from './images/img23.jpg';
import img22 from './images/img22.jpg';
import img21 from './images/img21.jpg';
import img20 from './images/img20.jpg';
import img19 from './images/img19.jpg';


class Man extends Component{
    render()
    {
    return(
    <div>
        <div class="cart float-l">
        <Card style={{ width: '18rem'  }}>
  <Card.Img variant="top" src={img19} style={{height:"330px"}}/>
  <Card.Body>
    <Card.Title><i>$67,45</i></Card.Title>
    <Card.Text>
    <b>Grey Sequin Chiffon Dress</b>
    </Card.Text>
    <Button variant="primary">See The Product</Button>
  </Card.Body>
</Card>
        </div>

        <div class='cart float-l'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img20} style={{height:"330px"}} />
  <Card.Body>
    <Card.Title><i>$99,99</i></Card.Title>
    <Card.Text>
    <b>Navy Blue Tuxedo</b>
    </Card.Text>
    <Button variant="primary">See The Product</Button>
  </Card.Body>
</Card>
        </div>
        <div class="cart float-l">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img28} style={{height:"330px"}}/>
  <Card.Body>
    <Card.Title><i>$70,99</i></Card.Title>
    <Card.Text>
    <b>Black Lined Blouse</b>
    </Card.Text>
    <Button variant="primary">See The Product</Button>
  </Card.Body>
</Card>
        </div>
        <div class="cart float-l">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img27} style={{height:"330px"}}/>
  <Card.Body>
    <Card.Title><i>$97,99</i></Card.Title>
    <Card.Text>
   <b> Gray Denim jacket </b>
    </Card.Text>
    <Button variant="primary">See The Product</Button>
  </Card.Body>
</Card>
        </div>
        <div class="cart float-l">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img26} style={{height:"330px"}} />
  <Card.Body>
    <Card.Title><i>$40,50</i></Card.Title>
    <Card.Text>
    <b>Long Dress With Black  </b>
    </Card.Text>
    <Button variant="primary">See The Product</Button>
  </Card.Body>
</Card>
        </div>
        <div class="cart2 float-l">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img18} style={{height:"330px"}}/>
  <Card.Body>
    <Card.Title><i>$80,99</i></Card.Title>
    <Card.Text>
      <b>Light Brown Tuxedo</b>
    </Card.Text>
    <Button variant="primary">See The Product</Button>
  </Card.Body>
</Card>
        </div>
        <div class="cart2 float-l">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img17} style={{height:"330px"}}/>
  <Card.Body>
    <Card.Title><i>$60,00</i></Card.Title>
    <Card.Text>
      <b>Blue Tulle Long Dress</b>
    </Card.Text>
    <Button variant="primary">See The Product</Button>
  </Card.Body>
</Card>
        </div>
        <div class="cart2 float-l">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img23} style={{height:"330px"}} />
  <Card.Body>
    <Card.Title><i>$80,00</i></Card.Title>
    <Card.Text>
     <b>Polka Dot Blue Linen Shirt</b>
    </Card.Text>
    <Button variant="primary">See The Product</Button>
  </Card.Body>
</Card>
        </div>
        <div class="cart2 float-l">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img22} style={{height:"330px"}} />
  <Card.Body>
    <Card.Title><i>$90,00</i></Card.Title>
    <Card.Text>
     <b>Powder Pink Dress Straps</b>
    </Card.Text>
    <Button variant="primary">See The Product</Button>
  </Card.Body>
</Card>
        </div>
        <div class="cart2 float-l">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img21} style={{height:"330px"}} />
  <Card.Body>
    <Card.Title><i>$90,00</i></Card.Title>
    <Card.Text>
      <b>Black Shiny Fabric Tuxedo</b>
    </Card.Text>
    <Button variant="primary">See The Product</Button>
  </Card.Body>
</Card>
        </div>

    </div>
        )
    }
}
export default Man;