import { Container, Row, Col } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <>
      <footer className='py-5 bg-dark text-light text-center text-md-start'>
        <Container>
          <Row className='align-items-stretch'>
            <Col md={4}>
              <div className='mb-5 mb-md-3'>
                <h4 className='mb-4'>LEDEF REUNION</h4>
                <ul className='list-unstyled'>
                  <li><Icon.GeoAlt /> 68 rue Michel Barouin 97438 Sainte Marie, La Réunion</li>
                  <li><Icon.Telephone /> <a href="tel:0693339115" className='text-light'>0693 33 91 15</a></li>
                  <li><Icon.Envelope /> <a href="mailto:lesenfantsdefianar301@gmail.com" className='text-light'>lesenfantsdefianar301@gmail.com</a></li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className='mb-5 mb-md-3'>
                <h4 className='mb-4'>LEDEF FIANARANTSOA – MADAGASCAR</h4>
                <p>Centre Social Et D’hébergement Humanitaire</p>
                <ul className='list-unstyled'>
                  <li><Icon.GeoAlt /> Lot Ivk Ankazobe – Fianarantsoa 301 Madagascar</li>
                  <li><Icon.Telephone /> <a href="tel:+261341760586" className='text-light'>+261 34 17 605 86</a>, <a href="tel:++261384777161" className='text-light'>+261 38 47 771 61</a></li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className='h-100'>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1906267.901685621!2d55.46081800000001!3d-21.065492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21788085e54843a5%3A0xad79daa0a6a3e9d1!2sSainte-Marie%2097438%2C%20La%20R%C3%A9union!5e0!3m2!1sfr!2sus!4v1723722608060!5m2!1sfr!2sus" 
                  className='h-100 w-100'
                  style={{ 
                    border: 0, 
                  }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
