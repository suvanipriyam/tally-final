import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'
import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
import FormComponent from '@components/FormComponent'
import Link from 'next/link'
const simple = () => {
  return (
    <div>
      <Navbar />
      <section
        className="page-title parallaxie"
        data-bg-img="/images/08.jpg"
        style={{
          backgroundImage: 'url("/images/08.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 134.681px',
        }}
      >
        <div
          className="container"
          style={{
            width: '100%',
            height: '33vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: '130px',
            textAlign: 'left',
          }}
        >
          <h1 style={{ zIndex: '2', marginBottom: '20px' }}>
            Glow IPS Service Authorized Tally Partner - Delhi
          </h1>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Glow IPS Tally ERP.9 Rental
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <Marquee className="theme-bg marqueeData">
        <h1>
          Top Tally Solutions Dealers and Partners across New Delhi - Gurgaon -
          Noida - Faridabad - NCR | Tally Software Dealers and Solution Provides
          - Across New Delhi - NCR - Gurgaon - Noida
        </h1>
      </Marquee>
      {/* form */}
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
                  {/*    <Link href="tally-erp9-software-quotation.php" class="collapsed">Our Quotation</a>*/}
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
                <h2 className="title">Service Invoices</h2>
                <div className="row">
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS NORMAL CUST INVOICE (1).pdf"
                            target="_blank"
                          >
                            <img
                              src="/images/normal_invoice_1.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS NORMAL CUST INVOICE (2).pdf"
                            target="_blank"
                          >
                            <img
                              src="/images/normal_invoice_2.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS NORMAL CUST INVOICE (3).pdf"
                            target="_blank"
                          >
                            <img
                              src="/images/normal_invoice_3.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS NORMAL CUST INVOICE (4).pdf"
                            target="_blank"
                          >
                            <img
                              src="/images/normal_invoice_4.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS NORMAL CUST INVOICE (5).pdf"
                            target="_blank"
                          >
                            <img
                              src="/images/normal_invoice_5.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS NORMAL CUST INVOICE (6).pdf"
                            target="_blank"
                          >
                            <img
                              src="/images/normal_invoice_6.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS NORMAL CUST INVOICE (7).pdf"
                            target="_blank"
                          >
                            <img
                              src="/images/normal_invoice_7.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS NORMAL CUST INVOICE (8).pdf"
                            target="_blank"
                          >
                            <img
                              src="/images/normal_invoice_8.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS NORMAL CUST INVOICE (9).pdf"
                            target="_blank"
                          >
                            <img
                              src="/images/normal_invoice_9.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS NORMAL CUST INVOICE (10).pdf"
                            target="_blank"
                          >
                            <img
                              src="/images/normal_invoice_10.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS NORMAL CUST INVOICE (11).pdf"
                            target="_blank"
                          >
                            <img
                              src="/images/normal_invoice_11.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS NORMAL CUST INVOICE (12).pdf"
                            target="_blank"
                          >
                            <img
                              src="/images/normal_invoice_12.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS NORMAL CUST INVOICE (13).pdf"
                            target="_blank"
                          >
                            <img
                              src="/images/normal_invoice_13.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS NORMAL CUST INVOICE (14).pdf"
                            target="_blank"
                          >
                            <img
                              src="/images/normal_invoice_14.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS NORMAL CUST INVOICE (15).pdf"
                            target="_blank"
                          >
                            <img
                              src="/images/normal_invoice_15.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
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

export default simple
