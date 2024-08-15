import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import backgroundImg from '../assets/background.jpg'
import { Button } from 'react-bootstrap'
import AOS from 'aos'

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true
    })
  })

  return (
    <>
      <section
        style={{
          height: window.innerHeight
        }}
        className='position-relative'
      >
        <img src={backgroundImg} alt="Les enfant de fianar" className='w-100 h-100 object-fit-cover' />
        <div 
          className='position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'
          style={{
            background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,112,255,0) 33%)'
          }}
        >
          <Container>
            <div className='text-center'>
              <div data-aos='fade-up'>
                <h1 className='display-4 fw-bold'>Les Enfants de Fianar - LEDEF</h1>
                <p className='lead mb-3'>Association Humanitaire et Culturelle</p>
              </div>
              <div 
                data-aos='zoom-in'
                data-aos-duration='1000'
                data-aos-delay='1000'
              >
                <Button href='/membership' variant='outline-primary' className='me-2'>Adhérer</Button>
                <Button href='/donation'>Faire un Don</Button>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  )
}

export default Banner
