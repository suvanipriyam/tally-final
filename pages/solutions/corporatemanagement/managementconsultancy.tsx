import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'
import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
import FormComponent from '@components/FormComponent'
import Link from 'next/link'
const managementconsultancy = () => {
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
                <h2 className="title">Corporate Management</h2>
                <p className="p-3">
                  <strong>Corporate Management</strong> in all business and
                  organizational activities is the act of getting people
                  together to accomplish desired goals and objectives using
                  available resources efficiently and effectively. Corporate
                  Management comprises planning, organizing, staffing, leading
                  or directing, and controlling an organization (a group of one
                  or more people or entities) or effort for the purpose of
                  accomplishing a goal.{' '}
                </p>
                <p className="p-3">
                  We bring a fresh perspective to the process. We keep the
                  discussions on track and encourage constructive ideas to flow.{' '}
                  <strong>
                    By using our experience in the right situations, you will
                    certainly accomplish more in your management processes,
                    delve deeper into critical issues and resolve them.
                  </strong>{' '}
                  Equally important,{' '}
                  <strong>
                    your team will have positive feelings, stronger
                    cohesiveness, a sense of accomplishment and a renewed
                    belief.{' '}
                  </strong>
                </p>
                <p className="p-3">
                  <strong>
                    Some of might be just tailor made for your Organization
                  </strong>
                </p>
                <table
                  className="pdftable"
                  width="600px;"
                  cellPadding={2}
                  cellSpacing={1}
                >
                  <tbody>
                    <tr>
                      <td height={25} align="left" valign="middle" scope="row">
                        <table
                          className="pdftable"
                          width="600px;"
                          cellPadding={2}
                          cellSpacing={1}
                        >
                          <tbody>
                            <tr>
                              <td
                                width="83%"
                                height={25}
                                align="left"
                                valign="middle"
                                scope="row"
                              >
                                Corporate Management{' '}
                              </td>
                              {/*<td width="17%" height="25" align="left" valign="middle" class="white"><Link href="assets/pdf/corporate_management_glowips-delhiNCR.php">Read More</a></td>*/}
                            </tr>
                            <tr>
                              <td
                                height={25}
                                align="left"
                                valign="middle"
                                scope="row"
                              >
                                Management Consultancy Services
                              </td>
                              {/*<td height="25" align="left" valign="middle" class="white"><Link href="assets/pdf/management_consultancy_services_glowips-delhi.php">Read More</a></td>*/}
                            </tr>
                            <tr>
                              <td
                                height={25}
                                align="left"
                                valign="middle"
                                scope="row"
                              >
                                {' '}
                                Business Development
                              </td>
                              {/*<td height="25" align="left" valign="middle" class="white"><Link href="assets/pdf/business_development_glowips-delhi.php">Read More</a></td>*/}
                            </tr>
                            <tr>
                              <td
                                height={25}
                                align="left"
                                valign="middle"
                                scope="row"
                              >
                                Our Franchise Services
                              </td>
                              {/*<td height="25" align="left" valign="middle" class="white"><Link href="assets/pdf/franchise_services_glowips_delhi.php">Read More</a></td>*/}
                            </tr>
                            <tr>
                              <td
                                height={25}
                                align="left"
                                valign="middle"
                                scope="row"
                              >
                                {' '}
                                ERP for Corporate&apos;s and Industries{' '}
                              </td>
                              {/*<td height="25" align="left" valign="middle" class="white"><Link href="assets/pdf/ERP_for_Corporates_and_Industries_glowips_delhi.php">Read More</a></td>*/}
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default managementconsultancy
