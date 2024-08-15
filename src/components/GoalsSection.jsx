import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionLink from './SectionLink'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AOS from 'aos'

const GoalsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  })

  return (
    <>
      <section id='goalsSection' className='py-5'>
        <Container>
          <h2 className='mb-5 text-center' data-aos='fade-up'>Objectifs de l'Association</h2>
          <Row className='align-items-stretch'>
            <Col lg={3} md={6} className='pb-3'>
              <div 
                className='h-100' 
                data-aos='fade-up'
                data-aos-delay='250'
              >
                <Card className='h-100'>
                  <Card.Body>
                    <Card.Title>Soins Médicaux et Évacuation</Card.Title>
                    <Card.Text>Financer les soins médicaux, les évacuations sanitaires, et les traitements des enfants malades à Madagascar, en particulier à Fianarantsoa.</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={3} md={6} className='pb-3'>
              <div 
                className='h-100'
                data-aos='fade-up'
                data-aos-delay='500'
              >
                <Card className='h-100'>
                  <Card.Body>
                    <Card.Title>Soutien et Hébergement</Card.Title>
                    <Card.Text>Entretenir le centre social pour l'accueil, l'hébergement, et la convalescence des enfants malades, tout en créant des espaces d'éveil dans les hôpitaux.</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={3} md={6} className='pb-3'>
              <div 
                className='h-100'
                data-aos='fade-up'
                data-aos-delay='750'
              >
                <Card className='h-100'>
                  <Card.Body>
                    <Card.Title>Logistique et Distribution</Card.Title>
                    <Card.Text>Acheminer du matériel médical depuis La Réunion et distribuer des dons (médicaments, vêtements, jeux) aux enfants malades et à leurs familles.</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={3} md={6} className='pb-3'>
              <div 
                className='h-100'
                data-aos='fade-up'
                data-aos-delay='1000'
              >
                <Card className='h-100'>
                  <Card.Body>
                    <Card.Title>Collectes et Parrainage</Card.Title>
                    <Card.Text>Organiser des collectes de fonds, des opérations de brocante, et proposer du parrainage pour financer la scolarité et les besoins des enfants malades.</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          <div className='text-center mt-5' data-aos='fade-up'>
            <SectionLink to='/goals'>En Savoir Plus</SectionLink>
          </div>
        </Container>
      </section>
    </>
  )
}

export default GoalsSection
