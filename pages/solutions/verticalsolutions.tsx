import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'
import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
import FormComponent from '@components/FormComponent'
import Link from 'next/link'
const verticalsolutions = () => {
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
                <h2 className="title">Vertical Solutions for Tally</h2>
                <div className="textarea">
                  <div className="client-heading">
                    <p>
                      We have a team of developers working round the clock for
                      our Clients , Be it any customization or Intergration in
                      Tally ERP-9 Systems
                    </p>
                  </div>
                  <ul className="ms-5">
                    <li>From Voucher Level to Reporting</li>
                    <li>From Auditing Level to Complete Project Model </li>
                    <li>From Report to Security Modification</li>
                    <li>From Barcoding to Custom requirements </li>
                    <li>From Institutes to Schools </li>
                    <li>From Hospitals to Hotels </li>
                    <li>From Service to Retail </li>
                    <li>From Rice Mill to Electronic Showroom</li>
                    <li>From A Requirement to A Desired Outcome </li>
                  </ul>
                  <div className="client-heading">
                    <p>This is what GLOWIPS Developing Unit boasts about </p>
                  </div>
                  <p>
                    In Delhi – NCR - India , it is only our Enterprise that has
                    an organized cell for Developing Accounting Technologies in
                    Tally ERP-9 Systems and Building ERP Solutions . With a Team
                    that works 24*7 for developing solutions for Clients across
                    Globe , we take Pride in it ( though truly humbled by it ) .
                    Our Projects are handled by professional TDL
                    programmers/developers, Team proficient in various
                    languages, Integrators &amp; Our Technical Consulting
                    Representatives .{' '}
                  </p>
                  <p>
                    {' '}
                    What we deliver is what we promise, Our Customizations are
                    provided with complete AMC and after sales supporting.
                  </p>
                  <p>
                    It makes sense to develop, your specific business features
                    directly into Tally.ERP 9 to leverage on the much strength
                    that the Tally.ERP 9 platform inherently provides.
                  </p>
                  <p>
                    <strong>
                      Several industry specific solutions have been developed by
                      us and same can be extended to you &amp; be further
                      customized based on your needs:
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
                        <td
                          height={25}
                          align="left"
                          valign="middle"
                          scope="row"
                        >
                          <table
                            className="pdftable"
                            width="600px;"
                            cellPadding={2}
                            cellSpacing={1}
                          >
                            <tbody>
                              <tr>
                                <td height={25} align="left" scope="row">
                                  Tally ERP - 9 Platinum Module
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="GLOWIPS%20TALLY%20ERP-9%20PLATINUM%20MODULE.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  width="83%"
                                  height={25}
                                  align="left"
                                  scope="row"
                                >
                                  Jewellery Industry
                                </td>
                                <td
                                  width="17%"
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    id="jew"
                                    href="pdf/Jeweler Shop Customization.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td height={25} align="left" scope="row">
                                  Manufacturing Industry
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="pdf/GLOWIPS - MANUFACTURING MODULE - PYARELAL MODULE WISE PROJECT.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td height={25} align="left" scope="row">
                                  Electronic Showroom Management
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="pdf/electronic showroom module by GLowips.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td height={25} align="left" scope="row">
                                  Hotel &amp; Restaurant
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="pdf/Hotel Restaurant Module for Glowips.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  scope="row"
                                >
                                  School and College
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="pdf/School and college accounts management - by Glowips.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  scope="row"
                                >
                                  Training Institute
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="pdf/Training institute - Module by Glowips.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  scope="row"
                                >
                                  Chit Fund Module
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="pdf/Chit Fund Module.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  scope="row"
                                >
                                  Automobile Module
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="pdf/AUTOMOBILE Module [Compatibility Mode].pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  scope="row"
                                >
                                  CRM Module
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    id="crm"
                                    href="pdf/CRM Module .pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  scope="row"
                                >
                                  Comprehensive CRM Module
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    id="crm"
                                    href="pdf/Tally CRM. Part 2 MOdule ( front)  .pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  scope="row"
                                >
                                  ERP Manufacturing Module
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="pdf/ERP - Manufacturing - MOdule Part 1 .pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  scope="row"
                                >
                                  ERP BUS Module for Schools, College
                                  [Compatibility Mode]
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="pdf/ERP BUS Module for Schools College [Compatibility Mode].pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  scope="row"
                                >
                                  Builders &amp; Property
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="pdf/Builders&PropertyDevelopers module for GLOWIPS.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  scope="row"
                                >
                                  Tally ERP for Advertisement
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="pdf/Tally ERP for Advt.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <strong>
                      and other macro verticals like Freight &amp; forwarding
                      Agent, Advertising, Sync Modules , etc.
                    </strong>
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

export default verticalsolutions
