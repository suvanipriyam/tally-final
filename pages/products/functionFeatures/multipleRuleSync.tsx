import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'

import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
import FormComponent from '@components/FormComponent'
import Link from 'next/link'
const multipleRuleSync = () => {
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
              <h1>About Tally Erp9 Software</h1>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Tally Erp9 Softwarex
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
                <div className="row">
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Multiple Rule Sync</p>
                      </div>
                      <div className="section-title p-3">
                        <h2 className="title">Multiple Rule Sync</h2>
                        <div className="textarea">
                          <div className="client-heading">
                            <p>
                              Update Your Regional Head Quarters &amp; Corporate
                              HQ in a Single Click
                            </p>
                          </div>

                          <p>
                            <strong>
                              Back office and production planning? Get real time
                              demand now!
                            </strong>
                          </p>

                          <p>
                            Multiple sync paths in Tally.ERP 9 enables business
                            information flow between branches, regional head
                            quarters and to Head Office in just one click.
                            <strong>
                              <br />

                              <br />

                              <strong>Say for e.g.:</strong>
                              <br />

                              <br />
                            </strong>
                            • A branch at Ahmedabad needs to send information to
                            its RO at Mumbai and also to the HO at <br />
                            . Bangalore. Now this is just a click away!
                            <br />
                            <br />
                            • A branch at Ahmedabad needs to send inventory
                            information to a Manufacturing plant at Pune
                            <br />
                            . come under Mumbai RO. Now in just a click the
                            'Stores Manager' at Ahmedabad can share this <br />
                            . vital information on stock position to both his RO
                            Head sitting at Mumbai and his counterpart <br />
                            . Stores Manager at Pune plant. Again just a click
                            away!
                            <br />
                            <br />
                            By this set-up, business requests which can be
                            addressed by a branch will be prioritised instead of
                            sending the same request to Head Office for
                            fulfilment. Lateral sync is also possible between
                            branches in a region to optimize transactions and
                            derive cost advantage. As stated in the example
                            above, if Ahmedabad Branch has stock requirement
                            which can be fulfilled by Pune plant that falls in
                            the same region, then the request for material is
                            fulfilled inside the RO purview instead of going to
                            the Head Office.
                          </p>

                          <p>
                            <strong>Multiple rule </strong>
                            <strong>sync</strong>
                          </p>

                          <p>
                            <img
                              src="/images/multisynchrule.jpg"
                              width="100%"
                            />
                          </p>

                          <p>
                            Apart from commercial businesses, this feature also
                            helps Government bodies. Say for e.g., now a VAO
                            (Village Administration Officer) can by a single
                            click send the fund utilisation report to his
                            District HQ and at the same time update the
                            respective Ministries!
                          </p>

                          <p>
                            Multiple sync can be set to function automatically
                            without multiple clicks. Flexible mapping of Head
                            Office and branch offices based on business need is
                            a very effective solution for businesses.
                            <br />
                            <br />
                            Multiple sync can be set to function automatically
                            without any manual intervention.
                          </p>

                          <p>
                            <strong>
                              Much More than Multi Synch - Now Tally.ERP 9 will
                              remember the 'multiple sync paths'
                            </strong>
                          </p>

                          <p>
                            This facility will ensure any alterations done at
                            any level (say a Branch office or Production
                            facility); will be updated back to the originator of
                            the transaction. Say for example, your Delhi Branch
                            has booked a Sales Order with a term of delivery of
                            10 days. This information has moved to the HO
                            located at Bangalore and then moved to Pune plant
                            location. The factory is changing the order terms to
                            20 days delivery and wanted this information to go
                            back to Branch that has booked this order. Now
                            Tally.ERP 9 will remember this synch route of 'Delhi
                            Branch &gt; Bangalore HO &gt; Pune plant' - due to
                            this intelligent feature, so that the information
                            will reach the originator i.e., the Delhi Branch.
                          </p>
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

export default multipleRuleSync
