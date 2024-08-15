import { Container, Row, Col } from 'react-bootstrap'

const MembershipPage = () => {
  return (
    <>
      <section className='py-5 mt-5'>
        <Container>
          <h2 className='mb-5'>L’association « Les enfants de Fianar » est une association humanitaire qui vient en aide aux enfants malades à Madagascar. </h2>
          <Row>
            <Col md={7}>
              <div className='bg-primary' style={{ height: 400 }}></div>
            </Col>
            <Col md={5}>
              <div>
                <h3>Pour le paiement par virement, ci-dessous le RIB de l’association:</h3>
                <ul className='list-unstyled'>
                  <li><span className='fw-bold'>Titulaire du compte:</span> ASS LES ENFANTS DE FIANAR</li>
                  <li><span className='fw-bold'>Identifiant de compte national:</span> 18719 00080 00007931500 33</li>
                  <li><span className='fw-bold'>RIB:</span> FR76 1871 9000 8000 0079 3150 033</li>
                  <li><span className='fw-bold'>BIC:</span> BFCORERXXXX</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default MembershipPage
