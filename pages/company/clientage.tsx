import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'

import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
import FormComponent from '@components/FormComponent'
import Link from 'next/link'

const clientage = () => {
  return (
    <div>
      <Navbar />

      <section
        className="page-title parallaxie"
        data-bg-img="https://www.tallysolution.net//images/08.jpg"
        style={{
          backgroundImage:
            'url("https://www.tallysolution.net//images/08.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 44.79px',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Tallyerp 9 Featured Projects</h1>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Tallyerp 9 Featured Projects
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <Marquee className="theme-bg marqueeData">
        <h1>
          Top Tally Solutions Dealers and Partners across New Delhi - Gurgaon -
          Noida - Faridabad - NCR | Tally Software Dealers and Solution Provides
          - Across New Delhi - NCR - Gurgaon - Noida
        </h1>
      </Marquee>

      <section className="pb-3">
        <div className="container">
          <div className="row justify-content-center flex-flow-row-reverse">
            <div className="col-md-4">
              <div className="tab-head">
                <h4 className="service-head mb-0">Tally Products</h4>
                <div
                  id="accordion"
                  className="accordion tabArea"
                  style={{
                    paddingLeft: '30px',
                    paddingRight: '30px',
                    paddingTop: '15px',
                    paddingBottom: '15px',
                  }}
                >
                  <Accordian />
                </div>
              </div>
              <div className="tab-head">
                <h4 className="service-head mb-0">Tally Products</h4>
                <div id="accordion" className="accordion tabArea">
                  {/*<div class="card-header1">*/}
                  {/*  <h6 class="mb-0">*/}
                  {/*    <Link href="tally-erp9-software-quotation.php" class="collapsed">Our Quotation</Link>*/}
                  {/*  </h6>*/}
                  {/*</div>*/}
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/customization/dedicated"
                        className="collapsed"
                      >
                        Customization Services
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/training/site"
                        className="collapsed"
                      >
                        Tally Corporate Training
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/netsubscription"
                        className="collapsed"
                      >
                        Tally.Net Services
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/advisoryservices"
                        className="collapsed"
                      >
                        Business Advisory Services
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link href="/services/supportcover" className="collapsed">
                        {' '}
                        Annual Support Cover
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/syncimplementaion"
                        className="collapsed"
                      >
                        {' '}
                        Data Synchronization
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/download/instantsupport"
                        className="collapsed"
                      >
                        Priority Tally Support
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="tab-head">
                <h4 className="service-head mb-0">Useful Links</h4>
                <div id="accordion" className="accordion tabArea">
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/solutions/addonmodules"
                        className="collapsed"
                      >
                        Tally Academy Solution
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/solutions/corpmanangement"
                        className="collapsed"
                      >
                        Corporate Management
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/solutions/verticalsolutions"
                        className="collapsed"
                      >
                        Vertical Solutions for Tally{' '}
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/solutions/tallyintegration"
                        className="collapsed"
                      >
                        Tally Integration
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link href="/company/clientage" className="collapsed">
                        Our Esteemed Clientage
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/download/instantsupport"
                        className="collapsed"
                      >
                        Instant Support
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="tab-head">
                <h4 className="service-head mb-0">Ask for a service</h4>
                <div
                  className="tabArea"
                  style={{
                    paddingTop: '50px',
                    paddingRight: '15px',
                    paddingBottom: '50px',
                  }}
                >
                  <FormComponent />
                </div>
              </div>{' '}
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="section-title">
                <h2 className="title">Customers</h2>
                <h6 className="title">Our Clients from various Industries :</h6>
                <div className="row">
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/mmtc.jpeg"
                        width="100%"
                        alt="MMTC Limited"
                      />
                      <div className="client-heading">
                        <p>MMTC Limited</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/altech.jpg"
                        width="100%"
                        alt="Altech Aluminium"
                      />
                      <div className="client-heading">
                        <p>Altech Aluminium</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/pl.jpeg"
                        width="100%"
                        alt="Jindal Group (CP)"
                      />
                      <div className="client-heading">
                        <p>Pearey Lal and Sons</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/maharishiAyurveda.jpeg"
                        width="100%"
                        alt="Maharishi Ayurvedic India"
                      />
                      <div className="client-heading">
                        <p>Maharishi Ayurvedic India</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/contec global.jpeg"
                        width="100%"
                        alt="Jindal Group (CP)"
                      />
                      <div className="client-heading">
                        <p>Contect Global</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/panasonic.jpeg"
                        width="100%"
                        alt="Panasonic India Pvt Ltd"
                      />
                      <div className="client-heading">
                        <p>Panasonic India Pvt Ltd</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/classteacher.jpeg"
                        width="100%"
                        alt="Class Teacher Learning Systems (Mindshapers Tech.)"
                      />
                      <div className="client-heading">
                        <p>
                          Class Teacher Learning Systems (Mindshapers Tech.)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/PCI.jpeg"
                        width="100%"
                        alt="Press Council of India"
                      />
                      <div className="client-heading">
                        <p>Press Council of India</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/continental.jpeg"
                        width="100%"
                        alt="Continental India Pvt Ltd"
                      />
                      <div className="client-heading">
                        <p>Continental India Pvt Ltd</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/easybill.jpeg"
                        width="100%"
                        alt="Easy Bill"
                      />
                      <div className="client-heading">
                        <p>Easy Bill</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/genex logistics.jpeg"
                        width="100%"
                        alt="Genex Logistics"
                      />
                      <div className="client-heading">
                        <p>Genex Logistics</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/montain adventures.jpeg"
                        width="100%"
                        alt="Mountain Adventures India Pvt Ltd"
                      />
                      <div className="client-heading">
                        <p>Mountain Adventures India Pvt Ltd</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/oscar.jpeg"
                        width="100%"
                        alt="Oscar Group – Noida"
                      />
                      <div className="client-heading">
                        <p>Oscar Group – Noida</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/imphynyt.jpeg"
                        width="100%"
                        alt="Inphynyt Solutions"
                      />
                      <div className="client-heading">
                        <p>Inphynyt Solutions</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/g4s.jpeg"
                        width="100%"
                        alt="G-4 Mobile Group"
                      />
                      <div className="client-heading">
                        <p>G-4 Mobile Group</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/bioworld.jpeg"
                        width="100%"
                        alt="Bioworld Merchandizing"
                      />
                      <div className="client-heading">
                        <p>Bioworld Merchandizing</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/sunderdiamond.jpegg"
                        width="100%"
                        alt="Sunder Jewellers"
                      />
                      <div className="client-heading">
                        <p>Sunder Jewellers</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/minda.jpeg"
                        width="100%"
                        alt="Minda Group"
                      />
                      <div className="client-heading">
                        <p>Minda Group</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/safeguard.jpeg"
                        width="100%"
                        alt="Safegate Airport Systems India Pvt Ltd"
                      />
                      <div className="client-heading">
                        <p>Safegate Airport Systems India Pvt Ltd</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/shalcot.jpeg"
                        width="100%"
                        alt="Shalcot Mechanique Pvt Ltd"
                      />
                      <div className="client-heading">
                        <p>Shalcot Mechanique Pvt Ltd</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/siemens.jpeg"
                        width="100%"
                        alt="Siemens"
                      />
                      <div className="client-heading">
                        <p>Siemens</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/dalmia.jpeg"
                        width="100%"
                        alt="Dalmiya Continental"
                      />
                      <div className="client-heading">
                        <p>Dalmiya Continental</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/jindal.jpg"
                        width="100%"
                        alt="Jindal Group (CP)"
                      />
                      <div className="client-heading">
                        <p>Jindal Group (CP)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="/images/abhyas Institute.jpeg"
                        width="100%"
                        alt="Abhyas Institute"
                      />
                      <div className="client-heading">
                        <p>Abhyas Institute</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default clientage
