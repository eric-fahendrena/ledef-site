import { Container, Row, Col } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap'

const ContactPage = () => {
  return (
    <>
      <section className='py-5 mt-5'>
        <Container>
          <Row className='justify-content-center'>
            <Col md={6}>
              <Form 
                className='p-4 bg-secondary text-light rounded'
                // style={{
                //   backgroundColor: '#00000020'
                // }}
              >
                <Form.Group className='mb-3'>
                  <Form.Label>Nom :</Form.Label>
                  <Form.Control type='text' name='Nom' placeholder='Entrez votre nom' />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>E-mail :</Form.Label>
                  <Form.Control type='email' name='E-mail' placeholder='Entrez votre adresse e-mail' />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Téléphone (Facultatif) :</Form.Label>
                  <Form.Control type='email' name='Téléphone' placeholder='Entrez votre numero de téléphone' />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Message ou commentaire :</Form.Label>
                  <Form.Control as='textarea' name='Message' placeholder='Entrez votre message' rows={8} />
                </Form.Group>
                <Button>Envoyer</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ContactPage
