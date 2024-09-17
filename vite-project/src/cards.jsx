import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from './images/img1.webp'
import Offices from './images/Offices.webp'

function Bootstrapcards() {
  return (
    <Card style={{ width: '22rem',}}>
      <Card.Img variant="top" src={Offices}/>
      <Card.Body>
        <Card.Title className='text-center text-light fw-bold'>OFFICES</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Bootstrapcards;

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import img1 from './images/img1.webp'
// import Offices from './images/Offices.webp'

// function cards() {
//   return (
//     <Card style={{ width: '22rem',}}>
//       <Card.Img variant="top" src={Offices}/>
//       <Card.Body>
//         <Card.Title className='text-center text-light fw-bold'>OFFICES</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default cards;