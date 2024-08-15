import Accordion from 'react-bootstrap/Accordion'
import { Container, Row, Col } from 'react-bootstrap'

const OfficeMembersPage = () => {
  return (
    <>
      <section className='py-5 mt-5'>
        <Container>
          <Accordion defaultActiveKey='0'>
            <Accordion.Item eventKey='0'>
              <Accordion.Header><h2 className='text-center'>Les membres du bureau de LEDEF à LA REUNION</h2></Accordion.Header>
              <Accordion.Body className='py-5'>
                <Row className='justify-content-center'>
                  <Col md={4} className='mb-6'>
                    <div className='mb-5'>
                      <div className='text-center'>
                        <div className='mb-3'>
                          <img 
                            src='https://ledef.net/wp-content/uploads/2023/11/IMG-20231127-WA0000-150x150.jpg' 
                            alt='Présidente du LEDEF' 
                            className='rounded-circle ' />
                        </div>
                        <div className='h5'>LA PRÉSIDENTE</div>
                        <p>Mme. ROSE MAY LEBRETON</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={4} className='mb-6'>
                    <div className=''>
                      <div className='text-center'>
                        <div className='mb-3'>
                          <img 
                            src='https://ledef.net/wp-content/uploads/2021/05/VICE-PRESIDENT-150x150.jpg' 
                            alt='Vice Président du LEDEF' 
                            className='rounded-circle ' />
                        </div>
                        <div className='h5'>LE VICE PRÉSIDENT</div>
                        <p>Mr. MERCIER GUY</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={4} className='mb-6'>
                    <div className=''>
                      <div className='text-center'>
                        <div className='mb-3'>
                          <img 
                            src='https://ledef.net/wp-content/uploads/2023/11/IMG-20231118-WA00001-150x150.jpg'
                            alt='LA SECRÉTAIRE ET TRÉSORIÈRE' 
                            className='rounded-circle ' />
                        </div>
                        <div className='h5'>LA SECRÉTAIRE ET TRÉSORIÈRE</div>
                        <p>Mme. MIREILLA DAUPIARD</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={4} className='mb-6'>
                    <div className=''>
                      <div className='text-center'>
                        <div className='mb-3'>
                          <img 
                            src='https://ledef.net/wp-content/uploads/2021/09/PHOTO-TRES-ADJ-150x150.jpeg'
                            alt='LA VICE TRÉSORIÈRE' 
                            className='rounded-circle ' />
                        </div>
                        <div className='h5'>LA VICE TRÉSORIÈRE</div>
                        <p>Mme. NASSIBATA HIMIDI</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={4} className='mb-6'>
                    <div className=''>
                      <div className='text-center'>
                        <div className='mb-3'>
                          <img 
                            src='https://ledef.net/wp-content/uploads/2023/11/IMG-20231127-WA0001-150x150.jpg'
                            alt='COORDINATRICE DE PROJET' 
                            className='rounded-circle ' />
                        </div>
                        <div className='h5'>COORDINATRICE DE PROJET</div>
                        <p>Mme. HOFF AGNÈS</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
              <Accordion.Header><h2 className='text-center'>Les membres du bureau de LEDEF à MADAGASCAR</h2></Accordion.Header>
              <Accordion.Body className='py-5'>
                <Row className='justify-content-center'>
                  <Col md={4} className='mb-6'>
                    <div className='mb-5'>
                      <div className='text-center'>
                        <div className='mb-3'>
                          <img 
                            src='https://ledef.net/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-04-at-07.17.26-150x150.jpeg' 
                            alt='LE PRÉSIDENT' 
                            className='rounded-circle ' />
                        </div>
                        <div className='h5'>LE PRÉSIDENT</div>
                        <p>Mr. HAJANIAINA</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={4} className='mb-6'>
                    <div className=''>
                      <div className='text-center'>
                        <div className='mb-3'>
                          <img 
                            src='https://ledef.net/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-04-at-07.18.22-150x150.jpeg' 
                            alt='LE VICE PRÉSIDENT' 
                            className='rounded-circle ' />
                        </div>
                        <div className='h5'>LE VICE PRÉSIDENT</div>
                        <p>Mr. FENOHASINA</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={4} className='mb-6'>
                    <div className=''>
                      <div className='text-center'>
                        <div className='mb-3'>
                          <img 
                            src='https://ledef.net/wp-content/uploads/2023/11/IMG-20231127-WA0001-150x150.jpg'
                            alt='LA CONSEILLÈRE' 
                            className='rounded-circle ' />
                        </div>
                        <div className='h5'>LA CONSEILLÈRE</div>
                        <p>Mme. HOFF AGNÈS</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={4} className='mb-6'>
                    <div className=''>
                      <div className='text-center'>
                        <div className='mb-3'>
                          <img 
                            src='https://ledef.net/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-04-at-07.29.38-qgbvhkwf1jtqaiobwcoh3fc7uqpb8oja01vr3ec6sc.jpeg'
                            alt='LA CONSEILLÈRE 2' 
                            className='rounded-circle ' />
                        </div>
                        <div className='h5'>LA CONSEILLÈRE 2</div>
                        <p>Mlle. FANEVANIAINA</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={4} className='mb-6'>
                    <div className=''>
                      <div className='text-center'>
                        <div className='mb-3'>
                          <img 
                            src='https://ledef.net/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-04-at-07.30.20-150x150.jpeg'
                            alt='LA TRÉSORIÈRE' 
                            className='rounded-circle ' />
                        </div>
                        <div className='h5'>LA TRÉSORIÈRE</div>
                        <p>Mlle. SEHENONIRINA</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={4} className='mb-6'>
                    <div className=''>
                      <div className='text-center'>
                        <div className='mb-3'>
                          <img 
                            src='https://ledef.net/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-04-at-08.58.35-qgbvlt69spm6jcj576i1bcww35urvnbskzkeu82esc.jpeg'
                            alt='LA SECRÉTAIRE' 
                            className='rounded-circle ' />
                        </div>
                        <div className='h5'>LA SECRÉTAIRE</div>
                        <p>Mlle. ADOLPHINE</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </>
  )
}

export default OfficeMembersPage
