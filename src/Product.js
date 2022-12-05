import React, {Component} from "react"
import {Carousel, Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img9 from './images/img9.jpg';
import img10 from './images/img10.jpg';
import img16 from './images/img16.jpg';
import img17 from './images/img17.jpg';
import img18 from './images/img18.jpg';
import img19 from './images/img19.jpg';
import img20 from './images/img20.jpg';

class Product extends Component{
    render()
    {
    return(
    <div>
        <div class="cart float-l">
        <Card style={{ width: '18rem'  }}>
  <Card.Img variant="top" src={img5} style={{height:"330px"}}/>
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
  <Card.Img variant="top" src={img16} style={{height:"330px"}} />
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
  <Card.Img variant="top" src={img6} style={{height:"330px"}}/>
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
  <Card.Img variant="top" src={img17} style={{height:"330px"}}/>
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
  <Card.Img variant="top" src={img7} style={{height:"330px"}} />
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
  <Card.Img variant="top" src={img9} style={{height:"330px"}}/>
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
  <Card.Img variant="top" src={img19} style={{height:"330px"}} />
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
  <Card.Img variant="top" src={img10} style={{height:"330px"}} />
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
  <Card.Img variant="top" src={img20} style={{height:"330px"}} />
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
export default Product;