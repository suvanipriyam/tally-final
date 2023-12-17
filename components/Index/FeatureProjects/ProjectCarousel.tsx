import React, { useEffect, useState } from 'react'
// import Carousel from 'react-bootstrap/Carousel'
import styles from './project.module.css'
import Carousel from 'react-material-ui-carousel'
import {
  Paper,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

const CardComponent = ({ img, heading, text }) => {
  return (
    <div className={styles['card']}>
      <div className={styles['card-image-container']}>
        <img src={img} alt="Card" className={styles['card-image']} />
      </div>
      <div className={styles['card-content']}>
        <h2 className={styles['card-heading']}>{heading}</h2>
        <p className={styles['card-text']}>{text}</p>
      </div>
    </div>
  )
}

// const ProjectCarousel1 = () => {
//   const data = [
//     {
//       img: '/images/projectfeature/bioworld.jpeg',
//       heading: 'Bioworld Merchandizing',
//       text: 'Bioworld, we make stuff - all kinds of stuff. Thats right, you might have thought we were a pharmaceutical or petroleum company, but we are not. Although we do generate innovation, ignite growth, and constantly evolve',
//     },
//     {
//       img: '/images/projectfeature/contec.jpeg',
//       heading: 'Contec Global',
//       text: 'Established in 1984 and headquartered in London, the Contec Global Group has a worldwide presence, with operations in Asia, Africa, Europe and America. As a company established on the platform  of e-Governance and smart technologies.',
//     },
//     {
//       img: '/images/projectfeature/maharishi.jpeg',
//       heading: 'Maharishi Ayurvedic India Pvt Ltd',
//       text: 'The origin of Maharishi Ayurveda dates back to 1980, when Maharishi Mahesh Yogi, the founder of Transcendental Meditation began working with Indias top three Ayurvedic experts-Dr. V.M. Dwivedi, Dr.B.D.Triguna and Dr. Balaraj Maharishi.',
//     },
//     {
//       img: '/images/projectfeature/panasonic.jpeg',
//       heading: 'Panasonic India Pvt Ltd',
//       text: 'Headquartered in Osaka, Japan, Panasonic Corporation is a lead- ing global manufacturer of electronic products and solutions for consumer, business and industrial needs. Panasonic uses innovative technologies to provide solutions',
//     },
//     {
//       img: '/images/projectfeature/pearey.jpeg',
//       heading: 'Pearey Lal and Sons',
//       text: 'Manufacturers Of Dass Hydros, Dass Jones Diesel Hydraulic Mobile Cranes Hydraulic Products &amp; Equipment, We are manufacturer of heavey earth moving machine.',
//     },
//     {
//       img: '/images/projectfeature/project_slide1.jpg',
//       heading: 'Minda Groups',
//       text: 'The company NK MINDA Group is one of the leading global manu- facturers of automobile components and a leading supplier of proprietary automotive solutions to Original Equipment Manufacturers (OEMs).',
//     },
//     {
//       img: 'images/projectfeature/safeguard.jpeg',
//       heading: 'Safegate Airport Systems India Pvt Ltd',
//       text: 'Safegate Group is an international company with headquarters in Malmö, Sweden and representatives in more than 50 countries around the world. The main objective for Safegate Group is to provide',
//     },
//   ]

//   const [currentIndex, setCurrentIndex] = useState(0)

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 < data.length ? prevIndex + 1 : 0
//     )
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 >= 0 ? prevIndex - 1 : data.length - 1
//     )
//   }

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       nextSlide()
//     }, 3000)

//     return () => clearInterval(intervalId)
//   }, [currentIndex])
//   return (
//     <div className={styles['carousel-container']}>
//       <div className={styles['carousel-wrapper']}>
//         {data.slice(currentIndex, currentIndex + 3).map((item, index) => (
//           <CardComponent
//             key={index}
//             img={item.img}
//             heading={item.heading}
//             text={item.text}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

const data = [
  {
    img: '/images/projectfeature/bioworld.jpeg',
    heading: 'Bioworld Merchandizing',
    text: 'Bioworld, we make stuff - all kinds of stuff. Thats right, you might have thought we were a pharmaceutical or petroleum company, but we are not. Although we do generate innovation, ignite growth, and constantly evolve',
  },
  {
    img: '/images/projectfeature/contec.jpeg',
    heading: 'Contec Global',
    text: 'Established in 1984 and headquartered in London, the Contec Global Group has a worldwide presence, with operations in Asia, Africa, Europe and America. As a company established on the platform  of e-Governance and smart technologies.',
  },
  {
    img: '/images/projectfeature/maharishi.jpeg',
    heading: 'Maharishi Ayurvedic India Pvt Ltd',
    text: 'The origin of Maharishi Ayurveda dates back to 1980, when Maharishi Mahesh Yogi, the founder of Transcendental Meditation began working with Indias top three Ayurvedic experts-Dr. V.M. Dwivedi, Dr.B.D.Triguna and Dr. Balaraj Maharishi.',
  },
  {
    img: '/images/projectfeature/panasonic.jpeg',
    heading: 'Panasonic India Pvt Ltd',
    text: 'Headquartered in Osaka, Japan, Panasonic Corporation is a lead- ing global manufacturer of electronic products and solutions for consumer, business and industrial needs. Panasonic uses innovative technologies to provide solutions',
  },
  {
    img: '/images/projectfeature/pearey.jpeg',
    heading: 'Pearey Lal and Sons',
    text: 'Manufacturers Of Dass Hydros, Dass Jones Diesel Hydraulic Mobile Cranes Hydraulic Products &amp; Equipment, We are manufacturer of heavey earth moving machine.',
  },
  {
    img: '/images/projectfeature/project_slide1.jpg',
    heading: 'Minda Groups',
    text: 'The company NK MINDA Group is one of the leading global manu- facturers of automobile components and a leading supplier of proprietary automotive solutions to Original Equipment Manufacturers (OEMs).',
  },
  {
    img: '/images/projectfeature/safeguard.jpeg',
    heading: 'Safegate Airport Systems India Pvt Ltd',
    text: 'Safegate Group is an international company with headquarters in Malmö, Sweden and representatives in more than 50 countries around the world. The main objective for Safegate Group is to provide',
  },
  {
    img: '/images/projectfeature/bioworld.jpeg',
    heading: 'Bioworld Merchandizing',
    text: 'Bioworld, we make stuff - all kinds of stuff. Thats right, you might have thought we were a pharmaceutical or petroleum company, but we are not. Although we do generate innovation, ignite growth, and constantly evolve',
  },
  {
    img: '/images/projectfeature/contec.jpeg',
    heading: 'Contec Global',
    text: 'Established in 1984 and headquartered in London, the Contec Global Group has a worldwide presence, with operations in Asia, Africa, Europe and America. As a company established on the platform  of e-Governance and smart technologies.',
  },
]

const ProjectCarousel = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
console.log(isSmallScreen);


  let itemsPerPage = 3

  if (isSmallScreen) {
    itemsPerPage = 1
  } else if (isMediumScreen) {
    itemsPerPage = 2
  }

  return (
    <Carousel
      animation="slide"
      indicatorContainerProps={{ style: { display: 'none' } }}
    >
      {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
        (_, index) => (
          <Grid container spacing={2} key={index}>
            {data
              .slice(index * itemsPerPage, (index + 1) * itemsPerPage)
              .map((item, i) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={i}>
                  <Item item={item} />
                </Grid>
              ))}
          </Grid>
        )
      )}
    </Carousel>
  )
}

const Item = ({ item }) => {
  return (
    <Paper className={styles['card']}>
      <div className={styles['card-image-container']}>
        <img src={item.img} alt="Card" className={styles['card-image']} />
      </div>
      <div className={styles['card-content']}>
        <h2 className={styles['card-heading']}>{item.heading}</h2>
        <p className={styles['card-text']}>{item.text}</p>
      </div>
    </Paper>
  )
}

export default ProjectCarousel
