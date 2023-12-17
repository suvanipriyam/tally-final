import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'
import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
import FormComponent from '@components/FormComponent'
import Link from 'next/link'
const advisoryservices = () => {
  return (
    <div>
      <Navbar />
      <section
        className="page-title parallaxie"
        data-bg-img="/images/08.jpg"
        style={{
          // cant find the source for the orignal image
          backgroundImage: 'url("/images/08.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 134.681px',
          // backgroundColor: 'red',
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
            Glow IPS Tally ERP.9 Sales & Service Partner Delhi
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
                <div className="row">
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>BUSINESS ADVISORY SERVICES </p>
                      </div>
                      <div className="row justify-content-center align-items-start">
                        <div className="col-md-12">
                          <p>
                            At Glowips , we have a dedicated team of CA&apos;s
                            and Tax managers . Our Legal representatives will
                            justify your business requirements and provide you
                            the best solutions . We insist our Clients to fairly
                            follow the government regulations and suggest the
                            best possible means related to Tax Liability , ROC
                            Matters , Legal advisory and Fund Flow management.
                          </p>
                          <p></p>
                          <p>
                            We believe in Ethical and Honest dealings with our
                            State term policies and Tax matter s , All
                            suggestions will be at par with the government
                            consideration and fair practice . We discourage any
                            means to avert the corporate tax evasions and any
                            illegitimate trade or practice .
                          </p>
                          <p>
                            Taxation and regulatory compliance is a serious
                            business for Small and Medium Enterprises (SMEs) and
                            expert advice could reduce the risks of costly
                            audits. Business Advisory Services consist of a set
                            of services that Chartered Accountants (CAs) can
                            provide to their clients to help them comply with
                            Government requirements and ensure they have the IT
                            systems to facilitate it.
                          </p>
                        </div>
                        <div className="col-md-12">
                          <img
                            src="/images/business-advisor-glowips.jpg"
                            alt=""
                            width="100%"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>
                          CAs can deliver various services around Tally -
                          ranging from continuous audit to system configuration
                          &amp; implementation - to meet the needs of SMEs keen
                          to know their company and their resources:
                        </p>
                      </div>
                      <div className="row justify-content-center align-items-start">
                        <ul className="ms-5">
                          <li>
                            Continuous audit in the form of Compliance Services
                            for TDS/eTDS, FBT, Service Tax, VAT
                          </li>
                          <li>
                            &apos;Remote&apos; Services for improved delivery of
                            Compliance Services
                          </li>
                          <li>IT Assisted Audit services for Tally</li>
                          <li>
                            Business process structuring / accounts
                            configuration / inventory management / MIS
                          </li>
                          <li>
                            Application design consultancy - for customisation
                            offered through third parties (Tally Integrators)
                          </li>
                          <li>
                            Application Assurance Services - for upkeep of
                            Business Applications for SMEs using
                          </li>
                          <li>
                            Inheritance of assets by NRI from residents in India
                            and non-residents.
                          </li>
                          <li>Tax Treaties</li>
                          <li>
                            Establishment of Branch Office by Foreign Company
                          </li>
                          <li>
                            Establishment of Liasion Office by a Foreign company
                          </li>
                          <li>Office in India and outside India.</li>
                          <li>
                            Taxation of NRIs carrying on business in India and
                            outside India.
                          </li>
                          <li>Advance Ruling</li>
                          <li>Issuance of securities in India</li>
                          <li>
                            Investment advisory services in India in shares,
                            securities, mutual funds and properties.
                          </li>
                          <li>
                            Opening and operating banking accounts and any
                            specific schemes for Non Resident Indians.
                          </li>
                          <li>
                            Application to Foreign Investment Promotion Borad(
                            FIBP)
                          </li>
                          <li>
                            Application to Secretariat of Industrial Assistance
                            (SIA)
                          </li>
                          <li>
                            Prepration of Loan Appliaction Form for Working
                            Capital from Banks and financial institutions.
                          </li>
                          <li>
                            Prperation of Term Loan Appliaction for funding from
                            Banks and financial institution.
                          </li>
                          <li>
                            Foreign Investment in India, by setting up of joint
                            Venture, Branch office, Liaison office etc.
                          </li>
                        </ul>
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

export default advisoryservices
