import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'
import Accordian from '@components/Accordian'
import FormComponent from '@components/FormComponent'
import Link from 'next/link'

const datamigration = () => {
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
          backgroundPosition: 'center 14.55px',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>GlowIPS Service Authorized Tally Partners -Delhi</h1>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    GlowIPS Service Authorized Tally Partners -Delhi
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

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
                <h2 className="title">Tally Data Migration </h2>
                <p>
                  Our Technical Team provides complete solutions for your
                  organization working on Tally Systems and other
                  software&apos;s. We have tools and means of migrating data
                  from other software&apos;s to Tally ERP-9 or any other
                  release.
                </p>
                <div className="row">
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>
                          The Software/backend processes from which migration is
                          possible are:
                        </p>
                      </div>
                      <div className="row justify-content-center align-items-center">
                        <div className="col-md-12">
                          <ul className="ms-5">
                            <li>DBMS</li>
                            <li>SAP</li>
                            <li>EXCEL</li>
                            <li>FORPRO</li>
                            <li>RAMCO</li>
                            <li>XML FILES</li>
                            <li>SQL</li>
                            <li>ORACLE</li>
                            <li>CRM</li>
                            <li>BUSY</li>
                            <li>
                              Previous Tally Versions 4, 4.5, 4.6, 5.4, 6.3,
                              7.2, 8.1, 9.0
                            </li>
                            <li>ANY OTHER DATA BASE</li>
                          </ul>
                        </div>
                        <div className="col-md-12">
                          <img
                            src="/images/data_migration_glowips_delhi.jpg"
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
                                <td className="p-2">
                                  Tally 9 Gold to ERP-9 Gold
                                </td>
                                <td className="p-2">10,800.00</td>
                              </tr>
                              <tr>
                                <td className="p-2">
                                  Tally 9 Silver to Tally ERP-9 Silver{' '}
                                </td>
                                <td className="p-2">3,600.00</td>
                              </tr>
                              <tr>
                                <td className="p-2">
                                  Tally 7.2 Silver to Tally.ERP 9 Silver
                                </td>
                                <td className="p-2"> 7,200.00</td>
                              </tr>
                              <tr>
                                <td className="p-2">
                                  Tally 7.2 Gold to Tally.ERP 9 Gold
                                </td>
                                <td className="p-2"> 21,600.00</td>
                              </tr>
                              <tr>
                                <td className="p-2">
                                  Tally 6.3 Gold to Tally.ERP 9 Gold{' '}
                                </td>
                                <td className="p-2"> 21,600.00</td>
                              </tr>
                              <tr>
                                <td className="p-2">
                                  Tally 9/Tally.ERP 9 Silver To Tally.ERP 9 Gold{' '}
                                </td>
                                <td className="p-2"> 36,000.00</td>
                              </tr>
                              <tr>
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
                                </td>
                                <td className="p-2">3,600.00</td>
                              </tr>
                              <tr></tr>
                              <tr>
                                <td className="p-2">
                                  Tally.NET Subscription - Gold{' '}
                                </td>
                                <td className="p-2">10,800.00</td>
                              </tr>
                              <tr></tr>
                              <tr>
                                <td className="p-2">
                                  Tally.NET Auditor 1 Year Subscription{' '}
                                </td>
                                <td className="p-2"> 5,400.00</td>
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

export default datamigration
