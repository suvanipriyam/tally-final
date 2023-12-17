import React, { useState } from 'react'
import { Grid, Paper, Button } from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import styles from './carosuel.module.css' // Import your CSS module

const ResponsiveCarousel = () => {
    const slides = [
      {
        title: 'Tally Implementation and Integration',
        text: '',
        learnMoreLink: 'Custom-Built-Solutions-In-Tally-ERP9.php',
        contactUsLink: 'Contact-Authorized-Tally-Solution-Unit.php',
        image: '/images/Asset-3.png',
      },
      {
        title: '',
        text: '',
        learnMoreLink: '',
        contactUsLink: '',
        image: '',
      },
      {
        title: '',
        text: '',
        learnMoreLink: '',
        contactUsLink: '',
        image: '',
      },
      {
        title: '',
        text: '',
        learnMoreLink: '',
        contactUsLink: '',
        image: '',
      },
      {
        title: '',
        text: '',
        learnMoreLink: '',
        contactUsLink: '',
        image: '',
      },
    ]
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <>
    <div className={styles['responsive-carousel']}>
      {slides.map((slide, index) => (
        <Paper
          key={index}
          className={`${styles['carousel-slide']} ${
            index === currentSlide ? styles['active'] : ''
          }`}
        >
          <Grid container>
            <Grid item xs={12} sm={6} md={6}>
              <div className={styles['content']}>
                <h1>{slide.title}</h1>

                <div className={styles['buttons']}>
                  <a
                    className="btn btn-2"
                    href="Custom-Built-Solutions-In-Tally-ERP9.php"
                    style={{
                      height: '80px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                      width: '190px',
                    }}
                  >
                    {' '}
                    <span className="btn-icon btn-arrow" />
                    <span className="btn-text my-auto">Learn More</span>
                  </a>
                  <a
                    className="btn btn-2 "
                    href="Contact-Authorized-Tally-Solution-Unit.php"
                    style={{
                      height: '80px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                      width: '190px',
                    }}
                  >
                    {' '}
                    <span className="btn-icon btn-arrow" />
                    <span className="btn-text ">Contact Us</span>
                  </a>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div className={styles['image']}>
                <img
                  className={styles['img']}
                  src={slide.image}
                  alt={`slide-${index}`}
                />
              </div>
            </Grid>
          </Grid>
        </Paper>
      ))}
      <Button
        className={`${styles['arrow-button']} ${styles['prev']}`}
        onClick={prevSlide}
      >
        <KeyboardArrowLeft />
      </Button>
      <Button
        className={`${styles['arrow-button']} ${styles['next']}`}
        onClick={nextSlide}
      >
        <KeyboardArrowRight />
      </Button>
    </div>
    </>
  )
}

export default ResponsiveCarousel
