import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'

import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
import FormComponent from '@components/FormComponent'
import Link from 'next/link'
const inventoryAccounting = () => {
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
                        <p>Inventory Accounting & Management</p>
                      </div>
                      <div className="">
                        <div className="section-title">
                          <h2 className="title p-3">
                            Inventory Accounting & Management
                          </h2>

                          <h6 className="title p-3">
                            If you deal in goods, of any type, you'll appreciate
                            the Inventory capabilities in Tally.ERP 9
                          </h6>

                          <p className="p-3">
                            You can comprehensively record all types of
                            inventory transactions, using goods receipt notes,
                            delivery notes, stock journals, manufacturing
                            journals and physical stock journals. All stock
                            movements are fully recorded and maintained in stock
                            registers.
                            <br />
                            <br />
                            Developed for all manufacturers, distributors,
                            wholesalers or traders a small list of features are
                            briefly described below:
                          </p>

                          <p className="p-3">
                            <strong>Manufacturers:</strong>
                          </p>

                          <ul className="akm">
                            <li>
                              Bill of materials and Manufacturing Journals, to
                              record material conversions
                            </li>

                            <li>
                              Compound bill of materials support, for units that
                              contain assemblies
                            </li>

                            <li>Multiple locations (godowns)</li>

                            <li>
                              Excise for manufacturers, including all
                              documentation and invoice
                            </li>

                            <li>Costing for jobs</li>
                          </ul>

                          <p className="p-3">
                            <strong>Distributors &amp; Wholesalers:</strong>
                          </p>

                          <ul className="akm">
                            <li>
                              Multiple price lists, with effective dates of
                              applicability
                            </li>

                            <li>
                              Use multiple units of measure (say KG's &amp;
                              grams)
                            </li>

                            <li>
                              Dual units of measure (say KG's and bags, to
                              support variations as happens in commodities)
                            </li>
                          </ul>

                          <p className="p-3">
                            <strong>Traders:</strong>
                          </p>

                          <ul className="akm">
                            <li>
                              {' '}
                              High speed billing, with support for POS printers
                            </li>

                            <li>Bar code support</li>

                            <li>Automatic application of taxes</li>

                            <li>Service billing &amp; service tax</li>

                            <li>Integrated sales return in bills</li>

                            <li>
                              Print bills (and any other document) in the
                              customers language
                            </li>
                          </ul>

                          <p className="p-3">
                            <strong>Common:</strong>
                          </p>

                          <ul className="akm">
                            <li>
                              You can choose to de-link the computed inventory
                              value to automatically appear in your financial
                              statements - and enter this figure manually.
                            </li>

                            <li>
                              Stock ageing reports, to identify slow and
                              non-moving stocks
                            </li>

                            <li>
                              Invoice profitability reports to keep a pulse on
                              sales
                            </li>

                            <li>
                              Multi-currency transactions - buy and sell across
                              the world - with integrated forex gain/loss
                              calculations
                            </li>

                            <li>
                              Physical stock take records to adjust physical vs.
                              actual stocks
                            </li>

                            <li>Maintain batch &amp; expiry details</li>
                          </ul>

                          <p className="p-3">
                            <strong>
                              Integrated/Non-integrated accounting and
                              inventory:
                            </strong>{' '}
                            With Tally.ERP 9, you have the option to choose
                            closing stock balance from inventory records or from
                            stock ledger account.
                            <br />
                            <br />
                            If accounts are not integrated with inventory, you
                            can enter the closing stock value manually by
                            creating Stock ledger account. This option has a
                            significant effect on the Balance Sheet and Profit
                            &amp; Loss Account. If set to<strong> Yes</strong>,
                            it extracts the stock/inventory balance figures from
                            the inventory records and provides a drill down to
                            the Stock registers from the Balance Sheet.
                            <br />
                            <br />
                            If set to<strong> No</strong>, it ignores the
                            inventory books figures and picks up the manually
                            entered closing stock balances from the ledger
                            account created. This facilitates the maintaining of
                            accounts and inventory separately.
                            <br />
                            <br />
                            Stock records often contain compensating errors
                            caused by wrong allocation to items. This feature
                            enables finalisation of financial books without
                            waiting for the reconciliation of stocks.
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

export default inventoryAccounting
