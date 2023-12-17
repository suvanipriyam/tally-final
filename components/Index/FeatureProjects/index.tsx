import React from 'react'
import ProjectCarousel from './ProjectCarousel'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styles from './project.module.css'



const featuredProject = () => {
  const projectdata = [
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
      img: '/images/projectfeature/pearly.jpeg',
      heading: 'Pearey Lal and Sons',
      text: 'Manufacturers Of Dass Hydros, Dass Jones Diesel Hydraulic Mobile Cranes Hydraulic Products &amp; Equipment, We are manufacturer of heavey earth moving machine.',
    },
    {
      img: '/images/projectfeature/project_slide1.jpeg',
      heading: 'Minda Groups',
      text: 'The company NK MINDA Group is one of the leading global manu- facturers of automobile components and a leading supplier of proprietary automotive solutions to Original Equipment Manufacturers (OEMs).',
    },
    {
      img: '/images/projectfeature/safegaurd.jpeg',
      heading: 'Safegate Airport Systems India Pvt Ltd',
      text: 'Safegate Group is an international company with headquarters in Malmö, Sweden and representatives in more than 50 countries around the world. The main objective for Safegate Group is to provide',
    },
  ]
  return (
    <section className="pb-0 w-full">
      <div className="container-fluid pe-sm-0">
        <div className="row" >
          <div className="mx-auto col-lg-12 col-md-12">
            <div className="section-title md-mb-3 text-center">
              <h3>Our Work</h3>
              <h1 className="title">Feature Projects</h1>
            </div>
          </div>
          <div
            className="col-lg-12 col-md-12 ms-sm-n5 side-top-bg mt-5 mt-lg-0"
            style={{ zIndex: '1' }}
          ></div>
          <ProjectCarousel />
        </div>
      </div>
    </section>
  )
}

export default featuredProject
