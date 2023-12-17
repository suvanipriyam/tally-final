import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'
import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
import FormComponent from '@components/FormComponent'
import Link from 'next/link'
const cusomizationsol = () => {
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
                <h2 className="title">Tally ERP Customization Solutions</h2>
                <strong>
                  <u>
                    <a href="Tally-Invoice-Customization-Solution-Delhi-India-International.php">
                      Basic Invoice Customizations
                    </a>
                  </u>
                </strong>
                <p className="p-3">
                  <br />
                  GLOWIPS has catered many corporates, Industrial Units, retail
                  shops, pharma and misc trades . One thing that is similar in
                  all industy type is Invoicing . Mostly all companies are using
                  Invoicing Module in their Tally ERP 9 Systems . To enhance and
                  to provide a one stop solution for the customization of
                  Invoice&apos;s .
                </p>
                <p>
                  Our Unit has gained expertise in Pre- Printed Invoices, and
                  our services for the same is valid in Delhi – NCR - India -
                  International.
                </p>
                <a href="Tally-Module-Customization-Solution-Delhi-India-International.php">
                  Module Customziations :{' '}
                </a>
                <br />
                <br />
                <p> </p>
                Our Developing Unit has extensively worked on multiple projects,
                we have developed some general modules which are mostly required
                by all industry types. Our Modules are upgraded &amp; Updated
                from time to time, suiting the current corporate culture,
                accounting and scenario . These Module customizations are well
                defined files which are integrated to your Tally Systems. These
                Modules have specially tailor made to suit specific requirements
                in the financial management structure and general accounting.
                Some of might be just tailor made req for your Organization.
                <p />
                <br />
                <a href="Tally-ERP9-Customization-Solution-Delhi-India-International.php">
                  Dedicated Customizations :{' '}
                </a>
                <br />
                <p className="p-3">
                  <strong>
                    At Glowips, we work for your enterprise empathically, this
                    allows us to settle with nothing but the most suitable and
                    efficient solutions . We are always willing to provide the
                    best we have , Our Team’s suggestions , Our Inputs , Our
                    feedback will immensely solve the most complex matters in
                    financial accounting ,
                  </strong>
                  <br />
                  <strong>
                    &nbsp;We are always willing to provide the best we have ,
                    Our Team’s suggestions , Our Inputs , Our feedback will
                    immensely solve the most complex matters in financial
                    accounting ,{' '}
                  </strong>
                </p>
                <ul>
                  <li>
                    <strong>Taxation , </strong>
                  </li>
                  <li>
                    <strong>Payroll , </strong>
                  </li>
                  <li>
                    <strong>Stocks ,</strong>
                  </li>
                  <li>
                    <strong>Remote systems or </strong>
                  </li>
                  <li>
                    <strong>Synchronization </strong>
                  </li>
                </ul>
                <br />
                <p className="p-3">
                  Dedicated Customization is immensely suited to provide a
                  complete solution to any issue in the financial management of
                  the organization. This type of Customization is the
                  troubleshooter to all industry types. In Dedicated
                  customization, we work on your enterprise&apos;s project
                  considering gravity of the mismanagement and providing the
                  best output.
                </p>
                <p className="p-3">
                  This targets the specific requirement as we initiate after
                  understanding the complete scenario. It will be evident that
                  through dedicated customization, we can bring about a level
                  where your Tally Software is customized to such a extent so as
                  to provide the best output you may desire.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default cusomizationsol
