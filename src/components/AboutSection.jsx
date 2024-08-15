import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import AOS from 'aos'

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true
    })
  })

  return (
    <>
      <section className='py-5 text-center text-md-start' style={{ backgroundColor: '#cc2b2b20' }}>
        <Container>
          <Row className='align-items-center'>
            <Col md={6}>
              <div
                data-aos='fade-up' 
                className='p-5'
              >
                <img src="https://ledef.net/wp-content/uploads/2022/08/PHOTO-TEST-2-1024x768.jpg" alt="Les enfants de fianer" className='img-fluid rounded' />
              </div>
            </Col>
            <Col md={6}>
              <div data-aos='fade-right'>
                <div className='h5'>À propos</div>
                <h2 className='mb-3'>Les Enfants de Fianar - LEDEF</h2>
                <p>Il est fondé entre les adhérents aux présents statuts une association régie par la loi du 1er juillet 1901 et le décret du 16 août 1901, ayant pour titre : LEDEF – Les Enfants de Fianar.</p>
                <p>L’association LEDEF aide les enfants malades de MADAGASCAR, à bénéficier de soins médicaux, financés par des DONS, des LEVÉES DE FONDS, des SUBVENTIONS. Ainsi pour la continuité de ses actions, nous recherchons activement des Membres Adhérents, des Partenaires, Mécénats et Bénévoles.</p>
                <p>ENSEMBLE , Donnons la Chance à ses ENFANTS d’être soignés.</p>
                <LinkContainer to='/membership'>
                  <Button variant='outline-primary' className='me-2'>Adhérer</Button>
                </LinkContainer>
                <LinkContainer to='/donation'>
                  <Button variant='primary'>Faire un Don</Button>
                </LinkContainer>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default AboutSection
