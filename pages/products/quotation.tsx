import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'

import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
import FormComponent from '@components/FormComponent'
import Link from 'next/link'

const quotation = () => {
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
          backgroundPosition: 'center 120.63px',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>
                Glow IPS Tally ERP.9 Sales &amp; Service Partener Delhi/NCR
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
                <h2 className="title">
                  Tally Software/Upgradation/Rental Quotes
                </h2>
                <div className="row">
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Tally Package:</p>
                      </div>
                      <div className="row justify-content-center align-items-center">
                        <div className="col-md-9">
                          <table width="100%" className="p-2">
                            <tbody>
                              <tr>
                                <td className="p-2">Tally.ERP 9 Silver</td>
                                <td className="p-2">18,000.00 </td>
                              </tr>
                              <tr>
                                <td className="p-2">Tally.ERP 9 Gold </td>
                                <td className="p-2">54,000.00</td>
                              </tr>
                              <tr>
                                <td className="p-2">
                                  Tally ERP-9 Auditor Edition
                                </td>
                                <td className="p-2">10,800.00</td>
                              </tr>
                              <tr>
                                <td className="p-2">Tally Shoper 9 Silver</td>
                                <td className="p-2">18,000.00</td>
                              </tr>
                              <tr>
                                <td className="p-2">Tally Shoper 9 Gold</td>
                                <td className="p-2">54,000.00</td>
                              </tr>
                              <tr>
                                <td className="p-2">Tally Shoper 9 Diamond</td>
                                <td className="p-2">2,70,000.00</td>
                              </tr>
                              <tr>
                                <td className="p-2">
                                  Tally ERP 9 Silver (International)
                                </td>
                                <td className="p-2">
                                  $630($ varies, details as per 1/6/11)
                                </td>
                              </tr>
                              <tr>
                                <td className="p-2">
                                  Tally ERP-9 Gold (International)
                                </td>
                                <td className="p-2">$1890</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-md-3">
                          <img
                            src="/images/Tally_erp_quotation_glowips_delhi.jpg"
                            alt=""
                            style={{ filter: 'invert(0)' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Tally Package for Rent:</p>
                      </div>
                      <div className="row justify-content-center align-items-center">
                        <div className="col-md-9">
                          <table width="100%" className="p-2">
                            <tbody>
                              <tr>
                                <td className="p-2">
                                  Tally.ERP 9 Silver on rent (Quarterly){' '}
                                </td>
                                <td className="p-2">1,800.00 </td>
                              </tr>
                              <tr>
                                <td className="p-2">
                                  Tally.ERP 9 Gold on rent (Quarterly){' '}
                                </td>
                                <td className="p-2">5,400.00 </td>
                              </tr>
                              <tr>
                                <td className="p-2">
                                  Tally Shoper 9 Silver on rent (Quarterly){' '}
                                </td>
                                <td className="p-2">1,800.00 </td>
                              </tr>
                              <tr>
                                <td className="p-2">
                                  Tally Shoper 9 Gold on rent (Quarterly){' '}
                                </td>
                                <td className="p-2">5,400.00 </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Tally Upgrade:</p>
                      </div>
                      <div className="row justify-content-center align-items-center">
                        <div className="col-md-12">
                          <table width="100%" className="p-2">
                            <tbody>
                              <tr>
                                {' '}
                                <td className="p-2">
                                  Tally 9 Gold to ERP-9 Gold
                                </td>{' '}
                                <td className="p-2">10,800.00</td>
                              </tr>
                              <tr>
                                {' '}
                                <td className="p-2">
                                  Tally 9 Silver to Tally ERP-9 Silver{' '}
                                </td>{' '}
                                <td className="p-2">3,600.00</td>
                              </tr>
                              <tr>
                                {' '}
                                <td className="p-2">
                                  Tally 7.2 Silver to Tally.ERP 9 Silver
                                </td>{' '}
                                <td className="p-2"> 7,200.00</td>
                              </tr>
                              <tr>
                                {' '}
                                <td className="p-2">
                                  Tally 7.2 Gold to Tally.ERP 9 Gold
                                </td>{' '}
                                <td className="p-2"> 21,600.00</td>
                              </tr>
                              <tr>
                                {' '}
                                <td className="p-2">
                                  Tally 6.3 Gold to Tally.ERP 9 Gold{' '}
                                </td>
                                <td className="p-2"> 21,600.00</td>
                              </tr>
                              <tr>
                                {' '}
                                <td className="p-2">
                                  Tally 9/Tally.ERP 9 Silver To Tally.ERP 9 Gold{' '}
                                </td>
                                <td className="p-2"> 36,000.00</td>
                              </tr>
                              <tr>
                                {' '}
                                <td className="p-2">
                                  Tally 7.2 Single to Tally ERP-9 Gold{' '}
                                </td>
                                <td className="p-2">43,200.00</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Tally.NET Subscription:</p>
                      </div>
                      <div className="row justify-content-center align-items-center">
                        <div className="col-md-12">
                          <table width="100%" className="p-2">
                            <tbody>
                              <tr>
                                <td className="p-2">
                                  Tally.NET Subscription - Silver{' '}
                                </td>{' '}
                                <td className="p-2">3,600.00</td>{' '}
                              </tr>
                              <tr></tr>
                              <tr>
                                {' '}
                                <td className="p-2">
                                  Tally.NET Subscription - Gold{' '}
                                </td>{' '}
                                <td className="p-2">10,800.00</td>{' '}
                              </tr>
                              <tr></tr>
                              <tr>
                                {' '}
                                <td className="p-2">
                                  Tally.NET Auditor 1 Year Subscription{' '}
                                </td>{' '}
                                <td className="p-2"> 5,400.00</td>{' '}
                              </tr>
                              <tr></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-justify pt-3 pb-3">
                    {' '}
                    The Quotes of Software&apos;s, .NET, Upgradations are
                    provided with complete services **. For a detailed Quote
                    please mail us at: -
                    <a href="mailto:tallyproducts@gmail.com">
                      tallyproducts@gmail.com
                    </a>
                  </p>
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

export default quotation
