import { useState } from 'react'
// import BasicExample from '../nav'
import ColorSchemesExample from '../nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import img from './images/back.webp'
import Houses from './images/Houses.webp'
import Offices from './images/Offices.webp'
import Plots from './images/Plots.webp'
import Portion from './images/Portion.webp'
import Appartments from './images/Appartments.webp'
import DarkVariantExample from './slider';
import Bootstrapcards from './cards';
import Card from 'react-bootstrap/Card';

function myCode(){
    return(
        <>
     <ColorSchemesExample />
        <div className="sec2">
            <div className='text2'>
            <h1 className='head2'>ABOUT US</h1>
            <h4 className='head3'>FIND YOUR DREAM PROPERTY</h4>
            <p className='para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nihil quas tempora, 
                laborum natus iusto voluptatum non, at minus mollitia, fugit reprehenderit itaque debitis 
                inventore aut praesentium numquam ullam optio!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nihil quas tempora, 
                laborum natus iusto voluptatum non, at minus mollitia, 
                fugit reprehenderit itaque debitis inventore aut praesentium numquam ullam optio!</p>
        </div>
        <div className="img2">
            <img className='border' src={img} height="350" width="370"/>
        </div>
        </div>
        <div className="sec3">
       <DarkVariantExample/>
       </div>
       <div className='cardtext'>
       <h1 className='cardhead bg-secondary'>REAL ESTATE AGENCY IN KARACHI</h1>
       <h4 className='cardpara bg-secondary'>WHERE YOU WILL FIND YOUR DREAM PROPERTIES</h4>
       </div>
       <div className="cards">
        <Bootstrapcards/>
        <Card style={{ width: '22rem',}}>
      <Card.Img variant="top" src={Appartments}/>
      <Card.Body>
        <Card.Title className='text-center text-light fw-bold'>APPARTMENTS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem',}}>
      <Card.Img variant="top" src={Portion}/>
      <Card.Body>
        <Card.Title className='text-center text-light fw-bold'>PORTION</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        {/* <Bootstrapcards/>
        <Bootstrapcards/> */}
       </div>
       <div className="cards2">
       <Card style={{ width: '22rem',}}>
      <Card.Img variant="top" src={Houses}/>
      <Card.Body>
        <Card.Title className='text-center text-light fw-bold'>HOUSES</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem',}}>
      <Card.Img variant="top" src={Plots}/>
      <Card.Body>
        <Card.Title className='text-center text-light fw-bold'>PLOTS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem',}}>
      <Card.Img variant="top" src={Appartments}/>
      <Card.Body>
        <Card.Title className='text-center text-light fw-bold'>APPARTMENTS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        {/* <Bootstrapcards/>
       <Bootstrapcards/>
       <Bootstrapcards/>  */}
       </div> 

       <div className="sec4  bg-secondary text-center" >
        <h1 className='bg-secondary text-dark fw-bold' style={{
            paddingTop: '3%',
            marginTop: '10%'
        }}>CONTACT US NOW</h1>
        <button style={{
            borderRadius: '10px',
            borderColor: 'none',
            padding:'20px',
            marginTop:'2%',
            fontWeight: `600`,
            marginBottom: '4%'
        }}>Call 021-334-798-84</button>
       </div>
         </>
    )
}
export default myCode


