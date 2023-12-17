import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'

import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
import FormComponent from '@components/FormComponent'
import Link from 'next/link'
const batchVoucher = () => {
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
                <div className="row">
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Batch Vouchers Report</p>
                      </div>
                      <div className="">
                        <div className="section-title">
                          <h2 className="title p-3">Batch Vouchers Report</h2>

                          <h6 className=" p-3">
                            Simplify Inventory Management With Item-Batch
                            Tracking
                          </h6>

                          <p className="p-3">
                            Managing various inventory items in a multi-stock
                            warehouse can be quite cumbersome. Needless to say
                            the increase in complexity in industries such as
                            pharmaceuticals that has batch inventory. If a
                            situation arises where an item belonging to a
                            particular batch needs to be identified due to
                            issues such as quality, it could prove
                            time-consuming to trace all the transactions which
                            involved that particular item especially if it
                            involves doing it physically.
                          </p>

                          <p className="p-3">
                            Item Batch tracking in Tally.ERP 9 puts an end to
                            all the effort and inaccuracies. It provides you
                            visibility of movement of a particular item that is
                            related to a selected batch. The transactions could
                            be stock inward or outward, and include all details.
                          </p>

                          <p className="p-3">
                            Now, there's no longer the difficulty of sorting
                            through hundreds or even thousands of transactions
                            to identify transactions pertaining to just one item
                            of a batch-with Item Batch tracking in Tally.ERP 9
                            it's never been easier.
                          </p>

                          <p className="p-3">
                            <strong>
                              Item-Batch tracking can be configured to deliver:
                            </strong>
                          </p>

                          <p className="p-3">
                            • <strong>Stock Flow:</strong> The flow of stock
                            ranging from opening stock, goods inwards and
                            outwards-to the closing stock, can be analyzed in
                            terms of its quantity. It gives you an insight to
                            the batch-wise movement of each stock item.
                            <br />
                            <br />•{' '}
                            <strong>Profitability and Consumption:</strong>{' '}
                            Item-Batch wise report shows the profitability and
                            consumption details for each stock item. This
                            statement is used to reconcile the closing balance.
                            <br />
                            <br />• <strong>Sorting Method:</strong> This will
                            help you view the report in alphabetical descending
                            or ascending order.
                            <br />
                            <br />• <strong>Navigation:</strong> This helps you
                            navigate from one report to other stock item and
                            batches.
                            <br />
                            <br />• <strong>Show Profit:</strong> This helps you
                            view the batch-wise stock item profitability.
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

export default batchVoucher
